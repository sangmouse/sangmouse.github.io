document.addEventListener("DOMContentLoaded",function(){
	var navbar=document.getElementById('navbar');
	const position_nav=navbar.offsetTop+10;
	var btn_uptoTop=document.getElementById('btnscrollTop');
	const scroll_position=200;
	var nut=document.querySelectorAll('.dot-container span');
	var slides=document.querySelectorAll('.slideshow-container .mySlides');

	// console.log(position_nav);
	// scroll navbar
	window.addEventListener('scroll',function(){
		// navbar
		if (window.pageYOffset>=position_nav) {
			navbar.classList.add('bg_white');
		}
		else if (window.pageYOffset<position_nav) {
			navbar.classList.remove('bg_white');
		}
		// show up-to-top button
		if (window.pageYOffset>=scroll_position) {
			btn_uptoTop.classList.add('show_btn');
		}
		else if (window.pageYOffset<scroll_position) {
			btn_uptoTop.classList.remove('show_btn');
		}
		btn_uptoTop.addEventListener('click',function(){
			window.scrollTo({
				top:0,
				left:0,
				behavior:'smooth'
			});
		})
	})
	// slides show
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('active');
			}
			this.classList.add('active');
			var nutkichhoat=this;
						var vitrinut=0;
						for (vitrinut = 0; nutkichhoat=nutkichhoat.previousElementSibling; vitrinut++) {}
						
						for (var i = 0; i < slides.length; i++) {
							slides[i].classList.remove('active');
							slides[vitrinut].classList.add('active');
						}
		})
	}
},false)