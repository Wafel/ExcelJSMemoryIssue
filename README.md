# How to run
It's a NodeJS web application. It listens on port 3000 by default. Run following commands to start the app.
- npm install
- npm start

# How it works
This application exposes 3 endpoints:

http://localhost:3000/status
<br>Exposes live memory profiling.

http://localhost:3000/no-memory-issue?rowsCount=500000&columnsCount=10&sheetsCount=2
<br>Enables to trigger example process that would generate xlsx file without memory issue

http://localhost:3000/no-memory-issue?rowsCount=500000&columnsCount=10&sheetsCount=2
<br>Enables to trigger example process that would generate xlsx file with memory issue

# Results
Memory issue | No memory issue
------------ | -------------
Max memory consumed: ~600MB | Max memory consumed: ~85MB 

|![](docs/memory-issue.png)|![](docs/memory-no-issue.png)|
|![](docs/code-issue.png)|![](docs/code-no-issue.png)|