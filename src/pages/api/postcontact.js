import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    let data = await fs.promises.readdir("src/contactdata");
    res.status(200).json(req.body);
    fs.promises.writeFile(
      `src/contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
  } else {
    res.status(200).json(["hello"]);
  }
}
