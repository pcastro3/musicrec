// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')

// &artist=coldplay

// INPUT ARTIST AND FETCH SIMILAR

async function getArtist() {
  const input = await document.querySelector('.artist').value;

  const result = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  const data = await result.json();
  const get = document.querySelectorAll('.name');
  const five = [];

  for (var i = 0; i < 5; i++) {
    five.push(data.similarartists.artist[i].name);
    get[i].textContent = five[i]
  }

}
