import {TextField,Stack} from '@mui/material';
import Button  from '@mui/material/Button';
import { useState } from 'react';
import Link from 'next/link';
import Router ,{ useRouter } from 'next/router';
import axios from 'axios'

const AddUser = () => {
 
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Router = useRouter();
  
  //////////////////////////////
  const handleSubmit = async ()=>
 
  
  {
     var token=null;
      var data={
          "firstname": fname,
          "lastname":lname,
          "email": email,
          "password": password,
      }
     
      alert('User added successfully!');
      await axios.post("http://localhost:8080/users/signup",  data)
          .then(function (response) {
              // console.log(response.data.token);
              token=response.data.token;

            //   var data1={
            //       "authorization": "bearer "+ token
            //   };
           

          })
          
  }


   
    

  return (
<form>
<div>
             <h1>Add User</h1>
        </div>
       <Stack spacing={2} width={400}>
      <TextField label=" First Name" variant="outlined"  onChange={(e)=>setFName(e.target.value)}/>
      <TextField label=" Last Name" variant="outlined"  onChange={(e)=>setLName(e.target.value)}/>
      <TextField label="Email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)}/>
      <TextField label="Password"  type="password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} />
    
      <Button type="submit"   display= 'flex'
    sx={{ padding: '16px' }} variant="contained" color="primary" onClick={handleSubmit}><Link href="/Listing">Add User</Link></Button>
    </Stack>
    <div>
      <div className="register__login__account">Already have account? <Link href="/Listing">Login</Link></div>
                </div>
    </form>
    


  );

}

export default AddUser;






