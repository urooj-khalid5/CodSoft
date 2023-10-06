var result = document.getElementById("result");

function display(Number){
    result.value += Number;
}

function calculate(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}
function clr(){
    result.value = "";

}

function Dlet(){
    result.value = result.value.slice(0, -1);
}
