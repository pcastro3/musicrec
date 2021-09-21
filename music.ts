// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')

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
  const url = await document.querySelectorAll('.url');
  const top = await document.querySelectorAll('.top');

  const name5 = await [];
  const image5 = await [];
  const track3 = await [];
  const url5 = await [];
  const top5 = await [];

  for (var i = 0; i < 5; i++) {
    name5.push(data.similarartists.artist[i].name);
    name[i].textContent = name5[i];

    api2[i] = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

    data2[i] = await api2[i].json();
    image5.push(data2[i].topalbums.album[0].image[2]['#text']);
    image[i].src = image5[i];

    url5.push(data2[i].topalbums.album[0].url)
    url[i].href = url5[i];

    api3[i] = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

    data3[i] = await api3[i].json();
    track3.push(data3[i].toptracks.track[0].name);
    track[i].textContent = track3[i];

    top5.push(data3[i].toptracks.track[0].url);
    top[i].href = top5[i];
  }

  // HIDE THE TABLE

  const hide = await document.getElementById('hidden');

  if (name === true) {
    hide.style.display = 'none';
  } else {
    hide.style.display = 'block';
  }

}
