let displayValue = document.getElementById('display');
let buttons = document.getElementById("buttons");
let storedValue = 0;
let operator;

function add(num1, num2){
	return num1 + num2;
}

function subtract(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

function operate(operator, num1, num2){
	switch(operator){
		case '+':
			return add(Number(num1), Number(num2));
		case '-':
			return subtract(num1, num2);
		case '*':
			return multiply(num1, num2);
		case '/':
			return divide(num1, num2);
	}
}

function setDisplay(value){
	if(typeof value === 'string'){ console.log(value); document.getElementById('display').innerHTML = value; }
	else document.getElementById('display').innerHTML = +value.toFixed(6);
}

function getDisplay(){
	return document.getElementById('display').innerHTML;
}

function clear(){
	displayValue.innerHTML = 0;
	operator = "";
	storedValue = 0;
}

function buttonPressed(e){
	let button = e.target.value;
	if(button === 'Clear'){

			clear();

	} else if(button === '+' || 
			button === '-' ||
			button === '*' ||
			button === '/'){

		if(storedValue === 0){
			storedValue = displayValue.innerHTML;
			displayValue.innerHTML = button;
			operator = button;
		} else{
			storedValue = operate(operator, storedValue, displayValue.innerHTML);
			displayValue.innerHTML = button;
			operator = button;
		}

	} else if(button === '='){
		if(operator !== "" && storedValue !== 0){
			if(operator === '/' && getDisplay() === '0'){
				setDisplay("*Universe implodes*");
				operator = "";
				storedValue = 0;
			} else{
				setDisplay(operate(operator, storedValue, displayValue.innerHTML));
				operator = "";
				storedValue = 0;
			}

		} else return;
	} else if(isNaN(button)){
		return;
	} else{
		if(displayValue.innerHTML === "0" || isNaN(displayValue.innerHTML)) { displayValue.innerHTML = ""; }
		displayValue.innerHTML += button;
	}

}

buttons.addEventListener("click", buttonPressed);