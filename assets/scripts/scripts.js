// album information
const getRT = () => {
    const roll = (x) => Math.floor(Math.random() * x);


    let one = roll(59);
    let two = roll(59);
    if (two < 10) {
        two = `0${two}`
    }
    return `${one}:${two}`;
}
const sketches = [
    {
        title: 'S&OFV1',
        artLink: './assets/s&ofv1.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv1.jpg',
        trackList: [
            {
                track: 'Quarantine (but its ok)',
                length: '2:56',
                url: 'quarantine',
            },
            {
                track: '5d',
                length: '3:01',
                url: '5d',
            },
            {
                track: 'Sticky Hold',
                length: '1:27',
                url: 'sticky-hold',
            },
            {
                track: 'Probably Wrong',
                length: '3:16',
                url: 'probably-wrong',
            },
            {
                track: 'Stargate',
                length: '1:13',
                url: 'stargate',
            },
            {
                track: 'Rap (1896 mix)',
                length: '0:56',
                url: 'rap-1896',
            },
            {
                track: 'Dare 2 Bare',
                length: '2:53',
                url: 'dare-2-bare',
            },

        ]
    },
    {
        title: 'S&OFV2',
        artLink: './assets/s&ofv2.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv2.jpg',
        trackList: [
            {
                track: 'Amanda Alarm (wake up hunny)',
                length: '1:56',
                url: 'amanda-alarm',
            },
            {
                track: 'Sweet Dreams',
                length: '2:35',
                url: 'sweet-dreams',
            },
            {
                track: 'Doogood',
                length: '1:32',
                url: 'dogood',
            },
            {
                track: 'Exploitable Resources',
                length: '1:24',
                url: 'resources',
            },
            {
                track: 'Looking at a Screen',
                length: '2:57',
                url: 'looking-at-a-screen',
            },
            {
                track: 'Gimp',
                length: '2:31',
                url: 'gimp',
            },
            {
                track: 'It Is Forever',
                length: '?:??',
                url: 'it-is-forever',
            },
        ]
    },
    {
        title: 'S&OFV3',
        artLink: './assets/s&ofv3.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv3.jpg',
        trackList: [
            {
                track: 'Amanda Morph',
                length: getRT(),
                url: 'amanda-morph',
            },
            {
                track: 'Sara Tonin',
                length: '2:22',
                url: 'sara-tonin',
            },
            {
                track: 'Bailey melody 07',
                length: "0:59",
                url: 'bailey-melody',
            },
            {
                track: 'Oh techre!',
                length: "2:09",
                url: 'oh-techre',
            },
            {
                track: 'Go to feather',
                length: "1:28",
                url: 'go2feather',
            },
            {
                track: '(I am aware of the) black box',
                length: "1:50",
                url: 'black-box',
            },
            {
                track: '1800harp',
                length: "2:55",
                url: '1800harp',
            },
        ]
    },
    {
        title: 'S&OFV4',
        artLink: './assets/s&ofv4.png',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv4.png',
        trackList: [
            {
                track: 'Froggy',
                length: "1:10",
                url: 'froggy',
            },
            {
                track: 'Hello grommet',
                length: "3:10",
                url: 'hello-grommet',
            },
            {
                track: 'Live from the polls',
                length: "1:08",
                url: 'polls',
            },
            {
                track: 'Case of the cookies',
                length: "1:45",
                url: 'cookies',
            },
            {
                track: 'Is it forever?',
                length: "2:24",
                url: 'is-it-forever',
            },
            {
                track: 'BBBB',
                length: "1:43",
                url: 'bbbb',
            },
            {
                track: 'Silly Singing silicon',
                length: "2:35",
                url: 'silly-singing',
            },
        ]
    },
    {
        title: 'S&OFV5',
        artLink: './assets/s&ofv5.png',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv5.png',
        trackList: [
            {
                track: 'Are Those Thorns?',
                length: "1:02",
                url: 'are-those-thorns',
            },
            {
                track: 'Barrixtown',
                length: "1:10",
                url: 'barrixtown',
            },
            {
                track: 'Childs Loop',
                length: "1:48",
                url: 'childs-loop',
            },
            {
                track: 'Chix Loop',
                length: "2:00",
                url: 'chix',
            },
            {
                track: 'Cleverly',
                length: "1:43",
                url: 'clever',
            },
            {
                track: 'Crystal Envelope / Return2sender',
                length: "4:14",
                url: 'crystal-env',
            },
            {
                track: 'FL Disaster Zone',
                length: "1:53",
                url: 'fl-disaster',
            },
        ]
    },
    {
        title: 'S&OFV6',
        artLink: './assets/oops.png',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/oops.png',
        trackList: [
            {
                track: 'Kicking Space',
                length: "1:18",
                url: 'kicking-space',
            },
            {
                track: 'Let It Fly',
                length: "1:47",
                url: 'let-it-fly',
            },
            {
                track: 'Liptstick Halo',
                length: "1:31",
                url: 'liptstick-halo',
            },
            {
                track: 'Parks',
                length: "0:20",
                url: 'parks',
            },
            {
                track: 'Playing With My Hair',
                length: "1:27",
                url: 'playing-w-my-hair',
            },
            {
                track: 'Rust In Peace',
                length: "1:43",
                url: 'rust-in-peace',
            },
            {
                track: 'Woodshed',
                length: "0:52",
                url: 'woodshed',
            },
        ]
    },
    {
        title: 'BCC',
        artLink: './assets/bcc.png',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/bcc.png',
        trackList: [
            {
                track: 'Hotmess',
                length: '3:04',
                url: 'bcc-hotmess',
            },
            {
                track: 'Atmosphere (interlude)',
                length: '0:35',
                url: 'bcc-atmosphere',
            },
            {
                track: 'Amanda',
                length: '1:47',
                url: 'bcc-amanda',
            },
            {
                track: 'Dare2Bare',
                length: '2:35',
                url: 'bcc-dare2bare',
            },
            {
                track: 'Quarantine (but its ok)',
                length: '3:01',
                url: 'bcc-quarantine',
            },
            {
                track: 'Stickyhold',
                length: '1:27',
                url: 'bcc-stickyhold',
            },
            {
                track: 'Stargate (reprise)',
                length: '1:26',
                url: 'bcc-stargate',
            },
            {
                track: 'Rap',
                length: '0:54',
                url: 'bcc-rap',
            },
            {
                track: '27th&girard',
                length: '4:18',
                url: 'bcc-girard',
            },
            {
                track: 'Almostinato',
                length: '2:34',
                url: 'bcc-it-is-forever',
            },
            {
                track: '5d',
                length: '2:08',
                url: 'bcc-5d',
            },
            {
                track: 'Probably Wrong',
                length: '2:58',
                url: 'bcc-probably',
            },
            {
                track: 'S. Balachander (broken from the beginning mix)',
                length: '4:59',
                url: 'bcc-sbala',
            },
            {
                track: 'Boc (interlude)',
                length: '1:22',
                url: 'bcc-boc',
            },
            {
                track: 'Toothpicks',
                length: '2:31',
                url: 'bcc-toothpicks',
            },
            {
                track: 'Pilotdrone',
                length: '2:27',
                url: 'bcc-pilotdrone',
            },
            {
                track: 'Faultline',
                length: '4:54',
                url: 'bcc-faultline',
            },
        ]
    },
    {
        title: "ECT",
        artLink: './assets/ib.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/ib.jpg',
        trackList: [
            {
                track: 'Ferox Recieved',
                length: "3:17",
                url: 'ferox',
            },
            {
                track: 'This is forever (demo)',
                length: "2:36",
                url: 'this-is-forever-v1',
            },
            {
                track: 'Tsalal',
                length: "1:50",
                url: 'ferox',
            },
            {
                track: 'Knavish Drone (cut)',
                length: "16:07",
                url: 'knavish-drone',
            },
            {
                track: 'Anxious...',
                length: "4:35",
                url: 'anxious-oblast',
            },
            {
                track: 'HM/FL (demo)',
                length: "7:57",
                url: 'hmfl-demo',
            },
            {
                track: 'Boiler Room',
                length: "1:43",
                url: 'boiler-room',
            },
            {
                track: 'Chiminy Harker',
                length: "0:43",
                url: 'chiminy',
            },
            {
                track: 'On Line0',
                length: "12:45",
                url: 'on-line',
            },
            {
                track: 'On Line1',
                length: getRT(),
                url: 'on-line1',
            },
            {
                track: 'On Line2',
                length: getRT(),
                url: 'on-line2',
            },
            
        ]
    }
]

// song and queue classes
const queueListDump = document.getElementById("queueList");
const localQueue = window.localStorage

function SongQueue(pushbox = []) {
    this.container = pushbox;

    this.add2queue = (el) => {
        return this.container.push(el);
    }
    this.removeFromQueue = () => {
        const currItem = this.container[1];
        const btnSearch = currItem.title + "~" + currItem.ep;
        document.getElementById(btnSearch).remove();
        return this.container.shift();
    }
    this.grabNext = () => {
        return this.container[0];
    }
    this.grabLength = () => {
        return this.container.length;
    }
}
const songQueue = new SongQueue()

function Song(title, ep, art, url, length) {
    this.artist = "Lukasz Mauro"
    this.title = title;
    this.ep = ep;
    this.art = art;
    this.url = url;
    this.length = length;

    this.add2queueList = () => {
        const item = {
            "artist": this.artist,
            "title": this.title,
            "ep": this.ep,
            "art": this.art,
            "url": this.url,
        }
        songQueue.add2queue(item)
    }

    this.addSongButton = () => {
        const item = {
            "artist": this.artist,
            "title": this.title,
            "ep": this.ep,
            "art": this.art,
            "url": this.url,
        }
        songQueue.add2queue(item)

        const qBar = document.createElement("button");
        qBar.innerText = this.title + ' ~ ' + this.ep;
        qBar.id = this.title + '~' + this.ep;
        queueListDump.appendChild(qBar);
    }

    this.createListSongRow = (trackNum) => {
        const trackNumber = document.createElement("span");
        const trackName = document.createElement('span');
        const trackUrl = document.createElement('span');
        const albumTitle = document.createElement('span');
        const trackLength = document.createElement('span');
        const trackOGTitle = document.createElement('span');
        trackNumber.innerText = trackNum;
        trackName.innerText = this.title;
        trackUrl.innerText = this.url;
        albumTitle.innerText = this.ep;
        trackLength.innerText = this.length
        trackOGTitle.innerText = this.art;

        const rowDiv = document.createElement("div");
        rowDiv.classList.add('song-list-row');
        rowDiv.dataset.songId = this.title + '~' + this.ep;

        rowDiv.appendChild(trackNumber);
        rowDiv.appendChild(trackName);
        rowDiv.appendChild(trackUrl);
        rowDiv.appendChild(albumTitle);
        rowDiv.appendChild(trackLength);
        rowDiv.appendChild(trackOGTitle);


        document.getElementById('list').appendChild(rowDiv)
    }

    this.createAlbumSongRow = (trackNum) => {
        const trackRow = document.createElement("button");
        const tTitle = document.createElement("span");
        const tTime = document.createElement("span");
        const tNum = document.createElement("span");

        trackRow.type = "button";
        trackRow.dataset.url = this.url;
        trackRow.dataset.length = this.length;
        trackRow.dataset.epname = this.ep;
        trackRow.dataset.albumurl = this.art;
        trackRow.addEventListener("click", handleTrackSelect);
        trackRow.classList.add("t-row");
        tTitle.classList.add("album-track");
        tTime.classList.add("track-time");
        tNum.classList.add("track-num");
        // 

        tTitle.innerText = this.title;
        tTime.innerText = this.length;
        tNum.innerText = trackNum;

        trackRow.appendChild(tNum);
        trackRow.appendChild(tTitle);
        trackRow.appendChild(tTime);
        
        return trackRow;
    }
}


// track fill control
const audioPlayer = document.getElementById("player");
const discoContainer = document.getElementById("disco");
const currArtistName = document.getElementById("artistName");
const currTrackName = document.getElementById("trackName");
const currTrackTime = document.getElementById("trackTime");
const currAlbumName = document.getElementById("albumName");
const currAlbumPic = document.getElementById("albumPic");



// reset now playing
const filterPlayer = () => {
    console.log("...Filtering to next track...")
    const wiperObj = songQueue.grabNext();

    const songHome = `https://forestw70.github.io/sketches-bcc-client/assets/music/${wiperObj.url}.mp3`

    currArtistName.innerText = "";
    currTrackName.innerText = "";
    currAlbumName.innerText = "";
    currAlbumPic.src = "";
    audioPlayer.src = "";
    // 
    currArtistName.innerText = wiperObj.artist;
    currTrackName.innerText = wiperObj.title;
    currAlbumName.innerText = wiperObj.ep;
    currAlbumPic.src = wiperObj.art;
    audioPlayer.src = songHome;
    console.log("Next track loaded!")
}

// create queue item
const addToQueue = (songInfo) => {
    // create new song and add to localstorage
    const title = songInfo.querySelector(".album-track").innerText;
    const album = songInfo.dataset.epname;
    const albumPic = songInfo.dataset.albumurl;
    const songSrc = songInfo.dataset.url
    const qItem = new Song(title, album, albumPic, songSrc)

    if (songQueue.grabLength() === 0) {
        qItem.add2queueList();
    } else {
        qItem.addSongButton();
    }

}

const handleTrackSelect = (e) => {
    e.preventDefault;
    const currQueueTime = songQueue.grabLength();
    const target = e.currentTarget;

    if (currQueueTime <= 1) {
        addToQueue(target);
        console.log(localQueue.length)
        filterPlayer();
    } else {
        addToQueue(target);
    }

}

const createAlbumViews = (epName, epArt) => {
    const albumContainer = document.createElement("article");
    const infoContainer = document.createElement("div");
    const trackContainer = document.createElement("div");
    const albumTitle = document.createElement("h3");
    const albumArt = document.createElement("img");
    albumContainer.classList.add("disco-item");
    infoContainer.classList.add("info-container");
    trackContainer.classList.add("track-container");

    albumTitle.innerText = epName;
    albumArt.src = epArt;

    infoContainer.appendChild(albumArt)
    infoContainer.appendChild(albumTitle)
    albumContainer.appendChild(infoContainer)
    albumContainer.appendChild(trackContainer)
    document.getElementById("disco").appendChild(albumContainer);
}


// build album view
const mapThruAlbums = () => {
    discoContainer.innerText = '';
    sketches.map(album => {
        // set up container variables and classes
        const albumContainer = document.createElement("article");
        const infoContainer = document.createElement("div");
        const trackContainer = document.createElement("div");
        const albumTitle = document.createElement("h3");
        const albumArt = document.createElement("img");
        albumContainer.classList.add("disco-item");
        infoContainer.classList.add("info-container");
        trackContainer.classList.add("track-container");
        trackContainer.id = album.title;
        albumTitle.innerText = album.title;
        albumArt.src = album.webLink;

        

        album.trackList.map((idvTrack, idx) => {

            const albumSong = new Song(idvTrack.track, album.title, album.webLink, idvTrack.url, idvTrack.length);
            const nextRow = albumSong.createAlbumSongRow(idx+1);


            // // set up track info
            // const trackRow = document.createElement("button");
            // const tTitle = document.createElement("span");
            // const tTime = document.createElement("span");
            // const tNum = document.createElement("span");

            // trackRow.type = "button";
            // trackRow.dataset.url = idvTrack.url;
            // trackRow.dataset.length = idvTrack.length;
            // trackRow.dataset.epname = epName;
            // trackRow.dataset.albumurl = epArt;
            // trackRow.addEventListener("click", handleTrackSelect);
            // trackRow.classList.add("t-row");
            // tTitle.classList.add("album-track");
            // tTime.classList.add("track-time");
            // tNum.classList.add("track-num");
            // // 

            // tTitle.innerText = idvTrack.track;
            // tTime.innerText = idvTrack.length;
            // tNum.innerText = idx + 1;

            // trackRow.appendChild(tNum);
            // trackRow.appendChild(tTitle);
            // trackRow.appendChild(tTime);
            trackContainer.appendChild(nextRow);
        })

        // write and append all info
        infoContainer.appendChild(albumArt)
        infoContainer.appendChild(albumTitle)
        albumContainer.appendChild(infoContainer)
        albumContainer.appendChild(trackContainer)
        document.getElementById("disco").appendChild(albumContainer);

    })
}


// soft reset
const clearPlayer = () => {
    currArtistName.innerText = "";
    currTrackName.innerText = "";
    currAlbumName.innerText = "No track queued!";
    currAlbumPic.src = "https://picsum.photos/25";
    audioPlayer.src = "";
}


const sortBy = (sortType) => {
    if (sortType === "trkNme") {
        console.log(sortType)
    } else {
        console.log("not yet")
    }
}

// create single song - song view - missin react
const listContainer = document.getElementById('list')


// const makeSongRow = (at, ap, sn, sl, su, sp) => {
//     const trackNumber = document.createElement('span');
//     const trackName = document.createElement('span');
//     const trackUrl = document.createElement('span');
//     const albumtitle = document.createElement('span');
//     const trackLength = document.createElement('span');
//     const trackOGTitle = document.createElement('span');
//     const div = document.createElement('div');

//     div.classList.add('song-list-row')

//     trackNumber.innerText = sp;
//     trackName.innerText = sn;
//     trackUrl.innerText = su;
//     albumtitle.innerText = at;
//     trackLength.innerText = sl;
//     trackOGTitle.innerText = ap;


//     div.appendChild(trackNumber)
//     div.appendChild(trackName)
//     div.appendChild(trackUrl)
//     div.appendChild(albumtitle)
//     div.appendChild(trackLength)
//     div.appendChild(trackOGTitle)

//     listContainer.appendChild(div);
// }

const displayTracks = (list) => {
    list.map((song, idx) => {
        let track = new Song(song.trackName, song.epName, song.ogItem, song.trackUrl, song.trackLength)
        track.createListSongRow(idx)
        // makeSongRow(song.epName, song.ogItem, song.trackName, song.trackLength, song.trackUrl, idx);
    })
}


// show song view
const showSongView = (sortedSongList) => {
    listContainer.innerText = '';
    displayTracks(sortedSongList);

}


const getDefaultList = () => {
    let songId = 0;
    const sorted = [];
    sketches.map(album => {
        album.trackList.map(song => {
            const listItem = {
                trackNumber: songId,
                trackName: song.track,
                epName: album.title,
                trackLength: song.length,
                trackUrl: song.url,
                ogItem: album.artLink
            }
            sorted.push(listItem)
            songId++
        })
    })
    return sorted;
}


// menus
const nowPlaying = document.getElementById("nowPlaying");
document.getElementById("playingDropdownButton").addEventListener("click", () => {
    nowPlaying.classList.toggle('menu-hide')
})
document.getElementById("qButton").addEventListener("click", () => {
    queueListDump.classList.toggle('menu-hide')
})

document.getElementById("nextTrack").addEventListener("click", () => {
    const queueLength = songQueue.grabLength();
    console.log(queueLength)

    if (queueLength > 1) {
        songQueue.removeFromQueue();
        filterPlayer();
    } else {
        clearPlayer();
    }

})

document.getElementById("viewAlbums").addEventListener("click", () => {
    listContainer.innerText = '';
    mapThruAlbums()
})

document.getElementById("viewSongs").addEventListener("click", () => {

    showSongView(sketches);
})

document.getElementById("headerRow").addEventListener("click", (e) => {
    let newSort = []
    discoContainer.innerText = '';

    if (e.target.dataset.sortBy === "trkNme") {
        newSort = defSort.sort((a, b) => {
            if (a.trackName > b.trackName) {
                return 1
            }
            return -1
        })
        // console.log(newSort)
    } else if (e.target.dataset.sortBy === "epTtl") {
        newSort = defSort.sort((a, b) => {
            if (a.epName > b.epName) {
                return 1;
            }
            return -1;
        })
    }


    showSongView(newSort);
})




const defSort = getDefaultList()
window.onload = () => {

    // showSongView(defSort);
    // console.log(defSort)
    mapThruAlbums();
}

