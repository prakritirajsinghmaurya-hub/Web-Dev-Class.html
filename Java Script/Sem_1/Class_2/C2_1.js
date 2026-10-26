// let arr = [4, 5, 7 , 8]
// for(let i in arr){
//     console.log(i);
// }
// for(let i of arr){
//     console.log(i)
// }

// let students={
//     name:"om",
//     age:"16",
// }
// console.log(students.age);
// console.log(students.name);

let arr=[1,2,3,4,5,[6,7,8]]
// console.log(arr[5][1]);

// for(let i=1;i<5;i++){
//     let star=''
//     for(let j=1; j<=i; j++){
//         star=star+"*"
//     }
//     console.log(star);
// }

for(let i=1; i<5; i++){
    let star=''
    let sp=''
    for(let k = 1; k<=3; k--){
        sp=sp+" "
    }
    console.log(sp);
    for(let j =1; j<=1; j++){
        star = star + "*"
    }

    console.log(star);
}