document.addEventListener('DOMContentLoaded', function() {
    function calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    }
function calc(num1, num2, operator) {
var result = calculate(parseInt(num1), parseInt(num2), operator);
document.getElementById('res').value = result;
 }
 document.getElementById('b1').addEventListener('click', function() {
calc(document.getElementById('op1').value, document.getElementById('op2').value, '+');
});
    document.getElementById('b2').addEventListener('click', function() {
calc(document.getElementById('op1').value, document.getElementById('op2').value, '-');
   });
    document.getElementById('b3').addEventListener('click', function() {
calc(document.getElementById('op1').value, document.getElementById('op2').value, '*');
 });
    document.getElementById('b4').addEventListener('click', function() {
calc(document.getElementById('op1').value, document.getElementById('op2').value, '/');
    });
});
