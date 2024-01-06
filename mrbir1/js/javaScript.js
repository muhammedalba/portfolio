var bars = document.getElementById("bars");
var list = document.getElementById("lis");
var bar = document.querySelectorAll("#bar")[0];
var links = document.querySelectorAll("#lis li  ");

   bars.addEventListener("click",()=>{
    bars.classList.toggle("active");
    list.classList.toggle("active");
    links.forEach((e)=>{
        e.classList.remove("active");})
   }) 

   links.forEach(function(e)
   {e.addEventListener("click",()=>{
    links.forEach((e)=>{
    e.classList.remove("active");})
    e.classList.add("active") ;
  })})
//   2




var lop = document.querySelectorAll("#lop div ")

lop.forEach(function(e)
{e.addEventListener("click",()=>{
 lop.forEach((e)=>{
 e.classList.remove("active");})
 e.classList.add("active") ;
})})
// 3
$(document).ready(function(){
    $('#age').each(function(){
    $(this).prop('age', 0).animate({
    counter: $(this).text()
}
,
{
    duration:4000,
    easing: 'swing',
    step:function(now){
        $(this).text(Math.ceil(now));
    }

});

});
});
$(document).ready(function(){
    $('#agee').each(function(){
    $(this).prop('age', 0).animate({
    counter: $(this).text()
}
,
{
    duration:4000,
    easing: 'swing',
    step:function(now){
        $(this).text(Math.ceil(now));
    }

});

});
});