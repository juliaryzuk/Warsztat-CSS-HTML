var toDelete = document.querySelectorAll('.line-box');
for (var i = 0; i <toDelete.length; i++) {
   var img1 = toDelete[0];
   var img2 = toDelete[1];
  img1.addEventListener('mouseover',function(){
  getComputedStyle(img1).opacity;
  img1.style.opacity = '0';
  })
  img1.addEventListener('mouseout',function(){
  getComputedStyle(img1).opacity;
  img1.style.opacity = '1';
  })
  img2.addEventListener('mouseover',function(){
  getComputedStyle(img2).opacity;
  img2.style.opacity = '0';
  })
  img2.addEventListener('mouseout',function(){
  getComputedStyle(img2).opacity2
  img2.style.opacity = '1';
  })
}
