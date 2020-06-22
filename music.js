// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')

// &artist=coldplay

// INPUT ARTIST AND FETCH 5 SIMILAR

async function getArtist() {
  const input = await document.querySelector('.artist').value;

  const result = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  const data = await result.json();
  const get = await document.querySelectorAll('.name');
  const hide = await document.getElementById('hidden');
  const five = await [];

  for (var i = 0; i < 5; i++) {
    five.push(data.similarartists.artist[i].name);
    get[i].textContent = five[i]
  }

  if (get === true) {
    hide.style.display = 'none';
  } else {
    hide.style.display = 'block';
  }

  // GET PHOTO THRU API TRACK.GETINFO
  // DISPLAY TOP 3 SONGS THRU ARTIST.GETTOPTRACKS FOR EACH OF THE 5 RETURNED ARTISTS
  // ADD URL SO RECOMMENDATION GIVES USER OPTION TO LISTEN TO SONG ON LASTFM

}
