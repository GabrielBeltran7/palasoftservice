import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "app", "blog", "posts");

  if (!fs.existsSync(postsDirectory)) {
    return Response.json(
      { message: "No se encontró el directorio de posts." },
      { status: 404 }
    );
  }
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: fileName.replace(".mdx", ""),
      image: data.image || "/placeholder.jpg",
    };
  });

  return Response.json(posts);
}
