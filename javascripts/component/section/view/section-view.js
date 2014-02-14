define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' );

    var view = Backbone.View.extend({

        tagName: 'li',

        className: 'post-item-container',

        events: {
            'click' : 'showDetail'
        },

        initialize: function() {
            this.template = _.template(tpl.get('section-item'));
            this.bind('reset', this.render, this);  
        },

        render: function() { 
            this.$el.html( this.template( this.model.toJSON() ));
            return this.el
        },

        showDetail: function(event){
            var postId = this.$('.post-id').val();
            window.location = 'post#'+postId;
        }

    });

    return view;
});