const mysql = require('mysql');
const dbConfig = require('../config/dbConfig.json');

const fetch = (query) => {
    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(dbConfig);
        conn.connect((err) => {
            if (err) {
                reject({
                    success: false,
                    message: "Error occured: " + err,
                    data: []
                });
            }

            conn.query(query, (err, result, fields) => {
                if (err) {
                    reject({
                        success: false,
                        message: "Error occured: " + err,
                        data: []
                    });
                }
                resolve({
                    success: true,
                    message: "Fetch Successful",
                    data: result
                });
                conn.destroy();
            });
        });
    });
}

module.exports.fetch = fetch;