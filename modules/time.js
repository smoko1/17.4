exports.format = function(uptime) {
    if(uptime < 60) {
        return uptime + 's';
    } else if(uptime < 3600) {
        return Math.floor(uptime / 60) + 'm ' + uptime % 60 + 's';
    } else {
        return Math.floor(uptime / 3600) + 'h ' + Math.floor(uptime % 3600 / 60) + 'm ' + uptime % 3600 % 60 + 's';
    }
}