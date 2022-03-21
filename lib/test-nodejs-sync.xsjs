var sam = $.require("./sam");

console.log("inizio test-nodejs-sync");

// Il metodo sync non esiste nel modulo "sam" viene aggiunto da $.require, internamente usa 
// Documentazione:
// https://www.npmjs.com/package/@sap/xsjs capitolo "NPM packages support"
// dietro alla quinte viene usato fibrous:
// https://www.npmjs.com/package/fibrous
var result = sam.sync("ciao"); 

console.log("risultato ", result);

$.response.contentType = "application/json";
$.response.setBody(result);

console.log("finito tutto");
