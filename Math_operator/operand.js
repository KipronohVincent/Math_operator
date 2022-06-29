let inputfield = document.getElementById("inputfield");

let operand = (number) => {
    inputfield.value += number;
}

let result = () => {
    try{
        inputfield.value = eval(inputfield.value)
    }
    catch(err){
        alert("Invalid output");
    }    
}

function clr(){
    inputfield.value = " ";
}

function del(){
    inputfield.value = inputfield.value.slice(0, -1);

}