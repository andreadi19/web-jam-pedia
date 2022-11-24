function toggleMobileButton(){
	document.getElementById('mobile-icon').classList.toggle('hamburger-opened');
	document.getElementById('mobile-menu').classList.toggle('mobile-menu-opened');
}



const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

function handScrollNext (direction) {
	const cards = document.querySelector('.content-card')
	cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

function handScrollPrev (direction) {
	const cards = document.querySelector('.content-card')
	cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

next.addEventListener('click', handScrollNext);
prev.addEventListener('click', handScrollPrev);
 