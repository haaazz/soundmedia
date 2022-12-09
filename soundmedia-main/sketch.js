let musicFile;
let musicFile2;
let musicFile3;
let button;
let button2;
let button3;
let button4;
let button5;
var amp;
let vol = 0.5;
let fft
var rB;

function setup(){
    createCanvas(640,480);
    soundFormats('mp3','ogg');
    musicFile=loadSound('CantSlowMeDown',loadMusic);
    musicFile2=loadSound('Blase',loadMusic);
    musicFile3=loadSound('Dieforyou',loadMusic);
    button = createButton("Play");
    button.mousePressed(togglePlaying);
    button4 = createButton("Play2");
    button4.mousePressed(togglePlaying2);
    button5 = createButton("Play3");
    button5.mousePressed(togglePlaying3);
    amp = new p5.Amplitude();
    vol = createSlider(0, 1, vol, 0.01);
    fft = new p5.FFT();
    button2 = createButton('reverse');
    button2.mousePressed(toggleReverse);
    button3 = createButton('10sSkip');
}

function togglePlaying(){
    if (!musicFile.isPlaying()){
        musicFile.play();
        button.html('pause');
    }else{
        musicFile.pause();
        button.html('play');
    }
}

function togglePlaying2(){
    if (!musicFile2.isPlaying()){
        musicFile2.play();
        button4.html('pause');
    }else{
        musicFile2.pause();
        button4.html('play');
    }
}

function togglePlaying3(){
    if (!musicFile3.isPlaying()){
        musicFile3.play();
        button5.html('pause');
    }else{
        musicFile3.pause();
        button5.html('play');
    }
}

function toggleReverse(){
    
}

function loadMusic(){
    console.log("It' working");
}

function draw(){
    fill(255,0,0);
    ellipse(50,50,100,100);
    console.log(musicFile.duration());
    musicFile.setVolume(vol.valueOf());
    musicFile2.setVolume(vol.valueOf());
}

function draw(){
    background(60);
    let analyze = fft.analyze();
    noStroke();
    // amp.getLevel();
    // console.log(amp.getLevel());
    // ellipse(width/2, height-amp.getLevel()*500, 30, 30);
    // console.log(amp.getLevel());
    // rect(width/2-10, height-amp.getLevel()*500, 20, 480);
    console.log(amp.getLevel());
    rect(0, height-amp.getLevel()*500, 640, 480);
    for(let i=0; i<analyze.length; i++){
      stroke(random(255), random(255), random(255));
      let x = map(i, 0, analyze.length, 0, width);
      let y = map(analyze[i], 0, 255, 0, height);
     // line(x, height, x, height-y);
     fill(random(255),random(255),random(255));
     ellipse(x, height-y, 7, 7);
    }
}