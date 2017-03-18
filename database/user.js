const crypto = require('crypto');
const {pool} = require('./db.js');

const TABLE_NAME = 'pionus_users';

class User {
    constructor(name) {

    }

    /**
     * @param name {String} username
     * @param password {String}
     * @return Promise {Boolean}
     */
    static auth(name, password) {
        let queryStr = `select password from ${TABLE_NAME} where name = ?`;

        return pool.query(queryStr, [name]).then(([results]) => {
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
