import { sketches, lilExtras, pods, shhhhhdontsnitch, powerfulSophie } from "./sketches.js";
import { autoPlayBlurb, xtraTracksBlurb } from "./textVars.js";
import { createQueueButton, buildAlbumTemplate, buildSongView, buildAlbumView } from "./renders.js"
import { getNewSortList } from "./sorter.js"

(function () {
    
    
    
    
    
    
    
    // global dom pointers
    const queueListDump = document.getElementById("queueList");

    // 
    // global song arrays
    let activeSongQueue = [];
    let fullSongList = [];
    let songPool = sketches;

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
    // 
    // click on queue item for info modal
    const handleQueueItemClick = (e) => {
        e.preventDefault();
        const searchUrl = e.target.id.split(" ")[0]
        const data4Modal = findSong(searchUrl)
        modalDump.innerText = `${searchUrl}=${JSON.stringify(data4Modal.data, null, 2)}`;
        removeBtn.dataset.whichSong = searchUrl
        upNextBtn.dataset.whichSong = searchUrl
        modal.style.display = "block";

        if (data4Modal.queue === 1) {
            removeBtn.style.display = "block"
            upNextBtn.style.display = "none"
        } else if (data4Modal.queue < 0) {
            removeBtn.style.display = "none"
            upNextBtn.style.display = "none"
        } else {
            removeBtn.style.display = "block"
            upNextBtn.style.display = "block"
        }
    }

    // retrieve info functions
    const doesQueueButtonExist = (songObj) => {
        const searchId = songObj.url + " " + songObj.ep;
        const buttonSearch = document.getElementById(searchId)
        if (buttonSearch === null) {
            return 0
        }
        return 1;
    }

    const findButtonSearch = (trackUrl) => {
        const getId = activeSongQueue.find(track => track.url === trackUrl)
        const searchId = getId.url + " " + getId.ep;
        return searchId;
    }

    const findSong = (url) => {
        let songName;
        if (url.split('"').length > 1) {
            songName = url.split('"')[1]
        } else {
            songName = url;
        }
        // const songName = url;
        console.log(songName)
        const placeInQ = activeSongQueue.findIndex(song => song.url === songName)
        const foundSong = fullSongList.find(song => song.songUrl === songName)

        const item = {
            queue: placeInQ,
            data: foundSong
        }
        console.log(item)
        return item;
    }

    // Queue creation
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
            title: el.songTitle,
            length: el.songLength,
            ep: el.epName,
            artist: el.epArtist,
            url: el.songUrl,
            art: el.epArtLink,
        }
        activeSongQueue.splice(1, 0, item);
        const newBtn = createQueueButton(item)
        newBtn.addEventListener("click", handleQueueItemClick)

        const firstChild = queueListDump.firstChild;
        queueListDump.insertBefore(newBtn, firstChild);
    }

    const renderButton = (el) => {
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
            queueListDump.appendChild(newBtn);
        }
    }

    // Queue removal
    const removeQueueButton = (btnId) => {
        document.getElementById(btnId).remove();
        return;
    }

    const removePlaceInQueue = (trackId) => {
        const trkUrl = trackId.split(" ")[0]
        const trackIdx = activeSongQueue.findIndex(item => item.url === trkUrl)
        const removed = activeSongQueue.splice(trackIdx, 1)

        removeQueueButton(trackId);
        console.log(`${removed[0].title} has been removed.`);
    }

    const removeFirstFromQueue = () => {
        const first = activeSongQueue[1];
        const searchBtn = first.url + " " + first.ep;
        removeQueueButton(searchBtn)
        activeSongQueue.shift();
        console.log("Queue shifted.")
        return;
    }

    // 
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
    // Buttons / options 

    window.localStorage.setItem("autoPlay", "off");

    // top of page
    const topOfPageBtn = document.getElementById("returnToTop")
    topOfPageBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    // turn on auto play
    const autoPlayButton = document.getElementById("autoPlayOption");
    autoPlayButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.localStorage.getItem("autoPlay") === "on") {
            window.localStorage.setItem("autoPlay", "off")
            autoPlayButton.innerText = autoPlayBlurb[1];
            autoPlayButton.classList.remove("opt-on")
            return;
        }
        autoPlayButton.innerText = autoPlayBlurb[0];
        autoPlayButton.classList.add("opt-on")
        window.localStorage.setItem("autoPlay", "on")

    })

    // track pool status button
    const xtraTracksButton = document.getElementById("extrasOption");

    if (localStorage.getItem("extras") === "on") {
        xtraTracksButton.classList.add("opt-on");
        xtraTracksButton.innerText = xtraTracksBlurb[0];
    }

    xtraTracksButton.addEventListener("click", (e) => {
        e.preventDefault();

        // check local storage to show user which tracks are enabled
        if (window.localStorage.getItem("extras") === "on") {
            window.localStorage.setItem("extras", "off");
            xtraTracksButton.innerText = xtraTracksBlurb[1];
            xtraTracksButton.classList.remove("opt-on");
            return;
        }

        // if (
        //     window.localStorage.getItem("alf") === "on" ||
        //     window.localStorage.getItem("pods") === "on" ||
        //     window.localStorage.getItem("pods") === "on"
        //     ) {
        //     xtraTracksButton.innerText = xtraTracksBlurb[2];

        // } else if (
        //     window.localStorage.getItem("alf") === "on" &&
        //     window.localStorage.getItem("pods") === "on" &&
        //     window.localStorage.getItem("pods") === "on"
        //     ) {
        //     xtraTracksButton.innerText = xtraTracksBlurb[3];

        // } else {
        //     xtraTracksButton.innerText = xtraTracksBlurb[0];
        // }

        xtraTracksButton.innerText = xtraTracksBlurb[0];
        xtraTracksButton.classList.add("opt-on");
        window.localStorage.setItem("extras", "on");

    })

    // toggle show queue
    const toggleQueue = document.getElementById("toggleShowQueue")
    const queueicon = document.getElementById("sq")
    const queueTip = document.getElementById("qTip")
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

    // change view buttons
    const albumViewBtn = document.getElementById("viewAlbums")
    const songViewBtn = document.getElementById("viewSongs")
    const optViewBtn = document.getElementById("viewOptions")
    albumViewBtn.addEventListener("click", () => {
        if (!albumViewBtn.classList.contains("curr-view")) {
            albumViewBtn.classList.add("curr-view")
            optViewBtn.classList.remove("curr-view")
            songViewBtn.classList.remove("curr-view")
            renderAlbumView();
        }
    })
    songViewBtn.addEventListener("click", () => {
        if (!songViewBtn.classList.contains("curr-view")) {
            songViewBtn.classList.add("curr-view")
            albumViewBtn.classList.remove("curr-view")
            optViewBtn.classList.remove("curr-view")
            showSongView(fullSongList);
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

    // audio player buttons
    const playButton = document.getElementById("pause-play");
    const nextTrackButton = document.getElementById("nextTrack");
    const startOverButton = document.getElementById("backBtn")
    const icon = document.getElementById("pp");
    playButton.addEventListener("click", () => {
        const isLoadedCheck = audioPlayer.src.split(".").pop()
        // console.log(isLoadedCheck)
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

    nextTrackButton.addEventListener("click", () => {

        const queueLength = activeSongQueue.length;
        icon.classList.remove("glyphicon-pause");
        icon.classList.add("glyphicon-play");
        console.log(`You have ${queueLength - 2} items left in your queue!`);
        if (queueLength <= 1) {
            clearPlayer();
            console.log("nothing queued!")
        } else {
            filterPlayer();
            removeFirstFromQueue();
            icon.classList.add("glyphicon-pause");
            icon.classList.remove("glyphicon-play");
            audioPlayer.play();
        }
    })

    startOverButton.addEventListener("click", () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        icon.classList.remove("glyphicon-pause");
        icon.classList.add("glyphicon-play");
    })

    // 
    // list header buttons (for sorting)
    const headButtons = document.getElementById("headerRow").querySelectorAll("span");
    headButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            let isNextReverse = "";
            if (e.target.classList.contains("list-reverse")) {
                isNextReverse = "true"
                e.target.classList.remove("list-reverse");
            } else {
                isNextReverse = "false"
                e.target.classList.add("list-reverse");
            }

            const sortByIdentifier = e.target.dataset.sortBy;
            // changeSortedSongList(sortByIdentifier, isNextReverse);
            const newSort = getNewSortList(sortByIdentifier, isNextReverse, fullSongList);
            changeSongList(newSort);
            showSongView(fullSongList);

        })
    })

    const addPodsBtn = document.getElementById("addPods");
    addPodsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (addPodsBtn.classList.contains("egg-on")) {
            window.localStorage.setItem("pods", "off")
            addPodsBtn.classList.remove("egg-on")
        } else {
            window.localStorage.setItem("pods", "on")
            addPodsBtn.classList.add("egg-on")
        }
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
        const currQueueTime = activeSongQueue.length || 0;
        // addQView()
        if (currQueueTime === 0) {
            addSong2Queue(lookObj);
            filterPlayer();
        } else {
            if (doesQueueButtonExist(lookObj) === 0) {
                addSong2Queue(lookObj);
                renderButton(lookObj);
            } else {
                window.alert("song already in queue!")
            }
        }
    }

    // 
    // view swap functions and variables
    // 
    // album view
    const discoContainer = document.getElementById("disco");
    const listDump = document.getElementById("listDump");
    const listView = document.getElementById("list");
    const optionsContainer = document.getElementById("options");

    const renderAlbumView = () => {
        localStorage.setItem("currentView", "album")

        discoContainer.innerText = "";
        listDump.innerText = "";
        listView.classList.add("hide");
        optionsContainer.classList.add("hide");
        discoContainer.classList.remove("hide");


        songPool.map(album => {
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


    // 
    // song view
    const showSongView = (sortedSongList) => {
        localStorage.setItem("currentView", "list")

        listDump.innerText = "";
        discoContainer.classList.add('hide');
        optionsContainer.classList.add("hide");
        listView.classList.remove("hide");

        sortedSongList.map((song, idx) => {
            const currSong = {
                trackNum: idx,
                title: song.songTitle,
                length: song.songLength,
                artist: song.epArtist,
                ep: song.epName,
                art: song.epArtLink,
                url: song.songUrl,
                albumRelease: song.epRelease,
                artistLong: song.epArtistFull,
                ogFile: song.songOgFile,
                daw: song.songDaw,
                startDate: song.songStDate,
                startTime: song.songStTime
            }

            const rowFragment = document.createDocumentFragment();
            const songRow = buildSongView(currSong);
            songRow.addEventListener("click", handleTrackSelect);
            rowFragment.appendChild(songRow)
            listDump.appendChild(rowFragment);
        })
    }

    // 
    // options view
    const showOptionView = () => {
        listView.classList.add('hide');
        listDump.innerText = '';
        discoContainer.classList.add('hide');
        optionsContainer.classList.remove('hide');
        localStorage.setItem("currentView", "option")
    }

    // 
    // modal view
    const modal = document.getElementById("qPrompt");
    const modalDump = document.getElementById("modalDump");
    const nowPlayingInfo = document.getElementById("nowPlayingInfo");
    const closeModalBtn = document.getElementById("closeModal");
    const removeBtn = document.getElementById("removeThisSong");
    const upNextBtn = document.getElementById("upNextBtn");

    const closeModal = () => {
        modal.style.display = "none";
        removeBtn.dataset.whichSong = ""
        modalDump.innerText = ""
        removeBtn.style.display = "none"
        upNextBtn.style.display = "none"
    }

    nowPlayingInfo.addEventListener("click", (e) => {
        e.preventDefault();
        const searchUrl = e.target.innerText;
        const data4Modal = findSong(searchUrl);
        modalDump.innerText = `${searchUrl}=${JSON.stringify(data4Modal.data, null, 2)}`;
        modal.style.display = "block";
        removeBtn.style.display = "none"
        upNextBtn.style.display = "none"
        console.log(data4Modal[1]);
    })

    upNextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const search = e.target.dataset.whichSong
        const btnSearch = findButtonSearch(search);
        removePlaceInQueue(btnSearch);
        const songItem = findSong(search);
        addSong2QueueFront(songItem.data);
        closeModal();
    })

    removeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const search = e.target.dataset.whichSong
        const btnSearch = findButtonSearch(search)
        removePlaceInQueue(btnSearch)
        closeModal();
    })

    closeModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
    })

    const maeBtn = document.getElementById("maesButton");

    maeBtn.addEventListener("click", () => {
        if (maeBtn.classList.contains("egg-on")) {
            window.localStorage.setItem("soph", "off");
            maeBtn.classList.remove("egg-on");
        } else {
            window.localStorage.setItem("soph", "on");
            maeBtn.classList.add("egg-on");
        }
    })

    // 
    // window events
    window.onclick = (event) => {
        if (event.target == modal) {
            modalDump.innerText = ""
            modal.style.display = "none";
        }
    }

    window.onscroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topOfPageBtn.style.display = "flex";
        } else {
            topOfPageBtn.style.display = "none";
        }
    };

    audioPlayer.addEventListener("ended", () => {
        if (window.localStorage.getItem("autoPlay") === "off") {
            console.log("auto play is not on.")
            return;
        }
        const qtime = activeSongQueue.length;
        if (qtime > 1) {
            filterPlayer();
            removeFirstFromQueue();
            audioPlayer.play();
        } else if (qtime <= 1) {
            console.log('no more items in queue.')
        }
    })

    // finalize client song pool function
    const concaterator = () => {
        if (localStorage.getItem("extras") === "on") {
            songPool = songPool.concat(lilExtras);
        }
        if (localStorage.getItem("pods") === "on") {
            songPool = songPool.concat(pods);
        }
        if (localStorage.getItem("alf") === "on") {
            songPool = songPool.concat(shhhhhdontsnitch);
        }
        if (localStorage.getItem("soph") === "on") {
            songPool = songPool.concat(powerfulSophie);
        }
    }

    // ok, now do this and load baby
    concaterator();
    converter(songPool);

    const currView = localStorage.getItem("currentView");
    if (currView === "list") {
        songViewBtn.classList.add("curr-view")
        showSongView(fullSongList);

    } else if (currView === "option") {
        optViewBtn.classList.add("curr-view")
        showOptionView();

    } else {
        albumViewBtn.classList.add("curr-view")
        renderAlbumView();
    }
})();

