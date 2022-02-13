import { sketches } from "./sketches.js";

import { createQueueButton } from "./renders.js"

function bigFunction(){

    // 
    // global song arrays
    const activeSongQueue = [];
    const fullSongList = [];

    // 
    // create default song list, manipulate list functions
    const converter = (albumArr) => {
        albumArr.map((ep) => {
            ep.trackList.map((song) => {
                const singleSong = {
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
                fullSongList.push(singleSong)
            })
        })
    }

    const changeSongList = (newSongArr) => {
        fullSongList = newSongArr;
    }

    // 
    // queue functions
    const myFrag = document.createDocumentFragment();

    const handleQueueItemClick = (e) => {
        e.preventDefault();
        const searchUrl = e.target.id.split(" ")[0]
        const data4Modal = activeSongQueue.findSong(searchUrl)
        modalDump.innerText = `${searchUrl}=${JSON.stringify(data4Modal, null, 2)}`;
        removeBtn.dataset.whichSong = searchUrl
        upNextBtn.dataset.whichSong = searchUrl
        modal.style.display = "block";
        removeBtn.style.display = "block"
        upNextBtn.style.display = "block"
    }

    const doesQueueButtonExist = (songObj) => {
        const searchId = songObj.url + " " + songObj.ep;
        const buttonSearch = document.getElementById(searchId)
        if (buttonSearch === null) {
            return 0
        }
        return 1;
    }

    const addSong2Queue = (el) => {
        const item = {
            title: el.title,
            length: el.length,
            ep: el.ep,
            artist: el.artist,
            url: el.url,
            art: el.art,
        }
        activeSongQueue.push(item);
        return;
    }

    const addSong2QueueFront = (el) => {
        const item = {
            title: el.title,
            length: el.length,
            ep: el.ep,
            artist: el.artist,
            url: el.url,
            art: el.artLink,
        }
        activeSongQueue.splice(1, 0, item);
        const newBtn = createQueueButton(item)
        newBtn.addEventListener("click", handleQueueItemClick)

        const firstChild = queueListDump.firstChild
        queueListDump.insertBefore(newBtn, firstChild);
    }

    const renderButton = (el) => {
        const qId = el.url + " " + el.ep
        
        const newBtn = createQueueButton(el)
        newBtn.addEventListener("click", handleQueueItemClick);

        if (doesQueueButtonExist(qId) === 1) {
            console.log("already in queue!")
            return;
        } else {
            queueListDump.appendChild(qButton);
        }
    }
}