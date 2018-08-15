'use strict';

var video = document.getElementById("video");
var img_div = document.getElementById("img_div");
navigator.webkitGetUserMedia({video: true, audio: false}, _handleSuccess, _handleError);

function _handleSuccess(localMediaStream) {
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function _handleError() {
  alert("ERROR");
}

var toggleScreen = function () {
  if(img_div.style.display == "none"){
    video.style.display = "none";
    img_div.style.display = "block";
  }else{
    video.style.display = "block";
    img_div.style.display = "none";
  }
};

module.exports.toggleScreen = toggleScreen;
