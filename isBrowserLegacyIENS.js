"use strict";
/* global window, IMDebugger, __imns, document */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isBrowserLegacyIE' in adr)){
    /**
     * @function isBrowserLegacyIE
     * @param str {String|Boolean}
     * @return {Boolean}
     * @description - currently ony searching for LT9 rather than major minor versions
     **/
    adr.isBrowserLegacyIE = function(str){ 
        str = (str === undefined) ? true : str;
        if(str === 'LT9' || true === true){ 
            return (document.all && window.attachEvent && !window.addEventListener && window.ActiveXObject) ? true : false; }
        return false;
    };
}
