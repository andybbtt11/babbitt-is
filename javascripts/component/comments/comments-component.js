define( function( require ) {

	'use strict';

	var CommentsView = require( 'comments-view' );

	return function() {
		var commentsView = new CommentsView();
		commentsView.render();
	};
});