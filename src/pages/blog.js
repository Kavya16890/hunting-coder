import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

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
                    {blogItem.metadesc.substr(0, 140)}...Read More
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

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("src/blogdata");
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myFile = await fs.promises.readFile("src/blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;
