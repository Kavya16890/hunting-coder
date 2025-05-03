import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("src/blogdata");
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myFile = await fs.promises.readFile("src/blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);

  // fs.promises.readdir("src/blogdata" , (err, data)=>{
  //   console.log(data)
  //   let allBlogs = [];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(('src/blogdata/' + item), (d)=>{
  //       allBlogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allBlogs)
  // })
}
