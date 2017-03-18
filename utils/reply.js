const statuses = require('statuses');

function message(code = 200, data) {
    this.status = code;

    let res = {
        code,
        message: statuses[code],
    };

    if(data) {
        if(code == 200) res.data = data;
        else res.message = data;
    }

    this.body = res;
}

module.exports = message;
