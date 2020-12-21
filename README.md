# Simple Application Containing backend and frontend code to fetch users and show in UI

#### Snippet of page showing all users
![Image of Users](https://github.com/Dev786/SocialMedia_CMM/blob/main/Demo%20Images/Users%20View.PNG)

#### Clicking on show friends will give you friends of user
![Image of Show Friends](https://github.com/Dev786/SocialMedia_CMM/blob/main/Demo%20Images/Friends.PNG)


### Steps to Run the Application

1. download mysql server
2. Run Scripts presend in Server/DBScripts. In following Sequence
   1. changeTheNativePasswordUsingMySQL.sql -- this is required as the mysql package cannot use the hash provided by default by mysql
   2. create_db_tables.sql -- this creates the table for the application
   3. addData.sql -- this adds data for the user and friends
3. To Run Server - Go To Server folder and type "node main.js" in cmd
4. To Run Client - Go to Client folder and type "ng serve" in cmd

### The Following are the endpoints for the backend
##### All Endpoints USE GET Http Method

1. http://127.0.0.1:3000/user/all/{limit}/{offset} - This will give you all users present in DB, the limit and offset are used for pagination. The integration is not provided in frontend due to lack of time
2. http://127.0.0.1:3000/user/totalUsers - This will give the total count of user
3. http://127.0.0.1:3000/user/{userId}/friends/{limit}/{offset} - This will give the total friends for a user, again offset and limit are for pagination
4. http://127.0.0.1:3000/user/1/totalFriends - This endpoint gives the total friends for a uses