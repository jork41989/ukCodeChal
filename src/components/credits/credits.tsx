export default function Credits() {

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "10px",
          alignItems: "center",
        }}
      >
        <p>Tools Used</p>
        <a
          href="https://github.com/sindresorhus/public-ip#readme"
          target="_blank"
        >
          Public-IP
        </a>
        <a href="https://ipapi.co/" target="_blank">
          ipapi
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "10px",
          alignItems: "center",
        }}
      >
        <p>My Links</p>
        <a href="https://jordanackerman.com/#/" target="_blank">
          Personal Site
        </a>
        <a href="https://github.com/jork41989" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}