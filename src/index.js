import './assets/styles/reset.css';
import './assets/styles/public.scss';
import './assets/styles/index.less';

import image from './assets/images/favicon.png';
require('jquery');
if (module.hot) {
    module.hot.accept();
}

var func = str => {
    document.getElementById('app').innerHTML = str;
};
func('我现在在使用 es6 新语法-箭头函数!');

var strHtml = "<h1>我自动添加了浏览器前缀</h1><img src='"+ image +"'/><span class='icon iconfont icon-toPay'></span>";
$(function(){
    $("#postcss").html(strHtml);
});
//document.getElementById('postcss').innerHTML = "<h1>我自动添加了浏览器前缀</h1><img src='"+ image +"'/><span class='icon iconfont icon-toPay'></span>";