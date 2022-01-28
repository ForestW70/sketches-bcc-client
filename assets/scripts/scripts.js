// album information
const getRT = () => {
    const roll = (x) => Math.floor(Math.random() * x);


    let one = roll(20);
    let two = roll(59);
    if (two < 10) {
        two = `0${two}`
    }
    return `${one}:${two}`;
}
const sketches = [
    {
        title: 'S&OFV1',
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'August 28th, 2017',
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
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
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
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
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
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
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
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
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
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
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
        title: 'S&OFV7',
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
        artLink: './assets/s&ofv7.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv7.jpg',
        trackList: [
            {
                track: '404',
                length: getRT(),
                url: '404',
            },
            {
                track: 'Bubble Boy',
                length: getRT(),
                url: 'bubble-boy',
            },
            {
                track: 'Flawz',
                length: getRT(),
                url: 'flawz',
            },
            {
                track: 'Gabby',
                length: getRT(),
                url: 'gabby',
            },
            {
                track: 'Midi Compactor',
                length: getRT(),
                url: 'midi-compactor',
            },
            {
                track: 'Purple!',
                length: getRT(),
                url: 'purple',
            },
            {
                track: 'Rip Arp',
                length: getRT(),
                url: 'rip-arp',
            },
        ]
    },
    {
        title: 'S&OFV8',
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
        artLink: './assets/s&ofv8.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/s&ofv8.jpg',
        trackList: [
            {
                track: 'Rogue on 1-1',
                length: getRT(),
                url: 'rogue-on-1-1',
            },
            {
                track: 'Sea of Drones',
                length: getRT(),
                url: 'sea-of-drones',
            },
            {
                track: 'Sine Language',
                length: getRT(),
                url: 'sine-lang',
            },
            {
                track: 'SSX Loop',
                length: getRT(),
                url: 'ssx-loop',
            },
            {
                track: 'The Drs In.',
                length: getRT(),
                url: 'the-doctors-in',
            },
            {
                track: 'girard (noisey)',
                length: getRT(),
                url: 'girard-noisy',
            },
        ]
    },
    {
        title: 'BCC',
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'November 21st, 2021',
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
        title: "IB",
        artist: 'con',
        longArtist: 'con',
        releaseDate: 'Avril 4th, 2014',
        artLink: './assets/ib.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/ib.jpg',
        trackList: [
            {
                track: 'Ferox Recieved',
                length: "3:17",
                url: 'ferox',
            },
            {
                track: 'Tsalal',
                length: "1:50",
                url: 'tsalal',
            },
            {
                track: 'Anxious...',
                length: "4:35",
                url: 'anxious-oblast',
            },
            {
                track: 'Knavish Drone (cut)',
                length: "16:07",
                url: 'knavish-drone',
            },
        ]
    },
    {
        title: "Redactor",
        artist: 'L. Mauro',
        longArtist: 'Lukasz Mauro',
        releaseDate: 'N/A',
        artLink: './assets/redact.png',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/redact.png',
        trackList: [
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
    },
    {
        title: "ECT",
        artist: 'S. Finder',
        longArtist: 'Stud Finder',
        releaseDate: 'N/A',
        artLink: './assets/sketches.jpg',
        webLink: 'https://forestw70.github.io/sketches-bcc-client/assets/images/sketches.jpg',
        trackList: [

            {
                track: 'This is forever (demo)',
                length: "2:36",
                url: 'this-is-forever-v1',
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
                track: 'HM/FL (survivor)',
                length: getRT(),
                url: 'hmfl(survivor)',
            },

        ]
    }
]

// directory
const queueListDump = document.getElementById("queueList");
const audioPlayer = document.getElementById("player");
const discoContainer = document.getElementById("disco");
const currArtistName = document.getElementById("artistName");
const currTrackName = document.getElementById("trackName");
const currTrackTime = document.getElementById("trackTime");
const currAlbumName = document.getElementById("albumName");
const currAlbumPic = document.getElementById("albumPic");
const listViewDump = document.getElementById("list");
const nowPlaying = document.getElementById("playingInfo");
const headSwap = document.getElementById("wellHeyThere");
const testBtn = document.getElementById("testBtn");
// const listHeaderRow = document.getElementById("headerRow")
// const trackQueueViewer = document.getElementById("trackQueue")
// let defSort;

//
// class to control song queue actions
function SongQueue(pushbox = []) {
    this.allTheSongs = pushbox;
    this.activeQueue = [];


    this.populateSongList = () => {
        const listSort = getDefaultList();
        // console.log("sort")
        return this.allTheSongs.push(listSort);
    }
    this.getSongList = () => {
        return this.allTheSongs[0];
    }

    this.changeSongList = (newSorted) => {
        this.allTheSongs = [];

        return this.allTheSongs.push(newSorted);
    }

    this.add2queue = (el) => {
        // const songInfo = el.split(' ');
        const item = {
            songUrl: el.url,
            songEp: el.ep,
            songArt: el.art,
            songArtist: el.artist,
            songTitle: el.title,
            songLength: el.length,
        }
        if (this.activeQueue.length === 0) {
            this.activeQueue.push(item)
            this.filterPlayer();
            return;
        } else {
            this.activeQueue.push(item);
            return;
        }
        
    }
    this.createQItem = (el) => {
        // const songInfo = el.split(' ');
        const qButton = document.createElement("button");
        qButton.type = "button"
        qButton.innerText = `${el.url} ~ ${el.ep}`;
        qButton.id = el.url + " " + el.ep;
        queueListDump.appendChild(qButton);
    }
    this.removeQueueButton = () => {
        const currItem = this.activeQueue[0];
        const btnSearch = currItem.songUrl + " " + currItem.songEp;
        document.getElementById(btnSearch).remove();
        return;
    }
    this.removeFromQueue = () => {
        return this.activeQueue.shift();
    }
    this.grabNext = () => {
        return this.activeQueue[0];
    }
    this.grabLength = () => {
        return this.activeQueue.length;
    }
    this.findSong = (url) => {
        const item = this.activeQueue.find(song => song.name === url);
        return item;
    }
    this.filterPlayer = () => {
        const wiper = this.activeQueue[0];
        const songHome = `https://forestw70.github.io/sketches-bcc-client/assets/music/${wiper.songUrl}.mp3`
        const newTitle = `${wiper.songArtist} ~ ${wiper.songUrl}`

        clearPlayer();
        // clear page title and replace with song info
        document.title = newTitle;
        headSwap.innerText = wiper.songArtist + " " + wiper.songUrl + ".mp3 '" + wiper.songTitle + "' " + wiper.songEp + " " + wiper.songLength;
        currArtistName.innerText = wiper.songArtist;
        currTrackName.innerText = wiper.songUrl;
        currAlbumName.innerText = `"${wiper.songEp}"`;
        currAlbumPic.src = wiper.songArt;
        audioPlayer.src = songHome;
        return console.log("Next track loaded!");
        
    }
}
const songQueue = new SongQueue();

// class to control individual song actions (artist, title, ep, art, url, length, released)
function Song(artist, title, ep, art, url, length, released, long) {
    this.artist = artist;
    this.artistLong = long;
    this.title = title;
    this.ep = ep;
    this.art = art;
    this.url = url;
    this.length = length;
    this.released = released;

    // this.add2queueList = () => {
    //     const item = {
    //         "artist": this.artist,
    //         "title": this.title,
    //         "ep": this.ep,
    //         "art": this.art,
    //         "url": this.url,
    //     }
    //     songQueue.add2queue(item)
    //     console.log(songQueue.grabNext())
    // }

    // this.returnSongInfo = () => {
    //     return item = {
    //         "artist": this.artist,
    //         "title": this.title,
    //         "ep": this.ep,
    //         "art": this.art,
    //         "url": this.url,
    //     }
    // }

    // this.createQueueItem = () => {
    //     const qButton = document.createElement("button");
    //     qButton.innerText = this.title + ' ~ ' + this.ep + ' ~ ' + this.length;
    //     qButton.id = this.title + '~' + this.ep;
    //     queueListDump.appendChild(qButton);
    // }

    this.createListSongRow = (trackNum) => {
        const trackNumber = document.createElement("span");
        const trackName = document.createElement('span');
        const trackUrl = document.createElement('span');
        const albumTitle = document.createElement('span');
        const trackLength = document.createElement('span');
        const trackArtist = document.createElement('span');
        //
        trackNumber.innerText = trackNum;
        trackName.innerText = this.title;
        trackUrl.innerText = this.url;
        albumTitle.innerText = this.ep;
        trackLength.innerText = this.length
        trackArtist.innerText = this.artist;
        //
        const trackRow = document.createElement("button");
        trackRow.type = "button";
        trackRow.classList.add('song-list-row');
        trackRow.dataset.songId = this.title + '~' + this.ep;
        trackRow.dataset.title = this.title;
        trackRow.dataset.url = this.url;
        trackRow.dataset.length = this.length;
        trackRow.dataset.epname = this.ep;
        trackRow.dataset.albumurl = this.art;
        trackRow.dataset.artist = this.artist;

        trackRow.addEventListener("click", handleTrackSelect);
        //
        trackRow.appendChild(trackNumber);
        trackRow.appendChild(trackName);
        trackRow.appendChild(trackUrl);
        trackRow.appendChild(trackLength);
        trackRow.appendChild(albumTitle);
        trackRow.appendChild(trackArtist);
        listViewDump.appendChild(trackRow);
    }

    this.createAlbumSongRow = (trackNum) => {
        const trackRow = document.createElement("button");
        trackRow.type = "button";
        trackRow.classList.add("t-row");
        trackRow.dataset.url = this.url;
        trackRow.dataset.length = this.length;
        trackRow.dataset.epname = this.ep;
        trackRow.dataset.albumurl = this.art;
        trackRow.dataset.artist = this.artist;
        trackRow.dataset.title = this.title;
        trackRow.addEventListener("click", handleTrackSelect);
        //
        const tTitle = document.createElement("span");
        const tTime = document.createElement("span");
        const tNum = document.createElement("span");
        tTitle.classList.add("album-track");
        tTime.classList.add("track-time");
        tNum.classList.add("track-num");
        tTitle.innerText = this.title;
        tTime.innerText = this.length;
        tNum.innerText = trackNum;
        //
        trackRow.appendChild(tNum);
        trackRow.appendChild(tTitle);
        trackRow.appendChild(tTime);
        return trackRow;
    }
}

// TRACK SORT
// 
// const handleListSort = (opt) => {
//     let newSorted = [];
//     if (opt === "trkNme") {
//         newSorted = def
//     } else if (opt === "trkUrl") {

//     } else if (opt === "epTtl") {

//     } else if (opt === "trkLen") {

//     } else if (opt === "artist") {

//     }
// }


//  QUEUE CONTROLS
// 
audioPlayer.addEventListener("ended", () => {
    songQueue.removeFromQueue();
    const qtime = songQueue.grabLength()
    if (qtime === 1) {
        songQueue.filterPlayer();
        songQueue.removeQueueButton();
        audioPlayer.play();
    } else if (qtime > 1) {
        console.log('no more items in queue.')
    }

})

const handleTrackSelect = (e) => {
    e.preventDefault;
    const lookObj = {
        artist: e.currentTarget.dataset.artist,
        ep: e.currentTarget.dataset.epname,
        title: e.currentTarget.dataset.title,
        url: e.currentTarget.dataset.url,
        art: e.currentTarget.dataset.albumurl,
        length: e.currentTarget.dataset.length
    }
    // const lookingFor = e.currentTarget.dataset.url + ' ' + e.currentTarget.dataset.epname + ' ' + e.currentTarget.dataset.albumurl;
    const currQueueTime = songQueue.grabLength();
    if (currQueueTime === 0) {
        songQueue.add2queue(lookObj)
        // songQueue.filterPlayer();
    } else {
        songQueue.add2queue(lookObj)
        songQueue.createQItem(lookObj);
    }

}

const clearPlayer = () => {
    currArtistName.innerText = "";
    currTrackName.innerText = "";
    currAlbumName.innerText = "No track queued!";
    currAlbumPic.src = "https://picsum.photos/25";
    audioPlayer.src = "";
    document.title = "Sketches";
    headSwap.innerText = "sum' sketches"
}


//  ALBUM VIEW
//  
const buildAlbumCont = (albumInfo) => {
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
        const albumSong = new Song(albumInfo.artist, idvTrack.track, albumInfo.title, albumInfo.webLink, idvTrack.url, idvTrack.length, albumInfo.releaseDate, albumInfo.artistLong);
        // const songItem = {
        //     'songUrl': idvTrack.url,
        //     'songEp': albumInfo.title,
        // };
        // songQueue.populateSongList(songItem)
        const nextRow = albumSong.createAlbumSongRow(idx + 1);
        trackContainer.appendChild(nextRow);
    })

    albumContainer.appendChild(trackContainer)
    return albumContainer;
}

const showAlbumView = () => {
    discoContainer.innerText = '';
    listViewDump.innerText = '';

    sketches.map(album => {
        const idvAlbum = buildAlbumCont(album);
        discoContainer.appendChild(idvAlbum);
    })

}


// SONG VIEW
// 
const showSongView = (sortedSongList) => {
    listViewDump.innerText = '';
    discoContainer.innerText = '';
    createHeaderRow();
    sortedSongList.map((song, idx) => {
        let track = new Song(song.artist, song.title, song.ep, song.artLink, song.url, song.length, song.releaseDate, song.artistLong)
        track.createListSongRow(idx)
    })
}

const createHeaderRow = () => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("song-list-row");
    headerDiv.id = "headerRow";

    headerDiv.addEventListener("click", (e) => {

        changeSortedSongList(e.target.dataset.sortBy)
        showSongView(songQueue.getSongList())
        console.log(e.target.innerText)
    })

    const numberSpan = document.createElement("span");
    numberSpan.dataset.sortBy = "trkNum";
    numberSpan.innerText = "Track Number";
    const titleSpan = document.createElement("span");
    titleSpan.dataset.sortBy = "trkNme";
    titleSpan.innerText = "Song Title";
    const urlSpan = document.createElement("span");
    urlSpan.dataset.sortBy = "trkUrl";
    urlSpan.innerText = "Track Path";
    const epSpan = document.createElement("span");
    epSpan.dataset.sortBy = "epTtl";
    epSpan.innerText = "Ep Title";
    const lengthSpan = document.createElement("span");
    lengthSpan.dataset.sortBy = "trkLen";
    lengthSpan.innerText = "Length";
    const otherSpan = document.createElement("span");
    otherSpan.dataset.sortBy = "artist";
    otherSpan.innerText = "Artist";
    headerDiv.appendChild(numberSpan)
    headerDiv.appendChild(titleSpan)
    headerDiv.appendChild(urlSpan)
    headerDiv.appendChild(lengthSpan)
    headerDiv.appendChild(epSpan)
    headerDiv.appendChild(otherSpan);
    listViewDump.appendChild(headerDiv);
    return;
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
                releaseDate: album.releaseDate
            }
            sorted.push(listItem)
            songId++
        })
    })
    return sorted;
}

const constructSort = (sortKey) => {
    // let currentSort = songQueue.getSongList();
    console.log(currentSort);

    const nSort = currentSort.sort((a, b) => {
        return b.trackNumber - a.trackNumber;
    })

    const nextSort = currentSort.sort((a, b) => {
        let el1 = a.title.toUpperCase();
        let el2 = b.title.toUpperCase();
        console.log("hi")
        if (el1 > el2) {
            return 1
        }
        if (el1 < el2) {
            return -1
        }
        return 0;
    })

    return nSort;
}



const compareNums = (a, b) => {
    return b.trackNumber - a.trackNumber
}

const changeSortedSongList = (sortBy) => {
    const currentSort = songQueue.getSongList();
    let newSort;
    switch (sortBy) {
        case "trkNum":
            console.log("sorting by track number (useless)..")
            newSort = currentSort.sort((a, b) => {
                return b.trackNumber - a.trackNumber;
            })
            // console.log(newSort)
            break;

    
        case "trkNme":
            console.log("sorting by track title..")
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
            // console.log(newSort)
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
            // console.log(newSort)
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
            // console.log(newSort)
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
            // console.log(newSort)
            break;

        case "trkLen":
            console.log("sorting by track length..")
            newSort = newSort = currentSort.sort((a, b) => {
                let el1 = a.length.toUpperCase();
                let el2 = b.length.toUpperCase();
                if (el1 > el2) {
                    return 1
                }
                if (el1 < el2) {
                    return -1
                }
                return 0;
            })
            // console.log(newSort)
            break;

        default:
            console.log("whoops")
    }
    
    songQueue.changeSongList(newSort);

}

// Buttons
const toggleQueue = document.getElementById("toggleShowQueue")
const albumViewBtn = document.getElementById("viewAlbums")
const songViewBtn = document.getElementById("viewSongs")
const nextTrackBtn = document.getElementById("nextTrack")
const playButton = document.getElementById("pause-play")
const icon = document.getElementById("pp")

// change views
toggleQueue.addEventListener("click", () => {
    queueListDump.classList.toggle('menu-hide')
})
albumViewBtn.addEventListener("click", () => {
    if (!albumViewBtn.classList.contains("curr-view")) {
        albumViewBtn.classList.toggle("curr-view")
        songViewBtn.classList.toggle("curr-view")
    }
    showAlbumView();
})
songViewBtn.addEventListener("click", () => {
    if (!songViewBtn.classList.contains("curr-view")) {
        albumViewBtn.classList.toggle("curr-view")
        songViewBtn.classList.toggle("curr-view")
    }
    // const defSort = getDefaultList()
    showSongView(songQueue.getSongList());
})

// Audio Player Buttons
playButton.addEventListener("click", () => {
    const isLoadedCheck = audioPlayer.src.split(".").pop()
    console.log(isLoadedCheck)
    if (isLoadedCheck !== "mp3") {
        return window.alert("Please queue up next song.")
    }
    if (audioPlayer.paused) {
        audioPlayer.play();

        icon.classList.remove("glyphicon-play");
        icon.classList.add("glyphicon-pause");
    } else {
        audioPlayer.pause();

        icon.classList.remove("glyphicon-pause");
        icon.classList.add("glyphicon-play");
    }
})

nextTrackBtn.addEventListener("click", () => {
    songQueue.removeFromQueue();
    const queueLength = songQueue.grabLength();
    icon.classList.remove("glyphicon-pause");
    icon.classList.add("glyphicon-play");
    console.log(`You have ${queueLength} items left in your queue!`);
    if (queueLength === 0) {
        clearPlayer();
        console.log("nothing queued!")
        // songQueue.filterPlayer();
        // songQueue.removeQueueButton();
    } else if (queueLength === 1) {
        songQueue.filterPlayer();
        songQueue.removeQueueButton();
    } else {
        songQueue.filterPlayer();
        songQueue.removeQueueButton();
    }
})

testBtn.addEventListener("click", (e) => {
    e.preventDefault;
    changeSortedSongList("trkNme");
})



const createListObject = () => {

}

window.onload = () => {
    songQueue.populateSongList();
    showAlbumView();
}

