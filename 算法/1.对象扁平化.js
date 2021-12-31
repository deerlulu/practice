// 实现一个 flatten 函数，实现如下的转换功能
const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};

let flatten = (obj) => {
  let result = {}

  let process = (key, value) => {
    // 首先判断是基础数据类型还是引用数据类型
    if(Object(value) !== value) {
      //基础数据类型
      if(key) {
        result[key] = value
      }
    } else if(Array.isArray(value)) {
      for(let i = 0; i < value.length; i++) {
        process(`${key}[${i}]`, value[i])
      }
      if(value.length === 0) {
        result[key] = []
      }
    } else {
      let objArr = Object.keys(value);
      objArr.forEach(item => {
        process(key ? `${key}.${item}` : `${item}`, value[item])
      });
      if(objArr.length === 0 && key) {
        result[key] = {}
      }
    }
  }
  process('', obj)
  return result
}

console.log(flatten(obj))