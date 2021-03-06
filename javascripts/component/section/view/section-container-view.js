define( function( require ) {

    'use strict';

    var _ = require( 'underscore' ),
        $ = require( 'jquery' ),
        Backbone = require( 'backbone' ),
        SectionCollection = require( 'section-collection' ),
        SectionView = require( 'section-view' );

    var view = Backbone.View.extend({

        events: {
            'click .sort' : 'sortByCategory'
        },

        el: $( '.list' ),

        page: 0,

        pageSize: 10,

        listAll: null,

        initialize: function() {
            var that = this;

            this.listAll = '/api';
            
        },

        render: function() {
            var that = this;

            this.collection = new SectionCollection([], { url: this.listAll + '?pageSize=10&page='+this.page });
            this.loadMoreBtn = _.template(tpl.get('load-more'));


            $('#load-more').remove();
            this.collection.fetch({
                cache: true,
                success: function(){
                    $('.loader').addClass('hidden');

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
            //TODO: Make template
            this.$el.append('<li><br/><br/><h2>I am currently updating the blog, hold tight and it will be updated soon.<br/><br/>-ab</h2></li>');
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
            } else {
                $('#load-more').remove();
            }
            
        },

        sortByCategory: function(event){
            event.preventDefault();
            var that = this;
            var sortBy = $(event.target).data('category');

            $('.sort').removeClass('active');
            $(event.target).addClass('active');

            this.listAll = '/api/' + sortBy;

            $('loader').removeClass('hidden');

            $('.list li').slice(6).remove();

            this.render();
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