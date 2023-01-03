console.log("HEllo Mostafa")


var intext = document.getElementById("intext")
var outtext = document.getElementById("outtext")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btns = document.getElementById("btns")
var fontname = document.getElementById("fontname")
intext.addEventListener("keyup",()=>{
    res = intext.value
    outtext.innerHTML = res
})

btn1.addEventListener("click",()=>{
    fontname.innerHTML = `Font Name ' Lobster '`
    outtext.classList.remove("button-2","button-3","button-4")
    outtext.classList.add("button-1")
})
btn2.addEventListener("click",()=>{
    fontname.innerHTML = `Font Name ' Wallpoet '`
    outtext.classList.remove("button-1","button-3","button-4")
    outtext.classList.add("button-2")
    
})
btn3.addEventListener("click",()=>{
    fontname.innerHTML = `Font Name ' Shadows '`
    outtext.classList.remove("button-2","button-1","button-4")
    outtext.classList.add("button-3")
    
})
btn4.addEventListener("click",()=>{
    fontname.innerHTML = `Font Name ' ZCOOL '`
    outtext.classList.remove("button-2","button-3","button-1")
    outtext.classList.add("button-4")
    
})