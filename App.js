var result = '';

//These methods takes two number as input from the input fields by its 'id' and 
//adds/subtracts/multiplies/divide the two number and sets it in the result field and makes the result field visible to show the result 
//and hides it when there is not result 
//validateOnClick() is a method that validates the user to enter the input values if not entered by the user and 
//directly clicked on the Add or any other button.

function Add()
{
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    if (input1 && input2)
    {
        result = input1 + input2;
        document.getElementById("result").innerHTML = result;
        document.getElementById("store-result").style.visibility = "visible";
    }
    else
    {
        validateOnClick();
    }
    
}

//Subtraction of two numbers
function Subtract()
{
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    if (input1 && input2)
    {
        result = input1 - input2;
        document.getElementById("result").innerHTML = result;
        document.getElementById("store-result").style.visibility = "visible";
    }
    else
    {
        validateOnClick();
    }
}

//Multiplication of two numbers
function Multiply()
{
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    if (input1 && input2)
    {
        result = input1 * input2;
        document.getElementById("result").innerHTML = result;
        document.getElementById("store-result").style.visibility = "visible";
    }
    else
    {
        validateOnClick();
    }
}

//Division of two numbers
//divideByZeroValidate() is a method that validates the user if there is a number divided by zero 

function Divide()
{
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    if (input2 == 0)
    {
        divideByZeroValidate(); 
    }
    else
    {
        if (input1 && input2)
        {
            result = input1 / input2;
            document.getElementById("result").innerHTML = result;
            document.getElementById("store-result").style.visibility = "visible";
        } 
        else
        {
            validateOnClick();
        }
    }
    
}

function divideByZeroValidate()
{
    alert('Denominator Cannot be zero')
    document.getElementById("result").innerHTML = '';
}

function validateOnClick()
{
    alert('Please enter the input values');
}

//Clear controls sets the input and result value to null and clears the input section
function clearControls()
{
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
    document.getElementById("result").value = '';
    document.getElementById("store-result").style.visibility = "hidden";
}

/*This method adds an event listener to the windows. beforeinstallprompt event indicates that
  your app can be 'installed', and then prompt the user to install it. homescreen is the id of the
  Add to homescreen button so onclick of that button the ev will prompt to open a popup and ask 
  the user to add the app to the homescreen*/

window.addEventListener("beforeinstallprompt", ev => { 
    
    ev.preventDefault();
    homescreen.onclick = () => ev.prompt();
    // Update UI notify the user they can add to home screen
    homescreen.style.display = 'block';
  });


  