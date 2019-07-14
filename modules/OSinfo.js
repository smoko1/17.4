var os = require('os');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = time.format(os.uptime());
    var userInfo = os.userInfo();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type = 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU model: ', cpu);
    console.log('Uptime: ', uptime);
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;