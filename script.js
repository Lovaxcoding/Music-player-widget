//based on https://dribbble.com/shots/6957353-Music-Player-Widget

//get values
var menu = document.querySelector("#menu");
var menuContent = document.querySelector(".menu-content");
var close = document.querySelector("#close");
var body = document.body;
var audio = document.querySelector("#audio");
var choosePlay = document.querySelectorAll("#choose-play");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var album = document.querySelector(".album");
var player = document.querySelector(".player-wrapper");
var progress = document.querySelector("#progress-bar");
var h = document.querySelector("#h");
var p = document.querySelector("#p");
var counter = 0;

//store songs in object
var songs = [
  {
    name: "borderline",
    artist: "tame impala",
src: "https://pl.meln.top/mr/a1150ad23738a171ae31a3dc102322d6.mp3?session_key=d31b1aaf1526aca7e48d5c8cab687365",
    album: "https://images.genius.com/a74051159decca8ebdbba7c499616e3f.1000x1000x1.jpg",
    bg: "var(--bg1)",
    shadow : "var(--box-shadow1)"
  },
  {
    name: "dark age",
    artist: "mgmt",
    src: "https://pl.meln.top/mr/899eff24eefa4c574323e0886581898a.mp3?session_key=d34a8095fdff4d4b3448358ca7c5d02b",
    album: "https://images.genius.com/3635fcea8f4dd0c2dfe81de0774f1b37.1000x1000x1.png",
    bg: "var(--bg2)",
    shadow : "var(--box-shadow2)"
  },
  {
    name: "often - kygo remix",
    artist: "the weeknd",
    src: "https://pl.meln.top/mr/82b3848cafd88882db8f3031bfed1207.mp3?session_key=0272371bd8307c4364f3d40848a1e490",
    album: "https://images.genius.com/179c178e2314fff9609b47dad5b9d8c8.1000x1000x1.jpg",
    bg: "var(--bg3)",
    shadow : "var(--box-shadow3)"
  },
  {
    name: "peaches",
    artist: "justin bieber",
    src: "https://pl.meln.top/mr/1b245901263f25044a4129f616b5e23c.mp3?session_key=63f2d590a66d0ba5ef9bc3b27440ba67",
    album: "https://images.genius.com/1b4158cead8b9efc973a164d9e86a821.1000x1000x1.jpg",
    bg: "var(--bg4)",
    shadow : "var(--box-shadow4)"
  },
  {
    name: "ocean drive",
    artist: "duke dumont",
    src: "https://pl.meln.top/mr/08ac397687ed6901d4a46bed54ef6436.mp3?session_key=07c2738d8e4887cb0034287e3bafc8b2",
    album: "https://images.genius.com/3303d611d52808e90819e5b10166e308.750x750x1.png",
    bg: "var(--bg5)",
    shadow : "var(--box-shadow5)"
  },
  {
    name: "midnight sky",
    artist: "miley cyrus",
    src: "https://pl.meln.top/mr/f5a2b57844985e7aa540a181a8a28634.mp3?session_key=2a218ecc884139a888c53683f3148dae",
    album: "https://images.genius.com/88698abae0a5e564f8a827202397736e.1000x1000x1.png",
   bg: "var(--bg6)",
   shadow : "var(--box-shadow6)"
  }
];

//default on DOM loaded
(function(){
  audio.setAttribute("src", songs[0].src);
  album.setAttribute("style", "background-image: url(" + songs[0].album + ")");
  body.style.background = songs[0].bg;
  progress.style.background = songs[0].bg;
  player.style.boxShadow = songs[0].shadow;
  h.innerHTML = songs[0].name;
  p.innerHTML = songs[0].artist;
})();


//open and close menu
menu.addEventListener('click', function(){
  menuContent.style.width = "300px";
});
close.addEventListener('click', function(){
  menuContent.style.width = "0px";
});
//play song
play.addEventListener('click', function(){
  audio.play();
});

//pause song
pause.addEventListener('click', function(){
  audio.pause();
});


//play next song
next.addEventListener('click', function(){
  if(counter < songs.length-1)
    {
      counter++;
      audio.setAttribute("src", songs[counter].src);
      h.innerHTML = songs[counter].name;
      p.innerHTML = songs[counter].artist;
      album.setAttribute("style", "background-image: url(" + songs[counter].album + ")");
      body.style.background = songs[counter].bg;
      progress.style.background = songs[counter].bg;
      player.style.boxShadow = songs[counter].shadow;
    } else {
      audio.setAttribute("src", songs[0].src);
      h.innerHTML = songs[0].name;
      p.innerHTML = songs[0].artist;
      album.setAttribute("style", "background-image: url(" + songs[0].album + ")");
      body.style.background = songs[0].bg;
      progress.style.background = songs[0].bg;
      player.style.boxShadow = songs[0].shadow;
    }
});

prev.addEventListener('click', function(){
  if(counter == 0)
    {
      h.innerHTML = songs[0].name;
      p.innerHTML = songs[0].artist;
      audio.setAttribute("src", songs[0].src);
       album.setAttribute("style", "background-image: url(" + songs[0].album + ")");
      body.style.background = songs[0].bg;
      progress.style.background = songs[0].bg;
      player.style.boxShadow = songs[0].shadow;
    } else {
      counter--;
      h.innerHTML = songs[counter].name;
      p.innerHTML = songs[counter].artist;
      audio.setAttribute("src", songs[counter].src);
       album.setAttribute("style", "background-image: url(" + songs[counter].album + ")");
      body.style.background = songs[counter].bg;
      progress.style.background = songs[counter].bg;
      player.style.boxShadow = songs[counter].shadow;
    }
});


//play accodring to chioce selected by user
/*choosePlay.addEventListener('click', function(){
  var songType = choosePlay.getAttribute('data-song-type');
  console.log(songType);
  if(songType == "song1")
    {
      audio.setAttribute("src", songs[1].src);
    } else if(songType == "song2")
      {
        audio.setAttribute("src", songs[2].src);
        audio.play();
      } else if(songType == "song3") {
        audio.setAttribute("src", songs[3].src);
        audio.play();
      } else if(songType == "song4") {
        audio.setAttribute("src", songs[4].src);
        audio.play();
      } else if(songType == "song5") {
        audio.setAttribute("src", songs[5].src);
        audio.play();
      } else if(songType == "song6") {
        audio.setAttribute("src", songs[6].src);
        audio.play();
      }
});
*/