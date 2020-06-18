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

// INPUT ARTIST AND FETCH SIMILAR

async function getArtist() {
  const input = await document.getElementById('artist').value;
  // const artist = 'cher';

  const result = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  const data = await result.json();
  const name = data.similarartists.artist[0].name;
  document.getElementById('name').textContent = name;
  console.log(data);
}
