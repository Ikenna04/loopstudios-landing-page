const mobile = document.querySelectorAll('img.mobile'),
	navLinks = document.querySelector('.nav-links');

for (let i = 0; i < mobile.length; i++) {
	mobile[i].addEventListener('click', () => {
		navLinks.classList.toggle('show');
	});
}
