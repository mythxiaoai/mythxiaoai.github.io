const koa = require("koa");
const router = require("koa-router");
const staticCache = require("koa-static-cache");
const pathlib = require("path");
const socket = require("socket.io");

let app = new koa();
let httpServer = require('http').createServer(app.callback());
let wsServer = socket(httpServer);
httpServer.listen(80);

let rm = router();
app.use(rm.routes());

rm.get("/",async (ctx,next)=>{
 ctx.response.redirect("index.html");
 ctx.response.body = 'OK';
})


app.use(staticCache("./../src/",{gzip:true}));

let socks = [];
let users = [];
wsServer.on("connection",sock=>{
  socks.push(sock)
  
  sock.on("msg",str=>{
    socks.forEach(sk=>{
      if(sock!=sk){
        sk.emit("msg",str,sock.userName)
      }
    })
  })
  sock.on("user",str=>{
    if(users.indexOf(str)==-1){
      users.push(str);
      sock.userName = str;
      socks.forEach(sk=>{
        sk.emit("userall",users)
      })
      sock.emit("userall",users)
    }else{
      sock.emit("user",{id:sock.id,data:"-1"})
    }
  })
  sock.on("disconnect",()=>{
    let index = socks.indexOf(sock);
    let userindex = users.indexOf(sock.userName);
    if(index!=-1){
      socks.splice(index,1);
    }
    if(userindex!=-1){
      users.splice(userindex,1);
       socks.forEach(sk=>{
        sk.emit("userall",users)
      })
    }
  })
})