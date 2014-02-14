/************************************************************
 FILE: component/app/app-view-component.js
************************************************************/

define( function( require ) {

	'use strict';

	var AppView = require( 'app-view' );

	return function() {
		console.log('app-view-component.js');
		var appView = new AppView();
		appView.render();
	};
});