const ConvertTemp = (tempFrom,tempTo,tempInput) => {
  if(tempFrom == "cel") {
      if (tempTo == "cel") {
          return tempInput;
      }
      if (tempTo == "rea") {
          return (4 / 5) * tempInput;
      }
      if (tempTo == "far") {
          return (9 / 5) * tempInput + 32;
      }
  }
  if(tempFrom == "rea") {
      if (tempTo == "rea") {
          return tempInput;
      }
      if (tempTo == "cel") {
          return (5 / 4) * tempInput;
      }
      if (tempTo == "far") {
          return (9 / 4) * tempInput + 32;
      }
  }
  if(tempFrom == "far") {
      if (tempTo == "far") {
          return tempInput;
      }
      if (tempTo == "cel") {
          return (5 / 9) * (tempInput - 32);
      }
      if (tempTo == "rea") {
          return (4 / 9) * (tempInput - 32);
      }
  }
}

module.exports = ConvertTemp;