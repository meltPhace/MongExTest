//The os model
var os = require('os');

var osModel = function () {  
  this.tmpDir = os.tmpdir();
  this.hostname = os.hostname();
  this.typeName = os.type();
  this.platform = os.platform();
  this.freememBytes = os.freemem();
  this.freememKiloBytes = os.freemem() / Math.pow(10, 3);
  this.freememMegaBytes = os.freemem() / Math.pow(10, 6);
  this.freememGigaBytes = os.freemem() / Math.pow(10, 9);
}

module.exports = osModel;