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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// INPUT ARTIST AND FETCH 5 SIMILAR
function getArtist() {
    return __awaiter(this, void 0, void 0, function () {
        var input, api, api2, api3, data, data2, data3, name, image, track, url, top, name5, image5, track3, url5, top5, i, _a, _b, _c, _d, _e, _f, _g, _h, hide;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, document.querySelector('.artist').value];
                case 1:
                    input = _j.sent();
                    return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&&artist=" + input + "&api_key=a11aa08044485cfbb982b3336aa0317c&format=json")];
                case 2:
                    api = _j.sent();
                    return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + input + "&api_key=a11aa08044485cfbb982b3336aa0317c&format=json")];
                case 3:
                    api2 = _j.sent();
                    return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + input + "&api_key=a11aa08044485cfbb982b3336aa0317c&format=json")];
                case 4:
                    api3 = _j.sent();
                    return [4 /*yield*/, api.json()];
                case 5:
                    data = _j.sent();
                    return [4 /*yield*/, api2.json()];
                case 6:
                    data2 = _j.sent();
                    return [4 /*yield*/, api3.json()];
                case 7:
                    data3 = _j.sent();
                    return [4 /*yield*/, document.querySelectorAll('.name')];
                case 8:
                    name = _j.sent();
                    return [4 /*yield*/, document.querySelectorAll('.image')];
                case 9:
                    image = _j.sent();
                    return [4 /*yield*/, document.querySelectorAll('.track')];
                case 10:
                    track = _j.sent();
                    return [4 /*yield*/, document.querySelectorAll('.url')];
                case 11:
                    url = _j.sent();
                    return [4 /*yield*/, document.querySelectorAll('.top')];
                case 12:
                    top = _j.sent();
                    return [4 /*yield*/, []];
                case 13:
                    name5 = _j.sent();
                    return [4 /*yield*/, []];
                case 14:
                    image5 = _j.sent();
                    return [4 /*yield*/, []];
                case 15:
                    track3 = _j.sent();
                    return [4 /*yield*/, []];
                case 16:
                    url5 = _j.sent();
                    return [4 /*yield*/, []];
                case 17:
                    top5 = _j.sent();
                    i = 0;
                    _j.label = 18;
                case 18:
                    if (!(i < 5)) return [3 /*break*/, 24];
                    name5.push(data.similarartists.artist[i].name);
                    name[i].textContent = name5[i];
                    _a = api2;
                    _b = i;
                    return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + name5[i] + "&api_key=a11aa08044485cfbb982b3336aa0317c&format=json")];
                case 19:
                    _a[_b] = _j.sent();
                    _c = data2;
                    _d = i;
                    return [4 /*yield*/, api2[i].json()];
                case 20:
                    _c[_d] = _j.sent();
                    image5.push(data2[i].topalbums.album[0].image[2]['#text']);
                    image[i].src = image5[i];
                    url5.push(data2[i].topalbums.album[0].url);
                    url[i].href = url5[i];
                    _e = api3;
                    _f = i;
                    return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + name5[i] + "&api_key=a11aa08044485cfbb982b3336aa0317c&format=json")];
                case 21:
                    _e[_f] = _j.sent();
                    _g = data3;
                    _h = i;
                    return [4 /*yield*/, api3[i].json()];
                case 22:
                    _g[_h] = _j.sent();
                    track3.push(data3[i].toptracks.track[0].name);
                    track[i].textContent = track3[i];
                    top5.push(data3[i].toptracks.track[0].url);
                    top[i].href = top5[i];
                    _j.label = 23;
                case 23:
                    i++;
                    return [3 /*break*/, 18];
                case 24: return [4 /*yield*/, document.getElementById('hidden')];
                case 25:
                    hide = _j.sent();
                    if (name === true) {
                        hide.style.display = 'none';
                    }
                    else {
                        hide.style.display = 'block';
                    }
                    return [2 /*return*/];
            }
        });
    });
}
