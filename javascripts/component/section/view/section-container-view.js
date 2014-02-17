define( function( require ) {

    'use strict';

    var _ = require( 'underscore' ),
        $ = require( 'jquery' ),
        Backbone = require( 'backbone' ),
        SectionCollection = require( 'section-collection' ),
        SectionView = require( 'section-view' );

    var view = Backbone.View.extend({

        events: {
        },

        el: $( '.list' ),

        page: 0,

        pageSize: 10,

        initialize: function() {
            var that = this;

            this.collection = new SectionCollection([], { url: '/api?pageSize=10&page='+this.page });
            this.loadMoreBtn = _.template(tpl.get('load-more'));
            
        },

        render: function() {
            var that = this;

            this.collection.fetch({
                success: function(){
                    if(that.collection.models.length == 0){
                        that.appendUpload();
                    } else {
                        that.appendItems()
                    }
                }   
            });

            return this;
        },

        appendUpload: function(){
            this.$el.append('<br/><br/><h2>No Content</h2><li>The list is empty, if you are the site admin, use the <a href="/upload">Upload</a> form to add content</li>');
        },

        appendItems: function(){
            var that = this;
            var amount = this.collection.models.length;
            console.log(amount);
            _.each( this.collection.models, function( model ){
                var sectionView = new SectionView({ model: model });
                that.$el.append( sectionView.render() );
            }, this);

            if( amount >= this.pageSize ){
                this.loadMore();   
            }
            
        },

        loadMore: function(){
            var that = this;

            this.$el.append( this.loadMoreBtn );

            $('#load-more').click( function(e){
                e.preventDefault();
                that.page = that.page + 1;
                that.collection = new SectionCollection([], { url: '/api?pageSize=10&page=' + that.page });
                that.render();
                $(this).remove();
            });
        }

    });

    return view;
});