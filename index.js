"use strict";

var xsenv = require("@sap/xsenv");
var xsjs = require("@sap/xsjs");

var port = process.env.PORT || 3000;
var options = { anonymous: true };

xsenv.loadEnv();

xsjs(options).listen(port);

console.log("Node XS server listening on port %d", port);
console.log()
console.log(`Esempio chiamata asincrona in modulo npm:`);
console.log(`http://localhost:${port}/test-request-sync.xsjs`);
console.log()
console.log(`Esempio chiamata asincrona in modulo custom locale:`);
console.log(`http://localhost:${port}/test-nodejs-sync.xsjs`);