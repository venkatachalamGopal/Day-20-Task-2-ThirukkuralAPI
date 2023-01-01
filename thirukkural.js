let body=document.getElementById('body');
let h3=document.createElement('h3')
h3.innerText=`Thirukkural - Api`
let div=document.createElement('div')
div.setAttribute('id','div1')
let label=document.createElement('label')
label.setAttribute('for','input')
label.innerText=`Enter Thirukkural No :`
let input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute('id','input')

let btn=document.createElement('button')
btn.setAttribute('type','reset')
btn.setAttribute('id','btn')
btn.innerText=`Submit`
let div2=document.createElement('div')
div2.setAttribute('class','divBox')
let p1=document.createElement('p')
let p2=document.createElement('p')
let p3=document.createElement('p')
let p4=document.createElement('p')
let p5=document.createElement('p')
let p6=document.createElement('p')

let p7=document.createElement('p')
let p8=document.createElement('p')
let p9=document.createElement('p')
let p10=document.createElement('p')
let p11=document.createElement('p')



let div3=document.createElement('div')
div3.setAttribute('class','divBox')

body.append(h3)
body.append(div)
div.append(label,input,btn)
body.append(div2,div3)
div2.append(p1,p2,p3,p4,p5,p6)
div3.append(p7,p8,p9,p10,p11)

let sbtn=document.getElementById('btn')
sbtn.addEventListener("click",async()=>{
    let no=input.value;
    const resp=await fetch(`https://api-thirukkural.vercel.app/api?num=${no}`)
    const data=await resp.json();
    // Data get
    console.log(data);
    // Tamil
    p1.innerHTML=`Kural No : ${data.number}`
    p2.innerHTML=`   Kural : ${data.line1} ${data.line2}`
    p3.innerHTML=` Meaning : ${data.tam_exp}`
    p4.innerHTML=` Chapter : ${data.chap_tam}`
    p5.innerHTML=`Chapter Group : ${data.chapgrp_tam}`
    p6.innerHTML=` Section :  ${data.sect_tam}`
    // English
    // p7.innerHTML=`Kural No : ${data.number}`
    p7.innerHTML=`   Kural : ${data.eng}`
    p8.innerHTML=` Meaning : ${data.eng_exp}`
    p9.innerHTML=` Chapter : ${data.chap_eng}`
    p10.innerHTML=`Chapter Group : ${data.chapgrp_eng}`
    p11.innerHTML=` Section :  ${data.sect_eng}`
})







