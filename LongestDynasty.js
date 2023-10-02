function convertYear(roman) {
  const romanNumerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;
  let prevValue = 0;

  for (let n = roman.length - 1; n >= 0; n--) {
    const currentChar = roman[n];
    const currentValue = romanNumerals[currentChar];

    if (currentValue === undefined) {
      return "Invalid";
    }

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestDynastyName = "";
  let longestReignDuration = 0;

  for (const [name, romanYear] of Object.entries(dynastyReign)) {
    const endYear = convertYear(romanYear);

    if (endYear === "Invalid") {
      continue;
    }

    const reignDuration = endYear - 1000 + 1; // Add 1 to account for the starting year

    if (reignDuration > longestReignDuration) {
      longestDynastyName = name;
      longestReignDuration = reignDuration;
    }
  }

  return longestDynastyName;
}

// Example usage:
const dynastyReign = {
  Dynasty1: "MCMLXXIX", // 1979 - 1000 + 1 = 980 years
  Dynasty2: "MCMXCIV", // 1994 - 1000 + 1 = 995 years
  Dynasty3: "Invalid", // Invalid, should be ignored
  Dynasty4: "MCMXCVI", // 1996 - 1000 + 1 = 997 years
};

const longestDynastyName = longestDynasty(dynastyReign);
console.log("Longest reigning dynasty:", longestDynastyName);
