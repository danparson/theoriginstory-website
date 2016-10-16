---
---

(function() {
	'use strict';

	function setSplashText() {
	var splashes = ["{{ site.data.global.splashes | join: '", "' }}"];
	var max = splashes.length - 1;
	var min = 0;
	var splashPos = Math.floor(Math.random() * (max - min + 1)) + min;
	$(".tos-navbar-brand-text").html("\"" + splashes[splashPos] + "\"");
	}

	$(document).ready(function() {
		setSplashText();
	});

	$('.bio-photo-panel a').on('click', function() {
	$(".list-group-item").removeClass("active");
	var addressValue = $(this).attr("href");
		$(addressValue).parent().addClass("active");
	});

	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
})();
