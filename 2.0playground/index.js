import { sketches } from "./sketches.js";

(function () {
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

    const popSongs = () => {
        const pushCont = document.getElementById("disco")
        const listFrag = document.createDocumentFragment();

        songList.map((song, idx) => {
            const papaDiv = document.createElement("div");
            papaDiv.dataset.title = song.songTitle;
            papaDiv.dataset.artist = song.epArtist;
            papaDiv.dataset.length = song.songLength;
            papaDiv.dataset.epName = song.epName;
            papaDiv.dataset.artUrl = song.epArtLink;
            papaDiv.dataset.trkUrl = song.songUrl;
            papaDiv.dataset.ogFile = song.songOgFile;
            papaDiv.dataset.daw = song.songdaw;
            papaDiv.dataset.dCreated = song.songStDate;
            papaDiv.dataset.tCreated = song.songStTime;
            papaDiv.addEventListener("click", (e) => {
                e.preventDefault();
                const search = e.currentTarget.dataset.trkUrl
                console.log(search);

                document.getElementById("player").src = `https://forestw70.github.io/sketches-bcc-client/assets/music/${search}.mp3`
            })


            const artistSp = document.createElement("span");
            const epSp = document.createElement("span");
            const ttlSp = document.createElement("span");
            const LenSp = document.createElement("span");
            const urlSp = document.createElement("span");
            const ogSp = document.createElement("span");
            const dawSp = document.createElement("span");
            const dteSp = document.createElement("span");
            const tmeSp = document.createElement("span");

            artistSp.innerText = song.epArtist
            epSp.innerText = song.epName
            ttlSp.innerText = song.songTitle
            LenSp.innerText = song.songLength
            urlSp.innerText = song.songUrl
            ogSp.innerText = song.songOgFile
            dawSp.innerText = song.songDaw
            dteSp.innerText = song.songStDate
            tmeSp.innerText = song.songStTime

            papaDiv.appendChild(artistSp)
            papaDiv.appendChild(epSp)
            papaDiv.appendChild(ttlSp)
            papaDiv.appendChild(LenSp)
            papaDiv.appendChild(urlSp)
            papaDiv.appendChild(ogSp)
            papaDiv.appendChild(dawSp)
            papaDiv.appendChild(dteSp)
            papaDiv.appendChild(tmeSp)

            listFrag.appendChild(papaDiv);
        })
        pushCont.appendChild(listFrag);
    }



    converter(sketches);
    popSongs();
})()