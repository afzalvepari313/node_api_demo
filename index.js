const express = require('express');
const { sequelize } = require('./db');
const app = express()
const port = 4646
app.use(express.json)

app.get('/', (req, res) => {
  res.send('Server is up and running')
})
app.get('/login', (req, res) => {
  res.send('You are on the login page')
})
app.get('/dashboard', (req, res) => {
  res.send('<h1> You are on Dashboard Page</h1>')
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})


// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database !!!:', error);
  }
}

testConnection();

async function getAllEmployees() {
  try {
    // Synchronize the model with the database (if not already done)
    await sequelize.sync();

    // Fetch all employees
    const [results, metadata] = await sequelize.query('EXEC GetAllPerson');

    // Log the results
    console.log('Custom Query Results:');
    console.log(results);
    console.log(metadata);

  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// Call the async function
getAllEmployees();


