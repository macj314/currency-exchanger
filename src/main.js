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
    event.preventDefault();
    if (inputNum.length === 0){
      $('#error-display').append(`Please enter a number into the first field.`);
    } else if (isNaN(inputNum) === true && inputNum.length > 0){
      $('#error-display').append(`Please only enter a number into the first field.`);
    } else {
      $('#input-display').text("You entered $" + inputNum);
    }
    if (inputCurrency.length === 0){
      $('#error-display').append(`Please enter your desired currency conversion into the second field. A list of convertable currencies are listed above.`);
    } else {
      $('#input-display').append(" and " + inputCurrency + " as your desired currency to convert to.");
    }
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
        $('#error-display').append(`There was an error handling your request.`);
        $('#error-display').append(`Please check your inputs and try again!`);
      }
    }

  });
});