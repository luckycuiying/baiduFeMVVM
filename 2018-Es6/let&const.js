// ES6新增了let和const来声明变量，来解决以前var声明变量所出现的问题。
//  1, var可以重复声明变量
// 2, var拥有变量提升
// 3,var不支持块级作用域
// 4,var不能用于定义常量
//Es6 转成Es5
//https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYewTgBAFANgpgFwgSwgXggBgNwogHggGZdkBqMgSggG8AoCRiAZ0QBVkBbOEAVwShRqaAHy0GTSQGMQAO2Yh4AOhggA5lGTUA9NqwAaAIz6ATBMYBffREOY7lbHToWgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=

// 1.1 重复定义变量
let name = 'licuiying';
let name = 'licuiying'; // Identifier 'name' has already been declared

let和const都不支持在同一个作用域下重复定义变量


// 1.2 不存在变量提升
console.log(name);
let name = 'licuiying';// ReferenceError: name is not defined
在使用name变量时需要先定义才能进行使用

// 1.3 块级作用域 #
//在用var定义变量的时候，变量是通过闭包进行隔离的，现在用了let，不仅仅可以通过闭包隔离，还增加了一些块级作用域隔离。 块级作用用一组大括号定义一个块,使用 let 定义的变量在大括号的外面是访问不到的,并且let声明的变量不会污染全局作用域
if (true) {
    let name = 'licuiying';
}
console.log(name); // ReferenceError: name is not defined

//1.4 定义常量 : 定义了之后不能改
const PI = 3.14;
PI = 3.15; // TypeError: Assignment to constant variable

// 虽然说常用不能在引用别的对象， 但是它的值如果是一个引用类型的话，引用的属性值还是可以修改
const SCHOOL = { name: 'cuiying' };
SCHOOL.name = 'li';
不能给常量重新赋值, 如果是引用空间的话可以进行修改


// 应用场景

for (var  i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // 2,2,2
    }, 1000);

}

// 解决方案
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // 0,1,2
    }, 1000);

}

//解决原理：

"use strict";

var _loop = function _loop(i) {
    setTimeout(function () {
        console.log(i); // 0,1,2
    }, 1000);
};

for (var i = 0; i < 3; i++) {
    _loop(i);
}