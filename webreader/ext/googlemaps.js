(function( global ) {
    "use strict";

    // Google Maps
    // ---
    //
    // Async load of google maps API.

    var API_KEY = AS.config.get( 'extensions.auth.googlemaps.key' ) || null,
        url = '//maps.googleapis.com/maps/api/js';

    // Build query string
    var qs = {
        v: '3.exp',
        callback: 'AS.googleMapsInit'
    };

    if ( API_KEY ) {
        _.extend( qs, {
	        key: API_KEY
        } );
    }

    /**
     * Loading maps api asynchronously requires a callback be specified as a query parameter
     */
    AS.googleMapsInit = function() {
        console.log( 'Google Maps Loaded' );
        AS.extensions.add( 'Geolocation' );
    }

    if(API_KEY){
        AS.bootstrap._injectJS(url + '?' + $.param( qs ), true);
    }

})( this );