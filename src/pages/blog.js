import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          <div className="blogItem">
            <Link href={"/blogpost/learn-javascript"}>
              <h1 className={styles.blogh1}>
                How to learn JavaScript in 2025 ?
              </h1>
              <p>JavaScript is the Language to design logic for web.</p>
            </Link>
          </div>
          <div className="blogItem">
            <Link href={"/blogpost/learn-javascript"}>
              <h1 className={styles.blogh1}>
                How to learn JavaScript in 2025 ?
              </h1>
              <p>JavaScript is the Language to design logic for web.</p>
            </Link>
          </div>
          <div className="blogItem">
            <Link href={"/blogpost/learn-javascript"}>
              <h1 className={styles.blogh1}>
                How to learn JavaScript in 2025 ?
              </h1>
              <p>JavaScript is the Language to design logic for web.</p>
            </Link>
          </div>
          <div className="blogItem">
            <Link href={"/blogpost/learn-javascript"}>
              <h1 className={styles.blogh1}>
                How to learn JavaScript in 2025 ?
              </h1>
              <p>JavaScript is the Language to design logic for web.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
