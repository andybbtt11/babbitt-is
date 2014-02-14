define( function( require ) {

	'use strict';

	var HeaderView = require( 'header-view' );

	return function() {
		var headerView = new HeaderView();
		headerView.render();
	};
});