import React, { useEffect, useState } from "react";
import * as fs from "fs";
import { useRouter } from "next/router";
import styles from "@/styles/Blog.module.css";

const Slug = (props) => {
  function createMarkup(c){
    return { __html: c };
  }
  
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.blogItemh1}>{blog && blog.title}</h1>
        <hr />
    {blog && <div className={styles.blogDiv}         dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask-1" } },
      { params: { slug: "how-to-learn-flask-2" } },
      { params: { slug: "how-to-learn-flask-3" } },
      { params: { slug: "how-to-learn-flask-4" } },
      { params: { slug: "how-to-learn-flask-5" } },
      { params: { slug: "how-to-learn-flask-6" } },
      { params: { slug: "how-to-learn-javascript-1" } },
      { params: { slug: "how-to-learn-javascript-2" } },
      { params: { slug: "how-to-learn-javascript-3" } },
      { params: { slug: "how-to-learn-javascript-4" } },
      { params: { slug: "how-to-learn-javascript-5" } },

      
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context.query);
  // const router = useRouter();
  console.log(context);
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`src/blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
