console.log('wddup');

const nowPlaying = document.getElementById("nowPlaying");
const trackListContainer = document.getElementById("trackList");

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

const bcc = [
    {
        trkNum: 1,
        title: "Hotmess",
        src: "./music/A1"
    }
]

trkList.forEach(track => {
    const btn = document.createElement("button");
    btn.innerText = track;
    btn.classList.add("track-select");
    btn.addEventListener("click", () => {
        console.log(track)
    })
    trackListContainer.appendChild(btn);
})