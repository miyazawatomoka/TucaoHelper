function set_header(details){
  headers = details.requestHeaders;
  for (i = 0; i< headers.length; i++) {
    if (headers[i].name == 'Referer') {
      var re = /\/\/www.tucao.tv\/play\//
      if (re.test(headers[i].value)){
        headers[i].value = 'http://www.tudou.com'
        return {requestHeaders: headers}
      }
    }
  }
  return
}
var address_filter = {urls: ['http://*/f4v/*']};
var opt_extraInfoSpec = ["blocking", "requestHeaders"];
chrome.webRequest.onBeforeSendHeaders.addListener(set_header, address_filter, opt_extraInfoSpec);
