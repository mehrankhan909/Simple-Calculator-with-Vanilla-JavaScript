let string = "";
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('#display');
const mode = document.querySelector('#mode');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML === "="){
            string = eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML === "C"){
            string = "";
            display.value = string;
        }
        else if(e.target.innerHTML === "DE"){
            string = string.toString().slice(0, -1);
            display.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            display.value = string;
        }
}
    
        
)})

mode.addEventListener("click", () => {
if(mode.innerHTML === "Light Mode"){
    mode.innerHTML = "Dark Mode";
    document.body.style.backgroundColor = "#190933";
    mode.classList.add("darkMode");
    mode.classList.remove("lightMode");
    document.querySelector(".container").style.backgroundColor = "#5DD9C1";
    document.querySelector("h1").style.color = "#5DD9C1";
    document.querySelectorAll("button").style.backgroundColor = "";
}
else{
    mode.innerHTML = "Light Mode";
    document.body.style.backgroundColor = "#5DD9C1";
    mode.classList.remove("darkMode");
    mode.classList.add("lightMode");
    document.querySelector(".container").style.backgroundColor = "#190933";
    document.querySelector("h1").style.color = "#190933";
}
})
