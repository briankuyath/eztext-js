/**
 * 
 * @module 
 * @description
 * Main entry point for EZTexting API
 *
*/

"use strict";

/**
 * @param creds {Object}
 * @param opts {Object}
 */
module.exports = function( creds, opts ) {
    
    if( ! creds ) {
        throw new Exception("No creds defined.");
    }
    else if ( ! creds.username ) {
        throw new Exception("No username defined.");
    }
    else if ( ! creds.password ) {
        throw new Exception("No password defined.");
    }

    opts = opts || {};

    var options = {
        version: opts.version || 'v1',
        format: opts.format || 'json',
        formEncoded: opts.formEncoded || '1'
    };

    return require("./lib/eztexting")(creds, options);

}

