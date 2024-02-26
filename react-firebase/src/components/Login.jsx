import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
function Login() {
    const[email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const signup = async()=>{
        await createUserWithEmailAndPassword(email,password,auth)
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setemail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
}

export default Login;