function getInfo() 
{ 
var s = ""; 
s=document.documentElement.clientWidth +"可见区域宽度";
console.log(s);
s=document.documentElement.clientHeight +"可见区域高度";
console.log(s);
s = " 网页可见区域宽：" +document.body.clientWidth; 
console.log(s);
s = " 网页可见区域高：" +document.body.clientHeight; 
console.log(s);
s = " 网页可见区域宽：" +document.body.offsetWidth +" (包括边线和滚动条的宽)"; 
console.log(s);
s = " 网页可见区域高：" +document.body.offsetHeight +" (包括边线的宽)"; 
console.log(s);
s = " 网页正文全文宽：" +document.body.scrollWidth; 
console.log(s);
s = " 网页正文全文高：" +document.body.scrollHeight; 
console.log(s);
s = " 网页被卷去的高(ff)：" +document.body.scrollTop; 
console.log(s);
s = " 网页被卷去的高(ie)：" +document.documentElement.scrollTop; 
console.log(s);
s = " 网页被卷去的左：" +document.body.scrollLeft; 
console.log(s);
s = " 网页正文部分上：" +window.screenTop; 
console.log(s);
s = " 网页正文部分左："+ window.screenLeft; 
console.log(s);
s = " 屏幕分辨率的高："+ window.screen.height; 
console.log(s);s = " 屏幕分辨率的宽：" +window.screen.width; 
console.log(s);
s = " 屏幕可用工作区高度：" +window.screen.availHeight; 
console.log(s);
s = " 屏幕可用工作区宽度：" +window.screen.availWidth;
console.log(s);

s = " 你的屏幕设置是 " +window.screen.colorDepth+ " 位彩色"; 
console.log(s);
s = " 你的屏幕设置 "+ window.screen.deviceXDPI+ " 像素/英寸"; 
console.log(s);
var a=window.screen.availHeight-70;
var a=a+"px";
$("#bg").css( "height",a);
//alert (s); 
} 
getInfo(); 