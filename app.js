var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.listen(3000, function(){
    console.log('express!! start on server port 3000!!!!');
    
})

app.use(express.static('node'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', function(req, res){
    res.sendFile(__dirname + "/node/node.html")
})

app.post('/nodeApp', function (req,res) {
    //res.sendFile(__dirname + "/node/main.html")
    console.log(req.body);
    res.send("<h1>"+req.body.email+"</h1>")
    
})



app.post('/ajax_send_email', function(req, res){
    console.log(req.body.email);
    var responseData = {
        'result': 'ok',
        'email': req.body.email
    };
    res.json(responseData);
    
})