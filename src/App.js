import './App.css';

function calculateReward(){
    var inputValue = document.getElementById('input_field').value;
    var outputField = document.getElementById('output_field');


    if(inputValue > 50)
    {
        if(inputValue > 100)
        {
            outputField.value = ((inputValue - 100) * 2) + 50;
            return outputField.value;
        }
        outputField.value = (inputValue - 50);
        return outputField.value;
    }
    outputField.value = "No points earned, sorry!"
    return outputField.value;
}

function testCalculateFunction(){
    var input = document.getElementById('input_field');
    var outputField = document.getElementById('output_field');

    input.value = 43;
    var output = "less than or equal to 50 is nothing: 43 -> " + calculateReward();
    alert(output);

    input.value = 50;
    output = "less than or equal to 50 is nothing: 50 -> " + calculateReward();
    alert(output);

    input.value = 51;
    output = "greater than 50 and up to 100 is * 1 points: 51 -> " + calculateReward();
    alert(output);

    input.value = 100;
    output = "greater than 50 and up to 100 is * 1 points: 100 -> " + calculateReward();
    alert(output);

    input.value = 101;
    output = "greater than 100 is * 2 points plus the * 1 from 51 - 100: 101 -> " + calculateReward();
    alert(output);

    input.value = 500;
    output = "greater than 100 is * 2 points plus the * 1 from 51 - 100: 500 -> " + calculateReward();
    alert(output);

    input.value = "";
    outputField.value = "";
}

function App() {
  window.onload = testCalculateFunction;
  return (
    <div className="App">
        <div id="output_div"></div>
        <button id="execute" onClick={calculateReward}>
            Calculate
        </button>
        <input id="input_field" placeholder="input amount spent here"></input>
        <input id="output_field" disabled></input>
    </div>
  );
}

export default App;
