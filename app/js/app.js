var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

	 var timezone = new Date().getTimezoneOffset() * -2;
      console.log(timezone);

      var bg = document.getElementById("container");

      var moveBg = function () {
         if (timezone === 120) {
            bg.style.background-position = "right 0px top 0px";
         } else if (timezone === 240) {
            bg.style.background-position = "right -100px top 0px";
         }
      }
      moveBg();

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

