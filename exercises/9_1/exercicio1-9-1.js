const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  };
  
  setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

  const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (callback) => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = function () {
    setTimeout(() => console.log('Mars temperature is: 30 degree Celsius'),5000) 
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo