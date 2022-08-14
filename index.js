const firstInput = document.getElementById("test1");
const secoundInput = document.getElementById("test2");
const equals = document.querySelector("strong");
const AC = document.getElementById('AC')
let result = document.getElementById('result')

let isSecoundInputFocused = false;


document.querySelector("span").addEventListener("click",()=>{
    secoundInput.focus();
    isSecoundInputFocused = true;
});

document.querySelectorAll("button").forEach(function (item , index){
    item.addEventListener("click", ()=>{
        isSecoundInputFocused
        ? (secoundInput.value += index)
        : (firstInput.value += index);   
    });
});

equals.addEventListener("click", ()=> {
    result.innerHTML = " "  
    result.innerHTML += parseInt(firstInput.value) + parseInt(secoundInput.value);
    
    // equals.innerHTML += result;
});
AC.addEventListener('click' , ()=>{

    location.reload()
    
})