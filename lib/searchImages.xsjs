var search = $.request.parameters.get("search");
var index = $.request.parameters.get("index");
if (index === undefined) {
    index = 0;
}
var dest = $.net.http.readDestination("EXTERNAL_HTTP");

var client = new $.net.http.Client();
var req = new $.web.WebRequest($.net.http.GET, "/pictures/search/?fo=json&q=" + search );
client.request(req, dest);

var response = client.getResponse();

console.log("response " + response.status);

var body = null;
if (response.body) {
    body = response.body.asString();
    console.log(body);
}
$.response.status = response.status;

if (response.status === $.net.http.INTERNAL_SERVER_ERROR) {
    $.response.contentType = "application/json";
    $.response.setBody("body");
} else {
    $.response.contentType = "text/html";
    var searchDet = JSON.parse(body);
    var outBody =
        index + " result of " + encodeURIComponent(searchDet.search.hits) + "</br>" +
        "<img src=\"" + encodeURI(searchDet.results[index].image.full) + "\">";
    $.response.setBody(outBody);
}

