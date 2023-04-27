
import {useState} from "react";
import './App.css';




function App() {
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [managerId, setMangerId] = useState("");
  const [salary, setSalary] = useState("");
  
  

  //fuction to handle submit action
  // add api endpoint

  let handleSubmit = async (e) => {
    e.preventDefault();
  try {
    let res = await fetch("http://localhost:5000/data" , {
    method: "POST",
    body: JSON.stringify({
      emp_id: employeeId,
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      age: age,
      phone_no: phoneNo,
      dept_id: departmentId,
      manager_id: managerId,
      salary: salary

      


    }),
  });

  
  //let resJson = await res.json();
  if (res.status === 200) {
    setEmployeeId("");
    setFirstName("");
    setLastName("");
    setGender("");
    setAge("");
    setPhoneNo("");
    setDepartmentId("");
    setMangerId("");
    setSalary("");

    

    

  
    console.log("data sent");
    console.log(res.body);
    
  }
  else {
    console.log("data not sent");
  }

} catch (err) {
  console.log(err);
}


  }


return (
  <div className="App">
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={gender}
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />

      

        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          value={phoneNo}
          placeholder="Phone No"
          onChange={(e) => setPhoneNo(e.target.value)}
        />

         <input
          type="number"
          value={departmentId}
          placeholder="Department Id"
          onChange={(e) => setDepartmentId(e.target.value)}
        />

        <input
          type="number"
          value={managerId}
          placeholder="Manager Id"
          onChange={(e) => setMangerId(e.target.value)}
        />

        <input
          type="number"
          value={salary}
          placeholder="Salary"
          onChange={(e) => setSalary(e.target.value)}
        />

        
        

        <button type="submit">Submit</button>

        
      </form>
    </div>
  );

};
    

export default App;
