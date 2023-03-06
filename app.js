AOS.init();

let ImgBox=document.getElementById('ImgBox');
let left=document.getElementById('left');
let right=document.getElementById('right');
let img=document.getElementById('img1');
let arr_imgs=['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg','imgs/4.jpg','imgs/5.jpg'];

let index=1;

function slippage(){
  img.src=arr_imgs[index];
  index=++index%5;
}

let pause=setInterval(slippage,2000);
ImgBox.addEventListener('mouseover',function(){
  clearInterval(pause);
});
ImgBox.addEventListener('mouseout',function(){
  pause=setInterval(slippage,2000);
});

left.addEventListener('click',function(){
  index=--index%5;
  if(index<0)index+=5;
  img.src=arr_imgs[index];
});

right.addEventListener('click',function(){
  index=++index%5;
  img.src=arr_imgs[index];
});


