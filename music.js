// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')

// &artist=coldplay

// INPUT ARTIST AND FETCH 5 SIMILAR

async function getArtist() {
  const input = await document.querySelector('.artist').value;

  const api = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  const api2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  const data = await api.json();
  const data2 = await api2.json();
  const name = await document.querySelectorAll('.name');
  const image = await document.querySelectorAll('.image');
  const hide = await document.getElementById('hidden');
  const name5 = await [];
  const image5 = await [];

  for (var i = 0; i < 5; i++) {
    name5.push(data.similarartists.artist[i].name);
    image5.push(data2.topalbums.album[0].image[2]['#text']);
    name[i].textContent = name5[i];
    image[i].src = image5[i];
  }

  if (name === true) {
    hide.style.display = 'none';
  } else {
    hide.style.display = 'block';
  }

  // GET PHOTO THRU API TRACK.GETINFO
  // DISPLAY TOP 3 SONGS THRU ARTIST.GETTOPTRACKS FOR EACH OF THE 5 RETURNED ARTISTS
  // ADD URL SO RECOMMENDATION GIVES USER OPTION TO LISTEN TO SONG ON LASTFM

}
