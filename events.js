var fs = require('fs');
var rs = fs.createReadStream('./README.md');
rs.on('open', function () {
  console.log('The file is open');
});