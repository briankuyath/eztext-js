/**
 * @fileoverview EZTexting REST API Wrapper.
 * 
 * A node-js wrapper.
 * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest">EZTexting REST API Documentation</a>
 *
 * Created on March 14, 2017
 * @author Brian Kuyath <bkuyath@vidscrip.com> (http://www.vidscrip.com)
 * 
 * @copyright (c) 2017 Brian Kuyath, All rights reserved.
*/

module.exports = function ( options ) {

    const MESSAGE_TYPE_SMS_EXPRESS  = 1;
    const MESSAGE_TYPE_SMS_STANDARD = 2;
    const MESSAGE_TYPE_MMS          = 3;

    const CC_TYPE_AMEX = 'Amex';
    const CC_TYPE_DISCOVER = 'Discover';
    const CC_TYPE_MASTERCARD = 'MasterCard';
    const CC_TYPE_VISA = 'Visa';

    const MSG_STATUS_TYPE_NA = 'na';
    const MSG_STATUS_TYPE_DELIVERED = 'delivered';
    const MSG_STATUS_TYPE_NO_CREDITS = 'no_credits';
    const MSG_STATUS_TYPE_BOUNCED = 'bounced';
    const MSG_STATUS_TYPE_OPTED_OUT = 'opted_out';

    const _util = require("../util.js")(options);

    /**
     * EZTexting API Node Module
     * @version 1.0.2
     * @exports eztexting/api
     * @namespace Globals
     */
    var EZTexting = {

        /**
         * Contacts API
         * 
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#CatContacts">Contacts API Documentation</a>
         * @namespace Contacts
         */

        /**
         * Create a new contact.
         * @memberof Contacts
         * @method contactCreate
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#BuyCredits">Documentation</a>
         * 
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any} 
         */
        contactCreate: function( data, cb ) {

            if( data ) {
                data._method = 'POST';
            }

            _util.buildQuery('contacts', data, function( error, data ){
                return cb(error, data);
            });
        },

        /**
         * Update an existing contact.
         * @memberof Contacts
         * @method contactUpdate
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#UpdateContact">Documentation</a>
         * 
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any} 
         */
        contactUpdate: function( id, data, cb ) {
 
            if( data ) {
                data._method = 'PUT';
            }

            console.log(data);

            _util.buildQuery('contacts/' + id, data, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Delete an existing contact.
         * @memberof Contacts
         * @method contactDelete
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#DeleteContact">Documentation</a>
         * 
         * @param {Number} id
         * @param {any} cb
         * 
         * @return {any}
         */
        contactDelete: function( id, cb ) {
 
            _util.buildQuery('contacts/' + id, { _method: 'DELETE' }, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Get all contacts.
         * @memberof Contacts
         * @method contactList
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#GetAllContact">Documentation</a>
         * 
         * @param {any} cb
         * 
         * @return {any}
         */
        contactList: function( params, cb ) {

            params._method = 'GET';

            _util.buildQuery('contacts', params, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Get a specific contact.  
         * @memberof Contacts
         * @method contactRead
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#GetContact">Documentation</a>
         * 
         * @param {Number} id
         * @param {any} cb
         * 
         * @return {any}
         */
        contactRead: function( id, cb ) {
 
            _util.buildQuery('contacts/' + id, { _method: 'GET' }, function( error, data ){
                return cb( error, data );
            });
        },
        
        /** 
         * Groups API
         * 
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#CreateGroup">Group API Documentation</a>
         * @namespace Groups
         */

        /**
         * Create a group.  
         * @memberof Groups
         * @method groupCreate
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#CreateGroup">Documentation</a>
         * 
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any}
         */
        groupCreate: function( data, cb ) {

            if( data ) {
                data._method = 'POST';
            }

            _util.buildQuery('groups', data, function( error, data ){
                return cb(error, data);
            });
        },

        /**
         * Update a group.  
         * @memberof Groups
         * @method groupUpdate
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#UpdateGroup">Documentation</a>
         * 
         * @param {Number} id
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any}
         */
        groupUpdate: function( id, data, cb ) {
 
            if( data ) {
                data._method = 'PUT';
            }

            _util.buildQuery('groups/' + id, data, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Delete a group.  
         * @memberof Groups
         * @method groupDelete
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#DeleteGroup">Documentation</a>
         * 
         * @param {Number} id
         * @param {any} cb
         * 
         * @return {any}
         */
        groupDelete: function( id, cb ) {
 
            _util.buildQuery('groups/' + id, { _method: 'DELETE' }, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Get all groups.  
         * @memberof Groups
         * @method groupList
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#GetAllGroup">Documentation</a>
         * 
         * @param {any} cb
         * 
         * @return {any}
         */
        groupList: function( cb ) {

            _util.buildQuery('groups', { _method: 'GET' }, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Get a group.  
         * @memberof Groups
         * @method groupRead
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#GetGroup">Documentation</a>
         * 
         * @param {Number} id
         * @param {any} cb
         * 
         * @return {any}
         */
        groupRead: function( id, cb ) {
 
            _util.buildQuery('groups/' + id, { _method: 'GET' }, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * SMS/Messages API
         * 
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#Sending">EZTexting SMS/MMS Messages API Documentation</a> 
         * @namespace SMS/Messages
         */

        /**
         * Send a SMS/MMS message.  
         * @memberof SMS/Messages
         * @method messageCreate
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#Sending">Documentation</a>
         * 
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any}
         */
        messageCreate: function( data, cb ) {

            if( data ) {
                data._method = 'POST';
            }

            console.log(data);
            
            _util.buildQuery('sending/messages', data, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Send a SMS Message.  
         * @memberof SMS/Messages
         * @method smsMessageCreate
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any}
         */
        smsMessageCreate: function( data, cb ) {

            data.MessageTypeID = MESSAGE_TYPE_SMS_EXPRESS;
            return this.messageCreate( data, cb );
        },

        /**
         * Send a MMS Message.  
         * @memberof SMS/Messages
         * @method mmsMessageCreate
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#Sending">Documentation</a>
         * 
         * @param {Object} data
         * @param {any} cb
         * 
         * @return {any}
         */
        mmsMessageCreate: function( data, cb ) {

            data.MessageTypeID = MESSAGE_TYPE_MMS;
            return this.messageCreate( data, cb );
        },

        /**
         * Get a message's status.  
         * @memberof SMS/Messages
         * @method messageGetStatus
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#DeliveryReport">Documentation</a>
         * 
         * @param {Number} id 
         * @param {any} cb
         *  
         * 
         * @return {any}
         */
        messageGetStatus: function( id, cb ) {
            _util.buildQuery('sending/reports/' + id, { _method: 'GET' }, function( error, data ){
                return cb( error, data);
            });
        },

        /**
         * Get a list of phone numbers with a specified status for a specified message.  
         * @memberof SMS/Messages
         * @method messageGetPhoneNumbersWithStatus
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#DeliveryReportDetail">Documentation</a>
         * 
         * @param {Number} id
         * @param {String} status
         * @param {any} cb
         * 
         * @return {any}
         */
        messageGetPhoneNumbersWithStatus: function( id, status, cb ) {

            _util.buildQuery('sending/reports/' + id + '/view-details/', { _method: 'GET', Status: status }, function( error, data ){
                return cb( error, data);
            });
        },

        /**
         * Inbox API
         * 
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#CatInbox">Inbox API Documentation</a>
         * @namespace Inbox
         */

        /**
         * Delete a message from an account's inbox.  
         * @memberof Inbox
         * @method messageGetPhoneNumbersWithStatus
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#DeleteInbox">Documentation</a>
         * 
         * @param {Number} id - The ID of the message that will be deleted.
         * @param {any} cb 
         * 
         * @return {any}
         */
        inboxMessageDelete: function( id, cb ) {
            _util.buildQuery('incoming-messages/' + id, { _method: 'DELETE' }, function( error, data ){
                return cb( error, data );
            });
        },


        /**
         * Keywords
         * 
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#CatKeywords">Keyword API Documentation</a>
         * @namespace Keywords
         */

        /**
         * Check the availability of a keyword.  
         * @memberof Keywords
         * @method keywordCheckAvailability
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#CheckKeyword">Documentation</a>
         * 
         * @param {String} keyword - The keyword that's availability will be checked. 
         * @param {any} cb 
         * 
         * @return {any}
         */
        keywordCheckAvailability: function( keyword, cb ) {
            _util.buildQuery('keywords/new?Keyword=' + keyword, { _method: 'GET' }, function( error, data ) {
                return cb( error, data );
            });
        },

        /**
         * Create a keyword.  
         * @memberof Keywords
         * @method rentKeyword
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#RentKeyword">Documentation</a>
         * 
         * @param {Object} data - Keyword and StoredCreditCard required; or Keyword, StoredCreditCard, FirstName, LastName, Street, City, State, ZIP, Country, CreditCardTypeID, Number, SecurityCode, ExpirationMonth, and ExpirationYear required.
         * @param {any} cb
         * 
         * @return {any}
         */
        rentKeyword: function( data, cb ) {

            if( data ) {
                data._method = 'POST';
            }

            _util.buildQuery('keywords', data, function( error, data ){
                return cb( error, data );
            });
        },

        /**
         * Create a keyword with a credit card that's stored in an account.  
         * @memberof Keywords
         * @method rentKeywordWithStoredCreditCard
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#RentKeyword">Documentation</a>
         * 
         * @param {String} keyword - Required. Must be available.
         * @param {Number} lastFourDigitsOfStoredCreditCard - Required. Last four digits of credit card number stored in account.
         * @param {any} cb
         * 
         * @return {any}
         */
        rentKeywordWithStoredCreditCard: function( keyword, lastFourDigitsOfStoredCreditCard, cb ) {
            return this.rentKeyword( {
                        Keyword: keyword,
                        StoredCreditCard: lastFourDigitsOfStoredCreditCard
                    }, cb );
        },

        /**
         * Create a keyword with a new credit card.  
         * @memberof Keywords
         * @method rentKeywordWithNewCreditCard
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#RentKeyword">Documentation</a>
         * 
         * @param {String} keyword - Required. Must be available.
         * @param {String} firstName - Required. Credit card holder's first name.
         * @param {String} lastName - Required. Credit card holder's last name.
         * @param {String} street - Required. Credit card holder's address.
         * @param {String} city - Required. Credit card holder's city.
         * @param {String} state - Required. Credit card holder's state.
         * @param {String} country - Required. Credit card holder's country.
         * @param {Number} ccType - Required. CC_TYPE_AMEX | CC_TYPE_DISCOVER | CC_TYPE_MASTERCARD | CC_TYPE_VISA
         * @param {Number} ccNumber - Required. A valid credit card number.
         * @param {Number} ccSecurityCode - Required. Credit card's CCV or security code. T
         * @param {Number} ccExpirationMonth - Required. Credit card's expiration month. Two digits (e.g. 01).
         * @param {Number} ccExpirationYear - Required. Credit card's expiration year. Four digits (e.g. 2020).
         * 
         * @return {any}
         */
        rentKeywordWithNewCreditCard: function( keyword, firstName, lastName, street, city, state, zipcode, country, ccType, ccNumber, ccSecurityCode, ccTwoDigitExpirationMonth, ccFourDigitExpirationYear, cb ) {
            return this.rentKeyword({
                        Keyword: keyword,
                        FirstName: firstName,
                        LastName: lastName,
                        Street: street,
                        City: city,
                        State: state,
                        ZIP: zipcode,
                        Country: country, 
                        CreditCardTypeID: ccType,
                        Number: ccNumber,
                        SecurityCode: ccSecurityCode,
                        ExpirationMonth: ccTwoDigitExpirationMonth,
                        ExpirationYear: ccFourDigitExpirationYear
                    }, cb );
        },

        /**
         * Configures a rented keyword for use.  
         * @memberof Keywords
         * @method keywordSetup
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#SetupKeyword">Documentation</a>
         * 
         * @param {Object} data - Keyword required. EnableDoubleOptIn, ConfirmMessage, JoinMessage, ForwardEmail, ForwardUrl, ContactGroupIDs optional.
         * @param {any} cb
         */
        keywordSetup: function( data, cb ) {

            if( data ) {
                data._method = 'POST';
            }

            _util.buildQuery( 'keywords/keyword', data, function( error, data ) {
                return cb( error, data );
            });
        },

        /**
         * Configures a rented keyword for use.  
         * @memberof Keywords
         * @method keywordSetup
         * @see <a href="https://www.eztexting.com/developers/sms-api-documentation/rest#SetupKeyword">Documentation</a>
         * 
         * @param {String} keyword - Required. Must be rented.
         * @param {Bool} enableDoubleOptIn - Optional. True, and the keyword will support double-opt. False, and it won't. 
         * @param {String} confirmationMessage - Optional. A message a contact will receive upon texting the keyword. (e.g. "Reply Y to join our sweetest list.")
         * @param {String} joinMessage – Optional. A message a contact will receive upon accepting the confirmation message (e.g. "Thank you for joining our sweetest list.")
         * @param {String} forwardToEmail - Optional. Must be a valid email address. Inbound messages (MO) will be forwarded to the specified email address.
         * @param {String} forwardToUrl – Optional. Must be a valid url. Inbound messages (MO) will be forwarded to the specified url. 
         * @param {Array} groups - Optional. An array of valid group ids. Contacts will be auto-joined into the specified group(s).
         * @param {any} cb 
         * 
         * @return {any}
         */
        keywordSetup: function( keyword, enableDoubleOptIn, confirmationMessage, joinMessage, forwardToEmail, forwardToUrl, groups, cb ) {
            return this.keywordSetup({
                        Keyword: keyword,
                        EnableDoubleOptIn: enableDoubleOptIn,
                        ConfirmMessage: confirmationMessage,
                        JoinMessage: joinMessage,
                        ForwardEmail: forwardToEmail,
                        ForwardUrl: forwardToUrl,
                        ContactGroupIDs: groups
                    }, cb);
        },

        /**
         * Delete (cancels) a rented keyword.  
         * @memberof Keywords
         * @method keywordDelete
         * @param {String} keyword - Required. The keyword that will be deleted.
         * @param {any} cb
         * 
         * @return {any}
         */
        keywordDelete: function( keyword, cb ) {
            _util.buildQuery( 'keywords/keyword', { _method: 'DELETE', Keyword: keyword }, function( error, data ) { 
                return cb( error, data );
            });
        },


        /**
         * Get the credit card type for American Express.  
         * @memberof Globals
         * @method getCreditCardTypeForAmericanExpress
         * @return {String} 
         */
        getCreditCardTypeForAmericanExpress: function() {
            return CC_TYPE_AMEX;
        },

        /**
         * Get the credit card type for Discover.  
         * @memberof Globals
         * @method getCreditCardTypeForDiscover
         * @return {String} 
         */
        getCreditCardTypeForDiscover: function() {
            return CC_TYPE_DISCOVER;
        },

        /**
         * Get the credit card type of MasterCard.  
         * @memberof Globals
         * @method getCreditCardTypeForMasterCard
         * @return {String} 
         */
        getCreditCardTypeForMasterCard: function() {
            return CC_TYPE_MASTERCARD;
        },

        /**
         * Get the credit card type of Visa.  
         * @memberof Globals
         * @method getCreditCardTypeForVisa
         * @return {String} 
         */
        getCreditCardTypeForVisa: function() {
            return CC_TYPE_VISA;
        },

        /**
         * Get the status type of "NA" messages  
         * @memberof Globals
         * @method getMsgStatusTypeNA
         * @return {String} 
         */
        getMsgStatusTypeNA: function() {
            return MSG_STATUS_TYPE_NA;
        },

        /**
         * Get the status type of "Delivered" messages  
         * @memberof Globals
         * @method getMsgStatusTypeDelivered
         * @return {String} 
         */
        getMsgStatusTypeDelivered: function() {
            return MSG_STATUS_TYPE_DELIVERED;
        },        

        /**
         * Get the status type of "No Credits" messages  
         * @memberof Globals
         * @method getMsgStatusTypeNoCredits
         * @return {String} 
         */
        getMsgStatusTypeNoCredits: function() {
            return MSG_STATUS_TYPE_NO_CREDITS;
        },

        /**
         * Get the status type of "Bounced" messages  
         * @memberof Globals
         * @method getMsgStatusTypeBounced
         * @return {String} 
         */
        getMsgStatusTypeBounced: function() {
            return MSG_STATUS_TYPE_BOUNCED;
        },

        /**
         * Get the status type of "Opted Out" messages  
         * @memberof Globals
         * @method getMsgStatusTypeNoOptedOut
         * @return {String} 
         */
        getMsgStatusTypeNoOptedOut: function() {
            return MSG_STATUS_TYPE_OPTED_OUT;
        },
    };

    return EZTexting;

}