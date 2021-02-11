const publicIp = require('public-ip');

export default function IpCheck(){
  let getClientIp = async () => await publicIp.v4({
  fallbackUrls: [ "https://ifconfig.co/ip" ]
});
  let ipLogger = () => {
    console.log(getClientIp())
  }
  
  return(
    <div>
      Hello World
      {ipLogger()}
    </div>
  )
}