CREATE TABLE USERS 
    (userId INT NOT NULL PRIMARY KEY IDENTITY (1,1), 
    firstName VARCHAR(200) NOT NULL,
    lastName VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE , 
    password VARCHAR(200), 
    role VARCHAR(200) DEFAULT 0)