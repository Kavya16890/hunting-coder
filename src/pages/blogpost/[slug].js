import React from "react";
import {useRouter} from "next/router"
import styles from "@/styles/BlogPost.module.css";


const slug = () => {
    const router = useRouter()
    const {slug} = router.query;
  return <div className={styles.container}>
    <main className={styles.main}>
    <h1>Title of the page: {slug}</h1>
    <hr/>
    <div className={styles.blogDiv}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla ad perspiciatis accusamus illo consectetur autem nesciunt ut repellat exercitationem sit maiores facere quod blanditiis voluptatum, eos corrupti nam et illum. Dignissimos, vitae non.
    </div>
    </main>
  </div>;
};

export default slug;
 