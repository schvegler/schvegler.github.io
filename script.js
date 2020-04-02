
var closePanel;
var downloadPanel;
var detailPanel;
var anim;
var showDlIcon;
var img;
var pp;
var video;
var zomiLogo;
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
      document.getElementById("privacy-link").addEventListener("click", OpenPrivacy);
      document.getElementById("download").addEventListener("click", OpenDownload);
      document.getElementById("close-detail").addEventListener("click", CloseDetail);
      closePanel.addEventListener("click", CloseDownload);
      document.getElementById("baby").addEventListener("click", BabyDetail);
      document.getElementById("snake").addEventListener("click", SnakeDetail);
      document.getElementById("box").addEventListener("click", BoxDetail);
      zomiLogo = document.getElementById("logo");
      titleDetail = document.getElementById("title");
      textDetail = document.getElementById("text");
      video = document.getElementById("video"); 
      GetBabyPhotos();
      GetSnakePhotos();
      GetBoxPhotos();
      
  }
}

function OpenPrivacy() {
    window.open("pp"+"html", '_blank');
    
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

 function scrollToTop() { 
     detailPanel.style.height="auto";
     var timerHandle = setInterval(function() {
         if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) 
             window.scrollBy(0,-30); 
         else clearInterval(timerHandle); },10); 
 }


function BabyDetail() {
    scrollToTop();
    document.getElementById("download").style.opacity = 0;
    detailPanel.style.top = 0; 
    titleDetail.textContent = titles[0];
    textDetail.textContent = descriptions[0];
    pp = "baby";
    video.src = "babyvideo.mp4";
    for (i=0; i < photosBox.length; i++) {
        img[i].src = photosBaby[i];
    }
}

function SnakeDetail() {
    scrollToTop();
    document.getElementById("download").style.opacity = 0;
    detailPanel.style.top = 0; 
    titleDetail.textContent = titles[1];
    textDetail.textContent = descriptions[1];
    pp = "snake";
    video.src = "snakevideo.mp4";
    for (i=0; i < photosSnake.length; i++) {
        img[i].src = photosSnake[i];
    }
}

function BoxDetail() {
    scrollToTop();
    document.getElementById("download").style.opacity = 0;
    detailPanel.style.top = 0; 
    titleDetail.textContent = titles[2];
    textDetail.textContent = descriptions[2];
    pp = "box";
    video.src = "boxvideo.mp4";
    for (i=0; i < photosBox.length; i++) {
        img[i].src = photosBox[i];
    }
}

function CloseDetail() {
    document.getElementById("download").style.opacity = 1;
    detailPanel.style.top = "-300%";
    setTimeout(function() {HideDetail();}, 1000);
}

function HideDetail() {
    detailPanel.style.height = 0;
}


function OpenDownload() {
    document.getElementById("download").style.transition = "0.5s";
    document.getElementById("download").style.opacity = 0;
    closePanel.style.transition = "0.4s";
    closePanel.style.transform = "rotate(360deg)";
    //downloadPanel.style.width = "100%"
    downloadPanel.style.marginLeft = 0;
    closePanel.style.opacity = 1;
    showDlIcon = setTimeout(ShowDownloadIcons, 300);
}

function CloseDownload() {
    document.getElementById("download").style.opacity = 1;
    closePanel.style.transform = "rotate(45deg)";
    //downloadPanel.style.width = "0px";
    downloadPanel.style.marginLeft = "-100%";
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


