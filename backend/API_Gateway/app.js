const express=require("express")
const app=express()
const config=require("./config")
const cors=require("cors")
app.use(cors())
const {createProxyMiddleware}=require('http-proxy-middleware')



app.use("/main",createProxyMiddleware({ 
    target:config.Main_URL,
    changeOrigin: true ,
    pathRewrite:{
        '^/main':'/'
    }
}))

app.use("/repdis",createProxyMiddleware({ 
    target:config.About_URL,
    changeOrigin: true ,
    pathRewrite:{
        '^/repdis':'/'
    }
}))


module.exports=app

//start from www not from app