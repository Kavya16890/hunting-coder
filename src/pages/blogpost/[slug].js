import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Blog.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.blogItemh1}>{blog && blog.title}</h1>
        <hr />
        <div className={styles.blogDiv}>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps( context ) {
  // console.log(context.query);
  // const router = useRouter();
  const { slug } = context.query;

let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}
export default slug;
