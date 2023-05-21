import { useRouter } from 'next/router';
import axios from 'axios';

const DeleteUser = () => {

const router = useRouter();
const { id } = router.query;

const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:8080/users/${id}`);
   router.push("/Listing")
  } catch (error) {
    console.log('Error deleting user:', error);

  }
}

  return (
    <div>
      <h1>Delete User</h1>
      <p>Are you sure you want to delete this user?</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteUser;