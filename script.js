
function appendToDisplay(value) {
      var display = document.getElementById('display');
      display.value += value;
  }
  
  
  function calculate() {
      var display = document.getElementById('display');
      try {
          display.value = eval(display.value);  
      } catch (e) {
          display.value = 'error';  
      }
  }
  
 
  function clearDisplay() {
      var display = document.getElementById('display' );
      display.value = '0';  
  }
  
  
  function delet(){
      var display = document.getElementById('display');
      display.value = display.value.slice(0, -1); 
  }
  