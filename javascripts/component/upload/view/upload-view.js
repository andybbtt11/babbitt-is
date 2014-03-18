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
            this.template = _.template(tpl.get('upload-form'));

        },

        render: function() { 
            var that = this;

            this.collection.fetch({
                success: function(){
                    that.renderForm();
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

        updateDate: function(){
            var date = new Date(),
                month = new Array(12);
                month[0]="Jan";
                month[1]="Feb";
                month[2]="Mar";
                month[3]="Apr";
                month[4]="May";
                month[5]="Jun";
                month[6]="Jul";
                month[7]="Aug";
                month[8]="Sep";
                month[9]="Oct";
                month[10]="Nov";
                month[11]="Dec";


            this.$('#date').val(month[date.getMonth()] + " " + date.getDate());
        },

        renderForm: function(){
            this.$el.html( this.template( this.model.toJSON() ));
            this.updateId();
            this.updateDate();
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
            _.delay( function(){ window.location = "/blogging" }, 150);
        },

        activateIdField: function(event){
            event.preventDefault();
            this.$('#id').removeAttr('readonly');
        }

    });

    return view;
});