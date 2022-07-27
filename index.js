const shows1 = document.querySelector('.shows1');
const slider = document.querySelector('.slider');
const close = document.querySelector('.close-btn');
var nextSlider = document.querySelector('.next');
var prevSlider = document.querySelector('.prev');
const menu = document.querySelector('.nav-mob');
const warp = document.querySelector('.warp2');
const warpClose = document.querySelector('.close2');
const notice = document.querySelector('h3');
const button = document.querySelector('.addCard')
var img = document.querySelector('.slider-item').children;
var cart_box = document.querySelector('.cart-container');
var logo_cart = document.querySelector('.cart');

let i = 0;
let total =img.length;
button.addEventListener('click',(e)=>{
        const add = Number(notice.getAttribute('data-type' || 0));
        notice.setAttribute('data-type', add+1);
        notice.classList.add('active')
})

logo_cart.addEventListener('click',function(){
    cart_box.classList.toggle('show');
})

menu.addEventListener("click",function(){
    warp.classList.add('active');
})
warpClose.addEventListener('click',function(){
    warp.classList.remove('active');
})
nextSlider.onclick = function(){
    next('next');
}
prevSlider.onclick = function(){
    next('prev');
}
function next(direction){
    if(direction == 'next'){
        i++;
        if(i == total){
            i = 0;
        }
    }else{
        if(i == 0){
            i = total - 1;
        }else{
            i--;
        }
    }
    for(let i = 0; i < total; i++){
        img[i].classList.remove('active');
    }
    img[i].classList.add('active');
}

shows1.addEventListener('click',function(){
    slider.classList.add('display');
})
close.addEventListener('click',function(){
    slider.classList.remove('display');
})


var qty = 1;
function plus(){
    var price = document.getElementsByTagName('h2');
    qty += 1;
    document.querySelector('.addad').innerHTML = qty;
}
function minus(){
    if(qty > 1){
        qty -= 1;
    }
    document.querySelector('.addad').innerHTML = qty;
}

function photoChange(e){
   document.querySelector('.shows1').src = e;
}