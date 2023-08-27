import express from 'express' 

const app = express(); // using the express library that we used

app.use(express.urlencoded({extended:false})) // MIDDLEWARE להעביר פונקוצואנליות לכל האפליקציה // allow to decode the url
app.use(express.json()) // says to him that he will send and accept data in json format

const port = 3001;

app.listen(port, () => {
    console.log("this server is runing now....")
})