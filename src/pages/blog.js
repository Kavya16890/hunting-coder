import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{
        setBlogs(parsed)
    })
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div className="blogs">
        {blogs.map((blogItem)=>{
          return <div className="blogItem" key={blogItem.slug}>
            <Link href={`blogpost/${blogItem.slug}`}>
              <h1 className={styles.blogh1}>
                {blogItem.title}
              </h1>
              <p className={styles.blogItemP}>{blogItem.content.substr(0, 140)}...Read More</p>
            </Link>
          </div>
        })}
        </div>
      </main>
    </div>
  );
};

export default Blog;
