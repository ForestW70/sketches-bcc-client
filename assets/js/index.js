import { sketches } from "./sketches.js";

import { createQueueButton, buildAlbumTemplate, buildSongView, buildAlbumView } from "./renders.js"

function bigFunction() {

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

const headSwap = document.getElementById("wellHeyThere");
const audioPlayer = document.getElementById("player");
const currAlbumPic = document.getElementById("albumPic");
const currTrackName = document.getElementById("trackName");
const currArtistName = document.getElementById("artistName");
const currTrackTime = document.getElementById("trackTime");
const currAlbumName = document.getElementById("albumName");
const queueListDump = document.getElementById("queueList");
const qToolCont = document.getElementById("qTools")
const discoContainer = document.getElementById("disco");
const listView = document.getElementById("list");
const listDump = document.getElementById("listDump");
const optionsContainer = document.getElementById("options");
const testBtn = document.getElementById("testBtn");


// SONGQUEUE CLASS
// 
function SongQueue(pushbox = []) {
    this.allTheSongs = pushbox;
    this.activeQueue = [];

    // all song list for sorting
    this.populateSongList = () => {
        const listSort = getDefaultList();
        return this.allTheSongs.push(listSort);
    }
    this.getSongList = () => {
        return this.allTheSongs[0];
    }

    this.changeSongList = (newSorted) => {
        this.allTheSongs = [];

        return this.allTheSongs.push(newSorted);
    }

    // queue actions
    this.add2queue = (el) => {
        const item = {
            songTitle: el.title,
            songLength: el.length,
            songEp: el.ep,
            songArtist: el.artist,
            songUrl: el.url,
            songArt: el.art,
        }
        return this.activeQueue.push(item)
    }

    this.add2FrontOfQueue = (el) => {
        const item = {
            songTitle: el.title,
            songLength: el.length,
            songEp: el.ep,
            songArtist: el.artist,
            songUrl: el.url,
            songArt: el.artLink,
        }
        this.activeQueue.splice(1, 0, item);

        const qButton = document.createElement("button");
        qButton.addEventListener("click", handleQClick);
        qButton.type = "button"
        qButton.innerText = `${el.url} ~ ${el.ep}`;
        qButton.id = el.url + " " + el.ep;

        const firstChild = queueListDump.firstChild
        queueListDump.insertBefore(qButton, firstChild);
    }

    this.createQItem = (el) => {
        const qId = el.url + " " + el.ep
        const qButton = document.createElement("button");
        qButton.addEventListener("click", handleQClick);

        qButton.type = "button"
        qButton.innerText = `${el.url} ~ ${el.ep}`;
        qButton.id = qId;

        queueListDump.appendChild(qButton);
    }

    this.removeQueueButton = (btnId) => {
        document.getElementById(btnId).remove();
        return;
    }

    this.removePlaceInQueue = (trackId) => {
        const url = trackId.split(" ")[0]
        const trackIdx = this.activeQueue.findIndex(item => item.songUrl === url)
        const removed = this.activeQueue.splice(trackIdx, 1)

        this.removeQueueButton(trackId);
        console.log(removed);
    }

    this.removeFirstFromQueue = () => {
        const first = this.activeQueue[1];
        const searchBtn = first.songUrl + " " + first.songEp;
        this.removeQueueButton(searchBtn)
        return this.activeQueue.shift();
    }

    this.findButtonSearch = (songUrl) => {
        const getId = this.activeQueue.find(track => track.songUrl === songUrl)
        const searchId = getId.songUrl + " " + getId.songEp
        return searchId;
    }

    this.doesButtonExist = (songObj) => {
        const searchId = songObj.url + " " + songObj.ep;
        const buttonSearch = document.getElementById(searchId)
        if (buttonSearch === null) {
            return 0
        }
        return 1;
    }

    this.grabNext = () => {
        return this.activeQueue[0];
    }

    this.grabLength = () => {
        return this.activeQueue.length;
    }

    this.findSong = (url) => {
        const songName = url;
        // const ep = id.split('~')[1];

        let item = this.allTheSongs[0].find(song => song.url === songName)
        return item;
    }

    this.filterPlayer = () => {
        let wiper = this.activeQueue[0]
        if (this.activeQueue.length >= 2) {
            wiper = this.activeQueue[1]
        }
        const songHome = `https://forestw70.github.io/sketches-bcc-client/assets/music/${wiper.songUrl}.mp3`
        const newTitle = `${wiper.songArtist} ~ ${wiper.songUrl}`

        // clear page title and replace with song info
        clearPlayer();
        document.title = newTitle;
        headSwap.innerText = wiper.songArtist + " " + wiper.songUrl + ".mp3 '" + wiper.songTitle + "' " + wiper.songEp + " " + wiper.songLength;
        currArtistName.innerText = wiper.songArtist;
        currTrackName.innerText = `"${wiper.songUrl}"`;
        currAlbumName.innerText = wiper.songEp;
        currAlbumPic.src = wiper.songArt;
        audioPlayer.src = songHome;
        return console.log("Next track loaded!");
    }
}
const songQueue = new SongQueue();


// UTILITY AND OTHER FEATURES
//

// clear audio player
const clearPlayer = () => {
    currArtistName.innerText = "";
    currTrackName.innerText = "";
    currAlbumName.innerText = "No track queued!";
    currAlbumPic.src = "https://picsum.photos/25";
    audioPlayer.src = "https://forestw70.github.io/sketches-bcc-client/assets/music/mario3.mp3";
    document.title = "Sketches";
    headSwap.innerText = "sum' sketches"
}

// top of page button
const topOfPageBtn = document.getElementById("returnToTop")
topOfPageBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topOfPageBtn.style.display = "flex";
    } else {
        topOfPageBtn.style.display = "none";
    }
};

// autoplay option button
let autoPlayOn = false;
const autoPlayButton = document.getElementById("autoPlayOption")
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


//  TRACK SELECT
// 
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
    const currQueueTime = songQueue.grabLength();
    if (currQueueTime === 0) {
        songQueue.add2queue(lookObj);
        songQueue.filterPlayer();
    } else {
        if (songQueue.doesButtonExist(lookObj) === 0) {
            songQueue.add2queue(lookObj);
            songQueue.createQItem(lookObj);
        } else {
            window.alert("song already in queue!")
        }
    }
}


//  ALBUM VIEW
//  
const showAlbumView = () => {
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

const buildAlbumCont = (albumInfo) => {
    const albumContainer = document.createElement("article");
    const trackContainer = document.createElement("div");
    const infoContainer = document.createElement("div");
    albumContainer.classList.add("disco-item");
    trackContainer.classList.add("track-container");
    infoContainer.classList.add("info-container");
    trackContainer.id = albumInfo.title;

    const songInfoFrag = buildAlbumTemplate(albumInfo);
    infoContainer.appendChild(songInfoFrag);
    albumContainer.appendChild(infoContainer);

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



// SONG VIEW
// 
const showSongView = (sortedSongList) => {
    localStorage.setItem("currentView", "list")
    listDump.innerText = "";
    discoContainer.classList.add('hide');
    optionsContainer.classList.add("hide");
    listView.classList.remove("hide");
    sortedSongList.map((song, idx) => {


        const currSong = {
            trackNum: idx,
            title: song.title,
            length: song.length,
            artist: song.artist,
            ep: song.ep,
            art: song.artLink,
            url: song.url,
            albumRelease: song.releaseDate,
            artistLong: song.artistLong,
            ogFile: song.ogFileName,
            daw: song.dawUsed,
            startDate: song.dateCreated,
            startTime: song.timeCreated
        }

        const rowFragment = document.createDocumentFragment();
        const songRow = buildSongView(currSong);
        songRow.addEventListener("click", handleTrackSelect);
        rowFragment.appendChild(songRow)
        listDump.appendChild(rowFragment);
    })
}

const getDefaultList = () => {
    let songId = 0;
    const sorted = [];
    sketches.map(album => {
        album.trackList.map(song => {
            const listItem = {
                trackNumber: songId,
                title: song.track,
                ep: album.title,
                length: song.length,
                url: song.url,
                artLink: album.webLink,
                artist: album.artist,
                artistLong: album.artistLong,
                releaseDate: album.releaseDate,
                ogFileName: song.fileName,
                dawUsed: song.daw,
                dateCreated: song.date,
                timeCreated: song.started,
            }
            sorted.push(listItem)
            songId++
        })
    })
    return sorted;
}


// OPTIONS VIEW
// 
const showOptionView = () => {
    listView.classList.add('hide');
    listDump.innerText = '';
    discoContainer.classList.add('hide');
    optionsContainer.classList.remove('hide');
    localStorage.setItem("currentView", "option")

}



// SORT FUNCTIONALITY
// 
const splitLength = (time) => {
    // "2:32"
    if (time === "?:??") return 1;

    const els = time.split(":");
    return new Number((els[0] * 60) + els[1])
}

const splitDate = (date) => {
    // "6-23-18"
    if (date === "--") return 1;

    const els = date.split("-");
    const utcDate = new Date(Date.UTC(els[2], els[0] - 1, els[1]))
    return utcDate.getTime();
}

const splitTimeSpamp = (ts) => {
    // "12:05 PM"
    if (ts === "--") return 1;

    const els = ts.split(" ");
    let mins = els[0].split(":")[0];
    const secs = els[0].split(":")[1];
    if (els[1] === "PM") {
        mins = mins + 12;
    }

    const totalSecs = new Number((mins * 60) + secs);
    return totalSecs;
}


// CHANGE SORT 
// 
const changeSortedSongList = (sortBy) => {
    const currentSort = songQueue.getSongList();
    let newSort;
    switch (sortBy) {
        case "trkNum":
            console.log("sorting by track number (useless)..")
            newSort = currentSort.sort((a, b) => {
                return b.trackNumber - a.trackNumber;
            })
            // newSort = constructSort('num', 'trackNumber', 0)
            break;

        case "trkNme":
            console.log("sorting by track title..");
            newSort = currentSort.sort((a, b) => {
                let el1 = a.title.toUpperCase();
                let el2 = b.title.toUpperCase();
                if (el1 > el2) {
                    return 1
                }
                if (el1 < el2) {
                    return -1
                }
                return 0;
            })


            break;

        case "trkLen":
            console.log("sorting by track length..")
            newSort = currentSort.sort((a, b) => {
                let el1 = splitLength(a.length);
                let el2 = splitLength(b.length);
                return el1 - el2;

            })
            break;

        case "epTtl":
            console.log("sorting by ep name..")
            newSort = currentSort.sort((a, b) => {
                let el1 = a.ep.toUpperCase();
                let el2 = b.ep.toUpperCase();
                if (el1 > el2) {
                    return 1
                }
                if (el1 < el2) {
                    return -1
                }
                return 0;
            })

            break;

        case "artist":
            console.log("sorting by track artist..")
            newSort = currentSort.sort((a, b) => {
                let el1 = a.artist.toUpperCase();
                let el2 = b.artist.toUpperCase();
                if (el1 > el2) {
                    return 1
                }
                if (el1 < el2) {
                    return -1
                }
                return 0;
            })

            break;

        case "trkUrl":
            console.log("sorting by track url..")
            newSort = currentSort.sort((a, b) => {
                let el1 = a.url.toUpperCase();
                let el2 = b.url.toUpperCase();
                if (el1 > el2) {
                    return 1
                }
                if (el1 < el2) {
                    return -1
                }
                return 0;

            })
            break;

        case "trkOg":
            console.log("sorting by file name..")
            newSort = currentSort.sort((a, b) => {
                if (a.fileName === "--" || b.fileName === "--") return 0;

                let el1 = a.ogFileName.toUpperCase();
                let el2 = b.ogFileName.toUpperCase();
                if (el1 > el2) {
                    return -1
                }
                if (el1 < el2) {
                    return 1
                }
                return 0;
            })
            break;

        case "trkDte":
            console.log("sorting by date created..")
            newSort = currentSort.sort((a, b) => {
                let el1 = splitDate(a.dateCreated);
                let el2 = splitDate(b.dateCreated);
                return el1 - el2;

            })
            break;

        case "trkTs":
            console.log("sorting by timestamp..")
            newSort = currentSort.sort((a, b) => {
                let el1 = splitTimeSpamp(a.timeCreated);
                let el2 = splitTimeSpamp(b.timeCreated);
                return el1 - el2;

            })
            break;

        default:
            console.log(";)")
    }
    songQueue.changeSongList(newSort);
}

// localstorage
window.localStorage.setItem("view", "albumView");


// queue remove
const modal = document.getElementById("qPrompt");
const modalDump = document.getElementById("modalDump");
const closeModalBtn = document.getElementById("closeModal");
const removeBtn = document.getElementById("removeThisSong");
const upNextBtn = document.getElementById("upNextBtn");
const nowPlayingInfo = document.getElementById("nowPlayingInfo");


const handleCurrentTrackClick = (url) => {

    const data4Modal = songQueue.findSong(url)
    modalDump.innerText = `${url}=${JSON.stringify(data4Modal, null, 2)}`;
    removeBtn.style.display = "none"
    upNextBtn.style.display = "none"
    modal.style.display = "block";
}

const handleQClick = (e) => {
    e.preventDefault();
    const searchUrl = e.target.id.split(" ")[0]
    const data4Modal = songQueue.findSong(searchUrl)
    modalDump.innerText = `${searchUrl}=${JSON.stringify(data4Modal, null, 2)}`;
    removeBtn.dataset.whichSong = searchUrl
    upNextBtn.dataset.whichSong = searchUrl
    modal.style.display = "block";
    removeBtn.style.display = "block"
    upNextBtn.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none";
    removeBtn.dataset.whichSong = ""
    modalDump.innerText = ""
    removeBtn.style.display = "none"
    upNextBtn.style.display = "none"
}

nowPlayingInfo.addEventListener("click", (e) => {
    e.preventDefault();
    const displayFor = currTrackName.innerText.split('"')[1]
    handleCurrentTrackClick(displayFor)
})

upNextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const search = e.target.dataset.whichSong
    const btnSearch = songQueue.findButtonSearch(search);
    songQueue.removePlaceInQueue(btnSearch);

    const songItem = songQueue.findSong(search);
    songQueue.add2FrontOfQueue(songItem);

    closeModal();
})

removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const search = e.target.dataset.whichSong
    const btnSearch = songQueue.findButtonSearch(search)
    songQueue.removePlaceInQueue(btnSearch)
    closeModal();
})

closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
})

window.onclick = (event) => {
    if (event.target == modal) {
        modalDump.innerText = ""
        modal.style.display = "none";
    }
}

// BUTTONS
// 
const toggleQueue = document.getElementById("toggleShowQueue")
const albumViewBtn = document.getElementById("viewAlbums")
const songViewBtn = document.getElementById("viewSongs")
const optViewBtn = document.getElementById("viewOptions")
const nextTrackBtn = document.getElementById("nextTrack")
const playButton = document.getElementById("pause-play")
const queueTip = document.getElementById("qTip")
const icon = document.getElementById("pp")
const queueicon = document.getElementById("sq")

// toggle show queue
toggleQueue.addEventListener("click", () => {
    if (!queueListDump.classList.contains("menu-hide")) {

        queueicon.classList.remove("glyphicon-menu-right")
        queueicon.classList.add("glyphicon-menu-down")
        queueListDump.classList.toggle('menu-hide')
        // queue hidden
        queueTip.innerText = "Queue Hidden."

    } else {

        queueListDump.classList.toggle('menu-hide')
        queueicon.classList.remove("glyphicon-menu-down")
        queueicon.classList.add("glyphicon-menu-right")
        queueTip.innerText = "Queue:"
    }
})

// change views
albumViewBtn.addEventListener("click", () => {
    if (!albumViewBtn.classList.contains("curr-view")) {
        albumViewBtn.classList.add("curr-view")
        optViewBtn.classList.remove("curr-view")
        songViewBtn.classList.remove("curr-view")
        showAlbumView();
    }
})
songViewBtn.addEventListener("click", () => {
    if (!songViewBtn.classList.contains("curr-view")) {
        songViewBtn.classList.add("curr-view")
        albumViewBtn.classList.remove("curr-view")
        optViewBtn.classList.remove("curr-view")
        showSongView(songQueue.getSongList());
    }
})
optViewBtn.addEventListener("click", () => {
    if (!optViewBtn.classList.contains("curr-view")) {
        optViewBtn.classList.add("curr-view")
        albumViewBtn.classList.remove("curr-view")
        songViewBtn.classList.remove("curr-view")
        showOptionView();
    }
})

// Audio Player Buttons
playButton.addEventListener("click", () => {
    const isLoadedCheck = audioPlayer.src.split(".").pop()
    console.log(isLoadedCheck)
    if (isLoadedCheck !== "mp3") {
        return window.alert("Please queue up next song.")
    }
    if (audioPlayer.paused) {

        icon.classList.remove("glyphicon-play");
        icon.classList.add("glyphicon-pause");
        audioPlayer.play();
    } else {

        audioPlayer.pause();
        icon.classList.remove("glyphicon-pause");
        icon.classList.add("glyphicon-play");
    }
})

nextTrackBtn.addEventListener("click", () => {

    const queueLength = songQueue.grabLength();
    icon.classList.remove("glyphicon-pause");
    icon.classList.add("glyphicon-play");
    console.log(`You have ${queueLength - 2} items left in your queue!`);
    if (queueLength <= 1) {
        clearPlayer();
        console.log("nothing queued!")
    } else {
        songQueue.filterPlayer();
        songQueue.removeFirstFromQueue();
        icon.classList.add("glyphicon-pause");
        icon.classList.remove("glyphicon-play");
        audioPlayer.play();
    }
})


// songview header bar sort buttons
const headButtons = document.getElementById("headerRow").querySelectorAll("span");
headButtons.forEach(button => {
    button.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.classList.contains("list-reverse")) {
            let list = songQueue.getSongList();
            e.target.classList.remove("list-reverse")
            return showSongView(list.reverse());
        }

        await changeSortedSongList(e.target.dataset.sortBy)
        showSongView(songQueue.getSongList())
        e.target.classList.add("list-reverse");

    })
})

// testBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     changeSortedSongList("trkNme");
// })

window.onload = () => {
    songQueue.populateSongList();
    const currView = localStorage.getItem("currentView")
    if (currView === "list") {
        songViewBtn.classList.add("curr-view")
        showSongView(songQueue.getSongList());
    } else {
        console.log(currView)
        albumViewBtn.classList.add("curr-view")
        showAlbumView();
    }
}

