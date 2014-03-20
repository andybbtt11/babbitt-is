define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		Backbone = require( 'backbone' ),
		Comments = require( 'comments-model' );

	var collection = Backbone.Collection.extend({

		model: Comments,

		url:"/comments"
		
	});

	return collection;
});