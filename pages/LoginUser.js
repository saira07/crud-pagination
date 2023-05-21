import {TextField,Stack} from '@mui/material';
import Button  from '@mui/material/Button';
import { useState } from 'react';
import Link from 'next/link';
import Router ,{ useRouter } from 'next/router';
import axios from 'axios'
function LoginUser(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Router = useRouter();
  
  //////////////////////////////
  const handleSubmit = async ()=>
 
  
  {  var token=null;
    var data={
        "email": email,
        "password": password,

    }

    axios.post("http://localhost:2000/users/signin",  data)
        .then(function (response) {
            console.log(response.data.token);
            token=response.data.token;
           var user= response.data.user;


           

          })
          
  }
    return(
        <>
       <form>
<div className="">
             <h1>Add User</h1>
        </div>
       <Stack spacing={2} width={400}>
 
      <TextField label="Email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)}/>
      <TextField label="Password"  type="password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} />
    
      <Button type="submit"   display= 'flex'
    sx={{ padding: '16px' }} variant="contained" color="primary" onClick={handleSubmit}><Link href="/Listing">Add User</Link></Button>
    </Stack>
    </form>
        </>
    )
    }
    export default LoginUser;