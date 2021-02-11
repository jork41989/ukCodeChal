import React, {useEffect, useState} from "react";
import './ipFinder.css'
import { getLocation } from "../../util/ipLookup";
const publicIp = require('public-ip');

export default function IpCheck(){

  const [userIp, setIp] = useState("")
  const [location, setLocation] = useState({city: "", region: ""})
  const [city, setCity] = useState("")


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
        getLocation(data).then(
          locData => {
            setLocation(locData.data)
          }
        )
      } 
      )
    }
  }
  let cityBuilder = () => {
    if (location.city != "") {
      setCity(`${location.city}, ${location.region}`)
    }
  }
  useEffect(()=>{
    ipLogger()
    cityBuilder()
  })
  
  return(
    <div className="ipComonentMain">
      <p>Your IP Address is:</p>
      <p className="ipAddress">{userIp}</p>
      <p>Your in:</p>
      <p className="ipAddress">{city}</p>
      {console.log(location)}
    </div>
  )
}