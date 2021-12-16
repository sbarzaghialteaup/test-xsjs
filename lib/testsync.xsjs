var request = $.require('request');
try {
  var response = request.sync('http://google.com');
  $.response.setBody(response.body);
} catch(error) {
  $.trace.error(error.message);
}