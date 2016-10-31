"use strict";
/* global document, window */
/**
 * @function isBrowserLegacyIE
 * @param str {String|Boolean}
 * @return {Boolean}
 * @description - currently ony searching for LT9 rather than major minor versions
 **/
var isBrowserLegacyIE = function(str){ 
    str = (str === undefined) ? true : str;
    if(str === 'LT9' || true === true){ 
        return (document.all && window.attachEvent && !window.addEventListener && window.ActiveXObject) ? true : false; }
    return false; };
