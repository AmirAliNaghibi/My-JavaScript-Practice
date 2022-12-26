 /* let a = {
//     name: "amirali",
//     age: 15,
//     family: "naghibi"
// }
// console.log(a.family)

// ماشین تویوتا
let my_cars = [
    {
        name: 'corolla',
        price: 20000,
        color: 'Gray',
        year: 2020
    },
    {
        name: '86',
        price: 27000,
        color: 'White',
        year: 2020
    },
    {
        name: 'camry',
        price: 24000,
        color: 'Red',
        year: 2021
    }
]

for(let i = 0; i < my_cars.length ;i++){
    if(my_cars[i].price > 20000){
        console.log(my_cars[i])
    }
}

// مند با دیس

// let user = {
//     name: "AmirAli",
//     family: "Naghibi",
//     website: "Naghibi.com",
//     full_name: function(){
//         return this.name + " " + this.family
//     }
// }

// console.log(user.full_name() )

// مساحت دایره

// const result = masahat_dayereh(5)
// console.log(result)

// function masahat_dayereh(radius , p = 3.14){
//     return radius * radius * p
// }

// روشی دیگر

// const result = masahat_dayereh(5 , 3.14159)
// console.log(result)

// function masahat_dayereh(radius , p){
//     p = p || 3.14
//     return radius * radius * p
// }

// محیط دایره

// const result = get_area(2)
// console.log(result)

// function get_area(Diameter , p = 3.14){
//     return Diameter * p
// }

// *destructuring Assignment*

// let [x, y] = [1, 3 + 1];
// console.log(x);
// console.log(y);

// let [g, k] = [, 3 + 1];
// console.log(g);
// console.log(k);

// let [c, , z] = [1, 3 + 1, 5];
// console.log(c);
// console.log(z);

// let [a, ...b] = [1, 3 + 1, 5, 6];
// console.log(a);
// console.log(b);

// let d = {
//     word1: "AmirAli",
//     word2: "Naghibi"
// }

// function something() {
//   return [1, 2, 3]
// }

// const a = something()
// console.log(a)

// *Rest*

// let {word1:h , word2:q} = d

// console.log(`${h} ${q}`) 

// function see(root, ...words) {
//   for (let i = 0; i < words.length; i++) {
//     console.log(`${root} ${words[i]}`);
//   }
// }

// see("Amir", "Ali", "Hesam", "Gholi"); 

// *Anonymous Function* 

// function a() {
//   console.log("Hello")
// }
// setTimeout(a, 5000) 

// //Expression Function

// const a = function (){
//     console.log("Hello")
// }

// a() 

// //Arrow Function *=>*

// setTimeout(() => {
//   console.log("hello")
// }, 3000) 

// //Array Manipulation

// const result = [1, 2, 3, 4, 5]

// result.unshift(0)
// console.log(result)
// result.shift()
// console.log(result)

// const resultPop = result.pop()
// console.log(resultPop)
// console.log(result)     */


