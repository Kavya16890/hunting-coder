import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(()=>{

  // }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          {blogs.map((blogItem) => {
            return (
              <div className="blogItem" key={blogItem.slug}>
                <Link href={`blogpost/${blogItem.slug}`}>
                  <h1 className={styles.blogh1}>{blogItem.title}</h1>
                  <p className={styles.blogItemP}>
                    {blogItem.content.substr(0, 140)}...Read More
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps( context ) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data
    .json()

  return {
    props: {allBlogs},
  };
}

export default Blog;
