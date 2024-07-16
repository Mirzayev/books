import {grey} from "@mui/material/colors";

const Token_key = 'authToken';


export function saveToken(token: string) {

    localStorage.setItem(Token_key, token)
}

export function getToken(): string | null {
    return localStorage.getItem(Token_key);
}


export function removeToken() {
    localStorage.removeItem(Token_key);
}

///    LEARN TYPESCRIPT

//
// type book = {
//     name: string,
//     age: number,
//     hook: boolean
// }
//
//
// let books: book[]
//
//
// books.push({
//     name: 'cnc', age: 23, hook: false,
// })


// function  sum(n1:number, n2:number):number{
//     return n1 + n2
// }
//
// sum(1,4)
// console.log(sum)

//
// let price: string | number = 38
// let good: string = 'true'

//  let consta : void  = undefined
//
//
// function hero():void{
//     return undefined
// }

// type  Sum = { n: number, user: string, who?: string}
//
//
// const add = (a:number,b:number):Sum =>{
//     return {
//         n:2,
//         user:'df',
//     }
// }


// type cars = {
//     age: number,
//     price: number,
//     company: string | null,
// }
//
//
// function MadeCar():cars {
//     return {
//         age: 23,
//         price: 3440000,
//         // company:  'BMW'
//         company: null
//     }
// }

//
// class model {
//     color: string;
//     price: number;
//     madeYear:number
//
//     constructor(color, price, madeYear) {
//         this.color = color,
//             this.price = price,
//             this.madeYear = madeYear
//
//     }
// }
//
// const model1 = new model('white', 4000, 2024)
// console.log(model1)
//
//
// const model2 = new

// class myClass {
//     name: string;
//     age: number;
//     year: number;
//     location: string;
//     isMerred: boolean;
//
//     constructor(name, age, year, location, isMerred) {
//         this.name = name,
//             this.age = age,
//             this.year = year ,
//             this.location = location,
//             this.isMerred = isMerred
//
//     }
//
// }
//
//
// class YouAbout extends myClass {
//
//     constructor(
//         name: string,
//         age: number,
//         year: number,
//         location: string,
//         isMerred: boolean) {
//         super(name, age, year, location, isMerred);
//     }
//
// }
//
// const newUser = new YouAbout('Anvar', 23, 2024, 'Navoiy', false)
