define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		$ = require( 'jquery' ),
		Backbone = require( 'backbone' );

	var view = Backbone.View.extend({

		el: $( '.app' ),

		initialize: function() {
			console.log('AppView.js');
		},
		render: function() {
			return this;
		}

	});

	return view;

});