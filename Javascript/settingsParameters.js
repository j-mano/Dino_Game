var gameDir = "R";

var savedXres = 900;
var savedYres = 430;

var xmlDoc = document.implementation.createDocument(null, "books");

//savetoFile();

function setGameDir(gameDirr){
    gameDir = gameDirr;
}

function getGameDir(){
    return gameDir;
}

function setSavedRes(x,y){
    savedXres = x;
    savedYres = Y; 
}

function getSavedResX(){
    return savedXres;
}

function getSavedResY(){
    return savedYres;
}