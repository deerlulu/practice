// function fn(a, c) {
//   console.log(a) // function a() {}
//   var a = 123   
//   console.log(a) // 123
//   console.log(c) // function c() {}
//   function a() {}
//   if(false){
//     var d = 678
//   }
//   console.log(d) //undefined
//   console.log(b) //undefined
//   var b = function () {}
//   console.log(b) // function b
//   function c() {} 
//   console.log(c) // function c() {}
// }

// fn(1,2)

//1.创建AO对象 2.找形参数和变量声明作为AO对象的属性名，值为undefined 3.实参和形参相统一 4.找函数声明，会覆盖变量的声明

//预编译
// AO = {
//   a: undefined  1  function a() {}
//   c: undefined  2  function c() {}
//   d: undefined  
//   b: undefined
// }

//js解释执行,逐行执行

function test(x,x){
  console.log(x);  // function x(){}
  x = 10;
  console.log(arguments);  // [Arguments] { '0': 5, '1': 10 }
  function x(){}
  }
  
  test(5,20);

  // AO = {
  //   x: undefined 5 function x(){}
  // }