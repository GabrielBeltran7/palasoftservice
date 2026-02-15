import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "app", "blog", "posts");

export const getPosts = cache(async () => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => (new Date(b.date) - new Date(a.date)));
});

export const getPostBySlug = cache(async (slug) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter: data,
    contentHtml,
  };
});
  
  