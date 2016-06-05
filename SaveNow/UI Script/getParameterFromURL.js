function getParameterFromURL(_parm) { 
  var params = window.location.search.substr(1).split('&');
 
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
	if (p[0] == _parm) {
	  return decodeURIComponent(p[1]);
	}
  }
  return false;
}