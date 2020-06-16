// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')
// .then(result => {
//   console.log(result);
//   return result.json();
// })
// .then(data => {
//   // console.log(data);
//   const artist = data.similarartists[1];
//   console.log('This artist is ${data.artist}');
// })
// .catch(error => {
//   console.log(error);
// });

// &artist=coldplay

async function getArtist() {
  const result = await fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=(${artist})=a11aa08044485cfbb982b3336aa0317c&format=json');
  // const artist = input.value();
  // const group = [];
  // band.input.value();
  const data = await result.json();
  // const input;
  console.log(data);
}
getArtist();

async function insert() {
  input = await document.getElementById('artist').value;
  console.log(input);
}
