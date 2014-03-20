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
				'date' : 'Mon XX',
				'mainimg' : 'http://placehold.it/640x300',
				'subimg' : 'http://placehold.it/200x200',
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