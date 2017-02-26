/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'wb\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-facebook': '&#xe900;',
		'icon-bed': '&#xe608;',
		'icon-texture': '&#xe62a;',
		'icon-umbrella': '&#xe63f;',
		'icon-rain': '&#xe641;',
		'icon-cloud': '&#xe64a;',
		'icon-cloud-windy': '&#xe650;',
		'icon-lock': '&#xe66b;',
		'icon-heart': '&#xe68c;',
		'icon-mail': '&#xe696;',
		'icon-laundry': '&#xe743;',
		'icon-telephone': '&#xe76a;',
		'icon-marker': '&#xe77a;',
		'icon-chat': '&#xe7d7;',
		'icon-thermometer': '&#xe7f0;',
		'icon-landscape': '&#xe82e;',
		'icon-truck': '&#xe857;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
