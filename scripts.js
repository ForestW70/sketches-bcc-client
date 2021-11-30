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

const btnArry = [];

trkList.forEach(track => {
    const btn = document.createElement("button");
    btn.innerText = track;
    btn.classList.add("track-select");

    btn.addEventListener("click", () => {
        btnArry.forEach(button => button.id = "");
        btn.id = "selectedSong";
        setSelectedSong(track)
        console.log(btn.id)
    })

    btnArry.push(btn);
    trackListContainer.appendChild(btn);
    // console.log(btnArry)
})