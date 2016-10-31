# Javascript isBrowserLegacyIE function
isBrowserLegacyIE attempts to determine if browser is less than IE9. Ideally should encompass more checks, and only check for features *not browser string*
## Usage
```
    isBrowserLegacyIE() === true || false;
```

## Methods
1. LT9 - `document.all && window.attachEvent && !window.addEventListener && window.ActiveXObject`

## Issues

* Paucity of checking
* At the moment only works for IE9 despite being written loosely with an unneeded passing variable to check for alternate versions
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
