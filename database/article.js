const {pool} = require('./db.js');

const TABLE_NAME = 'pionus_contents';

class Article {
    constructor() {

    }

    static getList(page = 0) {

    }

    static byId(id) {
        let queryStr = `select * from ${TABLE_NAME} where cid = ?`;

        return pool.query(queryStr, [id]).then(([results]) => {
            // TODO
            console.log(results)

            return results;
        })
    }
}

module.exports = Article;
