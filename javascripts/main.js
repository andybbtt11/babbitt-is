/************************************************************
 FILE: public/js/main.js
************************************************************/

define( function( require ) {
	'use strict';

	var $ = require( 'jquery' ),
		app = require( 'app' ),
		templateLoader = require('templateLoader');

	$( function() {
		console.log('main.js');
		tpl.loadTemplates([
			'section-item',
			'post',
			'header', 
			'footer', 
			'filter', 
			'load-more',
			'upload-form'], 
			function () {
				app.initialize();
		});
	});
});