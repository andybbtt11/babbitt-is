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
                    //that.collection.sort();
                    _.delay( function() { that.appendItems(); },150);
                    console.dir(that.collection.models);
                }   
            });

            return this;
        },

        appendItems: function(){
            var that = this;
            var amount = this.collection.models.length;

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