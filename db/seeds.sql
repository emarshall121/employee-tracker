INSERT INTO departments (name) VALUES
('Accounting'), ('Purchasing'), ('Technology');

INSERT INTO role (title, salary, department_id) VALUES
('Site Technology Coordinator', 50000, 1), ('Education Technology Coordinator', 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Abraham', 'Lincoln', 1, 1), ('George', 'Washington', 2, null);