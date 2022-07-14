// var firstName = "ninad"
// var lastName = "dani"
// // window
// let  info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this.firstName + this.lastName) //
//         function display2(){
//             console.log(this.firstName + this.lastName) //
//             // global
//         }
//         display2()
//     }

// }

// info.display()


var firstName = "ninad"
var lastName = "dani"
// window
let  info = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName + this.lastName) //
        let display2 = ()=>{
            console.log(this.firstName + this.lastName) //
            // global
        }
        display2()
    }

}

info.display()