"use server";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import styles from "./Blog.module.css";

import { getPosts } from "./lib/posts";

export default async function Blog({ searchParams }) {
  const resolvedParams = await searchParams;
  const posts = await getPosts();

  // 📌 Configuración de paginación
  const postsPerPage = 6;
  const currentPage = resolvedParams?.page ? parseInt(resolvedParams.page, 10) : 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 📌 Seleccionar un post destacado diferente en cada página
  const featuredPostIndex = (currentPage - 1) % posts.length;
  const featuredPost = posts[featuredPostIndex];

  // 📌 Filtrar posts para evitar duplicados
  const remainingPosts = posts.filter((post) => post.slug !== featuredPost.slug);
  const paginatedPosts = remainingPosts.slice((currentPage - 1) * postsPerPage, (currentPage - 1) * postsPerPage + postsPerPage);

  // 📌 Configuración de posts para la sidebar
  const sidebarPostsPerPage = 6; // Ahora solo mostramos 5 posts por página
  const sidebarOffset = (currentPage - 1) * sidebarPostsPerPage;

  const sidebarPosts = remainingPosts
    .filter((post) => !paginatedPosts.includes(post) && post.slug !== featuredPost.slug) // Excluir duplicados
    .slice(sidebarOffset, sidebarOffset + sidebarPostsPerPage); // Tomar 5 posts por página

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog">
      <main className={styles.container}>
        <div className={styles.blogContent}>
          <h1 className={styles.title}>Nuestro Blog</h1>

          {/* 📌 Post Destacado */}
          {featuredPost && (
            <div className={styles.featuredPost}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={1200}
                height={500}
                className={styles.featuredImage}
                priority
              />
              <div className={styles.featuredContent}>
                <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredLink}>
                  {featuredPost.title}
                </Link>
              </div>
            </div>
          )}

          {/* 📌 PostGrid y Sidebar */}
          <div className={styles.blogLayout}>
            <ul className={styles.postGrid}>
              {paginatedPosts.map((post) => (
                <li key={post.slug} className={styles.postItem}>
                  <Image src={post.image} alt={post.title} width={400} height={250} className={styles.postImage} />
                  <div className={styles.postContent}>
                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>{post.title}</Link>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>Leer más →</Link>
                  </div>
                </li>
              ))}
            </ul>

            {/* 📌 Sidebar */}
            <aside className={styles.sidebar}>
              <h2 className={styles.sidebarTitle}>Posts Recientes</h2>
              <ul className={styles.sidebarList}>
                {sidebarPosts.map((post) => (
                  <li key={post.slug} className={styles.sidebarItem}>
                    <Image src={post.image} alt={post.title} width={80} height={60} className={styles.sidebarImage} />
                    <div className={styles.sidebarContent}>
                      <Link href={`/blog/${post.slug}`} className={styles.sidebarLink}>{post.title}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        {/* 📌 Paginación */}
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`} className={styles.pageButton}>
              ← Anterior
            </Link>
          )}
          <span>Página {currentPage} de {totalPages}</span>
          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`} className={styles.pageButton}>
              Siguiente →
            </Link>
          )}
        </div>
      </main>
    </Layout>
  );
}


