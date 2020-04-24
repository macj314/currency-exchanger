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

  async convert(response){
   let AED = response.conversion_rates.AED;
   return AED;
  }

}
