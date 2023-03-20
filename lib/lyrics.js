var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/lyrics.html'));
});


app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;

const getLyrics=require("./getLyrics")
const getSong=require("./getSong")
const options={
    apiKey:'a47HBiobBk8edDvNCG3jq4FAKiLqeCn7HfI1TDtT0PX8gNxK9yJuUJUFzSO_nn_5',
    title:username,
    artist:password,
    optimizeQuery:true
}
getLyrics(options).then((lyrics)=>console.log(lyrics));
getSong(options).then((song)=>{
    const lyric=song.lyrics
    response.send('<pre style="color: black;text-transform: uppercase;display: flex;align-items: center;font-size: 16px;line-height: 2; font-family: sans-serif;justify-content: center;background: radial-gradient(#f49b9b, #03a9f4);">' + lyric +'</pre>' + '<input type="button" value="Find Another" onclick="history.back()">'+'</input>')
      
})
});
app.listen(3000);