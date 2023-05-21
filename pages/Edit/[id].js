import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {TextField,Stack} from '@mui/material';
import Button  from '@mui/material/Button';
function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");

 

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users'); 
      const userData = response.data;

      // Populate the form fields with the fetched user data
      setFName(userData.fname);
      setLName(userData.lastname);
    
      // Set other user fields as needed
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const updatedUser = {
      firstname,
      lastname,
      
     
    };

    try {
      await axios.put(`http://localhost:8080/users/${id}`, updatedUser); 
     router.push('/Listing'); 
    } catch (error) {
    
      console.log('Error updating user:', error);
    }
  };

  return (
<form>
<div className="">
             <h1>Update User</h1>
        </div>
       <Stack spacing={2} width={400}>
      <TextField  value={firstname} onChange={(e) => setFName(e.target.value)} label=" First Name" variant="outlined"  />
      <TextField  value={lastname} onChange={(e) => setLName(e.target.value)} label=" Last Name" variant="outlined"  />

      <Button type="submit"  onClick={handleSubmit} display= 'flex' variant="contained" color="primary" sx={{ padding: '16px' }}>Save</Button>
    
    </Stack>
    </form>
    
  );
}

export default EditPage;

