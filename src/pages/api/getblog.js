import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`src/blogdata/${req.query.slug}`, 'utf-8', (err, data)=>{
   if(err){
     return res.status(500).json({error: "No such blog found."})
   }
   console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
  