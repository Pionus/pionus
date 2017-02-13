const crypto = require('crypto');
const pool = require('./db.js');

class User {
    constructor(name) {

    }

    /**
     * @param name {String} username
     * @param password {String}
     * @return Promise {Boolean}
     */
    static auth(name, password) {
        let str = `select password from pionus_users where name='${name}'`;
        console.log(str);
        return pool.query(str).then(([results]) => {
            return results[0].password == this.pwdEncode(password);
        });
    }

    static create() {

    }

    /**
     * @param pwd {String}
     * @return {String}
     */
    static pwdEncode(pwd) {
        return crypto.createHash('md5').update(pwd).digest('hex');
    }
}

module.exports = User;
