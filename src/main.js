import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Exchange} from './exchange-service';
import $ from 'jquery';

$(document).ready(function() {
  let c;
  $('#btn-convert').click(function(event) {
    console.log("button press")
    // const currency = $('#input-currency').val("");
    // $('#location').val("");
    event.preventDefault();
    (async () => {
      let exchanger = new Exchange();
      const response = await exchanger.request();
      c = await exchanger.convert(response);
      getElements(response, c);
    })();

    function getElements(response, c) {
      if (response) {
        $('#output-display').text(`${response.conversion_rates.AED}`);
        $('#output-display1').text(c);
      } else {
        $('#error-display').text(`There was an error handling your request.`);
        $('#error-display').text(`Please check your inputs and try again!`);
      }
    }

  });
});