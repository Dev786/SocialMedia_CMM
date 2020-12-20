const dBUtil = require('../../../util/dbUtil');
const sql = require('../../../config/sql.json');
const getAllUsers = (limit, offset) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUserQuery = sql.getAllUsers.replace("%LIMIT%", limit).replace('%OFFSET%', offset);
            const dbResponse = await dBUtil.fetch(allUserQuery);
            if (dbResponse.success) {
                resolve(dbResponse);
            } else {
                reject(dbResponse);
            }
        } catch (exc) {
            reject(exc);
        }
    });
};

const getUsersCount = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const usersCountQuery = sql.getUsersCount;
            const dbResponse = await dBUtil.fetch(usersCountQuery);
            if (dbResponse.success) {
                resolve(dbResponse);
            } else {
                reject(dbResponse);
            }
        } catch (exc) {
            reject(exc);
        }
    });
};

module.exports.getAllUsers = getAllUsers;
module.exports.getUsersCount = getUsersCount;