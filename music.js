// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')

// &artist=coldplay

// INPUT ARTIST AND FETCH 5 SIMILAR

async function getArtist() {
  const input = await document.querySelector('.artist').value;

  const api = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  let api2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  let api3 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${input}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`)

  const data = await api.json();
  let data2 = await api2.json();
  let data3 = await api3.json();

  const name = await document.querySelectorAll('.name');
  const image = await document.querySelectorAll('.image');
  const track = await document.querySelectorAll('.track');

  const name5 = await [];
  const image5 = await [];
  const track3 = await [];

  for (var i = 0; i < 5; i++) {
    name5.push(data.similarartists.artist[i].name);
    name[i].textContent = name5[i];

    api2[i] = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

    data2[i] = await api2[i].json();
    image5.push(data2[i].topalbums.album[0].image[2]['#text']);
    image[i].src = image5[i];

    api3[i] = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${track3[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

    data3[i] = await api3[i].json();
    track3.push(data3[i].toptracks.track[i].name);
    track[i].textContent = track3[i];

    console.log(track[i]);
  }

  const hide = await document.getElementById('hidden');

  if (name === true) {
    hide.style.display = 'none';
  } else {
    hide.style.display = 'block';
  }

  // GET PHOTO THRU API TRACK.GETINFO [--------------------CHECK]
  // DISPLAY TOP 3 SONGS THRU ARTIST.GETTOPTRACKS FOR EACH OF THE 5 RETURNED ARTISTS
  // ADD URL SO RECOMMENDATION GIVES USER OPTION TO LISTEN TO SONG ON LASTFM

}
