var t;
function smoothScroll() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

	if (top > 0) {
		window.scrollBy(0, -30);
		t = setTimeout("smoothScroll()", 0);
	} else {
		clearTimeout(t);
	}

	return false;
}
