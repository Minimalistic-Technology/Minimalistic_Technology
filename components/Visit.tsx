// "use client";
// import { useEffect } from "react";

// const VisitTracker = () => {
//   useEffect(() => {
//     const checkIn = new Date();

//     const handleUnload = () => {
//       const checkOut = new Date();
//       const duration = Math.floor((checkOut.getTime() - checkIn.getTime()) / 1000);

//       const data = JSON.stringify({
//         checkIn: checkIn.toISOString(),
//         checkOut: checkOut.toISOString(),
//         duration,
//       });

//       const blob = new Blob([data], { type: "application/json" });

//       navigator.sendBeacon("http://localhost:5000/api/visit", blob);
//     };

//     window.addEventListener("unload", handleUnload);
//     window.addEventListener("beforeunload", handleUnload);

//     return () => {
//       window.removeEventListener("unload", handleUnload);
//       window.removeEventListener("beforeunload", handleUnload);
//     };
//   }, []);

//   return null;
// };

// export default VisitTracker;
