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
    [第一个](http://lea.verou.me/css3patterns/#),
    [第二个](https://bennettfeely.com/gradients/)
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
### 蚂蚁行军图
    使用动画改变背景图片的background-position,从0->100%。
    + 使用repeating-linear-gradient
    + -45deg
### 圆角
这个[按钮](http://simurai.com/archive/buttons/)真心好看
### 平行四边形
    使用变换的伪元素制作各类东西。。。总之很有用处的伪元素。
### 菱形图片
    img {
     clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
     transition: 1s clip-path;
    }
    img:hover {
     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    啊，现代的 CSS 真是乐趣无穷啊……

### 折角效果
    使用背景，background-size
    使用clip-path: polygon();

    在 2D 变形的体系之下，内部的逆向变形可以抵消外部的变形效应）

### 梯形
    伪元素配合2D3D变换，以及transform-origin: bottom/left/right/top;
### 饼图
    暂无
### 投影
    投影可以多次使用。。。
### CSS滤镜
    filter: drop-shadow(2px 2px 10px rgba(0,0,0,.5));（和box-shadow类似，但是没有inset和扩张半径）
    会给任何非透明的元素打上投影
    filter: blur() grayscale() drop-shadow();（多个滤镜一起使用）
    filter: sepia(1) saturate(4) hue-rotate(295deg);（对图片做滤镜处理）
### 毛玻璃效果
    外层div背景 + 内部玻璃div + div::before
    内部div设置background半透明 + voerflow:hidden
    内部div::before设置filter:blur(20px) + margin:-30px

    filter: none; 无
          : frayscale(1); 灰度
          : sepia(1); 褐色
          : saturate(.5); 饱和度
          : hue-rotate(90deg); 色相旋转
          : invert(1); 反色
          : opacity(.2); 透明度
          : brightness(.5); 亮度
          : contrast(2); 对比度
          : blur(3px); 模糊 √
          : drop-shadow(5px 5px 5px #ccc); 阴影
### 折书角效果
    使用背景配合伪元素产生的折角效果，emmmmmm
    加上圆角挺好看的

---------------------


