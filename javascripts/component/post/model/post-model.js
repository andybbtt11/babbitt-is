define( function( require ) {

	'use strict';

	var Backbone = require( 'backbone' );

	var model = Backbone.Model.extend({

		defaults: function() {
			return {
				'_id' : null,
				'id' : null,
				'category' : 'Gaming',
				'title' : 'No Title Entered',
				'subtitle' : '',
				'date' : 'Mon XX',
				'mainimg' : 'http://placehold.it/640x300',
				'subimg' : 'http://placehold.it/200x100',
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