
  let n1 = document.getElementById("num1");
  let n2 = document.getElementById("num2");
  let res = document.getElementById("Result");

document.getElementById("add").addEventListener("click", function(){
    res.value = parseInt(n1.value)+parseInt(n2.value);
});

document.getElementById("sub").addEventListener("click", function(){
    res.value = parseInt(n1.value)-parseInt(n2.value);
});

document.getElementById("Multi").addEventListener("click", function(){
    res.value = parseInt(n1.value)*parseInt(n2.value);
});

document.getElementById("divide").addEventListener("click", function(){
    res.value = parseInt(n1.value)/parseInt(n2.value);
});

document.getElementById("AC").addEventListener("click", function(){
    n1.value = parseInt(0);
    n2.value = parseInt(0);
    res.value = parseInt(0);

});
