document.addEventListener("DOMContentLoaded",function(){
	var navigation=document.querySelector('.navigation');
	var image=document.getElementById('navi-img');
	var story_img=document.getElementById('story-img');
	var position_story=story_img.offsetTop-900;
	var position=navigation.offsetTop;
	var btnscrollTop=document.getElementById('btnscrollTop');


	document.addEventListener('scroll',function(){
		if (window.pageYOffset>position) {
			navigation.classList.add('fixed');
			image.classList.add('height-100');
		}
		else if (window.pageYOffset<=position) {
			navigation.classList.remove('fixed');
			image.classList.remove('height-100');
		}
		// scroll image
		if (window.pageYOffset>=position_story) {
			story_img.classList.add('moveup');
		}
	})
	btnscrollTop.addEventListener('click',function(){
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		});
	})
},false)