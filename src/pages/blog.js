import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);
  const fetchData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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
      </InfiniteScroll>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("src/blogdata");
  let allCount = data.length;
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("src/blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs, allCount },
  };
}

export default Blog;
