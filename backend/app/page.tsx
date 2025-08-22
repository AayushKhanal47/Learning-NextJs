import axios from "axios"
async function getUserDetails (){
  const response = await axios.get("https://localhost3000/api/user")
  return response.data
}

export default async function Home(){
  const userDetails = await getUserDetails()
  return(
    <div>
      hi there
      {userDetails.id}
      {userDetails.type}
    </div>
  )
}