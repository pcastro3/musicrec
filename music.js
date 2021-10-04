"use strict";
// fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=a11aa08044485cfbb982b3336aa0317c&format=json')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// INPUT ARTIST AND FETCH 5 SIMILAR
function getArtist() {
    return __awaiter(this, void 0, void 0, function* () {
        // TAKE USER INPUT AND RETURN API CALL AS JSON OBJECT
        const input = yield document.querySelector('.artist');
        const inputType = yield input.value;
        const api = yield fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=${inputType}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
        let api2 = yield fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${inputType}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
        let api3 = yield fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${inputType}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
        const data = yield api.json();
        const showError = yield document.querySelector('.error');
        const hide = yield document.getElementById('hidden');
        // IF ARTIST CANNOT BE FOUND, DISPLAY ERROR
        if (data.error) {
            showError.style.display = 'block';
            hide.style.display = 'none';
        }
        else {
            // IF ARTIST IS FOUND, SHOW RESULTS AND KEEP ERROR HIDDEN
            showError.style.display = 'none';
            let data2 = yield api2.json();
            let data3 = yield api3.json();
            const name = yield document.querySelectorAll('.name');
            const image = yield document.querySelectorAll('.image');
            const track = yield document.querySelectorAll('.track');
            const url = yield document.querySelectorAll('.url');
            const top = yield document.querySelectorAll('.top');
            const name5 = yield [];
            const image5 = yield [];
            const track3 = yield [];
            const url5 = yield [];
            const top5 = yield [];
            // TAKE THE ARTIST USER ENTERED AND RETURN
            // 5 SIMILAR ARTISTS WITH TOP SONGS + ALBUMS
            for (var i = 0; i < 5; i++) {
                // RETURN 5 SIMILAR ARTISTS
                name5.push(data.similarartists.artist[i].name);
                name[i].textContent = name5[i];
                // RETURN SIMILAR ARTISTS' TOP ALBUMS
                api2[i] = yield fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
                data2[i] = yield api2[i].json();
                image5.push(data2[i].topalbums.album[0].image[2]['#text']);
                image[i].src = image5[i];
                url5.push(data2[i].topalbums.album[0].url);
                url[i].href = url5[i];
                // RETURN SIMILAR ARTISTS' TOP SONGS
                api3[i] = yield fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name5[i]}&api_key=a11aa08044485cfbb982b3336aa0317c&format=json`);
                data3[i] = yield api3[i].json();
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
        // if (!name) {
        //   hide.style.display = 'none';
        // } else {
        //   hide.style.display = 'block';
        // }
    });
}
