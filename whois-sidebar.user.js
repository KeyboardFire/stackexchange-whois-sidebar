// ==UserScript==
// @match http://chat.stackexchange.com/rooms/4/*
// @match https://chat.stackexchange.com/rooms/4/*
// ==/UserScript==

var userscript = function($) {

function highlight(users, on) {
	$('#present-users img').filter(function() {
		return users.indexOf(this.title) > -1;
	}).stop().animate({width: on ? 64 : 32, height: on ? 64 : 32});
}
$('#chat').on('mouseover', '.user--2 .content', function() {
	$('li.more[title^="show"]').click();
	highlight($('i', this).text().split(': ')[1].split(', '), true);
}).on('mouseout', '.user--2 .content', function() {
	$('li.more[title^="only"]').click();
	highlight($('i', this).text().split(': ')[1].split(', '), false);
});

};

var el = document.createElement('script');
el.type = 'text/javascript';
el.textContent = '(' + userscript + ')(jQuery);';
document.head.appendChild(el);
