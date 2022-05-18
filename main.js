//Request prompt from user for a number and store as variable
const stringNumber = () => prompt("Choose an interger between 1 to 1000 inclusive");
const numericNumber = Math.floor(Number(stringNumber));
function checkNumber(numericNumber){
if (numericNumber >1000 || numericNumber < 1) {
     return ("ooft not in the range, try again!");
     stringNumber();
    } else if(numericNumber=== NaN){
         return("please type your interger in numbers and don't include any spaces");
         stringNumber();
    }else if(numericNumber===69){
         return ("teehee");
    }else if(numericNumber===666){
         return (":O the number of the beast");
    }else{
         return("great, let's go, your number is "+numericNumber)
    }
}
console.log(stringNumber(56));
