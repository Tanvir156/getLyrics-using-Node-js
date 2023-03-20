const getLyrics=require("./getLyrics")
const getSong=require("./getSong")
const options={
    apiKey:'a47HBiobBk8edDvNCG3jq4FAKiLqeCn7HfI1TDtT0PX8gNxK9yJuUJUFzSO_nn_5',
    title:'afree afree',
    artist:'Rahat Fateh Ali',
    optimizeQuery:true
}
getLyrics(options).then((lyrics)=>console.log(lyrics));
getSong(options).then((song)=>
     console.log(`
     ${song.lyrics}`)
     
)
