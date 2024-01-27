let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
 
btn1.addEventListener("click", showBtn())
function showBtn(){
    if (btn2.style.display=='none' && btn3.style.display=='none') {
        btn2.style.display ='block';
        btn3.style.display ='block';
        btn2.classList.add("active");
        btn3.classList.add("active");
    }else{
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn2.style.display ='none';
        btn3.style.display ='none';
    }
}


//btn2.classList.contains("active") && btn3.classList.contains("active") == true 