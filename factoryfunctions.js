console.log("Testing factory functions!!!");
console.log("Factorys create objects and return them");
console.log("Factorys are much simpler and less convoluted than classes");

const dog = () =>{
    const sound = 'woof';
    return{
        talk:()=>alert(sound)
    }
}
var sniffles = dog()
sniffles.talk;
