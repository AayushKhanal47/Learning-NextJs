import axios from "axios"
async function getUserDetails (){
  const response = await axios.get("https://backend.aayushkhanal810.workers.dev/api/v1/userDetails")
  return response.data
}

export default async function Home(){
  const userDetails = await getUserDetails()
  return(
    <div>
      hi there
      {userDetails.email}
      {userDetails.password}
    </div>
  )
}