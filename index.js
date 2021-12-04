const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
//   return ip;
// });

// fetchCoordsByIP("142.112.133.79", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked, Returned coordinates:", coordinates);
// });

// fetchISSFlyOverTimes(
//   { latitude: 43.9379, longitude: -79.4381 },
//   (error, passTimes) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log("It worked, Returned flyover times:", passTimes);
//   }
// );

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
