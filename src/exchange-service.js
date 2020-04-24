export class Exchange {

  async convert() {
    try {
      console.log(process.env);
      // let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/${currency}`);
      // let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(err) {
      return false;
    }
  }
}
