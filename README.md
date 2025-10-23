CREATE DATABASE testdb;
USE testdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(200)
);

INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com'),
       ('Bob', 'bob@example.com');


copilot-playwright-mcp/
│
├── db/
│ └── connection.js # MySQL connection setup
│
├── tests/
│ ├── dbtest.spec.js # Test: Read users from MySQL
│ ├── alice.spec.js # Test: Check user "Alice" exists
│ ├── ui-login.spec.js # Test: Login UI (example.com)
│ ├── ui-login-db.spec.js # Test: Login with DB verification
│
├── login.html # Local login test file
├── package.json
├── playwright.config.js
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sudeep-07/playwright-mysql-tests.git
cd playwright-mysql-tests

2️⃣ Install dependencies
npm install

3️⃣ Set up MySQL database

Run these commands in your MySQL terminal:

CREATE DATABASE testdb;
USE testdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(200)
);

INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com'),
       ('Bob', 'bob@example.com');

4️⃣ Verify database connection

Update db/connection.js if needed:

host: 'localhost',
user: 'root',
password: 'YOUR_PASSWORD',
database: 'testdb'

5️⃣ Run tests

To run all tests:

npx playwright test


To run a specific test:

npx playwright test tests/dbtest.spec.js

✅ Example Output
Running 4 tests using 4 workers

✓ Read users from MySQL database
✓ Verify user Alice exists in table
✓ Local login UI test
✓ Login with DB verification

4 passed (7.1s)

👤 Author

Sudeep Patil
📧 sudeepaa3007@gmail.com
