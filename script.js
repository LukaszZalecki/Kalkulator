window.onload = function(){
    calculator.click();
}

let calculator = {
    buttons: undefined,
    input: undefined,

    click: function(){
        this.buttons = document.querySelectorAll("#calculator button");
        this.input = document.getElementById("result");
        
        for(let i=0; i<this.buttons.length; i++){
            this.buttons[i].addEventListener("click", this.buttonClick);
        }
    },

    buttonClick: function(e){
        let button_value = e.target.innerHTML;
        if(button_value == "CE"){
            calculator.clearInput();
        }
        else if(button_value == "C"){
            calculator.deleteLastSymbol();
        }
        else if(button_value == "="){
            if(calculator.input.value == ""){
                alert("NIE WPROWADZONO DANYCH.");
            }
            else if (calculator.input.value[0] == "*" || calculator.input.value[0] == "/" || calculator.input.value[0] == "%"){
                alert("PIERWSZY WPROWADZONY ZNAK JEST NIEPOPRAWNY.")
                calculator.clearInput();
            }
            else{
                calculator.calculate();
            }     
        }
        else if(button_value == "LM"){
            calculator.lightMode();
        }
        else if(button_value == "DM"){
            calculator.darkMode();
        }
        else{
            calculator.toInput(button_value);
        }
        
    },

    toInput: function(str){
        calculator.input.value += str;
    },

    clearInput: function(){
        calculator.input.value = "";
    },

    deleteLastSymbol: function(){
        calculator.input.value = calculator.input.value.slice(0, -1);
    },

    calculate: function(){
        let result = math.evaluate(calculator.input.value);
        result = result.toFixed(2);
        calculator.input.value = result;
    },

    lightMode: function(){
        document.body.style.backgroundColor = "#f0ffff88"
        document.getElementById("calculator").style.backgroundColor = "antiquewhite";
        let color = document.querySelectorAll(".small-button");
        for(let i=0; i<color.length; i++){
            color[i].style.backgroundColor = "azure"
        }
        let color2 = document.querySelectorAll(".big-button");
        color2[0].style.backgroundColor = "azure";
        color2[1].style.backgroundColor = "azure";
        document.getElementById("result").style.backgroundColor = "field";
    },

    darkMode: function(){
        document.body.style.backgroundColor = "#1f1b24"
        document.getElementById("calculator").style.backgroundColor = "#121212";
        let color = document.querySelectorAll(".small-button");
        for(let i=0; i<color.length; i++){
            color[i].style.backgroundColor = "#03dac5"
        }
        let color2 = document.querySelectorAll(".big-button");
        color2[0].style.backgroundColor = "#03dac5";
        color2[1].style.backgroundColor = "#03dac5";
        document.getElementById("result").style.backgroundColor = "#bb86fc";
    }

}