define( function( require ) {

	'use strict';

	var UploadView = require( 'upload-view' );

	return function() {
		var uploadView = new UploadView();
		uploadView.render();
	};
});