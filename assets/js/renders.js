export const createQueueButton = (el) => {
    const qId = el.url + " " + el.ep
    const qButton = document.createElement("button");
    // qButton.addEventListener("click", handleQClick);
    qButton.classList.add("q-btn");
    qButton.type = "button"
    qButton.innerText = `${el.url} ~ ${el.ep}`;
    qButton.id = qId;

    return qButton;
}

export const buildAlbumTemplate = (album) => {
    const infoFrag = document.createDocumentFragment();
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const albumTitle = document.createElement("h3");
    const albumArtist = document.createElement("h2");
    const albumRelease = document.createElement("p");
    const albumArt = document.createElement("img");

    albumTitle.innerText = `"${album.title}"`;
    albumArtist.innerText = album.artist;
    albumRelease.innerText = album.releaseDate;

    // const artHome = `https://forestw70.github.io/sketches-bcc-client/assets/images/${album.artLink}`
    albumArt.src = `https://forestw70.github.io/sketches-bcc-client/assets/images/${album.artLink}`;

    infoFrag.appendChild(albumArt)
    infoFrag.appendChild(albumArtist)
    infoFrag.appendChild(albumTitle)
    infoFrag.appendChild(albumRelease)
    return infoFrag;
}

// takes in single song object
export const buildAlbumView = (sketch) => {
    const trackRow = document.createElement("button");
    trackRow.type = "button";
    trackRow.classList.add("t-row");
    trackRow.dataset.url = sketch.url;
    trackRow.dataset.length = sketch.length;
    trackRow.dataset.epname = sketch.ep;
    // trackRow.dataset.albumurl = sketch.art;
    trackRow.dataset.artLink = sketch.artLink;
    trackRow.dataset.artist = sketch.artist;
    trackRow.dataset.title = sketch.title;
    // trackRow.addEventListener("click", handleTrackSelect);
    //
    const tTitle = document.createElement("span");
    const tTime = document.createElement("span");
    const tNum = document.createElement("span");
    tTitle.classList.add("album-track");
    tTime.classList.add("track-time");
    tNum.classList.add("track-num");
    tTitle.innerText = sketch.title;
    tTime.innerText = sketch.length;
    tNum.innerText = sketch.trackNum;
    //
    const rowFrag = document.createDocumentFragment()
    rowFrag.appendChild(tNum);
    rowFrag.appendChild(tTitle);
    rowFrag.appendChild(tTime);
    trackRow.appendChild(rowFrag);
    return trackRow;
}

export const buildSongView = (songRow) => {
    const trackNumber = document.createElement("span");
    const trackName = document.createElement("span");
    const trackLength = document.createElement("span");
    const albumTitle = document.createElement("span");
    const trackArtist = document.createElement("span");
    const trackUrl = document.createElement("span");
    const trackOgFile = document.createElement("span");
    const trackDate = document.createElement("span");
    const trackTimeStamp = document.createElement("span");

    trackNumber.innerText = songRow.trackNum;
    trackName.innerText = songRow.title;
    trackLength.innerText = songRow.length
    albumTitle.innerText = songRow.ep;
    trackArtist.innerText = songRow.artist;
    trackUrl.innerText = songRow.url;
    trackOgFile.innerText = songRow.ogFile;
    trackDate.innerText = songRow.startDate;
    trackTimeStamp.innerText = songRow.startTime;

    const trackRow = document.createElement("button");
    trackRow.type = "button";
    trackRow.classList.add('song-list-row');
    trackRow.dataset.songId = songRow.title + '~' + songRow.ep;
    // trackRow.dataset.albumurl = songRow.art;
    trackRow.dataset.artLink = songRow.artLink;
    trackRow.dataset.title = songRow.title;
    trackRow.dataset.length = songRow.length;
    trackRow.dataset.epname = songRow.ep;
    trackRow.dataset.artist = songRow.artist;
    trackRow.dataset.url = songRow.url;
    trackRow.dataset.ogFile = songRow.ogFile;
    trackRow.dataset.dCreated = songRow.startDate;
    trackRow.dataset.tCreated = songRow.startTime;
    // trackRow.addEventListener("click", handleTrackSelect);

    const rowFragment = document.createDocumentFragment();
    rowFragment.appendChild(trackNumber);
    rowFragment.appendChild(trackName);
    rowFragment.appendChild(trackLength);
    rowFragment.appendChild(albumTitle);
    rowFragment.appendChild(trackArtist);
    rowFragment.appendChild(trackUrl);
    rowFragment.appendChild(trackOgFile);
    rowFragment.appendChild(trackDate);
    rowFragment.appendChild(trackTimeStamp);
    trackRow.appendChild(rowFragment);

    return trackRow;
}