/*
*
* @module
* @description
* Request utils for module 
*/

var request = require('request');

module.exports = function( options ) {

    return {

        /**
         * @param endPoint {string}
         * @param params {Object}
         * @param cb {any}
         */
        buildQuery: function( endPoint, params, cb ) {

            var url;
            
            // Always encode for now
            params.formEncoded = '1'

            switch(options.api) {
                case 'http' :
                break;
                case 'rest':
                default:
                    url = options.apiUrl.replace(/\/?$/, '/') + endPoint + '?format=' + options.format;
                break;
            }

            url += '&User=' + options.username + '&Password=' + options.password + '&';

            this._sendRequestUrlEncoded(url,params,cb);
        },

        /*
        * @param url {string}
        * @param method {Object}
        * @param cb {any}
        */
        _sendRequest: function( url, method, cb ) {

            request({
                url: url,
                method: method,
            },
            function(error, response, body){

                if(error){
                    cb(error);
                }

                if(response.statusCode == 200 || response.statusCode == 201 ){
                    return cb(null, body);
                }
                else {
                    console.log(response);
                    return cb( new Error("Server responded with error: " + response.statusCode + ' => ' + response.body) );
                }
            });

        },

        /*
        * @param url {string}
        * @param formData {Object}
        * @param cb {any}
        */
        _sendRequestUrlEncoded: function( url, formData, cb ) {

            if( formData && ! formData._method ) {
                formData._method = 'GET';
            }

            console.log( "Route: ", formData._method + ' ' + url );
            console.log( "Form Data: ", formData );

            request({
                method: formData._method,
                url: url,
                formData: formData
            }, function(error, response, body){

               if(error){
                   return cb(error);
               }

               if( response.statusCode == 200 || response.statusCode == 201 ) {
                   return cb(null, body);
               }
               else {

                   var data = JSON.parse(body);



                   if( data && data.Response && data.Response.Errors ) {
                        return cb( {
                            message: data.Response.Errors[0],
                        }, data.Response );
                   }
                   else {
                        return cb( new Error( "Server responded with error: " + response.statusCode));
                   }                   
               }

            });
        }
        
    }

};