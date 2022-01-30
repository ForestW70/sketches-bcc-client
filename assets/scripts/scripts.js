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
                fileName: 'pilot',
                daw: 'LogicX',
                date: "06-25-17",
                started: '11:35 PM',
            },
            {
                track: '5d',
                length: '3:01',
                url: '5d',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Sticky Hold',
                length: '1:27',
                url: 'sticky-hold',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Probably Wrong',
                length: '3:16',
                url: 'probably-wrong',
                fileName: 'smoov',
                daw: 'LogicX',
                date: '06-08-17',
                started: '2:46 AM',
            },
            {
                track: 'Stargate',
                length: '1:13',
                url: 'stargate',
                fileName: 'stargate',
                daw: 'LogicX',
                date: '--',
                started: '1:21 AM',
            },
            {
                track: 'Rap (1896 mix)',
                length: '0:56',
                url: 'rap-1896',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Dare 2 Bare',
                length: '2:53',
                url: 'dare-2-bare',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
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
                fileName: 'bellbottomchords',
                daw: 'LogicX',
                date: '06-17-17',
                started: '8:13 PM',
            },
            {
                track: 'Sweet Dreams',
                length: '2:35',
                url: 'sweet-dreams',
                fileName: 'sleep dreams',
                daw: 'LogicX',
                date: '05-15-18',
                started: '8:45 PM',
            },
            {
                track: 'Doogood',
                length: '1:32',
                url: 'dogood',
                fileName: 'dogood',
                daw: 'LogicX',
                date: '08-07-18',
                started: '10:31 PM',
            },
            {
                track: 'Exploitable Resources',
                length: '1:24',
                url: 'resources',
                fileName: 'dougle',
                daw: 'LogicX',
                date: '10-06-18',
                started: '11:00 PM',
            },
            {
                track: 'Looking at a Screen',
                length: '2:57',
                url: 'looking-at-a-screen',
                fileName: 'poppinggm',
                daw: 'LogicX',
                date: '08-12-17',
                started: '11:16 PM',
            },
            {
                track: 'Gimp',
                length: '2:31',
                url: 'gimp',
                fileName: 'future stranger',
                daw: 'LogicX',
                date: '10-09-18',
                started: '11:44 PM',
            },
            {
                track: 'It Is Forever',
                length: '?:??',
                url: 'it-is-forever',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',

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
                track: 'Amanda Morph (gettin late)',
                length: '1:46',
                url: 'amanda-morph',
                fileName: 'bellbottomchords',
                daw: 'LogicX',
                date: '06-17-17',
                started: '8:13 PM',
            },
            {
                track: 'Sara / Tonin',
                length: '2:22',
                url: 'sara-tonin',
                fileName: 'rottunspahetti',
                daw: 'LogicX',
                date: '08-11-17',
                started: '12:03 AM',
            },
            {
                track: 'Bailey melody 07',
                length: "0:59",
                url: 'bailey-melody',
                fileName: 'bounce12telly',
                daw: 'LogicX',
                date: '09-25-17',
                started: '12:08 AM',
            },
            {
                track: 'Oh techre!',
                length: "2:09",
                url: 'oh-techre',
                fileName: 'techre',
                daw: 'LogicX',
                date: '06-21-17',
                started: '12:42 AM',
            },
            {
                track: 'Go to feather',
                length: "1:28",
                url: 'go2feather',
                fileName: 'skumf*ck',
                daw: 'LogicX',
                date: '07-27-17',
                started: '1:42 AM',
            },
            {
                track: '(I am aware of the) black box',
                length: "1:50",
                url: 'black-box',
                fileName: 'satch',
                daw: 'LogicX',
                date: '10-05-17',
                started: '2:50 AM',
            },
            {
                track: '1800harp',
                length: "2:55",
                url: '1800harp',
                fileName: '1800harp',
                daw: 'LogicX',
                date: '04-16-17',
                started: '3:17 PM',
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
                fileName: 'cycle psycho',
                daw: 'LogicX',
                date: '06-02-18',
                started: '4:15 PM',
            },
            {
                track: 'Hello grommet',
                length: "3:10",
                url: 'hello-grommet',
                fileName: 'project99',
                daw: 'LogicX',
                date: '06-27-17',
                started: '4:38 PM',
            },
            {
                track: 'Live from the polls',
                length: "1:08",
                url: 'polls',
                fileName: 'flowyhits',
                daw: 'LogicX',
                date: '06-19-17',
                started: '4:44 PM',
            },
            {
                track: 'Case of the cookies',
                length: "1:45",
                url: 'cookies',
                fileName: 'apple tree',
                daw: 'LogicX',
                date: '01-10-18',
                started: '4:57 PM',
            },
            {
                track: 'Is it forever?',
                length: "2:24",
                url: 'is-it-forever',
                fileName: 'flips',
                daw: 'LogicX',
                date: '09-13-17',
                started: '5:02 PM',
            },
            {
                track: 'BBBB',
                length: "1:43",
                url: 'bbbb',
                fileName: 'wipsmalbas',
                daw: 'LogicX',
                date: '06-25-17',
                started: '5:56 PM',
            },
            {
                track: 'Silly Singing silicon',
                length: "2:35",
                url: 'silly-singing',
                fileName: 'flunk',
                daw: 'LogicX',
                date: '08-28-18',
                started: '6:22 PM',
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
                fileName: 'dr insta',
                daw: 'FLstudio',
                date: '05-04-19',
                started: '4:36 PM',
            },
            {
                track: 'Barrixtown',
                length: "1:10",
                url: 'barrixtown',
                fileName: 'BONKUS',
                daw: 'FLstudio',
                date: '08-05-19',
                started: '12:43 PM',
            },
            {
                track: 'Childs Loop',
                length: "1:48",
                url: 'childs-loop',
                fileName: 'dingus',
                daw: 'FLstudio',
                date: '10-11-18',
                started: '5:29 PM',
            },
            {
                track: 'Chix Loop',
                length: "2:00",
                url: 'chix',
                fileName: 'chix',
                daw: 'FLstudio',
                date: '05-17-19',
                started: '11:12 PM',
            },
            {
                track: 'Cleverly',
                length: "1:43",
                url: 'clever',
                fileName: 'clever',
                daw: 'FLstudio',
                date: '11-10-18',
                started: '5:29 PM',
            },
            {
                track: 'Crystal Envelope / Return2sender',
                length: "4:14",
                url: 'crystal-env',
                fileName: 'dueling pianos',
                daw: 'FLstudio',
                date: '05-05-19',
                started: '5:50 PM',
            },
            {
                track: 'FL Disaster Zone',
                length: "1:53",
                url: 'fl-disaster',
                fileName: 'cut90butwe',
                daw: 'FLstudio',
                date: '10-02-18',
                started: '1:25 PM',
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
                fileName: 'creating space',
                daw: 'FLstudio',
                date: '04-13-19',
                started: '10:57 AM',
            },
            {
                track: 'Let It Fly',
                length: "1:47",
                url: 'let-it-fly',
                fileName: 'destroying space',
                daw: 'FLstudio',
                date: '04-20-19',
                started: '10:04 AM',
            },
            {
                track: 'Liptstick Halo',
                length: "1:31",
                url: 'liptstick-halo',
                fileName: 'bop',
                daw: 'FLstudio',
                date: '07-28-18',
                started: '10:32 AM',
            },
            {
                track: 'Parks',
                length: "0:20",
                url: 'parks',
                fileName: 'parks',
                daw: 'FLstudio',
                date: '04-18-19',
                started: '1:43 PM',
            },
            {
                track: 'Playing With My Hair',
                length: "1:27",
                url: 'playing-w-my-hair',
                fileName: 'clair',
                daw: 'FLstudio',
                date: '04-13-19',
                started: '9:32 PM',
            },
            {
                track: 'Rust In Peace',
                length: "1:43",
                url: 'rust-in-peace',
                fileName: 'disgus rstie',
                daw: 'FLstudio',
                date: '09-28-18',
                started: '8:12 PM',
            },
            {
                track: 'Woodshed',
                length: "0:52",
                url: 'woodshed',
                fileName: 'broot',
                daw: 'FLstudio',
                date: '05-07-18',
                started: '2:44 PM',
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
                length: '1:00',
                url: '404',
                fileName: 'hat slide shift',
                daw: 'FLstudio',
                date: '08-24-18',
                started: '9:20 PM',
            },
            {
                track: 'Bubble Boy',
                length: '1:54',
                url: 'bubble-boy',
                fileName: 'saw distort',
                daw: 'FLstudio',
                date: '07-05-18',
                started: '1:48 PM',
            },
            {
                track: 'Flawz',
                length: '2:40',
                url: 'flawz',
                fileName: 'flaws',
                daw: 'FLstudio',
                date: '04-02-19',
                started: '3:30PM',
            },
            {
                track: 'Gabby',
                length: '0:40',
                url: 'gabby',
                fileName: 'gabby',
                daw: 'FLstudio',
                date: '03-13-19',
                started: '5:06 PM',
            },
            {
                track: 'Midi Compactor',
                length: '1:19',
                url: 'midi-compactor',
                fileName: 'empty',
                daw: 'FLstudio',
                date: '07-17-19',
                started: '5:27 PM',
            },
            {
                track: 'Purple!',
                length: '0:45',
                url: 'purple',
                fileName: 'hot spooky mess',
                daw: 'FLstudio',
                date: '05-31-19',
                started: '11:54 PM',
            },
            {
                track: 'Rip Loop',
                length: '3:43',
                url: 'rip-arp',
                fileName: 'protofunk',
                daw: 'FLstudio',
                date: '07-02-19',
                started: '1:00 PM',
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
                length: '1:46',
                url: 'rogue-on-1-1',
                fileName: 'jumbles',
                daw: 'FLstudio',
                date: '05-03-19',
                started: '5:12 PM',
            },
            {
                track: 'Sea of Drones',
                length: '3:34',
                url: 'sea-of-drones',
                fileName: 'sea of drones',
                daw: 'FLstudio',
                date: '06-25-19',
                started: '10:42 PM',
            },
            {
                track: 'Sine Language',
                length: '1:42',
                url: 'sine-lang',
                fileName: 'drane',
                daw: 'FLstudio',
                date: '10-26-18',
                started: '10:22 PM',
            },
            {
                track: 'SSX Loop',
                length: '1:08',
                url: 'ssx-loop',
                fileName: 'return',
                daw: 'FLstudio',
                date: '09-22-18',
                started: '5:24 PM',
            },
            {
                track: 'The Drs In.',
                length: '1:18',
                url: 'the-doctors-in',
                fileName: 'immortal sounds',
                daw: 'FLstudio',
                date: '05-10-19',
                started: '3:28 PM',
            },
            {
                track: 'girard (noisey)',
                length: '4:47',
                url: 'girard-noisy',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
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
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Atmosphere (interlude)',
                length: '0:35',
                url: 'bcc-atmosphere',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Amanda',
                length: '1:47',
                url: 'bcc-amanda',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Dare2Bare',
                length: '2:35',
                url: 'bcc-dare2bare',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Quarantine (but its ok)',
                length: '3:01',
                url: 'bcc-quarantine',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Stickyhold',
                length: '1:27',
                url: 'bcc-stickyhold',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Stargate (reprise)',
                length: '1:26',
                url: 'bcc-stargate',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Rap',
                length: '0:54',
                url: 'bcc-rap',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: '27th&girard',
                length: '4:18',
                url: 'bcc-girard',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Almostinato',
                length: '2:34',
                url: 'bcc-it-is-forever',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: '5d',
                length: '2:08',
                url: 'bcc-5d',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Probably Wrong',
                length: '2:58',
                url: 'bcc-probably',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'S. Balachander (broken from the beginning mix)',
                length: '4:59',
                url: 'bcc-sbala',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Boc (interlude)',
                length: '1:22',
                url: 'bcc-boc',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Toothpicks',
                length: '2:31',
                url: 'bcc-toothpicks',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Pilotdrone',
                length: '2:27',
                url: 'bcc-pilotdrone',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
            },
            {
                track: 'Faultline',
                length: '4:54',
                url: 'bcc-faultline',
                fileName: '--',
                daw: '--',
                date: '--',
                started: '--',
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
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },
            {
                track: 'Tsalal',
                length: "1:50",
                url: 'tsalal',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },
            {
                track: 'Anxious...',
                length: "4:35",
                url: 'anxious-oblast',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },
            {
                track: 'Knavish Drone (cut)',
                length: "16:07",
                url: 'knavish-drone',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
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
                fileName: '--',
                daw: 'GB/TAS',
                date: '--',
                started: '--',
            },
            {
                track: 'On Line1',
                length: '14:19',
                url: 'on-line1',
                fileName: '--',
                daw: 'GB/TAS',
                date: '--',
                started: '--',
            },
            {
                track: 'On Line2',
                length: '6:13',
                url: 'on-line2',
                fileName: '--',
                daw: 'GB/TAS',
                date: '--',
                started: '--',
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
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },
            {
                track: 'HM/FL (demo)',
                length: "7:57",
                url: 'hmfl-demo',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },
            {
                track: 'Boiler Room',
                length: "1:43",
                url: 'boiler-room',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },
            {
                track: 'Chiminy Harker',
                length: "0:43",
                url: 'chiminy',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
            },

            {
                track: 'HM/FL (survivor)',
                length: '7:57',
                url: 'hmfl(survivor)',
                fileName: '--',
                daw: 'FLstudio',
                date: '--',
                started: '--',
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
const qToolCont = document.getElementById("qTools")
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
            songTitle: el.title,
            songLength: el.length,
            songEp: el.ep,
            songArtist: el.artist,
            songUrl: el.url,
            songArt: el.art,
        }



        return this.activeQueue.push(item)



        // if (this.activeQueue.length === 0) {
        //     this.activeQueue.push(item);
        //     this.filterPlayer();
        //     return;
        // } else {
        //     this.activeQueue.push(item);
        //     return;
        // }

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
        let wiper = this.activeQueue[0]
        if (this.activeQueue.length >= 2) {
            wiper = this.activeQueue[1]
        }
        console.log(wiper);
        const songHome = `https://forestw70.github.io/sketches-bcc-client/assets/music/${wiper.songUrl}.mp3`
        const newTitle = `${wiper.songArtist} ~ ${wiper.songUrl}`

        clearPlayer();
        // clear page title and replace with song info
        document.title = newTitle;
        headSwap.innerText = wiper.songArtist + " " + wiper.songUrl + ".mp3 '" + wiper.songTitle + "' " + wiper.songEp + " " + wiper.songLength;
        currArtistName.innerText = wiper.songArtist;
        currTrackName.innerText = wiper.songTitle;
        currAlbumName.innerText = `"${wiper.songEp}"`;
        currAlbumPic.src = wiper.songArt;
        audioPlayer.src = songHome;
        return console.log("Next track loaded!");

    }
}
const songQueue = new SongQueue();

// class to control individual song actions 
// (artist, title, ep, art, url, length, released, artistlong, ogFileName, dawUsed, dateCreated, timeCreated)
function Song(artist, title, ep, art, url, length, released, long, ogFile, daw, startDate, startTime) {
    this.artist = artist;
    this.artistLong = long;
    this.title = title;
    this.ep = ep;
    this.art = art;
    this.url = url;
    this.length = length;
    this.released = released;
    this.ogFile = ogFile;
    this.daw = daw;
    this.startDate = startDate;
    this.startTime = startTime;

    this.createListSongRow = (trackNum) => {
        const trackNumber = document.createElement("span");
        const trackName = document.createElement('span');
        const trackLength = document.createElement('span');
        const albumTitle = document.createElement('span');
        const trackArtist = document.createElement('span');
        const trackUrl = document.createElement('span');
        const trackOgFile = document.createElement('span');
        const trackDate = document.createElement('span');
        const trackTimeStamp = document.createElement('span');
        //
        trackNumber.innerText = trackNum;
        trackName.innerText = this.title;
        trackLength.innerText = this.length
        albumTitle.innerText = this.ep;
        trackArtist.innerText = this.artist;
        trackUrl.innerText = this.url;
        trackOgFile.innerText = this.ogFile;
        trackDate.innerText = this.startDate;
        trackTimeStamp.innerText = this.startTime;
        //
        const trackRow = document.createElement("button");
        trackRow.type = "button";
        trackRow.classList.add('song-list-row');
        trackRow.dataset.songId = this.title + '~' + this.ep;
        trackRow.dataset.albumurl = this.art;
        trackRow.dataset.title = this.title;
        trackRow.dataset.length = this.length;
        trackRow.dataset.epname = this.ep;
        trackRow.dataset.artist = this.artist;
        trackRow.dataset.url = this.url;
        trackRow.dataset.ogFile = this.ogFile;
        trackRow.dataset.dCreated = this.startDate;
        trackRow.dataset.tCreated = this.startTime;
        trackRow.addEventListener("click", handleTrackSelect);
        //
        trackRow.appendChild(trackNumber);
        trackRow.appendChild(trackName);
        trackRow.appendChild(trackLength);
        trackRow.appendChild(albumTitle);
        trackRow.appendChild(trackArtist);
        trackRow.appendChild(trackUrl);
        trackRow.appendChild(trackOgFile);
        trackRow.appendChild(trackDate);
        trackRow.appendChild(trackTimeStamp);
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
const topOfPageBtn = document.getElementById("returnToTop")
topOfPageBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = () => { 
    scrollFunction(); 
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topOfPageBtn.style.display = "flex";
    } else {
        topOfPageBtn.style.display = "none";
    }
}

//  QUEUE CONTROLS
// 


const handleTrackSelect = async (e) => {
    e.preventDefault;
    const lookObj = {
        title: e.currentTarget.dataset.title,
        length: e.currentTarget.dataset.length,
        ep: e.currentTarget.dataset.epname,
        artist: e.currentTarget.dataset.artist,
        url: e.currentTarget.dataset.url,
        art: e.currentTarget.dataset.albumurl,
    }
    // const lookingFor = e.currentTarget.dataset.url + ' ' + e.currentTarget.dataset.epname + ' ' + e.currentTarget.dataset.albumurl;
    const currQueueTime = songQueue.grabLength();
    if (currQueueTime === 0) {
        await songQueue.add2queue(lookObj)
        console.log(songQueue.grabNext())
        songQueue.filterPlayer();
    } else {
        await songQueue.add2queue(lookObj)
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
        const albumSong = new Song(
            albumInfo.artist,
            idvTrack.track,
            albumInfo.title,
            albumInfo.webLink,
            idvTrack.url,
            idvTrack.length,
            albumInfo.releaseDate,
            albumInfo.artistLong,
            idvTrack.fileName,
            idvTrack.daw,
            idvTrack.date,
            idvTrack.started
        );
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
        let track = new Song(
            song.artist,
            song.title,
            song.ep,
            song.artLink,
            song.url,
            song.length,
            song.releaseDate,
            song.artistLong,
            song.ogFileName,
            song.dawUsed,
            song.dateCreated,
            song.timeCreated
        )
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

    const lengthSpan = document.createElement("span");
    lengthSpan.dataset.sortBy = "trkLen";
    lengthSpan.innerText = "Length";

    const epSpan = document.createElement("span");
    epSpan.dataset.sortBy = "epTtl";
    epSpan.innerText = "Ep Title";

    const artistSpan = document.createElement("span");
    artistSpan.dataset.sortBy = "artist";
    artistSpan.innerText = "Artist";

    const urlSpan = document.createElement("span");
    urlSpan.dataset.sortBy = "trkUrl";
    urlSpan.innerText = "Track Path";

    const fileSpan = document.createElement("span");
    fileSpan.dataset.sortBy = "trkOg";
    fileSpan.innerText = "File Name";

    const dateSpan = document.createElement("span");
    dateSpan.dataset.sortBy = "trkDte";
    dateSpan.innerText = "Date";

    const timeStamp = document.createElement("span");
    timeStamp.dataset.sortBy = "trkTs";
    timeStamp.innerText = "Timestamp";

    headerDiv.appendChild(numberSpan);
    headerDiv.appendChild(titleSpan);
    headerDiv.appendChild(lengthSpan);
    headerDiv.appendChild(epSpan);
    headerDiv.appendChild(artistSpan);
    headerDiv.appendChild(urlSpan);
    headerDiv.appendChild(fileSpan);
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(timeStamp);


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
                releaseDate: album.releaseDate,
                ogFileName: song.fileName,
                dawUsed: song.daw,
                dateCreated: song.date,
                timeCreated: song.started,
            }
            sorted.push(listItem)
            songId++
        })
    })
    return sorted;
}


// SONG VIEW SORT
// 
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

        case "trkLen":
            console.log("sorting by track length..")
            newSort = currentSort.sort((a, b) => {
                const doTimeMath = (time) => {
                    if (time === '--') return 0;

                    const minSec = time.split(":")
                    const totalSecs = new Number((minSec[0] * 60) + minSec[1])
                    return totalSecs;
                }
                let el1 = doTimeMath(a.length);
                let el2 = doTimeMath(b.length);
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
            break;

        case "trkOg":
            console.log("sorting by file name..")
            newSort = currentSort.sort((a, b) => {
                if (a.fileName === "--" || b.fileName === "--") return 1;

                let el1 = a.ogFileName.toUpperCase();
                let el2 = b.ogFileName.toUpperCase();
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

        case "trkDte":
            console.log("sorting by date created..")
            newSort = currentSort.sort((a, b) => {
                const findDate = (date) => {
                    if (date === '--') return 1;

                    const els = date.split("-");
                    const utcDate = new Date(Date.UTC(els[2], els[0] - 1, els[1]))
                    return utcDate.getTime() / 1000;
                }
                let el1 = findDate(a.dateCreated);
                let el2 = findDate(b.dateCreated);
                return el1 - el2;

                // if (el1 > el2) {
                //     return 1
                // }
                // if (el1 < el2) {
                //     return -1
                // }
                // return 0;
            })
            break;

        case "trkTs":
            console.log("sorting by timestamp..")
            newSort = currentSort.sort((a, b) => {

                const doMath = (time) => {
                    if (time === '--') return 1;

                    const timeSplit = time.split(":")
                    let mins = timeSplit[0];
                    let secs = timeSplit[1].split(' ')[0]
                    const ampm = timeSplit[1].split(' ')[1]
                    if (ampm === "PM") {
                        console.log(time);
                        mins = mins + 12
                    }
                    const totalSecs = new Number((mins * 60) + secs)
                    return totalSecs;
                }
                let el1 = doMath(a.timeCreated);
                let el2 = doMath(b.timeCreated);
                return el1 - el2;

                // if (el1 > el2) {
                //     return 1
                // }
                // if (el1 < el2) {
                //     return -1
                // }
                // return 0;
            })
            break;
        default:
            console.log("whoops")
    }

    songQueue.changeSongList(newSort);

}

// create experimental options buttons
let autoPlayOn = false;
const autoPlayButton = document.getElementById("autoPlayOption")
autoPlayButton.addEventListener("click", (e) => {
    e.preventDefault;
    if (!autoPlayOn) {
        autoPlayButton.innerText = "~epirimental~ autoplay -- OFF -- Turn on?"
        autoPlayButton.classList.toggle("opt-on")
        autoPlayOn = true;
        return;
    }
    autoPlayOn = false;
    autoPlayButton.innerText = "~epirimental~ autoplay -- ON -- Turn off?"
    autoPlayButton.classList.toggle("opt-on")
})


audioPlayer.addEventListener("ended", () => {
    if (!autoPlayOn) {
        console.log("auto play is not on.")
        return;
    }
    const qtime = songQueue.grabLength()
    console.log(qtime)
    if (qtime > 1) {
        songQueue.filterPlayer();
        songQueue.removeFromQueue();
        songQueue.removeQueueButton();
        audioPlayer.play();
    } else if (qtime <= 1) {
        console.log('no more items in queue.')
    }
})


// Buttons
const toggleQueue = document.getElementById("toggleShowQueue")
const albumViewBtn = document.getElementById("viewAlbums")
const songViewBtn = document.getElementById("viewSongs")
const nextTrackBtn = document.getElementById("nextTrack")
const playButton = document.getElementById("pause-play")
const icon = document.getElementById("pp")
const queueicon = document.getElementById("sq")

// change views
toggleQueue.addEventListener("click", () => {
    if (!queueListDump.classList.contains("menu-hide")) {

        queueicon.classList.remove("glyphicon-menu-right")
        queueicon.classList.add("glyphicon-menu-down")
        queueListDump.classList.toggle('menu-hide')

    } else {

        queueListDump.classList.toggle('menu-hide')
        queueicon.classList.remove("glyphicon-menu-down")
        queueicon.classList.add("glyphicon-menu-right")
    }
    // queueListDump.classList.toggle('menu-hide')
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

    const queueLength = songQueue.grabLength();
    icon.classList.remove("glyphicon-pause");
    icon.classList.add("glyphicon-play");
    console.log(`You have ${queueLength - 0} items left in your queue!`);
    if (queueLength <= 1) {
        // songQueue.filterPlayer();
        clearPlayer();
        console.log("nothing queued!")
        // songQueue.removeQueueButton();
    } else {
        songQueue.filterPlayer();
        songQueue.removeFromQueue();
        songQueue.removeQueueButton();
    }
})

// testBtn.addEventListener("click", (e) => {
//     e.preventDefault;
//     changeSortedSongList("trkNme");
// })



window.onload = () => {
    // renderOptions();
    songQueue.populateSongList();
    showAlbumView();
}

