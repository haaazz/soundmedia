var song;
var button;

function setup(){
    createCanvas(200,200);
    song = loadSound('CantSlowMeDown',loaded);
    button=createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
}

function togglePlaying(){
    if (!song.isPlaying()){
        song.play();
        song.setvolume(0.3);
        button.html('pause');
    }
}

function loaded(){
    console.log('loaded');
}