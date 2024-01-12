// Copyright© 2024 By SouthAki All Rights Reserved.

var navs = document.querySelectorAll("#active")
var lines = document.querySelector("#line")
// console.log(lines)
// console.log(navs)
// 定义了一个全局变量indexout,方便后面去取值计算
var indexout = 0;

// 顶部导航栏
// start
// 鼠标移入后,清除class="active"
for (var i = 0; i < navs.length; i++) {
    // 加上索引
    navs[i].setAttribute("navsindex", i);
    
    // 鼠标对焦函数
    navs[i].onmouseover = function () {
        // 获取索引
        var index = this.getAttribute("navsindex")
        lines.style.left = index * 90 + "px";
        navs[i].className = " ";
        this.className = "active";
    }
    
    // 点击事件
    navs[i].onclick = function () {
        for (var j = 0; j < navs.length; j++) {
            navs[j].className = "";
            var index = this.getAttribute("navsindex")
            lines.style.left = index * 90 + "px";
            indexout = index;
        }
        this.className = "active";
    }

    // 鼠标失焦函数onmouseout
    navs[i].onmouseout = function () {
        lines.style.left = indexout * 90 + "px"
    }
}
// end

// 音乐播放按钮
// start
var music = document.querySelectorAll("#music-icon");
// 替换为你的音频文件路径
var audio = new Audio("/img/bgm-music.mp3"); 

// 鼠标点击事件
music.onclick = function () {
    
}
// end

// 侧边栏点击收起事件
// 找到侧边栏所有元素
var sidebar = document.querySelector(".sideBar");
console.log(sidebar);
// 找到需要点击的icon,响应鼠标点击事件
var arrowIconBox = document.querySelector(".arrow-icon-box");
console.log(arrowIconBox);

// 鼠标点击事件
arrowIconBox.onclick = function () {
    console.log("点击了");
    // dom对象.classList.toggle("指定类名") 有这个指定类名就会帮我们删除这个类名,如果没有这个指定类名,就会帮我们创建类名
    sidebar.classList.toggle("folding");
}