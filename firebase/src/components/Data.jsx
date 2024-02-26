import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", data);
        setData({
            name: "",
            age: "",
            salary: ""
        });
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
