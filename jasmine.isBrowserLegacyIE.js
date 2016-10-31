"use strict";
describe("isBrowserLegacyIE Test Suite", function(){
    var obj = {}, arr = [];
    beforeEach(function(done){
        var requireArr = [
            'dist/c/Namespace/Namespace.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });
    var __imns = function(){ return window; }
    var adr = __imns();
    it("isBrowserLegacyIE is a function", function(){ expect(typeof adr.isBrowserLegacyIE === 'function').toBe(true); });
    it("isBrowserLegacyIE: === false", function(){ expect(adr.isBrowserLegacyIE('LT9')).toBe(false); });
    it("isBrowserLegacyIE: hard change === true", function(){ 
        document.all = {};
        window.attachEvent = {};
        window.addEventListener = false;
        window.ActiveXObject = {};
        expect(adr.isBrowserLegacyIE('LT9')).toBe(true); });
});
