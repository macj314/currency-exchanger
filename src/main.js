import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Exchange} from './exchange-service';
import $ from 'jquery';

$(document).ready(function() {

  $('#btn-convert').click(function() {
    const currency = 'USD';
    // $('#location').val("");

    (async () => {
      let exchanger = new Exchange();
      const response = await exchanger.convert(currency);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output-display').text(`${currency} $ ${response.conversion_rates.USD}`);
      } else {
        $('#error-display').text(`There was an error handling your request.`);
        $('#error-display').text(`Please check your inputs and try again!`);
      }
    }

  });
});