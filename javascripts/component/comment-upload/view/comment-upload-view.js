define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' ),
       Comment = require( 'comments-model' ),
       CommentCollection = require( 'comments-collection' );

    var view = Backbone.View.extend({

        el: '.comment-upload-form',

        events: {
          'click .new-comment' : 'toggleForm'
        },

        initialize: function() {

            this.model = new Comment();
            this.collection = new CommentCollection();
            this.template = _.template(tpl.get('comment-upload-form'));

        },

        render: function() { 
            var that = this;

            this.renderForm();

            this.$el.on('submit', function(event){
                event.preventDefault();
                that.gatherData();
            });
        },

        // Prepopulate ID value
        updateId: function(){
            this.$('#id').val(window.location.hash.substring(1));
        },


        renderForm: function(){
            this.$el.append( this.template() );
            this.updateId();
        },

        gatherData: function(){
            
            var data = Backbone.Syphon.serialize(this);
            var that = this;

            // Remove input if empty to preserve default model value
            this.$('input').each( function(){
                if( $(this).val() == "" ){
                    $(this).remove();
                }
            });

            _.delay( function(){
                that.model.set(data);
                that.model.save();
                that.collection.add(this.model)
            },100);

            this.relocate();
        },

        toggleForm: function(e){
            e.preventDefault();
            this.$('.comment-form-fields').toggleClass('hidden');
        },

        relocate: function(){
             _.delay( function(){ location.reload() }, 150);
        }

    });

    return view;
});