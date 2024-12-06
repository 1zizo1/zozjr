// "use client"
// export function timeConverter(isoTime) {
//   // Validate input
//   const parsedTime = new Date(isoTime);
//   if (isNaN(parsedTime)) {
//     throw new Error("Invalid ISO time provided.");
//   }

//   const currentTime = new Date().getTime();
//   const pastTime = parsedTime.getTime();
//   const timeDifference = currentTime - pastTime;

//   // Future date handling
//   if (timeDifference < 0) {
//     return "In the future";
//   }

//   const seconds = Math.floor(timeDifference / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const months = Math.floor(days / 30.44); // More precise month length
//   const years = Math.floor(months / 12);

//   // Helper to handle singular/plural
//   const formatUnit = (value, unit) => `${value} ${unit}${value !== 1 ? "s" : ""} ago`;

//   if (seconds < 60) {
//     return formatUnit(seconds, "second");
//   } else if (minutes < 60) {
//     return formatUnit(minutes, "minute");
//   } else if (hours < 24) {
//     return formatUnit(hours, "hour");
//   } else if (days < 30.44) {
//     return formatUnit(days, "day");
//   } else if (months < 12) {
//     return formatUnit(months, "month");
//   } else {
//     return formatUnit(years, "year");
//   }
// }
