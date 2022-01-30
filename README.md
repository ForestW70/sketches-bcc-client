# Dj Burner b - Sketches Bcc - Client side
1/2/2022

v1.65 - MIT - For Good.

* # Content:
- [Description](#description)
- [Usage](#usage)
- [Project Notes](#project-notes)
- [Contribution](#contribution)
- [Contact](#contact)
- [Links](#links)

* # Description:
    Front-end web application that uses an HTML audio player and client-side javaScript to create a light-weight iTunes style app to play local mp3 files.

    Use this page to listen to some of my WIP songs, as well as my new album, sketches bcc. 

* ## Usage:
    1. Scroll through each section to click and choose which song to play next.

    2. Once you have chosen the song, press play in audio player to listen. Audio player also allows user to change song tempo, as well as download tracks they enjoy (dont forget to come follow on soundcloud ;))

    3. While song is playing you may click more songs to add to a "queue", and when you are ready to move onto the next song, you may click "next track" and it will load the next song into the player. 

* ### Project Notes: 
    This is the first draft of a client-side-only version, with only vital functionallity implemented. The second draft will include more advanced features such as a server/back-end as well as a SQL database. Draft three will be writen using the React framework and include more bells and whistles.

    * ##### Current Features:
        - Choose between Album view and Song view to browse through the songs.
        - Click a song and it will load it into the player if you have no songs in your queue, otherwise song will be added to queue. The next(first) item in queue will then be used to filter the player load next track.

    * ##### Features yet to add:
        - Audio player will have auto-play functionality, starting the next song in queue once the first song has ended. (added button to toggle on/off, works on desktop but not mobile.)

        - Audio player sticks to top of the screen, collapses to just info and control buttons.

        - Queue items will be able to be moved, removed.

        - options tab that shows experimental options, other options, and info about features and use.

        - Album view will initially show as grid of album arts, when clicked, album expands and shows songs.

        - Song view will have full sort capability, sorting ascending/descending for all colomns. handle empty info divs. real number sort.

        - Song view and all columns will be fully responsive to the screen, custom column handling.
        
        - use local storage to rememeber which view you were on, settings, next three queued items


* #### Contribution:
    If you enjoyed this project and would like to keep up to date with any new additions, feel free to follow my git hub! If you had any questions, comments, concerns or feedback, shoot me a message!

* ###### Contact:
    - Email - Hexaforest@gmail.com
    - Github - https://github.com/ForestW70
    - Soundcloud - https://soundcloud.com/itsjustaburner

- ###### Links:    
    - [Visit page](https://forestw70.github.io/sketches-bcc-client/index.html)
    - [Visit repo](https://github.com/ForestW70/sketches-bcc-client)