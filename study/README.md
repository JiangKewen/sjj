# CSS揭秘

***
***

## 背景与边框：
***
### 半透明边框：
    外层一个色彩背景图 
    + div半透明边框 
    + div自身背景色覆盖外层背景 
    + background-clip: padding-box;
### 多层较好看边框：
    ①box-shadow：可以用逗号分隔产生多个边框，
      能产生阴影，
      没有虚线等样式，
      可以加inset将shadow加在border内部，
      可以贴合border-raduis，半圆。
    ②outline：只要一个，
      有多种线条选择，
      指定outline-offset为负数可以将边框加在border内部
      目前的outline不能贴合border-radius，直角。
### 背景定位：
    background-position, 
    + background-origin:border-box/padding-box/content-box, 
    + 以及配合calc( - )和百分比。
### 边框内圆角，外部直角：
    border-radus产生内部圆角 
    + outline外围产生直角 
    + box-shadow填补直角缝隙。
### 条纹背景：
    ①background: linear-gradient(90deg, #fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
    background-size: 100% 30px;
    ②background: #58a; （底色，同时也起到优雅降级的作用）
    background-image: repeating-linear-gradient(30deg, hsla(0,0%,100%,.1),
      hsla(0,0%,100%,.1) 15px,
      transparent 0,
      transparent 30px);
    ③background-image: radial-gradient(tan 30%, transparent 0); (径向渐变)
      background-position: 15px 15px;
    
很多好看的复杂背景图片
    [一](http://lea.verou.me/css3patterns/#)
    [二](https://bennettfeely.com/gradients/)
### 伪随机背景：
    质数的使用：
    background: hsl(20, 40%, 90%);
    background-image:
    linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 41px, transparent 0);
    background-size: 41px 100%, 61px 100%, 83px 100%;
### 背景边框
    使用两层背景
    + 背景边框的background-clip设为border-box，
    + 内部背景background-clip设为padding-box,
    + background-size: cover;background-origin: border-box;
    + border: 1px solid transparent;
