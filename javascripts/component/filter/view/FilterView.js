define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' );

    var view = Backbone.View.extend({

        el: '.filter-container',

        events: {
        },

        initialize: function() {
            this.template = _.template(tpl.get('filter'));
        },

        render: function() { 
            this.$el.append( this.template );
        }

    });

    return view;
});