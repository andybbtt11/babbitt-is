/************************************************************
 FILE: public/js/bootstrap.js
 ************************************************************/

require.config({

    paths: {

        // Libraries
        'underscore':   'lib/underscore',
        'jquery':       'lib/jquery',
        'backbone':     'lib/backbone',
        'backboneSyphon': 'lib/backbone.syphon',
        'templateLoader': 'lib/templateLoader',

        // App
        'app':      'app',
        'router':   'router',

        // Components
        'app-view-component':  'component/app/app-view-component',
        'app-view':  'component/app/view/AppView',
        'header-component':  'component/header/header-component',
        'header-view': 'component/header/view/HeaderView',
        'filter-component':  'component/filter/filter-component',
        'filter-view': 'component/filter/view/FilterView',

        'section-component' : 'component/section/section-component',
        'section-container-view' : 'component/section/view/section-container-view',
        'section-view' : 'component/section/view/section-view',
        'section-model' : 'component/section/model/section-model',
        'section-collection' : 'component/section/collection/section-collection',
        'post-component' : 'component/post/post-component',
        'post-view' : 'component/post/view/post-view',
        'post-model' : 'component/post/model/post-model',
        'post-collection' : 'component/post/collection/post-collection',
        'comments-component' : 'component/comments/comments-component',
        'comments-view' : 'component/comments/view/comments-view',
        'comments-model' : 'component/comments/model/comments-model',
        'comments-collection' : 'component/comments/collection/comments-collection',

        'upload-component' : 'component/upload/upload-component',
        'upload-view' : 'component/upload/view/upload-view',
        'comment-upload-component' : 'component/comment-upload/comment-upload-component',
        'comment-upload-view' : 'component/comment-upload/view/comment-upload-view'
    }

});

require([ 'main' ]);