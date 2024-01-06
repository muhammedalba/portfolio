// login variable
var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.getElementById("password");
var submetbtn = document.getElementsByClassName("submetbtn")[0];

var bar = document.getElementsByClassName("bar")[0];
var list = document.getElementById("list");
var lists = document.querySelectorAll("ul li");



// 
// 

     submetbtn.addEventListener("click",()=>{
    
    var usernameStorge= username.value;
    var passwordStorge= password.value;
    var emelStorge= email.value;
    if(emelStorge!=="" && usernameStorge!=="" & passwordStorge!==""){
        
         window.localStorage.setItem("username",username.value);
         window.location.pathname="/book/index.html";
    }else{
      
     window.alert("You must log in")

    }

 })


// dark mode variable
var laight = document.getElementById("lightMode");
var darkMode = document.getElementById("darkMode");
// dark mode function
darkMode.addEventListener("click",()=>dark());
laight.addEventListener("click",()=>withemode());
// 
function dark() {
    document.documentElement.style.setProperty("--background-color","#302828");
    document.documentElement.style.setProperty("--background-card","#30282896");
    document.documentElement.style.setProperty("--text-color","#ffffff");
    document.documentElement.style.setProperty("--b-g-form","#302828");
    darkMode.style.display="none";
    laight.style.display="block";
}
//  white mode function
function withemode() {
    darkMode.style.display="block";
    laight.style.display="none";
    document.documentElement.style.setProperty("--background-color","#eeeeee");
    document.documentElement.style.setProperty("--text-color","#0a0a0a");
    document.documentElement.style.setProperty("--b-g-form","#fff");
}
// nav b-g
lists.forEach(
    function(ele){ele.onclick = 
    function(){
    lists.forEach(function(e){ e.classList.remove("active");})
    this.classList.add("active");
    
}})
// nav in mopil 
bar.addEventListener("click",()=>{
    bar.classList.toggle("activ");
    list.classList.toggle("activ");
})

