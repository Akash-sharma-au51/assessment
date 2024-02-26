import React, { useState } from "react";
import { db } from "../config/firebase";
import "../styles/form.css";

const Data = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);
  const [fetching, setFetching] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!data.name || !data.age || !data.salary) {
        throw new Error("Please fill in all fields.");
      }

      await db.collection("employees").add(data);
      console.log("Data added to Firestore successfully");

      setData({
        name: "",
        age: "",
        salary: "",
      });
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };

  const handleFetch = async () => {
    try {
      setFetching(true);
      const snapshot = await db.collection("employees").get();
      const employeeList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmployees(employeeList);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <div>
      <div className="head">
        <h3>New employee registration</h3>
        <p>Please enter employee details in the form</p>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            value={data.name}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            placeholder="enter your age"
            value={data.age}
            onChange={handleChange}
          />
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            name="salary"
            id="salary"
            placeholder="enter your salary"
            value={data.salary}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <div className="fetch-button">
        <button onClick={handleFetch} disabled={fetching}>
          {fetching ? "Fetching..." : "Fetch Data"}
        </button>
      </div>
        </form>
      </div>

      

      <div className="table">
        <h3>Employee Data</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
