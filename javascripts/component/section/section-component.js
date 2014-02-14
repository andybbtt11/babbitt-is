define( function( require ) {

	'use strict';

	var SectionContainterView = require( 'section-container-view' );

	return function() {
		var sectionContainterView = new SectionContainterView();
		sectionContainterView.render();
	};
});