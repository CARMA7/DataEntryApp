const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const knex = require('knex');
require('dotenv').config();
// using bodyparser 


/*const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE,
    },
});*/

const app = express();

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello'))

app.post("/data", (req,res) => {
    const body = req.body;
    console.log(body);
    console.log(req);
    res.status(200).send(req.body); // remove this
} )

//GET: Fetch all employees from the database
/*app.get('/', (req, res) => {
    db.select('*')
        .from('public.Employee')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});*/

/*app.post('/add-employee', (req, res) => {
    const { employeeId, firstName, lastName, phoneNo,departmentId,departmentName,managerId,salary } = req.body;
    db('Employee')
        .insert({
            EmployeeId: employeeId,
            FirstName: firstName,
            LastName: lastName,
            PhoneNo: phoneNo,
            DepartmentId: departmentId,
            ManagerId: managerId,
            salary: salary,
            
        })
        .then(() => {
            console.log('Employee Added');
            return res.json({ msg: 'Employee Added' });
        })
        .catch((err) => {
            console.log(err);
        });
});*/


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));