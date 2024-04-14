// Define a variable 
var video;

// Actions when window load 
window.addEventListener("load", function() {
	console.log("Good job opening the window"); 
	video = document.getElementById("player1"); 
	video.autoplay = false; 
	video.loop = false; 
});

// Play video 
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video"); 
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"; 
});

// Pause the video on 'pause' 
document.getElementById("pause").addEventListener("click", function(){
	console.log("Pause Video"); 
	video.pause(); 
});

// Decrease video speed by 10% 
document.getElementById("slower").addEventListener("click",function(){
	video.playbackRate *= 0.9; 
	console.log("New speed is: " + video.playbackRate); 
});

// Increase video speed by 10% 
document.getElementById("faster").addEventListener("click",function(){
	video.playbackRate /= 0.9; 
	console.log("New speed is: " + video.playbackRate); 
});

// Skip ahead 10 seconds 
document.getElementById("skip").addEventListener("click",function(){
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0; 
		console.log("Skipped, current location"); 
	}
	else{
		video.currentTime+=10; 
	}
	console.log("Current locatio: " + video.currentTime); 
});

// Toggle mute and unmute 
document.getElementById("mute").addEventListener("click",function(){
	if(video.muted){
		video.muted = false; 
		this.innerHTML = "Mute"; 
	}
	else{
		video.muted = true; 
		this.innerHTML = "Unmute"; 
	}
});

// Adjust video volume 
document.getElementById("slider").addEventListener("change",function(){
	video.volume = this.value/100; 
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Apply 'oldSchool' class
document.getElementById("vintage").addEventListener("click",function(){
	video.classList.add("oldSchool"); 
});

// Remove 'oldSchool' class 
document.getElementById("orig").addEventListener("click",function(){
	video.classList.remove("oldSchool"); 
});
