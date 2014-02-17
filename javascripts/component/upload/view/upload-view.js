define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' ),
       Post = require( 'post-model' ),
       PostCollection = require( 'post-collection' );

    var view = Backbone.View.extend({

        el: '.upload-form',

        events: {
            'click #editid' : 'activateIdField'
        },

        initialize: function() {

            this.model = new Post();
            this.collection = new PostCollection();

        },

        render: function() { 
            var that = this;

            this.collection.fetch({
                success: function(){
                    that.updateId();
                }   
            });

            this.$el.on('submit', function(event){
                event.preventDefault();
                that.gatherData();
            });
        },

        // Prepopulate ID value
        updateId: function(){
            var idValue = this.collection.length;
            var updatedValue = idValue + 1;
            this.$('#id').val(updatedValue);
        },

        gatherData: function(){
            var data = Backbone.Syphon.serialize(this);

            // Remove input if empty to preserve default model value
            $('input').each( function(){
                if( $(this).val() == "" ){
                    $(this).remove();
                }
            });

            data.id = parseInt(data.id);

            this.model.set(data);

            this.model.save();
            console.log(this.model);
            this.collection.add(this.model);

            this.relocate();
        },

        relocate: function(){
            _.delay( function(){ window.location = "/" }, 150);
        },

        activateIdField: function(event){
            event.preventDefault();
            this.$('#id').removeAttr('readonly');
        }

    });

    return view;
});