function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#openBtn');
	const navBtnClose = document.querySelector('#closeBtn');
	const nav = document.querySelector('.mobile-nav');

	function toggleMobileNav() {
		nav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}

	navBtnOpen.onclick = toggleMobileNav;
	navBtnClose.onclick = toggleMobileNav;
}

export default mobileNav;