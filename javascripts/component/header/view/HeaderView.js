define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' );

    var view = Backbone.View.extend({

        el: 'header',

        events: {
        },

        initialize: function() {
            this.template = _.template(tpl.get('header'));
        },

        render: function() { 
            this.$el.append( this.template );
        }

    });

    return view;
});