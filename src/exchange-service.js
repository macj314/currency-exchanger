import $ from 'jquery';
export class Exchange {

  async request() {
    try {
      console.log("start of request");
      let response = await fetch(`https://prime.exchangerate-api.com/v5//latest/USD`);
      // let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(err) {
      $('#error-display').append(err + '<br />');
    }
  }

  async convert(response, currency, num){
    try {
      console.log("start of convert");
      let result;
      let array = (Object.values(response));  
      array = (Object.entries(array[7]));
      for(let i = 1; i < array.length; i++){
        for(let j = 0; j < 1; j++){
          if (currency === array[i][j]){
            num *= array[i][j+1];
            result = currency + ": " + num;
            return result;
          } else {
            result = false;
          }
        }
      }
      console.log(array);
      console.log(currency);
      return result;
    } catch(err) {
      $('#error-display' ).append(err + '<br />');
      if(isNaN(num) === true){
        $('#error-display' ).append("Please only enter a number into the first field." + '<br />');
      }
    }
  }  
}
