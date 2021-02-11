import React, {useEffect, useState} from "react";
const publicIp = require('public-ip');

export default function IpCheck(){

  const [userIp, setIp] = useState("")


  let getClientIp = async () => await publicIp.v4({
  fallbackUrls: [ "https://ifconfig.co/ip" ]
});
  let ipLogger = () => {
    getClientIp().then(data => setIp(data))
    console.log(userIp)
  }
  
  return(
    <div>
      Hello World
      {ipLogger()}
    </div>
  )
}