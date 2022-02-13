import { sketches } from "./sketches.js";

import { createQueueButton, buildSongView, buildAlbumView } from "./renders.js"

function bigFunction() {
    // global dom pointers
    const queueListDump = document.getElementById("queueList");



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

        const firstChild = queueListDump.firstChild;
        queueListDump.insertBefore(newBtn, firstChild);
    }

    const renderButton = (el) => {
        // const qId = el.url + " " + el.ep
        const qObj = {
            url: el.url,
            ep: el.ep,
        }

        const newBtn = createQueueButton(el)
        newBtn.addEventListener("click", handleQueueItemClick);

        if (doesQueueButtonExist(qObj) === 1) {
            console.log("already in queue!")
            return;
        } else {
            queueListDump.appendChild(qButton);
        }
    }

    const removeQueueButton = (btnId) => {
        document.getElementById(btnId).remove();
        return;
    }

    const removePlaceInQueue = (trackId) => {
        const url = trackId.split(" ")[0]
        const trackIdx = activeSongQueue.findIndex(item => item.songUrl === url)
        const removed = activeSongQueue.splice(trackIdx, 1)

        removeQueueButton(trackId);
        console.log(`${removed} has been removed.`);
    }

    const removeFirstFromQueue = () => {
        const first = activeSongQueue[1];
        const searchBtn = first.songUrl + " " + first.songEp;
        removeQueueButton(searchBtn)
        activeSongQueue.shift();
        console.log("Queue shifted.")
        return;
    }

    const findButtonSearch = (url) => {
        const getId = activeSongQueue.find(track => track.songUrl === url)
        const searchId = getId.songUrl + " " + getId.songEp
        return searchId;
    }

    const doesButtonExist = (songObj) => {
        const searchId = songObj.url + " " + songObj.ep;
        const buttonSearch = document.getElementById(searchId)
        if (buttonSearch === null) {
            return 0
        }
        return 1;
    }
    // grabNext = ()
    // grabLength = ()

    const findSong = (url) => {
        const songName = url;

        let item = activeSongQueue[0].find(song => song.url === songName)
        return item;
    }

    // audio player functions and poitners
    const currAlbumPic = document.getElementById("albumPic");
    const currTrackName = document.getElementById("trackName");
    const currArtistName = document.getElementById("artistName");
    const currAlbumName = document.getElementById("albumName");
    const audioPlayer = document.getElementById("player");
    const headSwap = document.getElementById("wellHeyThere");

    const clearPlayer = () => {
        document.title = "Sketches";
        currArtistName.innerText = "";
        currTrackName.innerText = "";
        currAlbumName.innerText = "No track queued!";
        currAlbumPic.src = "https://picsum.photos/25";
        audioPlayer.src = "https://forestw70.github.io/sketches-bcc-client/assets/music/mario3.mp3";
        headSwap.innerText = "sum' sketches"
    }

    const filterPlayer = () => {
        let wiper = activeSongQueue[0];
        if (activeSongQueue.length > 1) {
            wiper = activeSongQueue[1]
        }
        const songHome = `https://forestw70.github.io/sketches-bcc-client/assets/music/${wiper.url}.mp3`
        const newTitle = `${wiper.artist} ~ ${wiper.url}`

        // clear page title and replace with song info
        clearPlayer();
        document.title = newTitle;
        headSwap.innerText = wiper.artist + " " + wiper.url + ".mp3 '" + wiper.title + "' " + wiper.ep + " " + wiper.length;
        currArtistName.innerText = wiper.artist;
        currTrackName.innerText = `"${wiper.url}"`;
        currAlbumName.innerText = wiper.ep;
        currAlbumPic.src = wiper.art;
        audioPlayer.src = songHome;
        console.log("Next track loaded!");
        return;
    }

    // 
    // Buttons
    const topOfPageBtn = document.getElementById("returnToTop")
    const autoPlayButton = document.getElementById("autoPlayOption");

    let autoPlayOn = false;

    topOfPageBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    autoPlayButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (!autoPlayOn) {
            autoPlayButton.innerText = "~expirimental autoplay~ -- ON."
            autoPlayButton.classList.add("opt-on")
            autoPlayOn = true;
            return;
        }
        autoPlayOn = false;
        autoPlayButton.innerText = "~expirimental autoplay~ -- OFF."
        autoPlayButton.classList.remove("opt-on")
    })


    // 
    // track select functions
    const handleTrackSelect = (e) => {
        e.preventDefault();
        const lookObj = {
            title: e.currentTarget.dataset.title,
            length: e.currentTarget.dataset.length,
            ep: e.currentTarget.dataset.epname,
            artist: e.currentTarget.dataset.artist,
            url: e.currentTarget.dataset.url,
            art: e.currentTarget.dataset.albumurl,
        }
        const currQueueTime = activeSongQueue.length();
        if (currQueueTime === 0) {
            addSong2Queue(lookObj);
            filterPlayer();
        } else {
            if (doesButtonExist(lookObj) === 0) {
                addSong2Queue(lookObj);
                createQItem(lookObj);
            } else {
                window.alert("song already in queue!")
            }
        }
    }

    // 
    // view swap functions and variables
    const discoContainer = document.getElementById("disco");
    const listDump = document.getElementById("listDump");
    const listView = document.getElementById("list");
    const optionsContainer = document.getElementById("options");

    const renderAlbumView = () => {
        localStorage.setItem("currentView", "album")

        discoContainer.innerText = ""
        listDump.innerText = '';
        listView.classList.add("hide");
        optionsContainer.classList.add("hide");
        discoContainer.classList.remove("hide");


        sketches.map(album => {
            const idvAlbum = buildAlbumCont(album);
            discoContainer.appendChild(idvAlbum);
        })
    }

    const buildAlbumCont = () => {
        const albumContainer = document.createElement("article");
        const infoContainer = document.createElement("div");
        const trackContainer = document.createElement("div");
        const albumTitle = document.createElement("h3");
        const albumArtist = document.createElement("h2");
        const albumRelease = document.createElement("p");
        const albumArt = document.createElement("img");
        //
        albumContainer.classList.add("disco-item");
        infoContainer.classList.add("info-container");
        trackContainer.classList.add("track-container");
        trackContainer.id = albumInfo.title;
        albumTitle.innerText = `"${albumInfo.title}"`;
        albumArtist.innerText = albumInfo.artist;
        albumRelease.innerText = albumInfo.releaseDate;
        albumArt.src = albumInfo.webLink;
        //
        infoContainer.appendChild(albumArt)
        infoContainer.appendChild(albumArtist)
        infoContainer.appendChild(albumTitle)
        infoContainer.appendChild(albumRelease)
        albumContainer.appendChild(infoContainer)
        //
        albumInfo.trackList.map((idvTrack, idx) => {

            const currSong = {
                trackNum: idx + 1,
                artist: albumInfo.artist,
                title: idvTrack.track,
                ep: albumInfo.title,
                art: albumInfo.webLink,
                url: idvTrack.url,
                length: idvTrack.length,
                albumRelease: albumInfo.releaseDate,
                artistLong: albumInfo.artistLong,
                ogFile: idvTrack.fileName,
                daw: idvTrack.daw,
                startDate: idvTrack.date,
                startTime: idvTrack.started
            }


            const songRow = buildAlbumView(currSong)
            songRow.addEventListener("click", handleTrackSelect);
            trackContainer.appendChild(songRow)

        })
        albumContainer.appendChild(trackContainer)
        return albumContainer;
    }


    // 
    // window events
    window.onscroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topOfPageBtn.style.display = "flex";
        } else {
            topOfPageBtn.style.display = "none";
        }
    };

    audioPlayer.addEventListener("ended", () => {
        if (!autoPlayOn) {
            console.log("auto play is not on.")
            return;
        }
        const qtime = songQueue.grabLength()
        console.log(qtime)
        if (qtime > 1) {
            songQueue.filterPlayer();
            songQueue.removeFirstFromQueue();
            audioPlayer.play();
        } else if (qtime <= 1) {
            console.log('no more items in queue.')
        }
    })
}