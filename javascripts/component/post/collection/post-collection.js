define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		Backbone = require( 'backbone' ),
		Post = require( 'post-model' );

	var collection = Backbone.Collection.extend({

		url: '/api',

		model: Post,

		initialize: function() {

		}

	});

	return collection;
});