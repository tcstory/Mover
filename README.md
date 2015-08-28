### 简介
这个类用于让页面上的一个元素跟踪屏幕上鼠标的移动(或则是在触摸屏上,跟踪手指的移动)

### 使用方法

```
var div = document.querySelector('#test');
var m = new Mover(div);
m.init(); 
m.binds('mouse'); // 让元素跟踪鼠标指针
m.binds('touch'); // 让元素跟踪触摸屏上手指的移动
```

**注意**,只能把一个`Mover`对象选择跟踪`mouse`或则`touch`中的一个,不可以同时选择两个


### changelog
1. 修了了鼠标移动过快导致与元素分离的问题


### 问题
1. ~~元素在鼠标移动过快的情况下,非常容易导致错误~~
