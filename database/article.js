const {pool} = require('./db.js');

const TABLE_NAME = 'pionus_contents';

class Article {
    constructor() {

    }

    static list(page = 0) {
        page = parseInt(page) || 0;

        const PAGE_SIZE = 10;
        const queryStr = `SELECT * FROM ${TABLE_NAME} ORDER BY created DESC LIMIT ${PAGE_SIZE * page}, ${PAGE_SIZE}`;

        return pool.query(queryStr).then(([results]) => {
            return results;
        });
    }

    static byId(id) {
        const queryStr = `SELECT * FROM ${TABLE_NAME} WHERE cid = ?`;

        return pool.query(queryStr, [id]).then(([results]) => {
            // TODO
            return results[0];
        });
    }
}

module.exports = Article;
