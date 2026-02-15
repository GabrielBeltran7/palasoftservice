import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import styles from "./BlogPost.module.css";
import { getPostBySlug } from "../lib/posts";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  if (!resolvedParams) return {};

  const { slug } = resolvedParams;
  if (!slug) return {};

  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no está disponible.",
      robots: "noindex, nofollow",
    };
  }

  const { frontmatter } = post;
  const BASE_URL = "https://palasoftservice.vercel.app";
  const shareUrl = `https://palasoftservice.vercel.app/blog/${slug}`;

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
  const resolvedParams = await params;
  if (!resolvedParams) return notFound();

  const { slug } = resolvedParams;
  if (!slug) return notFound();

  const post = await getPostBySlug(slug);
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
