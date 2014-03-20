define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' );

    var view = Backbone.View.extend({

        el: 'header',

        footerEl: $('footer'),

        events: {
        },

        initialize: function() {
            this.template = _.template(tpl.get('header'));
            this.footer = _.template(tpl.get('footer'));
        },

        render: function() { 
            this.$el.append( this.template );
            this.footerEl.append( this.footer );
        }

    });

    return view;
});