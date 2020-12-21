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


### The Following are the endpoints for the backend