const express=require('express')
const app=express()
const Router=require('./src/routes/routeNews')
const port=3001

app.set('views','./src/views')
app.set('view engine', 'ejs');
app.use('/',Router)

app.listen(port,()=>{
    console.log(`server run localhost ${port}`)
})