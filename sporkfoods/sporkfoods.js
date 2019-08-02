document.addEventListener("DOMContentLoaded",function(){
	var navbar=document.getElementById('navbar');
	const position_nav=navbar.offsetTop+10;
	var btn_uptoTop=document.getElementById('btnscrollTop');
	const scroll_position=200;
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
},false)