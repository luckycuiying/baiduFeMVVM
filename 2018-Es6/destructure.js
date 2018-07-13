// 解构： 分解一个对象的结构

let arr = [1,2,3,4];
let a = arr[1];
let b = arr[2];
let c = arr[3];
let d = arr[4];
//1，结构条件： 等号的两边的结构相似。 右边还必须是一个真实的值。
let [a,b,c,d] = arr;
console.log(a,b,c,d) // 1,2,3,4 转义成es5 就是上面的形式


let arr1 = [{name:'张三',age:9},[2,3,4],5];
//第一种 结构处每一个值 如下：
let [{name,age},[e,f],g] = arr1
console.log(name, age, e, f, g) //张三 9 2 3 5

//第二种解构出来的是整个对象和数组，数字
let[json,arr3,k] = arr1;
console.log(json, arr2, k)//{ name: '张三', age: 9 } [ 2, 3, 4 ] 5

//第三种解构出来的想使用别名
let obj1 ={name:'张三',age:9}
let {name, age} = obj1;  console.log(name,age) // 张三 9

let {name:myName, age:myAge} = obj1;
// 原理： let myNane = obj1.name;  let myAge = obj1.age;
console.log(myName, myAge)

//2, 默认解构 ： 如果能取出来值就用取出来的值，取不出来就用默认值

let obj2 = {name:'zhangsan'};
let { name ,age=0} = obj2;
console.log(name, age) //zhangsan 0

// 3, 省略赋值
let arr4 = [2,4,6,];
let[,,c] = arr4;
console.log(c) //6