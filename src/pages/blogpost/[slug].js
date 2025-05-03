import React, { useEffect, useState } from "react";
import {useRouter} from "next/router"
import styles from "@/styles/Blog.module.css";


const slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter()
  
  useEffect(()=>{
    if(!router.isReady) return;
    const {slug} = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`).then((a)=>{
      return a.json();
    })
      .then((parsed)=>{
        setBlog(parsed)
    }) 
  }, [router.isReady]);

  return <div className={styles.container}>
    <main className={styles.main}>
    <h1 className={styles.blogItemh1}>{blog && blog.title}</h1>
    <hr/>
    <div className={styles.blogDiv}>
  {blog && blog.content}
    </div>
    </main>
  </div>;
};

export default slug;
 