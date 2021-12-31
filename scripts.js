
const sketches = [
    {
        title: 'Sketches & Other Failures Vol. 1',
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
        title: 'Sketches & Other Failures II',
        artLink: 'https://picsum.photos/199',
        trackList: [
            {
                track: 'Amanda Morph',
                length: '',
                url: '/music/',
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
        title: 'Sketches & Other Failures Part 3',
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
    {
        title: 'Sketches & Other Failures Chap. 4',
        artLink: 'https://picsum.photos/200/199',
        trackList: [
            {
                track: 'Amanda Alarm (wake up hunny)',
                length: '',
                url: '',
            },
            {
                track: 'Sweet Dreams',
                length: '',
                url: '',
            },
            {
                track: 'Doogood',
                length: '',
                url: '',
            },
            {
                track: 'Exploitable Resources',
                length: '',
                url: '',
            },
            {
                track: 'Looking at a Screen',
                length: '',
                url: '',
            },
            {
                track: 'Gimp',
                length: '',
                url: '',
            },
            {
                track: 'It Is Forever',
                length: '',
                url: '',
            },
        ]
    },
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
    {
        title: 'sketches bcc',
        artLink: 'https://picsum.photos/197',
        trackList: [
            {
                track: 'Hotmess',
                length: '3:04',
                url: '',
            },
            {
                track: 'Atmosphere (interlude)',
                length: '0:35',
                url: '',
            },
            {
                track: 'Amanda',
                length: '1:47',
                url: '',
            },
            {
                track: 'Dare2Bare',
                length: '2:35',
                url: '',
            },
            {
                track: 'Quarantine (but its ok)',
                length: '3:01',
                url: '',
            },
            {
                track: 'Stickyhold',
                length: '1:27',
                url: '',
            },
            {
                track: 'Stargate (reprise)',
                length: '1:26',
                url: '',
            },
            {
                track: 'Rap',
                length: '0:54',
                url: '',
            },
            {
                track: '27th&girard',
                length: '4:18',
                url: '',
            },
            {
                track: 'Almostinato',
                length: '2:34',
                url: '',
            },
            {
                track: '5d',
                length: '2:08',
                url: '',
            },
            {
                track: 'Probably Wrong',
                length: '2:58',
                url: '',
            },
            {
                track: 'S. Balachander (broken from the beginning mix)',
                length: '4:59',
                url: '',
            },
            {
                track: 'Boc (interlude)',
                length: '1:22',
                url: '',
            },
            {
                track: 'Toothpicks',
                length: '2:31',
                url: '',
            },
            {
                track: 'Pilotdrone',
                length: '2:27',
                url: '',
            },
            {
                track: 'Faultline',
                length: '4:54',
                url: '',
            },
        ]
    },
]

const nowPlaying = document.getElementById("nowPlaying");
const discoContainer = document.getElementById("disco");


const handleTrackSelect = (e) => {
    // track info
    nowPlaying.innerHTML = ""
    const dispTrack = document.createElement("h2");
    const target = e.currentTarget;
    const onNow = target.querySelector(".album-track");
    dispTrack.innerText = onNow.innerText;
    nowPlaying.appendChild(dispTrack);

    // load music

}


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

        albumTitle.innerText = album.title;
        albumArt.src = album.artLink;

        album.trackList.map((idvTrack, idx) => {
            // set up track info
            const trackRow = document.createElement("div")
            const tTitle = document.createElement("span");
            const tTime = document.createElement("span");
            const tNum = document.createElement("span");

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

mapThruAlbums();


