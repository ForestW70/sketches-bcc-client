import { sketches } from "./sketches.js";
import { displaySongs } from "./renderOpts.js";

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
            const songRow = displaySongs(song.songTitle, song.epArtist, song.songLength, song.epName, song.epArtLink, song.songUrl, song.songOgFile, song.songDaw, song.songStDate, song.songStTime, "list");
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