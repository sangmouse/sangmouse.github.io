document.addEventListener("DOMContentLoaded",function(){
	var navigation=document.querySelector('.navigation');
	var image=document.getElementById('navi-img');
	var story_img=document.getElementById('story-img');
	console.log(story_img);
	var position=navigation.offsetTop;

	document.addEventListener('scroll',function(){
		if (window.pageYOffset>position) {
			navigation.classList.add('fixed');
			image.classList.add('height-100');
		}
		else if (window.pageYOffset<=position) {
			navigation.classList.remove('fixed');
			image.classList.remove('height-100');
		}
	})
},false)