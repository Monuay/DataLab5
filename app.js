const express = require('express')
const app = express()
let url = require('url');

app.get('/hello', function (req, res) {

    var q = url.parse(req.url, true).query;
    var txt = "Name : " + q.name + " " + "<br/>Login Date : "+ q.month + " " + q.day + ", " + q.year;

    res.send(txt)
    })
    
app.listen(9999,function(){
console.log("Server is running on PORT 9999")
})
