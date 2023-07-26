create database TaskDB
use TaskDB
CREATE TABLE Users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    Fullname VARCHAR(50),
    username VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50)
);
INSERT INTO Users (Fullname, username, email, password)
VALUES
    ('John Doe', 'johndoe', 'johndoe@example.com', 'password123'),
    ('Jane Smith', 'janesmith', 'janesmith@example.com', 'qwerty456'),
    ('Robert Johnson', 'robertjohnson', 'robertjohnson@example.com', 'abc123');
select * from Users
/*CREATE TABLE Project (
    id INT IDENTITY (1, 1) PRIMARY KEY,
    description VARCHAR (255) NOT NULL,
);
select * from Project

INSERT INTO Project (description) VALUES
    ('Develop mobile app for e-commerce platform'),
    ('Design website for a startup company'),
    ('Implement CRM system for a small business'),
    ('Create marketing campaign for new product launch'),
    ('Build database management system for a research project');*/
    CREATE TABLE Tasks (
    Id INT IDENTITY(1, 1),
    TaskName VARCHAR(50) NOT NULL,
    StartDate DATE,
    CloseDate DATE,
    ProjectId INT NOT NULL,
    user_id INT,
    Priority VARCHAR(50) NOT NULL, 
    Status VARCHAR(50) DEFAULT 'pending',
    PRIMARY KEY (Id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
INSERT INTO Tasks (TaskName, StartDate, CloseDate, ProjectId, user_id, Priority)
VALUES
    ('Task 1', '2023-07-22', '2023-07-25', 101, 1, 'High'),
    ('Task 2', '2023-07-23', '2023-07-26', 102, 2, 'Medium'),
    ('Task 3', '2023-07-24', '2023-07-27', 103, 1, 'Low'),
    ('Task 4', '2023-07-25', '2023-07-28', 101, 1002, 'High'),
    ('Task 5', '2023-07-26', '2023-07-29', 104, 1002, 'Medium'),
    ('Task 6', '2023-07-27', '2023-07-30', 102, 1005, 'Low'),
    ('Task 7', '2023-07-28', '2023-07-31', 105, 1006, 'High'),
    ('Task 8', '2023-07-29', '2023-08-01', 103, 1002, 'Medium'),
    ('Task 9', '2023-07-30', '2023-08-02', 101, 1002, 'Low'),
    ('Task 10', '2023-07-31', '2023-08-03', 104, 1008, 'High');