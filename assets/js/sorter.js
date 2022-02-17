// number clensing functions
const splitLength = (time, rev) => {
    // "2:32"
    if (time === "?:??") {
        if (rev === "false") {
            return 0;
        }
    }
    const els = time.split(":");
    return new Number((els[0] * 60) + els[1])
}

const splitDate = (date, rev) => {
    // "6-23-18"
    if (date === "--") {
        if (rev === "false") {
            return 0;
        }
    }

    const els = date.split("-");
    const utcDate = new Date(Date.UTC(els[2], els[0] - 1, els[1]))
    return utcDate.getTime();
}

const splitTimeSpamp = (ts, rev) => {
    // "12:05 PM"
    if (ts === "--") {
        if (rev === "false") {
            return new Number(Infinity);
        }
    }

    const els = ts.split(" ");
    let mins = els[0].split(":")[0];
    const secs = els[0].split(":")[1];
    if (els[1] === "PM") {
        mins = mins + 12;
    }

    const totalSecs = new Number((mins * 60) + secs);
    return totalSecs;
}


// common sort functions
const defStringSort = (a, b, nameSpace, rev) => {

    // change empty item to a symbol that places it last in order.
    if (a[nameSpace] === "--" || a[nameSpace] === "~~") {
        rev == "false" ? a[nameSpace] = "~~" : a[nameSpace] = "--";
    } else if (b[nameSpace] === "--" || b[nameSpace] === "~~") {
        rev == "false" ? b[nameSpace] = "~~" : b[nameSpace] = "--";
    }

    let el1 = a[nameSpace].toUpperCase();
    let el2 = b[nameSpace].toUpperCase();
    if (el1 > el2) {
        return 1
    }
    if (el1 < el2) {
        return -1
    }
    return 0;
}

const comNumSort = (a, b, nameSpace, rev, type) => {

    let el1;
    let el2;

    // clense numbers based on what type
    if (type === "len") {
        el1 = splitLength(a[nameSpace], rev);
        el2 = splitLength(b[nameSpace], rev);

    } else if (type === "dte") {
        el1 = splitDate(a[nameSpace], rev);
        el2 = splitDate(b[nameSpace], rev);

    } else if (type === "tme") {
        el1 = splitTimeSpamp(a[nameSpace], rev);
        el2 = splitTimeSpamp(b[nameSpace], rev);

    } else {
        console.log("error")
    }

    return el1 - el2;
}

// 
// main sort. returns new sorted array.
export const getNewSortList = (sortBy, rev, currentSortedList) => {
    console.log(`sort type: ${sortBy}. reverse?: ${rev}`)
    // const currentSort = fullSongList;
    let newSort = [];

    switch (sortBy) {

        case "trkNme":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return defStringSort(b, a, "songTitle", rev);
                } else {
                    return defStringSort(a, b, "songTitle", rev);
                }
            })
            break;

        case "trkLen":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return comNumSort(b, a, "songLength", rev, "len")
                } else {
                    return comNumSort(a, b, "songLength", rev, "len")
                }
            })
            break;

        case "epTtl":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return defStringSort(b, a, "epName", rev);
                } else {
                    return defStringSort(a, b, "epName", rev);
                }
            })
            break;

        case "artist":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return defStringSort(b, a, "epArtist", rev);
                } else {
                    return defStringSort(a, b, "epArtist", rev);
                }

            })
            break;

        case "trkUrl":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return defStringSort(b, a, "songUrl", rev);
                } else {
                    return defStringSort(a, b, "songUrl", rev);
                }
            })
            break;

        case "trkOg":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return defStringSort(b, a, "songOgFile", rev);
                } else {
                    return defStringSort(a, b, "songOgFile", rev);
                }
            })
            break;

        case "trkDte":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return comNumSort(b, a, "songStDate", rev, "dte")
                } else {
                    return comNumSort(a, b, "songStDate", rev, "dte")
                }
            })
            break;

        case "trkTs":
            newSort = currentSortedList.sort((a, b) => {
                if (rev === "true") {
                    return comNumSort(b, a, "songStTime", rev, "tme")
                } else {
                    return comNumSort(a, b, "songStTime", rev, "tme")
                }
            })
            break;

        default:
            newSort = currentSortedList;
            if (rev === "true") {
                console.log(";)")
                localStorage.setItem("alf", "on");
            } else {
                console.log(";(")
                localStorage.setItem("alf", "off");
            }
    }

    return newSort;
}