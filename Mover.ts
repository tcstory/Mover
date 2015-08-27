// Mover对象,用于让你指定的一个对象跟踪鼠标指针的移动(也可以用于跟踪触摸屏上手指的移动)
// 使用方法:
//
"use strict";
class Mover {
    private obj:HTMLElement;
    private curX    = 0;
    private curY    = 0;
    private isClicked = false;
    private isTouched = false;

    /**
     * 传入一个DOM对象,这个对象用于跟踪鼠标指针的移动
     * @param obj DOM对象
     */
    constructor(obj) {
        this.obj = obj;
    }

    init() {
        var left = getComputedStyle(this.obj, null).left; // 返回的值是字符串
        var top = getComputedStyle(this.obj, null).top;
        if (left === '' || left === 'auto') {
            this.obj.style.left = '0px';
        } else {
            this.obj.style.left = parseFloat(left) + 'px';
        }
        if (top === '' || top === 'auto') {
            this.obj.style.top = '0px';
        } else {
            this.obj.style.top = parseFloat(top) + 'px';
        }
    }

    binds(type:string) {
        if (type === 'mouse') {
            this.obj.addEventListener('mousedown',(event)=> {
                this.isClicked = true;
                this.curX = event.clientX;
                this.curY = event.clientY;
                event.stopPropagation();
            });
            this.obj.addEventListener('mouseup', (event)=> {
                this.isClicked = false;
                event.stopPropagation();
            });
            this.obj.addEventListener('mousemove', (event)=> {
                if (this.isClicked) {
                    var diff_x = event.clientX - this.curX;
                    var diff_y = event.clientY - this.curY;
                    this.curX  = event.clientX;
                    this.curY  = event.clientY;
                    this.obj.style.left = parseFloat(this.obj.style.left) + diff_x + 'px';
                    this.obj.style.top = parseFloat(this.obj.style.top) + diff_y + 'px';
                }
                event.stopPropagation();

            })
        } else if (type === 'touch') {
            this.obj.addEventListener('touchstart', (event)=> {
                this.isTouched = true;
                this.curX = event.touches[0].clientX;
                this.curY = event.touches[0].clientY;
                event.stopPropagation();
            });
            this.obj.addEventListener('touchend', (event)=> {
                this.isTouched = false;
                event.stopPropagation();
            });
            this.obj.addEventListener('touchmove', (event)=> {
                event.preventDefault();
                if (this.isTouched) {
                    var diff_x = event.touches[0].clientX - this.curX;
                    var diff_y = event.touches[0].clientY - this.curY;
                    this.curX  = event.touches[0].clientX;
                    this.curY  = event.touches[0].clientY;
                    this.obj.style.left = parseFloat(this.obj.style.left) + diff_x + 'px';
                    this.obj.style.top = parseFloat(this.obj.style.top) + diff_y + 'px';
                }

            })
        }
    }
}
