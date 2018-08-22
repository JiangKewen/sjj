const express = require('express')
const app = express()
var fs = require('fs'); //引入文件读取模块
var path = require('path');
// var PATH = '/data/user.json'; //登录文件路径
app.use("/checkLogin/checkLogin", (req, res) => {
  fs.readFile(path.join("./data/user.json"), (err, data) => {
    if(err) {
      return res.send({
        state: 0,
        msg: "服务器读取用户失败2"
      })
    }
    let user = [];
    console.log(data,"data")
    try {
      user = JOSN.parse(data.toString());
    } catch(e) {
      obj = [];
    }
    return res.send({
      state: 1,
      msg: user
    })
  })
  console.log("登录访问")
})
console.log("服务器启动,端口3000")
app.listen(3000)