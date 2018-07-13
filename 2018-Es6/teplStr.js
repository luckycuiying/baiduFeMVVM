// 1 模板字符串 
// 模板字符串用反引号(数字1左边的那个键)包含，其中的变量用${ } 括起来

let name = 'licuiying';
let age = 28;
// 字符串里面可嵌套变量
let result = `My name is ${name} . I am ${age} years old`;
// console.log(result); // My name is JiangWen . I am 28 years old

//2,简单实现原理： 模板字符串实现

 function replace(result) {
    return result.replace(/\$\{([^}]*)\}/g, function () {
         return eval(arguments[1]);
     });
 }
console.log(replace(result)) 
//My name is licuiying . I am 28 years old

//3,模板字符串换行
let name = 'licuiying';
let age = 28;
let userInfo = [name, age];
//字符串里面的方法 map 映射： 把老数组里面的每一个元素映射为一个新数组里面的每一个元素
let lis = userInfo.map(function (info) {
    return `<li>${info}</li>`
});
let ul = (`
    <ul>
        ${lis.join('')}
    </ul>
`);
console.log(ul);

// 4  模板标签
let name = 'JiangWen';
let age = 28;
// 存在的理由：我们可以自定义模板字符串的呈现方式
function tag(stringArr, value1, value2) {
    // ...
}

// 等同于

function tag(stringArr, ...values) {
    // ...
}
function tag(strings,...values) {
    // let values = Array.prototype.slice.call(arguments, 1);
    let result = '';
    for (let key in values) {
        result += strings[key] + values[key].toString().toUpperCase();
    }
    result += strings[strings.length - 1];
    return result;
}
//案例： 带标签的模板字符串就像一个函数调用，参数
let result = tag`My name is ${name} . I am ${age} years old`;
console.log(result);


//5,字符串的新方法
startsWith() // 判断一个字符串是否已某一个字符开头
let url = 'http://www.zhufengpeixun.cn';
let url2 = 'ftp://www.zhufengpeixun.cn'
console.log(url.startsWith('http')); //返回值是布尔值 ture/false

endsWith() // 以某个字符结尾
let img = 'file.jpg';
console.log(img.endsWith('jpg'));

includes() //字符串里面是否包含另外一个字符串
let str = 'zfpxjwzfpx';
console.log(str.includes('jw'));

epeat(); // 某一个字符在字符串里面重复的次数
let my = 'handsome';
console.log(my.repeat(10));

// 字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
// padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，
// 第二个参数是用来补全的字符串。

let start = '0';
console.log(start.padStart(8, 7)); //77777770
console.log(start.padEnd(8, 7)); // 07777777