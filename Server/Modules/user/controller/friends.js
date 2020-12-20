const dBUtil = require('../../../util/dbUtil');
const sql = require('../../../config/sql.json');
const getFriends = async (userId, limit, offset) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(userId, limit, offset);
            const friendsQuery = sql.getFriends.replace("%ID%", userId).replace("%LIMIT%", limit).replace('%OFFSET%', offset);
            const dbResponse = await dBUtil.fetch(friendsQuery);
            resolve(dbResponse);
        } catch (exc) {
            reject(exc);
        }
    });
};

const getFriendsCount = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const friendsCountQuery = sql.getFriendsCount.replace('%ID%', userId);
            const dbResponse = await dBUtil.fetch(friendsCountQuery);
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

module.exports.getFriends = getFriends;
module.exports.getFriendsCount = getFriendsCount;