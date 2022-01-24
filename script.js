let key = 0;
let num = 0;
let misses = 0;
let songnum = 0;

var sound = new Howl({
  src: ['./SFX/slap.mp3'],
  volume: 1
});

var buzz = new Howl({
  src: ['./SFX/buzz.mp3'],
  volume: 0.1
});

var dubstep = new Howl({
  src: ['./BGM/dubstep.mp3'],
  volume: 0.2
});

var endless = new Howl({
  src: ['./BGM/endlessmotion.mp3'],
  volume: 0.2
});

var house = new Howl({
  src: ['./BGM/house.mp3'],
  volume: 0.2
});

var moose = new Howl({
  src: ['./BGM/moose.mp3'],
  volume: 0.2
});

var scifi = new Howl({
  src: ['./BGM/scifi.mp3'],
  volume: 0.2
});

var summer = new Howl({
  src: ['./BGM/summer.mp3'],
  volume: 0.2
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 38) {
    if (num == 1) {
      pick()
      sound.play();
      picksong()
    } else {
      misses += 1;
      document.getElementById("misses").textContent = "Misses: " + misses
      buzz.play();
      picksong()
    }
  }
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 40) {
    if (num == 2) {
      pick()
      sound.play();
      picksong()
    } else {
      misses += 1;
      document.getElementById("misses").textContent = "Misses: " + misses
      buzz.play();
      picksong()
    }
  }
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    if (num == 3) {
      pick()
      sound.play();
      picksong()
    } else {
      misses += 1;
      document.getElementById("misses").textContent = "Misses: " + misses
      buzz.play();
      picksong()
    }
  }
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 39) {
    if (num == 4) {
      pick()
      sound.play();
      picksong()
    } else {
      misses += 1;
      document.getElementById("misses").textContent = "Misses: " + misses
      buzz.play();
      picksong()
    }
  }
});

function picksong() {
  songnum = Math.floor(Math.random() * 6) + 1;
  if (songnum == 1) {
    dubstep.play();
  } else if (songnum == 2) {
    endless.play();
  } else if (songnum == 3) {
    house.play();
  } else if (songnum == 4) {
    moose.play();
  } else if (songnum == 5) {
    scifi.play();
  } else if (songnum == 6) {
    summer.mp3
  }
}

dubstep.on('end', function(){
  picksong()
});

endless.on('end', function(){
  picksong()
});

house.on('end', function(){
  picksong()
});

moose.on('end', function(){
  picksong()
});

scifi.on('end', function(){
  picksong()
});

summer.on('end', function(){
  picksong()
});

function hideup() {
  document.getElementById("up").style.display = "none";
}

function hidedown() {
  document.getElementById("down").style.display = "none";
}

function hideleft() {
  document.getElementById("left").style.display = "none";
}

function hideright() {
  document.getElementById("right").style.display = "none";
}

pick()

function pick() {
  num = Math.floor(Math.random() * 4) + 1;
  if (num == 1) {
    key = 38;
    hidedown()
    hideleft()
    hideright()
    document.getElementById("up").style.display = "block";
  } else if (num == 2) {
    key = 40;
    hideup()
    hideleft()
    hideright()
    document.getElementById("down").style.display = "block";
  } else if (num == 3) {
    key = 37;
    hideup()
    hidedown()
    hideright()
    document.getElementById("left").style.display = "block";
  } else if (num == 4) {
    key = 39;
    hideup()
    hideleft()
    hidedown()
    document.getElementById("right").style.display = "block";
  } else {
    console.log("err")
  }
}