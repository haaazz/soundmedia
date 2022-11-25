let musicFile;
function setup()
{
    soundFormats('mp3','ogg');
    musicFile=loadSound('CantSlowMeDown',loadMusic);
    // musicFile.play()
}
function loadMusic() {
    musicFile.play()
}