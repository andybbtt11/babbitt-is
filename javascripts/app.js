/************************************************************
 FILE: public/js/app.js
************************************************************/

define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		$ = require( 'jquery' ),
		Backbone = require( 'backbone' ),
		router = require( 'router' );

	// Add route-specific components here.
	router.route( '', 'home', function() {
		//var heroComponent = require( 'hero-component' );
		//this.loadComponent( heroComponent );
	});

	return {
		initialize: function() {
			console.log('app.js');
			var initializedComponents = [];

			// Figure out which components we should instantiate.
			_.each( $( '[data-require]' ), function(  component ) {
				var components = $( component ).data( 'require' ).split( ',' );
				_.each( components, function( componentProperty ) {
					if( initializedComponents.indexOf(componentProperty) < 0 ) {
						initializedComponents.push(componentProperty);
						router.loadComponent( require( componentProperty ) );
					}
				});
			}, this);

		    Backbone.history.start({ pushState: false, root: '/' });
		}
	};
});