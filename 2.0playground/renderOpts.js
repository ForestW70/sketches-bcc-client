export const displaySongs = (tTitle, artist, tLen, epName, epArt, tUrl, tOgFile, tDaw, tDate, tTime, view, index="") => {
    // song Row
    const papaDiv = document.createElement("div");
    papaDiv.classList.add("song-row")
    papaDiv.dataset.title = tTitle;
    papaDiv.dataset.artist = artist;
    papaDiv.dataset.length = tLen;
    papaDiv.dataset.epName = epName;
    papaDiv.dataset.trkUrl = tUrl;
    papaDiv.dataset.ogFile = tOgFile;
    papaDiv.dataset.daw = tDaw;
    papaDiv.dataset.dCreated = tDate;
    papaDiv.dataset.tCreated = tTime;
    papaDiv.dataset.artUrl = epArt;
    papaDiv.addEventListener("click", (e) => {
        e.preventDefault();
        const search = e.currentTarget.dataset.trkUrl
        console.log(search);

        document.getElementById("player").src = `https://forestw70.github.io/sketches-bcc-client/assets/music/${search}.mp3`
    })
    // row items
    const trkNum = document.createElement("span");
    const ttlSp = document.createElement("span");
    const artistSp = document.createElement("span");
    const LenSp = document.createElement("span");
    const epSp = document.createElement("span");
    const urlSp = document.createElement("span");
    const ogSp = document.createElement("span");
    const dawSp = document.createElement("span");
    const dteSp = document.createElement("span");
    const tmeSp = document.createElement("span");
    trkNum.innerText = index;
    ttlSp.innerText = tTitle;
    artistSp.innerText = artist;
    LenSp.innerText = tLen;
    epSp.innerText = epName;
    urlSp.innerText = tUrl;
    ogSp.innerText = tOgFile;
    dawSp.innerText = tDaw;
    dteSp.innerText = tDate;
    tmeSp.innerText = tTime;

    if (view === "album") {
        papaDiv.appendChild(trkNum)
        papaDiv.appendChild(ttlSp)
        // papaDiv.appendChild(artistSp)
        papaDiv.appendChild(LenSp)
        // papaDiv.appendChild(epSp)
        papaDiv.appendChild(urlSp)
        // papaDiv.appendChild(ogSp)
        papaDiv.appendChild(dawSp)
        // papaDiv.appendChild(dteSp)
        papaDiv.appendChild(tmeSp)

        
    } else {
        papaDiv.appendChild(trkNum)
        papaDiv.appendChild(ttlSp)
        papaDiv.appendChild(artistSp)
        papaDiv.appendChild(LenSp)
        papaDiv.appendChild(epSp)
        papaDiv.appendChild(urlSp)
        papaDiv.appendChild(ogSp)
        papaDiv.appendChild(dawSp)
        papaDiv.appendChild(dteSp)
        papaDiv.appendChild(tmeSp)
    }

    return papaDiv;
}