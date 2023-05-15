CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(50),
phone_number VARCHAR(20),
hire_date DATE,
job_title VARCHAR(50),
department VARCHAR(50),
manager_id INT,
salary DECIMAL(10, 2)
);
