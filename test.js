/*jslint plusplus: true, node:true, devel: true */
/*global */

"use strict";

var run = require('./matchNumberRangeRegex.js');

console.log(run.fromTolerance(562500000, "3%", 6, false));