//document.getElementById("count-el").innerText=5


// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch

// console.log(count)


/*
    The psuedo code
    1. initialize the count as 0
    2. listen for clicks on the increament button
    3. increment the count variable when the button is clicked 
    4. change the count-el in the HTML to reflect the new count
*/ 


// function increment(){
//     console.log("The button was clicked")
// }

function displayNum(){
    console.log(42)
}

displayNum()

let lap1=34
let lap2=33
let lap3=36

function addlaps(){
    let totalTime = lap1 + lap2+ lap3
    console.log(totalTime)
}

addlaps()
// write a function that increments
let lapsCompleted = 0

    function incrementLaps() {
        lapsCompleted +=1
        console.log(lapsCompleted)
    }

   incrementLaps()
   incrementLaps()
   incrementLaps()

   //increment onclick
   let saveEl = document.getElementById("save-el")
   let countEl = document.getElementById("count-el")
   let count = 0

   function increment() {
        count+= 1
        countEl.textContent=count
}

function save(){
    let separator = count + " - "
    saveEl.textContent += separator
    countEl.textContent = 0
    count = 0
}






//writing string variable

let username = "Temie"

let message = "You have tree new notification"

console.log(message + ",  " +username + "!" )


let messageToUser = (message + ",  " +username + "!" )
console.log(messageToUser)


let name = "Temitope"
let greeting = "Hi, my name is "
let myGreeting = greeting + name

console.log(myGreeting)

//string vs number
// console.log(4+5) //9
// console.log("2" + "4") //"2"4
// console.log("5"+1) //"51"
// console.log("100"+"100") //"100100"

//  let welcomeEl = document.getElementById("welcome-el")
//  let name2  = "Hamzat Temitope"
//  let greeting2 = "You are welcome back "

//  welcomeEl.innerText = greeting2 + name2

 
//  welcomeEl.innerText += "👋"
















