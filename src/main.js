import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Exchange} from './exchange-service';
import $ from 'jquery';

$(document).ready(function() {
  $('#btn-convert').click(function(event) {
    console.log("button press")
    const inputNum = parseInt($('#input-number').val());
    const inputCurrency = $('#input-currency').val();
    // $('#location').val("");
    event.preventDefault();
    (async () => {
      let exchanger = new Exchange();
      const response = await exchanger.request();
      let convertNum = await exchanger.convert(response, inputCurrency, inputNum);
      getElements(response, convertNum);
    })();

    function getElements(response, convertNum) {
      if (response) {
        $('#output-display1').text("Currently Expecting a value of ~ 36.73 | " + convertNum);
      } else {
        $('#error-display').text(`There was an error handling your request.`);
        $('#error-display').text(`Please check your inputs and try again!`);
      }
    }

  });
});