export default function Logo({ type = "default" }) {


  const logoDefault = <img src="/images/logo.svg" alt="logo" />;
  const logoMuted = <img src="/images/logo-muted.svg" alt="muted logo" />;

  let logo;

  if (!type || type == "default") {
    logo = logoDefault;
  } else if (type == "muted") {
    logo = logoMuted;
  }

  return logo;
}
// import { useState, useEffect } from "react";


// export default function Logo({ type = "default" }) {


//   const [logoType, setLogoType] = useState(type)

//   const path ={
//     default : "/images/logo.svg",
//     muted   : "/images/logo-muted.svg"
//   }

//   useEffect(() => {
//     setLogoType(type);
//   }, [type]);

//   return (
//     <img
//     src={path[logoType]} 
//     alt="Logo"
//     />
//   )
// }