const loginInput = document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnClick(event){
    event.preventDefault();
    console.log("?");
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = username;
    greeting.classList.remove("hidden");
    localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", onLoginBtnClick);

const savedUsername = localStorage.getItem("username");
if (savedUsername === null){

}