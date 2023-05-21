
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';

function Listing() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const Router = useRouter();
  const AddUser = Router.query.added;

  /////////////
  const fetchItems = async (page) => {
    try {
   const response = await axios.get(`http://localhost:8080/users/?limit&page=${page}`); 
      setUsers(response?.data?.users);
      setTotalPages(response?.data?.totalPages);
      console.log("res... ",response)
    } catch (error) {
      console.error('Error fetching items:', error);
      setUsers([]);
      setTotalPages(10);
    }
  };

  useEffect(() => {

    fetchItems(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    console.log(event)
    setCurrentPage(page);
    
    console.log(page)
  
    fetchItems(page);
  };
  /////////    
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {

  //       const response = await axios.get('http://localhost:8080/users');
  //       console.log(response?.data?.user);
  //       setUsers(response?.data?.user);
  //     }
  //     catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // useEffect(() => {
  
  //   console.log(users);
   
  // }), [users]




  return (

    <>

      {AddUser && AddUser}
      <h1>List Users</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">FirstName</TableCell>
              <TableCell align="left">LastName</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Password</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {users?.length > 0 && users?.map((user) => (
              <TableRow key={user?._id}>
                <TableCell>{user?._id}</TableCell>

                <TableCell>{user?.firstname}</TableCell>
                <TableCell>{user?.lastname}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.password}</TableCell>
                <TableCell>


                  <TableCell><Link href={`/Delete/${user?._id}`}>
                    <Button >Delete</Button>
                  </Link></TableCell>
                  <TableCell><Link href={`/Edit/${user?._id}`}>
                    <Button >Edit</Button>
                  </Link></TableCell>
                </TableCell>
              </TableRow>


            ))}
          </TableBody>
        </Table>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
      </TableContainer>


    </>
  );
}

export default Listing;










