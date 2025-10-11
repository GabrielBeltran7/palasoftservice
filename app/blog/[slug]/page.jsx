import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import styles from "./BlogPost.module.css";

async function getBlogPost(slug) {
  const filePath = path.join(process.cwd(), "app", "blog", "posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { frontmatter: data, contentHtml };
}

export async function generateMetadata({ params }) {
  if (!params) return {};

  const { slug } = await params;
  if (!slug) return {};

  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no está disponible.",
      robots: "noindex, nofollow",
    };
  }

  const { frontmatter } = post;
  const BASE_URL = "https://www.estructurasverticales.com";

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords || [],
    robots: "index, follow",
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: frontmatter.date,
      images: frontmatter.image
        ? [
            {
              url: frontmatter.image,
              width: 800,
              height: 533,
              alt: frontmatter.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  if (!params) return notFound();

  const { slug } = await params;
  if (!slug) return notFound();

  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter, contentHtml } = post;

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={frontmatter.title}>
      <main className={styles.blogContainer}>
        {frontmatter.image && (
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            width={900}
            height={650}
            priority
            loading="eager"
            fetchPriority="high"
            className={styles.contentimgen}
          />
        )}

        <p className={styles.date}>{frontmatter.date}</p>

        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className={styles.backLinkWrapper}>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al blog
          </Link>
        </div>
      </main>
    </Layout>
  );
}
