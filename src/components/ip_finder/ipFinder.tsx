import React, {useEffect, useState} from "react";
import { ReactCustomElement } from 'web-components-with-react';
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
  let styles = {
    mainStyles: {
      display: 'flex', 
      flexDirection: "column",
      alignItems: 'center',
      marginTop: '40%',
      borderTop: '1px solid rgba(0, 0, 0, 0.356)',
      borderRight: '1px solid rgba(0, 0, 0, 0.356)',
      borderBottom: '2px solid rgba(0, 0, 0, 0.787)',
      borderLeft: '2px solid rgba(0, 0, 0, 0.787)',
      width: '50%',
      borderRadius: "5px"
    },
  ipAddress: {
  borderTop: '1px solid rgba(0, 0, 0, 0.356)',
  borderRight: '1px solid rgba(0, 0, 0, 0.356)',
  borderBottom: '2px solid rgba(0, 0, 0, 0.787)',
  borderLeft: '2px solid rgba(0, 0, 0, 0.787)',
  borderRadius: '5px',
  padding: '5px',
  width: '40%',
  textAlign: 'center',
}


  }
  return(
    <div className="ipComonentMain" style={styles.mainStyles as React.CSSProperties}>
      <p>Your IP Address is:</p>
      <p className="ipAddress" style={styles.ipAddress as React.CSSProperties}>{userIp}</p>
      <p>You are in:</p>
      <p className="ipAddress" style={styles.ipAddress as React.CSSProperties}>{city}</p>
    </div>
  )
}
customElements.define('ip-check', ReactCustomElement(IpCheck));