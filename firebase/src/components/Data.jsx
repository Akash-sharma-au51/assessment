import React, { useState } from 'react';
import { db } from "../config/firebase";
import "../styles/form.css";

const Data = () => {
    const [data, setData] = useState({
        name: '',
        age: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(db)
            
            if (!data.name || !data.age || !data.salary) {
                throw new Error("Please fill in all fields.");
            }
            
            await db.collection("employee").add(data);
            console.log('Data added to Firestore successfully');
           
            setData({
                name: "",
                age: "",
                salary: ""
            });
        } catch (error) {
            console.error('Error adding data to Firestore:', error);
        }
    };

    return (
        <div>
            <div className='head'>
                <h3>New employee registration</h3>
                <p>Please enter employee details in the form</p>
            </div>

            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='enter your name' value={data.name} onChange={handleChange} />
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" placeholder='enter your age' value={data.age} onChange={handleChange} />
                    <label htmlFor="salary">Salary</label>
                    <input type="text" name="salary" id="salary" placeholder='enter your salary' value={data.salary} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Data;
