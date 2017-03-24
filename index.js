/**
 * 
 * @module 
 * @description
 * Main entry point for EZTexting API
 *
*/

"use strict";

/**
 * @param opts {Object}
 */
module.exports = function( options ) {
    
    if ( ! options.username ) {
        throw new Exception("No username defined.");
    }
    else if ( ! options.password ) {
        throw new Exception("No password defined.");
    }

    options = options || {};

    var options = {
        apiUrl: options.apiUrl || 'https://app.eztexting.com',
        format: options.format || 'json',
        username: options.username,
        password: options.password
    };

    return require("./lib/eztexting")(options);

}

