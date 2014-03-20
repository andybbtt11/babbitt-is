define( function( require ) {

	'use strict';

	var CommentUploadView = require( 'comment-upload-view' );

	return function() {
		var commentUploadView = new CommentUploadView();
		commentUploadView.render();
	};
});