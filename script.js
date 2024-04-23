let head1=document.createElement("h1")
head1.setAttribute("id","title")
head1.innerHTML="<b>DOM CALCULATOR</b>"
document.body.appendChild(head1)


let para1=document.createElement("p")
para1.setAttribute("id","description")
para1.innerHTML=" this is the task that represent a simple calculator";
document.body.appendChild(para1)


let div=document.createElement("div")
div.setAttribute("id","container")
alert("only number are calculated ") 
document.body.appendChild(div)

let input1=document.createElement("input")
input1.setAttribute("id","result");
input1.setAttribute("readonly","")
document.body.appendChild(input1)

div.appendChild(input1)



let add= document.createElement("button")
add.innerText= "+";
add.setAttribute("id","add")
add.addEventListener("click",()=>{
    input1.value+= "+"
})

let subtract= document.createElement("button")
subtract.innerText= "-";
subtract.setAttribute("id","subtract")
subtract.addEventListener("click",()=>{
    input1.value+= "-"
})

let multiply= document.createElement("button")
multiply.innerText= "*"
multiply.setAttribute("id","multiply")
multiply.addEventListener("click",()=>{
    input1.value+= "*"
})

let divide= document.createElement("button")
divide.innerText= "/"
divide.setAttribute("id","divide")
divide.addEventListener("click",()=>{
    input1.value+= "/"
})


let equal= document.createElement("button")
equal.innerText= "=";
equal.setAttribute("id","equal")
equal.addEventListener("click",()=>{
   
    input1.value=eval(input1.value)
})

let backspace=document.createElement("button")
backspace.innerText="←"
backspace.setAttribute("id","backspace")
backspace.addEventListener("click",()=>{
    input1.value=input1.value.slice(0,-1)
})

let dot=document.createElement("button")
dot.setAttribute("id","dot")
dot.innerText="."
dot.addEventListener("click",()=>{
    input1.value=input1.value+"."
})


let clear= document.createElement("button")
clear.innerText= "C";
clear.setAttribute("id","clear")
clear.addEventListener("click",()=>{
   
    input1.value=""
})

let zero=document.createElement("button")
zero.setAttribute("id","0")
zero.innerText="0"
zero.addEventListener("click",()=>{
    input1.value=input1.value+0
})

let doublezero= document.createElement("button")
doublezero.setAttribute("id","00")
doublezero.innerText="00"
doublezero.addEventListener("click",()=>{
    input1.value=input1.value+ "00"
})

div.append(clear,backspace,dot,multiply)


for(let i =7;i<=9;i++){
    let button=document.createElement("button")
    button.innerText=i;
    button.setAttribute("id",i)
    button.addEventListener("click",()=>{
        input1.value+=i
    })
    div.append(button,divide)
}
for(let i =4;i<=6;i++){
    let button=document.createElement("button")
    button.innerText=i;
    button.setAttribute("id",i)
    button.addEventListener("click",()=>{
        input1.value+=i
    })
    div.append(button,subtract)
}
for(let i =1;i<=3;i++){
    let button=document.createElement("button")
    button.innerText=i;
    button.setAttribute("id",i)
    button.addEventListener("click",()=>{
        input1.value+=i
    })
    div.append(button,add)
}
div.append(zero,doublezero,equal)

