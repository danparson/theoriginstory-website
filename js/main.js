(function() {
  'use strict';

  function setSplashText() {
	var splashes = ["Now with more lyrics!", "Pet Dan's Beard!", "Craigslist Craig", "<del>&nbsp;4&nbsp;</del> 8 sausage <del>&nbsp;biscuits&nbsp;</del> McMuffins", "Cup of water, only ice", "Well that's not safe", "Red light camera ahead", "Matchbox 20 cover band", "The Midwest Ska Spectacular!"];
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
})();
