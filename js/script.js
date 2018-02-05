let displayValue = document.getElementById('display');
let buttons = document.getElementById("buttons");
let storedValue;
let operator;
let total;

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
			return add(num1, num2);
		case '-':
			return subtract(num1, num2);
		case '*':
			return multiply(num1, num2);
		case '/':
			return divide(num1, num2);
	}
}

function updateDisplay(value){
	document.getElementById('display').innerHTML += value;
}

function clear(){
	displayValue.innerHTML = 0;
}

function buttonPressed(e){
	let button = e.target.value;

	if(button === 'Clear'){

			clear();

	}
	else if(button === '+' || 
			button === '-' ||
			button === '*' ||
			button === '/'){
		displayValue.innerHTML = button;
		storedValue = displayValue.innerHTML;
		operator = button;

	} else if(button === '='){

		operate(operator, storedValue, displayValue.innerHTML);

	} else{

		if(displayValue.innerHTML === "0" || isNaN(displayValue.innerHTML)) { displayValue.innerHTML = ""; }
		displayValue.innerHTML += button;

	}

}

buttons.addEventListener("click", buttonPressed);