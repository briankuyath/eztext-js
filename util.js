/*
*
* @module
* @description
* Request utils for module 
*/

var request = require('request');

module.exports = function( creds, options ) {

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
                    url = "https://app.eztexting.com/" + endPoint + '?format=' + options.format;
                break;
            }

            url += '&User=' + creds.username + '&Password=' + creds.password + '&';

            var reqMethod = 'GET';

            if( typeof params._method != 'undefined' ) {
                
                reqMethod = params._method;

                delete params._method;
            }

            if( typeof params.formEncoded != 'undefined' ) {
                
                delete params.formEncoded;

                this._sendRequestUrlEncoded(url,params,cb);
            }
            else {

                if( params ) {
                    
                    // TODO: Handle parameters. Note: This could get removed altogether.    
                    // var paramKeys = Object.keys(params);

                    // if( paramKeys.length > 0 ) {
                    //     for( var key in paramKeys ) {
                    //         url += paramKeys[key] + '=' + params[paramKeys[key]] + '&';
                    //     }
                    // }
                }

                this._sendRequest( encodeURI(url), reqMethod, params, cb);
            }

            console.log( reqMethod + " " + url );
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
            
            console.log("Form Data: ");
            console.log(formData);

            request.post({
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
                        return cb( new Error( JSON.parse( body ).Response.Errors[0] ) );
                   }
                   else {
                        return cb( new Error("Server responded with error: " + response.statusCode));
                   }                   
               }

            });
        }
        
    }

};