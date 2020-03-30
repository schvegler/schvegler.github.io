var closePanel;
var downloadPanel;
var detailPanel;
var anim;
var showDlIcon;
var img;
var video;

var photosBaby = new Array();
var photosSnake = new Array();
var photosBox = new Array();
var photoGroup = [photosBaby, photosSnake, photosBox];
var videos = [];
var titles = ["Baby Chicks", "Classis Snake", "Hit The Box"];
var descriptions = ["Children deserve fun games too, this is why baby chick was born. Controlling the chicken mom by tilting the device is fun just like car racing games, this combined with the 2d platformer aspect gives you a new style of gameplay. Collect all the baby chicks and bring them back to your nest.", "Classic Snake, the well known retro snake game with a new aspect, beautiful graphics, cool particle effects but the same gameplay mechanism.", "Proud to anounce, Hit the box 2.0 is released and available to iOS and Android for free. This was a major update, changed the whole graphic assets and sounds. Try it out now!", "The biggest project of Zomigames, an online top down shooter for iOS and Android. This game combines battle royale with and top down shooter with some RPG elements to give you a complex experience that newer gets boring. Still in early stage of development."];

var titleDetail;
var textDetail;

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
      anim = document.getElementsByClassName("anim");
      img = document.getElementsByClassName("img");
      closePanel = document.getElementById("close-panel");
      downloadPanel = document.getElementById("download-panel") 
      detailPanel = document.getElementById("detail-panel");
      document.getElementById("download").addEventListener("click", OpenDownload);
      document.getElementById("close-detail").addEventListener("click", CloseDetail);
      closePanel.addEventListener("click", CloseDownload);
      document.getElementById("baby").addEventListener("click", BabyDetail);
      document.getElementById("snake").addEventListener("click", SnakeDetail);
      document.getElementById("box").addEventListener("click", BoxDetail);
      titleDetail = document.getElementById("title");
      textDetail = document.getElementById("text");
      video = document.getElementById("video"); 
      GetBabyPhotos();
      GetSnakePhotos();
      GetBoxPhotos();
  }
}

function GetBabyPhotos() {
    for (i = 0; i < 5; i++) {
    photosBaby[i] = "baby"+ (i+1).toString()+".jpg";
    }
}

function GetSnakePhotos() {
    for (i = 0; i < 5; i++) {
    photosSnake[i] = "snake"+ (i+1).toString()+".jpg";
    }
}

function GetBoxPhotos() {
    for (i = 0; i < 5; i++) {
    photosBox[i] = "box"+ (i+1).toString()+".jpg";
    }
}


function BabyDetail() {
    detailPanel.style.top = 0; 
    titleDetail.textContent = titles[0];
    textDetail.textContent = descriptions[0];
    video.src = "babyvideo.m4v";
    for (i=0; i < photosBox.length; i++) {
        img[i].src = photosBaby[i];
    }
}

function SnakeDetail() {
    detailPanel.style.top = 0; 
    titleDetail.textContent = titles[1];
    textDetail.textContent = descriptions[1];
    video.src = "snakevideo.mp4";
    for (i=0; i < photosSnake.length; i++) {
        img[i].src = photosSnake[i];
    }
}

function BoxDetail() {
    detailPanel.style.top = 0; 
    titleDetail.textContent = titles[2];
    textDetail.textContent = descriptions[2];
    video.src = "boxvideo.mp4";
    for (i=0; i < photosBox.length; i++) {
        img[i].src = photosBox[i];
    }
}

function CloseDetail() {
    detailPanel.style.top = "-1500px";
}


function OpenDownload() {
    downloadPanel.style.width = "640px";
    closePanel.style.opacity = 1;
    showDlIcon = setTimeout(ShowDownloadIcons, 500);
}

function CloseDownload() {
    downloadPanel.style.width = "0px";
    closePanel.style.opacity = 0;
    HideDownloadIcons();
}

function HideDownloadIcons() {
     for (i = 0; i < anim.length; i++) {
        anim[i].style.opacity = 0;
     }
}

function ShowDownloadIcons() {
     for (i = 0; i < anim.length; i++) {
        anim[i].style.opacity = 1;
     }
}


