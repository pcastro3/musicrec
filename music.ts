// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')

// INPUT ARTIST AND FETCH 5 SIMILAR

async function getArtist() {

  // TAKE USER INPUT AND RETURN API CALL AS JSON OBJECT
  const input = await document.querySelector('.artist')! as HTMLInputElement;
  const inputType = await input.value;

  const api: string | Response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${inputType}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
  let api2: string | Response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${inputType}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
  let api3: string | Response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${inputType}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);

  const data = await api.json();

  const showError = await document.querySelector('.error') as unknown as HTMLElement;
  const hide = await document.getElementById('hidden')!;

  // IF ARTIST CANNOT BE FOUND, DISPLAY ERROR
  if (data.error) {

    showError.style.display = 'block';
    hide.style.display = 'none';

  } else {

    // IF ARTIST IS FOUND, SHOW RESULTS AND KEEP ERROR HIDDEN
    showError.style.display = 'none';

    let data2 = await api2.json();
    let data3 = await api3.json();

    const name = await document.querySelectorAll('.name') as unknown as HTMLElement;
    const image = await document.querySelectorAll('.image') as unknown as HTMLElement;
    const track = await document.querySelectorAll('.track') as unknown as HTMLElement;
    const url = await document.querySelectorAll('.url') as unknown as HTMLElement;
    const top = await document.querySelectorAll('.top') as unknown as HTMLElement;

    const name5: string[] = await [];
    const image5: string[] = await [];
    const track3: string[] = await [];
    const url5: string[] = await [];
    const top5: string[] = await [];

    // TAKE THE ARTIST USER ENTERED AND RETURN
    // 5 SIMILAR ARTISTS WITH TOP SONGS + ALBUMS
    for (var i = 0; i < 5; i++) {

      // RETURN 5 SIMILAR ARTISTS
      name5.push(data.similarartists.artist[i].name);
      name[i].textContent = name5[i];

      // RETURN SIMILAR ARTISTS' TOP ALBUMS
      api2[i] = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
      data2[i] = await api2[i].json();

      image5.push(data2[i].topalbums.album[0].image[2]['#text']);
      image[i].src = image5[i];

      url5.push(data2[i].topalbums.album[0].url)
      url[i].href = url5[i];

      // RETURN SIMILAR ARTISTS' TOP SONGS
      api3[i] = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
      data3[i] = await api3[i].json();

      track3.push(data3[i].toptracks.track[0].name);
      track[i].textContent = track3[i];

      top5.push(data3[i].toptracks.track[0].url);
      top[i].href = top5[i];
    }

    // DISPLAY TABLE WHEN USER SUBMITS AN ARTIST
    if (name) {
      hide.style.display = 'block';
    }
  }
}
