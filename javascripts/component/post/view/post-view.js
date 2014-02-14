define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' ),
       PostCollection = require( 'post-collection' );

    var view = Backbone.View.extend({

        el: '.post',

        post: window.location.hash.substring(1),

        events: {

        },

        initialize: function() {
            var that = this;
            this.collection = new PostCollection();
            this.template = _.template(tpl.get('post'));
 
            this.collection.fetch().complete(function(){
                that.render();
            });

        },

        render: function() { 
            var that = this;

            this.$el.html( this.template( this.collection.get(this.post).toJSON() ));

            console.log(this.collection.length);

            // Remove older posts link if none exists
            if( this.post == 1 ){
                $('#olderPost').css('opacity','.5').click( function(e){e.preventDefault();});
            } else {
                $('#olderPost').click( function(e){
                    e.preventDefault(); 
                    that.olderPost();
                });
            }

            // Remove newer posts link if none exists
            if( this.post == this.collection.length ){
                $('#newerPost').css('opacity','.5').click( function(e){e.preventDefault();});
            } else {
                $('#newerPost').click( function(e){
                    e.preventDefault(); 
                    that.newerPost();
                 });
            }

            return this.el

        },

        olderPost: function(){
            var olderPost =  parseInt(this.post) - 1;
            console.log(olderPost);     

            window.location.href = '/post#' + olderPost;
            window.location.reload();
            
        },

        newerPost: function(){
            var newerPost =  parseInt(this.post) + 1;
            console.log(newerPost);        
            window.location.href = '/post#' + newerPost;
            window.location.reload();
        }

    });

    return view;
});