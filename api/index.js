const express=require("express")
const app=express();
const mongoose=require("mongoose")
const helmet=require("helmet")
const dotenv=require("dotenv")
const morgan=require("morgan")
const user=require("./routes/route.js")
const auth=require("./routes/auth.js")
const post=require("./routes/post.js")
const convo=require('./routes/Convo.js')
const message=require('./routes/Message.js')
var cors = require('cors')
const multer=require("multer")
const path = require("path");
dotenv.config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("conected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.urlencoded({extended:false}))
//upload
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"./upload")
  },
  filename:function(req,file,cb){
    console.log(req.body);
    cb(null,req.body.name)
  }
})
const upload=multer({storage})
 app.post("/api/upload",upload.single("file"),(req,res)=>{
  try{res.status(200).json("hogya")}
  catch(e){console.log(e)}
  })

//middleware
app.use(express.json());

app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",user);
app.use("/api/auth",auth)
app.use("/api/post",post)
app.use("/api/convo",convo)
app.use("/api/message",message)


app.use("/api/uploads", express.static(path.join(__dirname, "/upload/")));

// app.get("/",(req,res)=>{
//     res.end("hello")
// })
//cors
app.use(cors({origin:'http://localhost:5173/'}))

app.listen(8000,()=>{console.log("server started")})