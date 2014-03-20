define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		Backbone = require( 'backbone' ),
		Section = require( 'section-model' );

	var collection = Backbone.Collection.extend({

		model: Section

		// comparator: function(sortBy) {
		// 	var newId = parseInt(sortBy.id);
	 //        return -newId;
	 //    }

	});

	return collection;
});