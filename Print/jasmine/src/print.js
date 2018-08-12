function check(){
  let number1 = document.getElementById('input1').value;
  let number2 = document.getElementById('input2').value;
  if(!number1){
    alert("Please enter the first number!");
    document.getElementById('input2').value = "";
  }
  else if(Number(number2) < Number(number1)){
    alert("Second number should be greater than first number");
    document.getElementById('input2').value = "";
  }
  else{
    inputNumbers();
  }
}
function inputNumbers(){
  let text = "";
  let number1 = Number(document.getElementById('input1').value);
  let number2 = Number(document.getElementById('input2').value);
  for(var i=number1; i<=number2; i++){
    text = text + print(i) + ', ';
  }
  alert(text);
}
function print(i){  
    if(i%3==0 && i%5==0)
      return 'Xpirit';
    else if(i%3==0)
      return 'Xpi';
    else if(i%5==0)
      return 'rit';
    else
      return i;
}