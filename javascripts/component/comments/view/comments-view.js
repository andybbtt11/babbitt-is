define( function( require ) {

    'use strict';

    var _ = require( 'underscore' ),
        $ = require( 'jquery' ),
        Backbone = require( 'backbone' ),
        CommentsCollection = require( 'comments-collection' ),
        CommentsView = require( 'comments-view' );

    var view = Backbone.View.extend({

        events: {
        },

        postId: window.location.hash.substring(1),

        el: $( '.comments' ),

        tagName: 'li',

        initialize: function() {
            this.collection = new CommentsCollection();
            this.template = this.template = _.template(tpl.get('comments'));
            
        },

        render: function() {
            var that = this;
            this.collection.fetch().complete(function(){
              that.appendComments();
            });

            return this;
        },

        appendComments: function(){
            var that = this;
             _.each(this.collection.models, function(item){
              if (item.toJSON().postid == that.postId) {
                that.$el.append( '<li>'+that.template( item.toJSON() )+'</li>');
              }
        });


        }

    });

    return view;
});