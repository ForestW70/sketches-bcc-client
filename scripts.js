console.log('wddup');

const nowPlaying = document.getElementById("nowPlaying");
const trackListContainer = document.getElementById("trackList");
const allSongsBtns = document.getElementsByClassName("track-select");

const trkList = [
    "Hotmess",
    "Quarantine (but it's ok)",
    "Amanda",
    "Atmosphere Interlude",
    "Stickyhold",
    "Stargate (reprise)",
    "Rap",
    "Dare2bare",
    "Almostinato",
    "27th&girard",
    "5d",
    "Probably Wrong",
    "Dr. Balachander",
    "Boc Interlude",
    "Toothpicks",
    "Pilotdrone",
    "Faultline"
];

const sketches = [
    {
        title: 'sketches1',
        artLink: 'https://picsum.photos/200',
        trackList: [
            {
                track: 'Quarantine (but its ok)',
                length: '2:56',
                url: '/music/quarantine.mp3',
            },
            {
                track: '5d',
                length: '3:01',
                url: '/music/5d.mp3',
            },
            {
                track: 'Sticky Hold',
                length: '1:27',
                url: '/music/stickyhold.mp3',
            },
            {
                track: 'Probably Wrong',
                length: '3:16',
                url: '/music/probablywrong.mp3',
            },
            {
                track: 'Stargate',
                length: '?:??',
                url: '/music/stargateog.mp3',
            },
            {
                track: 'Rap (1896 mix)',
                length: '0:56',
                url: '/music/rap1896.mp3',
            },
            {
                track: 'Dare 2 Bare',
                length: '2:53',
                url: '/music/dare2bare.mp3',
            },

        ]
    },
    {
        title: 'sketches2',
        artLink: 'https://picsum.photos/199',
        trackList: [
            {
                track: 'Amanda Morph',
                length: '',
                url: '',
            },
            {
                track: 'Sara Tonin',
                length: '',
                url: '',
            },
            {
                track: 'Bailey melody 07',
                length: '',
                url: '',
            },
            {
                track: 'Oh techre!',
                length: '',
                url: '',
            },
            {
                track: 'Go to feather',
                length: '',
                url: '',
            },
            {
                track: '(I am aware of the) black box',
                length: '',
                url: '',
            },
            {
                track: '1800harp',
                length: '',
                url: '',
            },
        ]
    },
    {
        title: 'sketches3',
        artLink: 'https://picsum.photos/198',
        trackList: [
            {
                track: 'Froggy',
                length: '',
                url: '',
            },
            {
                track: 'Hello grommet',
                length: '',
                url: '',
            },
            {
                track: 'Live from the polls',
                length: '',
                url: '',
            },
            {
                track: 'Case of the cookies',
                length: '',
                url: '',
            },
            {
                track: 'Is it forever?',
                length: '',
                url: '',
            },
            {
                track: 'BBBB',
                length: '',
                url: '',
            },
            {
                track: 'Silly Singing silicon',
                length: '',
                url: '',
            },
        ]
    },
    // {
    //     title: 'sketches4',
    //     artLink: 'https://picsum.photos/200',
    //     trackList: [
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //     ]
    // },
    // {
    //     title: 'sketches5',
    //     artLink: 'https://picsum.photos/200',
    //     trackList: [
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //         {
    //             track: '',
    //             length: '',
    //             url: '',
    //         },
    //     ]
    // },
]



const bcc = {
    1: {
        title: "Hotmess",
        src: "./music/A1"
    },
    2: {
        title: "Quarantine (but it's ok)",
        src: "./music/A1"
    },
    3: {
        title: "Amanda",
        src: "./music/A1"
    },
    4: {
        title: "Atmosphere Interlude",
        src: "./music/A1"
    },
    5: {
        title: "Stickyhold",
        src: "./music/A1"
    },
    6: {
        title: "Stargate (reprise)",
        src: "./music/A1"
    },
    7: {
        title: "Rap",
        src: "./music/A1"
    },
    8: {
        title: "Dare2bare",
        src: "./music/A1"
    },
    9: {
        title: "Almostinato",
        src: "./music/A1"
    },
    10: {
        title: "27th&girard",
        src: "./music/A1"
    },
    11: {
        title: "5d",
        src: "./music/A1"
    },
    12: {
        title: "Probably wrong",
        src: "./music/A1"
    },
    13: {
        title: "Dr. Balachander",
        src: "./music/A1"
    },
    14: {
        title: "Boc Interlude",
        src: "./music/A1"
    },
    15: {
        title: "Toothpicks",
        src: "./music/A1"
    },
    16: {
        title: "Pilotdrone",
        src: "./music/A1"
    },
    17: {
        title: "Faultline",
        src: "./music/A1"
    }
}

const setSelectedSong = (tracktitle) => {
    nowPlaying.innerText = tracktitle
}

const discoButtons = [];

sketches.map(album => {
    const albumDiv = document.createElement("div");
    const trackCont = document.createElement("div");
    const timeCont = document.createElement("div");
    const titleSpan = document.createElement("span");
    const albumArt = document.createElement("img");

    albumDiv.classList.add("disco-item");

    album.trackList.map(singleTrack => {
        const tTitle = document.createElement("span");
        const tTime = document.createElement("span");
        tTitle.innerText = singleTrack.track;
        tTime.innerText = singleTrack.length;
        tTitle.classList.add("album-track");
        tTime.classList.add("track-time");
        trackCont.appendChild(tTitle);
        timeCont.appendChild(tTime);
    })


    titleSpan.innerText = album.title;
    albumArt.src = album.artLink;


    albumDiv.appendChild(albumArt)
    albumDiv.appendChild(titleSpan);
    albumDiv.appendChild(timeCont)
    albumDiv.appendChild(trackCont)
    document.getElementById("disco").appendChild(albumDiv);

})

const btnArry = [];

trkList.forEach(track => {
    const btn = document.createElement("button");
    btn.innerText = track;
    // btn.classList.add("track-select");

    btn.addEventListener("click", () => {
        btnArry.forEach(button => button.id = "");
        btn.id = "selectedSong";
        setSelectedSong(track)
        console.log(btn.id)
    })

    btnArry.push(btn);
    // trackListContainer.appendChild(btn);
    // console.log(btnArry)
})