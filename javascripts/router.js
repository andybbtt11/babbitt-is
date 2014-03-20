/************************************************************
 FILE: public/js/router.js
************************************************************/

define( function( require ) {

    'use strict';

    var Backbone = require( 'backbone' );

    var Router = Backbone.Router.extend({
        loadComponent: function( component ) {
            //require([ component ], function( component ) {
                component();
            //});
        }
    });
    console.log('router.js');
    return new Router();
});