// Immediately Invoked Function Expressions (IIFE)


// To remove global scop pollution becouse in some time it's cause some issue that's why we use iife

(function chai(){
    console.log("Hello")

})(); // Here () this paranthises is used for calling the function


((name)=>{ 
    console.log(`Hello Two ${name}`)
})("Vishal Shukla");