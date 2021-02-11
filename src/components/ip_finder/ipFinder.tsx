import React, {useEffect, useState} from "react";
import { getLocation } from "../../util/ipLookup";
const publicIp = require('public-ip');

export default function IpCheck(){

  const [userIp, setIp] = useState("")
  const [location, setLocation] = useState({})


  let getClientIp = async () =>{
  try{  return await publicIp.v4({
  fallbackUrls: [ "https://ifconfig.co/ip" ]
})
} catch (err){
  console.log(err)
}

};
  let ipLogger = () => {
    if(userIp === ""){
      getClientIp().then(data => {
        setIp(data)
        setLocation(getLocation(data))
        console.log(location)
      } 
      )
    } 
  }
  
  return(
    <div>
      <p>Your IP Address is:</p>
      <p>{userIp}</p>
      {ipLogger()}
    </div>
  )
}