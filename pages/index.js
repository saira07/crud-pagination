import Link from 'next/link';

const Index=()=>{
  return(
    <>
     <nav>
      <ul>
        <li>
          <Link href="/Listing">
           Listing
          </Link>
        </li>
        <li>
          <Link href="/AddUser">
            AddUser
          </Link>
        </li>
        <li>
          <Link href="/LoginUser">
            LoginUser
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )

}
export default Index;