export class Exchange {

  async request() {
    try {
      console.log("start convert()")
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
      return false;
    }
  }

  async convert(response, currency){
    let result;
    let array = (Object.values(response));  
    array = (Object.entries(array[7]));
    for(let i = 1; i < array.length; i++){
      for(let j = 0; j < 1; j++){
        if (currency === array[i][j]){
          result = array[i][j+1];
          return result
        } else {
          result = 1;
        }
      }
    }
    console.log(array);
    console.log(currency);
    return result;
  }

}
