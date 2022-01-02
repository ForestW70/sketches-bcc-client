
const sketches = [
    {
        title: 'S&OFV1',
        artLink: './assets/s&ofv1.jpg',
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
                length: '?:??',
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
        trackList: [
            {
                track: 'Amanda Morph',
                length: '',
                url: 'amanda-morph',
            },
            {
                track: 'Sara Tonin',
                length: '',
                url: 'sara-tonin',
            },
            {
                track: 'Bailey melody 07',
                length: '',
                url: 'bailey-melody',
            },
            {
                track: 'Oh techre!',
                length: '',
                url: 'oh-techre',
            },
            {
                track: 'Go to feather',
                length: '',
                url: 'go2feather',
            },
            {
                track: '(I am aware of the) black box',
                length: '',
                url: 'black-box',
            },
            {
                track: '1800harp',
                length: '',
                url: '1800harp',
            },
        ]
    },
    {
        title: 'S&OFV4',
        artLink: './assets/s&ofv4.png',
        trackList: [
            {
                track: 'Froggy',
                length: '',
                url: 'froggy',
            },
            {
                track: 'Hello grommet',
                length: '',
                url: 'hello-grommet',
            },
            {
                track: 'Live from the polls',
                length: '',
                url: 'polls',
            },
            {
                track: 'Case of the cookies',
                length: '',
                url: 'cookies',
            },
            {
                track: 'Is it forever?',
                length: '',
                url: 'is-it-forever',
            },
            {
                track: 'BBBB',
                length: '',
                url: 'bbbb',
            },
            {
                track: 'Silly Singing silicon',
                length: '',
                url: 'silly-singing',
            },
        ]
    },
    {
        title: 'sketches bcc',
        artLink: './assets/bcc.png',
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
]


const queueListDump = document.getElementById("queueList");
const localQueue = window.localStorage

function SongQueue(pushbox = []) {
    this.container = pushbox;
    

    this.add2queue = (el) => {
        return this.container.push(el);
    }

    this.removeFromQueue = () => {
        const currItem = this.container[0];
        const btnSearch = currItem.title + "~" + currItem.ep;
        document.getElementById(btnSearch).remove();
        return this.container.shift();
    }

    this.grabNext = () => {
        return this.container[0];
    }

    // this.removeButton = (t, e) => {
    //     return document.getElementById(`${this.title}~${this.ep}`).remove()
    // }
}

const songQueue = new SongQueue()

function Song(title, ep, art, url) {
    this.artist = "Lukasz Mauro"
    this.title = title;
    this.ep = ep;
    this.art = art;
    this.url = url;

    this.add2local = () => {
        const item = {
            "artist": this.artist,
            "title": this.title,
            "ep": this.ep,
            "art": this.art,
            "url": this.url,
        }
        songQueue.add2queue(item)
        // localStorage.setItem(localStorage.length, JSON.stringify(item))

        const qBar = document.createElement("button");
        qBar.innerText = this.title + ' ~ ' + this.ep;
        qBar.id = this.title + '~' + this.ep;
        queueListDump.appendChild(qBar);
    }

    

}


// track control
const audioPlayer = document.querySelector(".player");
const discoContainer = document.getElementById("disco");
const currArtistName = document.getElementById("artistName");
const currTrackName = document.getElementById("trackName");
const currTrackTime = document.getElementById("trackTime");
const currAlbumName = document.getElementById("albumName");
const currAlbumPic = document.getElementById("albumPic");



// reset now playing
const filterPlayer = () => {
    const wiperObj = songQueue.grabNext();
    const songHome = `./music/${wiperObj.url}.mp3`

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
}

// queue functions
const addToQueue = (songInfo) => {
    // create new song and add to localstorage
    const title = songInfo.querySelector(".album-track").innerText;
    const album = songInfo.dataset.epname;
    const albumPic = songInfo.dataset.albumurl;
    const songSrc = songInfo.dataset.url
    const qItem = new Song(title, album, albumPic, songSrc)
    qItem.add2local();
}

const handleTrackSelect = (e) => {
    const target = e.currentTarget;

    if (localQueue.length > 0) {
        addToQueue(target)
    } else {
        addToQueue(target);
        filterPlayer();
    }

}

const cycleNextSong = () => {

}


// build album view
const mapThruAlbums = () => {
    sketches.map(album => {
        // set up container variables and classes
        const albumContainer = document.createElement("article");
        const infoContainer = document.createElement("div");
        const trackContainer = document.createElement("div");
        const albumTitle = document.createElement("h3");
        const albumArt = document.createElement("img");
        albumContainer.classList.add("disco-item");
        infoContainer.classList.add("info-container")
        trackContainer.classList.add("track-container")
        // 

        const epName = album.title;
        const epArt = album.artLink;
        albumTitle.innerText = album.title;
        albumArt.src = album.artLink;

        album.trackList.map((idvTrack, idx) => {
            // set up track info
            const trackRow = document.createElement("div")
            const tTitle = document.createElement("span");
            const tTime = document.createElement("span");
            const tNum = document.createElement("span");

            trackRow.dataset.url = idvTrack.url;
            trackRow.dataset.length = idvTrack.length
            trackRow.dataset.epname = epName;
            trackRow.dataset.albumurl = epArt;
            trackRow.addEventListener("click", handleTrackSelect);
            trackRow.classList.add("t-row")
            tTitle.classList.add("album-track");
            tTime.classList.add("track-time");
            tNum.classList.add("track-num");
            // 

            tTitle.innerText = idvTrack.track;
            tTime.innerText = idvTrack.length;
            tNum.innerText = idx + 1;

            trackRow.appendChild(tNum);
            trackRow.appendChild(tTitle);
            trackRow.appendChild(tTime);
            trackContainer.appendChild(trackRow);
        })

        // write and append all info
        infoContainer.appendChild(albumArt)
        infoContainer.appendChild(albumTitle)
        albumContainer.appendChild(infoContainer)
        albumContainer.appendChild(trackContainer)
        document.getElementById("disco").appendChild(albumContainer);

    })
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
    songQueue.removeFromQueue();
    // songQueue.removeButton();
    filterPlayer();
})


mapThruAlbums();