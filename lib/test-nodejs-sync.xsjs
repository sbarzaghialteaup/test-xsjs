var sam = $.require("./sam");

console.log("inizio test-nodejs-sync");

// Il metodo sync non esiste nel modulo "sam" viene aggiunto da $.require, internamente usa 
// Documentazione:
// https://www.npmjs.com/package/@sap/xsjs capitolo "NPM packages support"
// dietro alla quinte viene usato @sap/fibrous:
// https://www.npmjs.com/package/@sap/fibrous
var result = sam.sync("ciao"); 

console.log("risultato ", result);

$.response.contentType = "application/json";
$.response.setBody(result);

console.log("finito tutto");
