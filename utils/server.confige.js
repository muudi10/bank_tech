
function setHeaders(res, path, stat){
    res.append('Access-Control-Allow-Origin', '*');
      res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.append('Access-Control-Allow-Headers', 'Content-Type');
    }