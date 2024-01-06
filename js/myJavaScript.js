// // loading
 window.onload=()=>{
    let spinners = document.getElementById("spinners");
    
setTimeout(()=>{
    spinners.classList.add("hidden");
setTimeout(()=>{spinners.remove()},500)
   },500)
   }



var bar = document.getElementsByClassName("bar")[0];
var list = document.getElementById("list");
var lists = document.querySelectorAll("ul li");
lists.forEach(
    function(ele){ele.onclick = 
    function(){
    lists.forEach(function(e){ e.classList.remove("active");})
    this.classList.add("active");
    
}})

// dark mode
var text = document.getElementsByClassName("test")[0];
var nav = document.querySelector("nav");
var modes = document.querySelectorAll("#modes span");
var dark = document.getElementById("darkMode");
var laight = document.getElementById("lightMode");
var about = document.getElementById("aboutBackground");
var degree = document.getElementById("degree");
var foter = document.getElementById("foter");
var list = document.getElementById("list");
var links =document.body.querySelectorAll("a ");
var bars =document.body.querySelectorAll("#bar span");
var body = document.body;
laightmode = 1;
modes.forEach((e)=>{
    e.addEventListener("click",()=>{
 if(laightmode === 1){
     laightmode = 0;
    //  dark mode
     laight.style.cssText="transform:scale(1);margin-right:5px ; background-color: white";
     dark.style.cssText="transform:scale(0);margin-left:5px";
    //  style
    // body.style.cssText="background-color:#003566;color:white";
    // about.style.cssText="background-color:#001d3d ; color:white";
    // nav.style.cssText="background-color:#001d3d ; color:white";
    // foter.style.cssText="background-color:#001d3d;color:white";
    //  degree.style.cssText="background-color:#001d3d ; color:white";
    //  text.style.backgroundColor="#001d3d";
     body.style.cssText="background-color:rgb(22, 26, 29) ; color:rgb(255, 255, 255) ";
     about.style.cssText="background-color:rgb(7, 7, 7) ; color:rgb(255, 255, 255) ";
     nav.style.cssText="background-color:rgb(7, 7, 7) ; color:rgb(255, 255, 255) ";
     list.style.cssText="background-color:rgb(7, 7, 7) ; color:rgb(255, 255, 255) ";
     foter.style.cssText="background-color:rgb(7, 7, 7) ; color:rgb(255, 255, 255) ";
      degree.style.cssText="background-color:rgb(7, 7, 7) ; color:rgb(255, 255, 255) ";
      text.style.backgroundColor="#070707";
        // links
        links.forEach((e)=>{e.style.color="white"})
        bars.forEach((el)=>{el.style.backgroundColor="white";})
    }else{
        // laight mode
      laightmode = 1; 
      laight.style.cssText="transform:scale(0);margin-right:5px";
      dark.style.cssText="transform:scale(1);margin-left:5px";
     
    //   background Color
    list.style.cssText="background-color:rgb(238, 238, 238) ; color:rgb(0, 0, 0)";
      degree.style.cssText="background-color:rgb(255, 255, 255) ; color:rgb(0, 0, 0)";
      about.style.cssText="background-color:rgb(255, 255, 255) ; color:rgb(0, 0, 0)";
      body.style.cssText="background-color:rgb(238, 238, 238) ; color:rgb(0, 0, 0)";
       nav.style.cssText="background-color:rgb(238, 238, 238) ; color:rgb(0, 0, 0)";
       text.style.backgroundColor="rgb(238, 238, 238)";
       foter.style.cssText="background-color:rgba(65, 90, 119, 0.18);color:rgb(255, 255, 255)";
       bars.forEach((el)=>{el.style.backgroundColor="rgb(0, 0, 0)";})
          // links
          links.forEach((e)=>{e.style.color="rgb(0, 0, 0)"})
    }
    })
}) 



bar.addEventListener("click",()=>{
    bar.classList.toggle("activ");
    list.classList.toggle("activ");
})




// down

// jquery
// $(document).ready(function(){
//     $('#age').each(function(){
//     $(this).prop('age', 0).animate({
//     counter: $(this).text()
// }
// ,
// {
//     duration:4000,
//     easing: 'swing',
//     step:function(now){
//         $(this).text(Math.ceil(now));
//     }

// });

// });
// });  




// //////////
document.documentElement.style.setProperty("--span-color","red");
// ///////////

// skill frame
window.onscroll = function(){
    var textscale =document.getElementById("text-scale");
    var imgcover = document.getElementById("img-cover");
    // console.log(window.scrollY );
    if(window.scrollY >= 1135.77978515625){
i = 0    
var bit = document.querySelectorAll("div progress");        
bit.forEach(function(e){ 
    if (i == 0){
    var id = setInterval(frame,150);
       function frame(){
            if (e.value == +e.textContent){
                clearInterval(id);
               i = 1 ;
            }
            else {      
                e.value++
                
            }
            }}

});
    }
    if(window.scrollY >= 600 ){
        imgcover.style.height = "0" ;
        textscale.style.transform = "scale(1)";
        

}
 
        
};
    // degree
    var img = document.querySelectorAll(".degree img");
    var newimg = document.getElementById("newimg");
    var degreeImg = document.getElementById("degreeImg");
    var exit = document.getElementById("exit");
  img.forEach((e)=>{
    e.addEventListener("click",()=>{
        degreeImg.style.transform="scale(1)"
        newimg.src= e.src;
        newimg.alt= e.alt;
        console.log(newimg);
    })
    
  })
  exit.onclick=()=>{degreeImg.style.transform="scale(0)",console.log(5);};
  
