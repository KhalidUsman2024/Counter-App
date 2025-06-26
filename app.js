let value=document.querySelector(".value");
console.log(value.innerText);



let incrementt=document.querySelector("#increment");

let decrement=document.querySelector("#decrement");

let reset=document.querySelector(".reset");



incrementt.addEventListener("click",()=>{
 let final=+(value.innerText)
 final++;
 value.innerText=final;
   
})

decrement.addEventListener("click",()=>{
 let final=+(value.innerText);
    if(final>0){
    final--;
    value.innerText=final;
    }
})

reset.addEventListener("click",()=>{
    let final=+(value.innerText);
    final=0;
    value.innerText=final;
})