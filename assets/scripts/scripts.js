// album information
const getRT = () => {
    let one = Math.floor(Math.random() * 9);
    let two = Math.floor(Math.random() * 60);
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
                length: getRT(),
                url: 'sara-tonin',
            },
            {
                track: 'Bailey melody 07',
                length: getRT(),
                url: 'bailey-melody',
            },
            {
                track: 'Oh techre!',
                length: getRT(),
                url: 'oh-techre',
            },
            {
                track: 'Go to feather',
                length: getRT(),
                url: 'go2feather',
            },
            {
                track: '(I am aware of the) black box',
                length: getRT(),
                url: 'black-box',
            },
            {
                track: '1800harp',
                length: getRT(),
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
                length: getRT(),
                url: 'froggy',
            },
            {
                track: 'Hello grommet',
                length: getRT(),
                url: 'hello-grommet',
            },
            {
                track: 'Live from the polls',
                length: getRT(),
                url: 'polls',
            },
            {
                track: 'Case of the cookies',
                length: getRT(),
                url: 'cookies',
            },
            {
                track: 'Is it forever?',
                length: getRT(),
                url: 'is-it-forever',
            },
            {
                track: 'BBBB',
                length: getRT(),
                url: 'bbbb',
            },
            {
                track: 'Silly Singing silicon',
                length: getRT(),
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
                length: getRT(),
                url: 'are-those-thorns',
            },
            {
                track: 'Barrixtown',
                length: getRT(),
                url: 'barrixtown',
            },
            {
                track: 'Childs Loop',
                length: getRT(),
                url: 'childs-loop',
            },
            {
                track: 'Chix Loop',
                length: getRT(),
                url: 'cookies',
            },
            {
                track: 'Cleverly',
                length: getRT(),
                url: 'is-it-forever',
            },
            {
                track: 'Crystal Envelope',
                length: getRT(),
                url: 'crystal-env',
            },
            {
                track: 'FL Disaster Zone',
                length: getRT(),
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
                length: getRT(),
                url: 'kicking-space',
            },
            {
                track: 'Let It Fly',
                length: getRT(),
                url: 'let-it-fly',
            },
            {
                track: 'Liptstick Halo',
                length: getRT(),
                url: 'liptstick-halo',
            },
            {
                track: 'parks',
                length: getRT(),
                url: 'parks',
            },
            {
                track: 'Playing With My Hair',
                length: getRT(),
                url: 'playing-w-my-hair',
            },
            {
                track: 'Rust In Peace',
                length: getRT(),
                url: 'rust-in-peace',
            },
            {
                track: 'Woodshed',
                length: getRT(),
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
                length: getRT(),
                url: 'ferox',
            },
            {
                track: 'This is forever (demo)',
                length: getRT(),
                url: 'this-is-forever-v1',
            },
            {
                track: 'Tsalal',
                length: getRT(),
                url: 'ferox',
            },
            {
                track: 'Knavish Drone (cut)',
                length: getRT(),
                url: 'knavish-drone',
            },
            {
                track: 'Anxious...',
                length: getRT(),
                url: 'anxious-oblast',
            },
            {
                track: 'HM/FL (demo)',
                length: getRT(),
                url: 'hmfl-demo',
            },
            {
                track: 'Boiler Room',
                length: getRT(),
                url: 'boiler-room',
            },
            {
                track: 'Chiminy Harker',
                length: getRT(),
                url: 'chiminy',
            },
            {
                track: 'On Line',
                length: getRT(),
                url: 'on-line',
            }
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

function Song(title, ep, art, url) {
    this.artist = "Lukasz Mauro"
    this.title = title;
    this.ep = ep;
    this.art = art;
    this.url = url;

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
        infoContainer.classList.add("info-container");
        trackContainer.classList.add("track-container");
        // 

        const epName = album.title;
        albumTitle.innerText = album.title;
        // for web
        const epArt = album.webLink;
        albumArt.src = epArt;

        album.trackList.map((idvTrack, idx) => {
            // set up track info
            const trackRow = document.createElement("button");
            const tTitle = document.createElement("span");
            const tTime = document.createElement("span");
            const tNum = document.createElement("span");

            trackRow.type = "button";
            trackRow.dataset.url = idvTrack.url;
            trackRow.dataset.length = idvTrack.length;
            trackRow.dataset.epname = epName;
            trackRow.dataset.albumurl = epArt;
            trackRow.addEventListener("click", handleTrackSelect);
            trackRow.classList.add("t-row");
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


// soft reset
const clearPlayer = () => {
    currArtistName.innerText = "";
    currTrackName.innerText = "";
    currAlbumName.innerText = "No track queued!";
    currAlbumPic.src = "https://picsum.photos/25";
    audioPlayer.src = "";
}

// create single song - song view - missin react
const listContainer = document.getElementById('list')



const makeSongRow = (at, ap, sn, sl, su, sp) => {
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');
    const span5 = document.createElement('span');
    const span6 = document.createElement('span');
    const div = document.createElement('div');

    div.classList.add('song-list-row')

    span1.innerText = sp;
    span2.innerText = sn;
    span3.innerText = su;
    span4.innerText = at;
    span5.innerText = sl;
    span6.innerText = ap;

    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    div.appendChild(span4)
    div.appendChild(span5)
    div.appendChild(span6)

    listContainer.appendChild(div);
}


// show song view
const showSongView = () => {
    makeSongRow("Album Title", "Some Path", "Song", "Length", "Song Url", "Track Number")
    let rootNum = 0;

    sketches.map(album => {
        let albumTitle = album.title;
        let otherPath = album.artLink
        console.log(album)

        album.trackList.map(song => {
            let songName = song.track;
            let songLength = song.length;
            let songUrl = song.url;
            rootNum++;
            makeSongRow(albumTitle, otherPath, songName, songLength, songUrl, rootNum);
        })
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
    const queueLength = songQueue.grabLength();
    console.log(queueLength)

    if (queueLength > 1) {
        songQueue.removeFromQueue();
        filterPlayer();
    } else {
        clearPlayer();
    }

})

document.getElementById("viewSongs").addEventListener("click", () => {
    discoContainer.innerText = '';
    showSongView();
})

window.onload = mapThruAlbums();


