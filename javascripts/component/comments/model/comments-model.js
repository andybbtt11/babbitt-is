define( function( require ) {

	'use strict';

	var Backbone = require( 'backbone' );

	var model = Backbone.Model.extend({

		urlRoot: '/comments',

		defaults: function() {
			return {
				'_id' : null,
				'postid' : null,
				'name' : 'Anon',
				'content' : null
			};
		},

		initialize: function(){
		}
	});

	return model;
});