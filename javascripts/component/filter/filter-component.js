define( function( require ) {

	'use strict';

	var FilterView = require( 'filter-view' );

	return function() {
		var filterView = new FilterView();
		filterView.render();
	};
});