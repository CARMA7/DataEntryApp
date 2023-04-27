import {useState} from "react";
import './App.css';
import Axios from "axios";

function App2() {
    /*const [employeeId, setEmployeeId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const [managerId, setMangerId] = useState("");
    const [salary, setSalary] = useState("");*/

    
   // const [emp_id, setEmployeeId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [ageS, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone_noS, setPhoneNo] = useState("");
    const [manager_idS, setMangerId] = useState("");
     const [dept_id, setDepartmentId] = useState("");
    const [salaryS, setSalary] = useState("");
    

    const handleSubmit = (e)=> {
      e.preventDefault();
      try{
        // parsing to integer
          const age = parseInt(ageS);
          const phone_no = parseInt(phone_noS);
          const manager_id = parseInt(manager_idS);
          const salary = parseInt(salaryS);
        //const res =  Axios.post("http://10.180.5.170:3000/employees", {
          const res =  Axios.post("http://localhost:5000/data", {
         /* emp_id: employeeId,
          first_name: firstName,
          last_name: lastName,
          gender: gender,
          age: age,
          phone_no: phoneNo,
          dept_id: departmentId,
          manager_id: managerId,
          salary: salary*/
          
          



          //emp_id,
          // first_name,
          // last_name,
          // age,
          // gender,
          // phone_no,
          // manager_id,
          // dept_id,
          // salary


          first_name,
          last_name,
          age,
          gender,
          phone_no,
          manager_id,
          dept_id,
          salary
    
        });
        console.log(res);
        //console.log(res.body);
        const onSubmit = (body) => {
          alert(JSON.stringify(res.body));
        };
    
    if (res.status === 200) {
        //setEmployeeId("");
        setFirstName("");
        setLastName("");
        setAge("");
        setGender("");
        setPhoneNo("");
        setMangerId("");
        setDepartmentId("");
        setSalary("");
    
        
    
        
    
      
        console.log("data sent");
        console.log(res.body);
        
      }
      else {
        console.log("data not sent");
      }

      
    } catch (error) {
      console.error(error);
    }
  }
  

        return (
            <div className="App">
                <form onSubmit={handleSubmit}>

               
                <label htmlFor="first_name">First Name: </label>
                  <input
                    type="text"
                    id="first_name"
                    value={first_name}
                    placeholder="First Name"
                    required
                    onChange={(e) => setFirstName (e.target.value)}
                  />
                  <label htmlFor="last_name">Last Name: </label>
                  <input
                    type="text"
                    value={last_name}
                    id="last_name"
                    placeholder="Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                   <label htmlFor="ageS">Age: </label>
                   <input
                    type="number"
                    id="ageS"
                    value={ageS}
                    placeholder="Age"
                    required
                    onChange={(e) => setAge(e.target.value)}
                  />

                  <label htmlFor="gender">Gender: </label>
                  <select
                    type="text"
                    id="gender"
                    value={gender}
                    required
                    onChange={(e) => setGender(e.target.value)} >
                  
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  </select>
                
          
      
                  <label htmlFor="phone_noS">Phone No:</label>
                  <input
                    type="number"
                    id="phone_noS"
                    value={phone_noS}
                    placeholder="Phone No"
                    required
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />

                  <label htmlFor="manager_idS">Manager Id:</label>
                  <input
                    type="number"
                    value={manager_idS}
                    placeholder="Manager Id"
                    onChange={(e) => setMangerId(e.target.value)}
                  />
          
                  <label htmlFor="dept_id">Department Id:</label>
                   <input
                    type="text"
                    id="dept_id"
                    value={dept_id}
                    placeholder="Department Id"
                    onChange={(e) => setDepartmentId(e.target.value)}
                  />
          
                  <label htmlFor="salaryS">Salary:</label>
                  <input
                    type="number"
                    id="salaryS"
                    value={salaryS}
                    placeholder="Salary"
                    required
                    onChange={(e) => setSalary(e.target.value)}
                  />
          
                  
                  
          
                  <button type="submit">Submit</button>
          
                  
                </form>
              </div>
            );
          
          };
              
          
          export default App2;