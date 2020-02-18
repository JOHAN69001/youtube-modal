//Start Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtubeReady = false;
var players= new Array();
function onYouTubeIframeAPIReady(){
  youtubeReady = true;
}

const carousel = document.querySelector('.carousel-inner')

// Click on item
document.querySelectorAll('.custom-button').forEach(function(button) {
  button.onclick = function() {
    const containerTitle = document.querySelector('.modal-title')
    var title = button.getAttribute('data-title')
    var videos = button.getAttribute('data-videos')
    containerTitle.innerHTML = title

    var videosArray = videos.split(',')
    
//Load him videos
    videosArray.forEach(function(video) {
      var newContainerVideo = "<div class='video-container item'><div class='youtube-video' id='" + video + "'></div></div>"
      document.querySelector('.carousel-inner').insertAdjacentHTML('beforeend', newContainerVideo)
    })

    if(carousel.children.length <= 1) {
      document.querySelectorAll('.carousel-control').forEach(function(control) {
        control.classList.add('d-none')
      })
    } else {
      document.querySelectorAll('.carousel-control').forEach(function(control) {
        control.classList.remove('d-none')
      })
    }
    
   
    
    carousel.firstElementChild.classList.add('active')
//create players
    document.querySelectorAll('.youtube-video').forEach(function(element) {
      players[element.id] = new YT.Player(element.id, {         
			  videoId: element.id,
			    playerVars: {
			    controls: 2,
		      rel:0,
		      autohide:1,
		      showinfo: 0 ,
		      modestbranding: 1,
		      wmode: "transparent",
		      html5: 1
       	},    
    })
    
  })
}
})
  
//on close modal delete elements carousel
$('#modal-video').on('hidden.bs.modal', function () {
  while (carousel.firstChild) {
    carousel.removeChild(carousel.firstChild);
  }
})
