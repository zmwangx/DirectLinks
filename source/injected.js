/*
 * Authored by Canisbos Computing for the DirectLinks Safari extension.
 * http://canisbos.com/directlinks
 * https://github.com/canisbos/DirectLinks/blob/master/DirectLinks.safariextension/injected.js
 */
(function main() {
	if (window != top) {
		return;
	}
	if ((/^www\.google(\.[a-z]+)+$/).test(location.hostname)) {
		if (['/','/search','/webhp'].indexOf(location.pathname) >= 0) {
			document.addEventListener('mousedown', function (e) {
				var et = e.target, lc = -1;
				while (et && !(et instanceof HTMLAnchorElement) && (3 > lc++))
					et = et.parentElement;
				if (!et || !et.href)
					return;
				var link = et;
				e.stopPropagation();
				if (link.getAttribute('onmousedown')) {
					link.removeAttribute('onmousedown');
					if (link.pathname === '/url') {
						if ((/[?&]url=[^&]+/).test(link.search)) {
							link.href = decodeURIComponent(link.search.split(/[?&]url=/)[1].split('&')[0]);
							console.log('Link changed to', link.href);
						}
					}
				}
			}, false);
		}
	} else
	if (/^www.facebook(\.[a-z]+)+$/.test(location.hostname)) {
		document.addEventListener('mouseover', function (evt) {
			var thing = evt.target;
			if (thing instanceof HTMLAnchorElement && thing.onclick && /referrer_log/.test(thing.onclick)) {
				thing.removeAttribute('onclick');
				console.log('Removed "onclick" attribute on link to', thing.href);
			}
		}, false);
	}
})();
