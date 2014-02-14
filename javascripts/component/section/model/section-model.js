define( function( require ) {

	'use strict';

	var Backbone = require( 'backbone' );

	var model = Backbone.Model.extend({

		urlRoot: '/api',

		defaults: function() {
			return {
				'_id' : null,
				'id' : null,
				'category' : 'Gaming',
				'title' : 'No Title Entered',
				'subtitle' : '',
				'date' : null,
				'mainimg' : null,
				'subimg' : null,
				'preview' : '',
				'cta' : '',
				'bodycopy' : '',
				'url' : 'default-url'
			};
		},

		initialize: function(){
		}
	});

	return model;
});