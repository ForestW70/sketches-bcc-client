console.log("ready")

const tracks = [
    {
        title: "track 1",
        ref: "./music/01.mp3",
        desc: "This one about bees"
    },
    {
        title: "track 2",
        ref: "./music/02.mp3",
        desc: "This one about trees"
    },
    {
        title: "track 3",
        ref: "./music/03.mp3",
        desc: "This one about fleas"
    },
    {
        title: "track 4",
        ref: "./music/04.mp3",
        desc: "This one about Levi Jeans"
    }
]

const title = document.getElementById("trackTitle");
const file = document.getElementById("songFile");
const description = document.getElementById("trackDesc");
const trackNum = document.getElementById("trackNum");
const nextBtn = document.getElementById("nextPage");

let currTrack;

// console.log(tracks[0].ref);

const setInitial = () => {
    currTrack = 0;
    trackNum.innerText = currTrack;
    title.innerText = tracks[currTrack].title;
    // file.src = tracks[currTrack].ref;
    description.innerText = tracks[currTrack].desc;
}

setInitial();

// function changePage(){
    
// }

nextBtn.addEventListener("click", () => {
    currTrack = currTrack + 1;
    trackNum.innerText = currTrack;
    title.innerText = tracks[currTrack].title;
    file.src = tracks[currTrack].ref;
    description.innerText = tracks[currTrack].desc;
    console.log("switched")
});