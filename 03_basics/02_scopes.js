
//{} = this is the scope
//var c = 300;
 let a = 300;
if(true){
    let a = 10;
    const b = 20;
    //var c = 30;
    //console.log(" inside " ,a);
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "vishal";
    function two(){
        const website = "YouTube";
        console.log(username);
    }
    // console.log(website);

    two();
}
//one();

if(true){
    const username = "Vishal shukla";
    if(username === "Vishal shukla"){
        const website = " YouTube";
        //console.log(username + website);
    }
    //console.log(website);

}
//console.log(username);


//*************************************Intresting*************************** */
console.log(addOne(5));
function addOne(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2;
}
addTwo(5);


