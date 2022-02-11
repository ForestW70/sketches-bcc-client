import { sketches } from "./sketches.js";

(function () {
    // some paths to append too

    // handle list of all seperate tracks
    const songList = []
    const converter = (albumArr) => {
        albumArr.map((ep) => {
            ep.trackList.map((song) => {
                let singleSong = {
                    epName: ep.title,
                    epArtist: ep.artist,
                    epArtistFull: ep.longArtist,
                    epRelease: ep.releaseDate,
                    epArtLink: ep.webLink,
                    songTitle: song.track,
                    songLength: song.length,
                    songUrl: song.url,
                    songOgFile: song.fileName,
                    songDaw: song.daw,
                    songStDate: song.date,
                    songStTime: song.started
                }
                songList.push(singleSong)
            })
        })
    }


    // render music
    const displaySongs = (tTitle, artist, tLen, epName, epArt, tUrl, tOgFile, tDaw, tDate, tTime, view, index="") => {
        // song Row
        const papaDiv = document.createElement("div");
        papaDiv.dataset.title = tTitle;
        papaDiv.dataset.artist = artist;
        papaDiv.dataset.length = tLen;
        papaDiv.dataset.epName = epName;
        papaDiv.dataset.trkUrl = tUrl;
        papaDiv.dataset.ogFile = tOgFile;
        papaDiv.dataset.daw = tDaw;
        papaDiv.dataset.dCreated = tDate;
        papaDiv.dataset.tCreated = tTime;
        papaDiv.dataset.artUrl = epArt;

        papaDiv.addEventListener("click", (e) => {
            e.preventDefault();
            const search = e.currentTarget.dataset.trkUrl
            console.log(search);

            document.getElementById("player").src = `https://forestw70.github.io/sketches-bcc-client/assets/music/${search}.mp3`
        })

        // row items
        const trkNum = document.createElement("span");
        const ttlSp = document.createElement("span");
        const artistSp = document.createElement("span");
        const LenSp = document.createElement("span");
        const epSp = document.createElement("span");
        const urlSp = document.createElement("span");
        const ogSp = document.createElement("span");
        const dawSp = document.createElement("span");
        const dteSp = document.createElement("span");
        const tmeSp = document.createElement("span");

        trkNum.innerText = index;
        ttlSp.innerText = tTitle;
        artistSp.innerText = artist;
        LenSp.innerText = tLen;
        epSp.innerText = epName;
        urlSp.innerText = tUrl;
        ogSp.innerText = tOgFile;
        dawSp.innerText = tDaw;
        dteSp.innerText = tDate;
        tmeSp.innerText = tTime;

        if (view === "album") {
            papaDiv.appendChild(trkNum)
            papaDiv.appendChild(ttlSp)
            // papaDiv.appendChild(artistSp)
            papaDiv.appendChild(LenSp)
            // papaDiv.appendChild(epSp)
            papaDiv.appendChild(urlSp)
            // papaDiv.appendChild(ogSp)
            papaDiv.appendChild(dawSp)
            // papaDiv.appendChild(dteSp)
            papaDiv.appendChild(tmeSp)

            
        } else {
            papaDiv.appendChild(trkNum)
            papaDiv.appendChild(ttlSp)
            papaDiv.appendChild(artistSp)
            papaDiv.appendChild(LenSp)
            papaDiv.appendChild(epSp)
            papaDiv.appendChild(urlSp)
            papaDiv.appendChild(ogSp)
            papaDiv.appendChild(dawSp)
            papaDiv.appendChild(dteSp)
            papaDiv.appendChild(tmeSp)
        }

        return papaDiv;
    }

    const trackListDump = document.getElementById("disco")

    // album view
    const swap2AlbumView = () => {
        trackListDump.innerText = "";
        renderAlbumList();
    }

    const renderAlbumList = () => {
        const listFrag = document.createDocumentFragment();

        sketches.map(ep => {
            ep.trackList.map((song, idx) => {
               const songRow = displaySongs(song.track, ep.artist, song.length, ep.title, ep.webLink, song.url, song.fileName, song.daw, song.date, song.started, "album", idx);
               listFrag.appendChild(songRow);

            })
        })
        trackListDump.appendChild(listFrag)
    }

    // song list view
    const swap2ListView = () => {
        trackListDump.innerText = "";
        renderSongList();
    }

    const renderSongList = () => {
        const listFrag = document.createDocumentFragment();

        songList.map(song => {
            const songRow = displaySongs(song.songTitle, song.epArtist, song.songLength, song.epName, song.epArtLink, song.songUrl, song.songOgFile, song.songDaw, song.songStDate, song.songStTime, "list", 0);
            listFrag.appendChild(songRow);
        })
        trackListDump.appendChild(listFrag);
    }


    // buttons
    const avButton = document.getElementById("viewAlbums")
    const slButton = document.getElementById("viewSongs")

    avButton.addEventListener("click", () => swap2AlbumView());
    slButton.addEventListener("click", () => swap2ListView());





    converter(sketches);
    renderAlbumList();
})()