function sayForecast(day, conditions) { // primary
  console.log('The weather ' + day + ' will be ' + conditions + '.');
}

function bar(day) { // generator
  return function(weather) { // applicator
    sayForecast(day, weather);
  };
}
