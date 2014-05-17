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


})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

// $(document).ready(function(){
// 	$("#item1").click(function(){
//   		$("#block1").slideToggle('slow');
// 	});
// 	$("#item2").click(function(){
//   		$("#block2").slideToggle();
// 	});
// });

