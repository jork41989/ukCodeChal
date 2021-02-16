import React, { useEffect, useState } from "react";
import { ReactCustomElement } from "web-components-with-react";
import { getLocation } from "../../util/ipLookup";
import { ReactComponent as Spinner } from "./Disk-1.4s-200px.svg";
const publicIp = require("public-ip");

export default function IpCheck() {
  const [userIp, setIp] = useState("");
  const [location, setLocation] = useState({ city: "", region: "" });
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  let getClientIp = async () => {
    try {
      return await publicIp.v4({
        fallbackUrls: ["https://ifconfig.co/ip"],
      });
    } catch (err) {
      console.log(err);
    }
  };
  let loadingStatus = () => {
    if (loading) {
      return (
        <div
          style={{
            backgroundColor: "grey",
            position: "absolute",
            width: "100%",
            height: "100%",
            alignSelf: "center",
            right: "0",
            top: "0",
            
          }}
        >
          <Spinner />
        </div>
      );
    } else {
      return (
        <div>
          
        </div>
      );
    }
  };
  let ipLogger = () => {
    if (userIp === "") {
      getClientIp().then((data) => {
        setIp(data);
        getLocation(data).then((locData) => {
          setLocation(locData.data);
          setLoading(false);
        });
      });
    }
  };
  let cityBuilder = () => {
    if (location.city !== "") {
      setCity(`${location.city}, ${location.region}`);
    }
  };
  useEffect(() => {
    ipLogger();
    cityBuilder();
  });

  let styles = {
    mainStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "15%",
      borderTop: "1px solid rgba(0, 0, 0, 0.356)",
      borderRight: "1px solid rgba(0, 0, 0, 0.356)",
      borderBottom: "2px solid rgba(0, 0, 0, 0.787)",
      borderLeft: "2px solid rgba(0, 0, 0, 0.787)",
      width: "50%",
      borderRadius: "5px",
    },
    ipAddress: {
      borderTop: "1px solid rgba(0, 0, 0, 0.356)",
      borderRight: "1px solid rgba(0, 0, 0, 0.356)",
      borderBottom: "2px solid rgba(0, 0, 0, 0.787)",
      borderLeft: "2px solid rgba(0, 0, 0, 0.787)",
      borderRadius: "5px",
      padding: "5px",
      textAlign: "center",
    },
  };
  return (
    <div
      className="ipComonentMain"
      style={styles.mainStyles as React.CSSProperties}
    >
      <p>Your IP Address is:</p>
      <p className="ipAddress" style={styles.ipAddress as React.CSSProperties}>
        {userIp}
      </p>
      <p>You are in:</p>
      <p className="ipAddress" style={styles.ipAddress as React.CSSProperties}>
        {city}
      </p>
      <div id="status">{loadingStatus()}</div>
    </div>
  );
}
customElements.define("ip-check", ReactCustomElement(IpCheck));
