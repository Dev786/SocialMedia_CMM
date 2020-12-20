const express = require('express');
const router = express.Router();
const userController = require('./controller/user');
const friendsController = require('./controller/friends');

router.get('/all/:limit/:offset', async (req, res) => {
    try {
        const limit = req.params.limit;
        const offset = req.params.offset;
        const users = await userController.getAllUsers(limit, offset);
        if (users.success)
            res.status(200).send(users);
        else
            res.status(500).send(users);
    } catch (exc) {
        res.status(500).send(users);
    }
});

router.get('/:userId/friends/:limit/:offset', async (req, res) => {
    try {
        const userId = req.params.userId;
        const limit = req.params.limit;
        const offset = req.params.offset;
        const friends = await friendsController.getFriends(userId, limit, offset);
        if (friends.success)
            res.status(200).send(friends);
        else
            res.status(500).send(friends);
    } catch (exc) {
        res.status(500).send(exc);
    }
});

router.get('/:userId/totalFriends', async (req, res) => {
    try {
        const userId = req.params.userId;
        const friendsCont = await friendsController.getFriendsCount(userId);
        if (friendsCont.success)
            res.status(200).send(friendsCont);
        else
            res.status(500).send(friendsCont);
    } catch (exc) {
        res.status(500).send(exc);
    }
});

router.get('/totalUsers', async (req, res) => {
    try {
        const usercount = await userController.getUsersCount();
        if (usercount.success)
            res.status(200).send(usercount);
        else
            res.status(500).send(usercount);
    } catch (exc) {
        res.status(500).send(exc);
    }
});


module.exports = router;