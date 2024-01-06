// import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";


var bar = document.getElementsByClassName("bar")[0];
var list = document.getElementById("list");
var lists = document.querySelectorAll("ul li");
// dark mode variable
var laight = document.getElementById("lightMode");
var darkMode = document.getElementById("darkMode");
  // cart variable
  var tbody =document.getElementById("tbody");
  var total =document.getElementById("total");
  var cartLingth =document.getElementById("cartLingth");
  var CartClick =document.getElementById("CartClick");
  var table =document.getElementById("table");
  var exit =document.getElementById("exit");
  CartClick.addEventListener("click",()=>table.classList.toggle("CartClick"))
  exit.addEventListener("click",()=>table.classList.toggle("CartClick"))
  // login
  var getuser=window.localStorage.getItem("username");
console.log(getuser);
  if( getuser === null ){
   
    window.location.pathname="/login.html"
}

// books data variable
var books =[
  {
    id:1,
    title:"mockingbird",
    imegs:[
      {
        src:"https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP.uSGv8IIUI1ESQLiHet8XgQAAAA?pid=ImgDet&w=194&h=287&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP._DHzPNnVsYMaHNp3j7Mv4AHaKx?pid=ImgDet&w=207&h=302&c=7",
      },
    ],
    price:50,
  },
  {
    id:2,
    title:"math",
    imegs:[
      {
        src:"https://th.bing.com/th/id/OIP.s68NwfOLaK2hN2K0tQ9TgwHaKl?pid=ImgDet&w=207&h=296&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP._uzMg5IiQMHut_tGtv4_YAHaJA?rs=1&pid=ImgDetMain",
      },
      {
        src:"https://th.bing.com/th/id/OIP.KwZoQllM63UkQOf0N2SxGwAAAA?pid=ImgDet&w=207&h=270&c=7",
      },
    ],
    price:40,
  },
  {
    id:3,
    title:"president",
    imegs:[
      {
        src:"https://th.bing.com/th/id/OIP.BWzEQnp3718MVOZBp08GTwHaLb?pid=ImgDet&w=201&h=311&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.EEbAHWuyC_FwnPKJHkSE5gAAAA?pid=ImgDet&w=201&h=310&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.m_VbrgXT3IEYEWxHN4FFfwHaLa?pid=ImgDet&w=201&h=310&c=7",
      },
    ],
    price:80,
  },
  {
    id:4,
    title:"DetMain",
    imegs:[
      {
        src:"https://th.bing.com/th/id/OIP.oE7rPHovcI0j70qCmHdo6QHaLH?rs=1&pid=ImgDetMain",
      },
      {
        src:"https://th.bing.com/th/id/OIP.DWHgEjyy8CYt5IkGIZCx3QAAAA?pid=ImgDet&w=207&h=275&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.5ghfxm1EJchGmbrYzgx1fgHaL9?pid=ImgDet&w=197&h=318&c=7",
      },
    ],
    price:40,
  },
  {
    id:5,
    title:"annaKarenina",
    imegs:[
      {
        src:"https://th.bing.com/th/id/OIP.rlSDEbXrXJ53V5ITcl96EQAAAA?rs=1&pid=ImgDetMain",
      },
      {
        src:"https://th.bing.com/th/id/OIP.C1O73nsejUNu1Cnw3xHaBwAAAA?pid=ImgDet&w=197&h=283&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.-Z2zvsVKYwrtfepEnK0CPgAAAA?pid=ImgDet&w=207&h=280&c=7",
      },
    ],
    price:45,
  },
  {
    id:6,
    title:"anne withan",
    imegs:[
      {
        src:"https://i.pinimg.com/236x/bc/1a/13/bc1a13f5d9be7907b13793fb264a5233.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP._bUJ8a0o2o5cJz7W-CtydgAAAA?pid=ImgDet&w=143&h=177&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.urgNADie_p8vheVZt0hSTgAAAA?pid=ImgDet&w=147&h=212&c=7",
      },
    ],
    price:40,
  },
  {
    id:7,
    title:"claire messud",
    imegs:[
      {
        src:"https://th.bing.com/th/id/OIP.EHXJsVAeP36zYB8S9WErkQHaK7?rs=1&pid=ImgDetMain",
      },
      {
        src:"https://th.bing.com/th/id/OIP.9n5FDeTej_MvwkIY5VHdBwAAAA?pid=ImgDet&w=204&h=306&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.vap7fVOlLbFT-vo9WQypTQHaHa?pid=ImgDet&w=207&h=207&c=7",
      },
    ],
    price:65,
  },
  {
    id:8,
    title:"math",
    imegs:[
      {
        src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328859814l/1103456.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP.8DsFkmDoM554zD6Ni0b6TwAAAA?pid=ImgDet&w=197&h=295&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.8DsFkmDoM554zD6Ni0b6TwAAAA?pid=ImgDet&w=197&h=295&c=7",
      },
    ],
    price:13,
  },
  {
    id:9,
    title:"the great alone",
    imegs:[
      {
        src:"https://img.youm7.com/ArticleImgs/2018/8/10/72562-%D8%B1%D9%88%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85-%D8%A8%D9%85%D9%81%D8%B1%D8%AF%D9%87.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP.uhzG5oq0r8rIhhC1wBLuZQHaJ7?pid=ImgDet&w=207&h=276&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.Z9a3HHzIcuGuX4o6nUNSLQHaEK?pid=ImgDet&w=207&h=116&c=7",
      },
    ],
    price:35,
  },
  {
    id:10,
    title:"pre-woek",
    imegs:[
      {
        src:"https://i.pinimg.com/736x/ff/4d/9a/ff4d9a12d4c2fa25b33bd2359ba4908f.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP.vrK3zcv4iaaeyn9zb3ibzgAAAA?pid=ImgDet&w=196&h=318&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.XjKMHcD0qMwpq30UdZ63uAHaD4?pid=ImgDet&w=207&h=108&c=7",
      },
    ],
    price:23,
  },
  {
    id:11,
    title:"rdwan athor",
    imegs:[
      {
        src:"https://shaqhaf.com/media/thumbs/books/book19-06-2021-07-44-32.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP.dhc4s-qjDQ5n-yTlYgC9LAAAAA?pid=ImgDet&w=187&h=283&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP.9wD0gdvRUKjUwjGrrWjvsgAAAA?pid=ImgDet&w=207&h=138&c=7",
      },
    ],
    price:75,
  },
  {
    id:12,
    title:"Arts history",
    imegs:[
      {
        src:"https://1.bp.blogspot.com/-AGzKQrVy4_M/Vp_SRdJa-4I/AAAAAAAAGPw/4ack9qCdtVk/s1600/BOOK%2B91_01.jpg",
      },
      {
        src:"https://th.bing.com/th/id/OIP.zDiUHlbag6XnOx1hAPegUAAAAA?pid=ImgDet&w=207&h=301&c=7",
      },
      {
        src:"https://th.bing.com/th/id/OIP._MgpuTF-z7LzV7MOlh9LMgHaEK?pid=ImgDet&w=207&h=116&c=7",
      },
    ],
    price:100,
  },
  ] ;
// 
// cart Array
var cart=[];

// 
var container=document.querySelector("#bookshadwo");
// filter variable
var search= document.getElementById("search");
var AvailableBooks= document.getElementById("AvailableBooks");
var filterBook= document.getElementById("filterBook");

// onchang
search.addEventListener("change",(e)=>frlterBook(e));
window.onload= ()=>{

  // books
  booksShwo();
 
  }

// nav b-g
lists.forEach(
    function(ele){ele.onclick = 
    function(){
    lists.forEach(function(e){ e.classList.remove("active");})
    this.classList.add("active");
    
}})


// dark mode function
darkMode.addEventListener("click",()=>dark());
laight.addEventListener("click",()=>withmode());
// 
function dark() {
    document.documentElement.style.setProperty("--background-color","#302828");
    document.documentElement.style.setProperty("--background-card","#30282896");
    document.documentElement.style.setProperty("--text-color","#ffffff");
    darkMode.style.display="none";
    laight.style.display="block";
}
//  white mode function
function withmode() {
    darkMode.style.display="block";
    laight.style.display="none";
    document.documentElement.style.setProperty("--background-color","#eeeeee");
    document.documentElement.style.setProperty("--text-color","#0a0a0a");
    document.documentElement.style.setProperty("--background-card","wihte");
}





// nav in mopil 
bar.addEventListener("click",()=>{
    bar.classList.toggle("activ");
    list.classList.toggle("activ");
})

// booksShwo function
  
 function booksShwo() {
  books.map((e)=>{
  return (container.innerHTML += `
  
<div id="widget"   class="card " style="width: 18rem;">
  <div  id="carouselExampleAutoplaying${e.id}" class="carousel slide slider" data-bs-ride="carousel">
<div class="carousel-inner h-100 w-100">
          
  <div class="carousel-item active h-100 w-100">
      <img src=${e.imegs[0].src} class="d-block h-100 w-100" alt="...">
  </div>
  <div class="carousel-item  h-100 w-100">
  <img src=${e.imegs[1].src} class="d-block h-100 w-100" alt="...">
</div>
<div class="carousel-item  h-100 w-100">
<img src=${e.imegs[2].src} class="d-block h-100 w-100" alt="...">
</div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying${e.id}"" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying${e.id}"" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

    <div id="cartBtn">
    <span>${e.price}$</span>
    <a  onclick="addtocart(${e.id})" id="btnSerch" class="btn ">buy now</a>
    
    </div>

  </div>
</div>`);

  })
  ScrollReveal().reveal('#widget',{ duration: 1000 ,origin: 'left',distance: '1000px',scale: 1.4  },);
}

 var price=[];

//  cartShadwo
function cartShadwo() {
  
cart.map((e,index)=>{
    return tbody.innerHTML+=`
    <tr id="count" >
       <th  scope="row">${index+1}</th>
        <td >
        <img id="image"src="${e.imegs[0].src}"/>
        </td>
        <td id="title">${e.title}</td>
        <td id="price"><span id="total">${e.price}</span> $</td>   
        <td onclick="handeldelet(${index})" id="delet"><i class="fa-solid fa-trash-can"></i> </td>
    </tr>`
    
  })
  cartLingth.innerHTML=cart.length;
  if(cart.length > 0){
    table.classList.add("CartClick")
  }else{
    return tbody.innerHTML=`
    <tr id="count" >
       <th  scope="row"></th>
     
        <td id="title">There are no products</td>
       
    </tr>`
  }
}

// addtocart
function addtocart(id) {
  
  const book=books.find((el)=>el.id === id);
  var inclu=true;
 cart.map((e)=>e.id === id? inclu=false:inclu=true);
  
  if(inclu ){
    
    cart.push(book);
    tbody.innerHTML="";
    price.splice(0);
    cartShadwo() ;
   

    cart.map((e)=>{return price.push(e.price)})

    hendeltotal();
    
  } 

 

  




  
}

// handeldelet
function handeldelet(id) {

cart.splice(id,1);
price.splice(id,1);


  tbody.innerHTML=""
  cartShadwo() ;
  hendeltotal();
  
}
// hendeltotal
function hendeltotal() {
var pricetotle= price.reduce((acc,ind)=>{return acc+ind},0)
total.innerHTML=pricetotle;

}


// filter function
function frlterBook(e){
  filterBook.style.borderBottom="1px solid var(--span-color)";
  AvailableBooks.innerHTML="Available Books";
  AvailableBooks.style.borderBottom=" 1px solid var(--span-color)";
var value =e.target.value;
 var bookTitle = books.filter((el) => el.title.toLocaleUpperCase() === value.toLocaleUpperCase());
 bookTitle.map((e)=>{
  return (filterBook.innerHTML += `
<div class="card" style="width: 18rem;">
  <div  id="carouselExampleAutoplaying${e.id}" class="carousel slide slider" data-bs-ride="carousel">
<div class="carousel-inner h-100 w-100">
          
  <div class="carousel-item active h-100 w-100">
      <img src=${e.imegs[0].src} class="d-block h-100 w-100" alt="...">
  </div>
  <div class="carousel-item  h-100 w-100">
  <img src=${e.imegs[1].src} class="d-block h-100 w-100" alt="...">
</div>
<div class="carousel-item  h-100 w-100">
<img src=${e.imegs[2].src} class="d-block h-100 w-100" alt="...">
</div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying${e.id}"" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying${e.id}"" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <span>${e.price}$</span>
    <a href="" id="btnSerch" class="btn ">Go detiles</a>

  </div>
</div>`);

  })

}
// login style
var username =document.getElementById("username");
var login =document.getElementById("login");
var out =document.getElementById("out");
var helo =document.getElementById("helo");
out.addEventListener("click",()=>window.localStorage.clear())
 var usernameInLocal =window.localStorage.getItem("username");
if(usernameInLocal !== null){
  username.innerText=usernameInLocal;
  login.style.display="none";
  out.style.display="block";
  helo.style.display="block";

}else{
  login.style.display="block";
  out.style.display="none";
  helo.style.display="none";
}


// ScrollReveal().reveal('#widget', {});