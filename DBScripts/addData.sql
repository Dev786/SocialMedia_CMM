DELETE
IF EXISTS FROM TABLE friends;
DELETE
IF EXISTS FROM TABLE users;

INSERT INTO users
    (username,firstname,lastname,avatar)
VALUES
    ('dev', 'Devashish', 'Rana', 'a1');
INSERT INTO users
    (username,firstname,lastname,avatar)
VALUES
    ('him', 'Himanshu', 'Rana', 'a2');
INSERT INTO users
    (username,firstname,lastname,avatar)
VALUES
    ('meh', 'Mehak', 'Shah', 'a3');
INSERT INTO users
    (username,firstname,lastname,avatar)
VALUES
    ('ami', 'Amit', 'Chhetri', 'a3');