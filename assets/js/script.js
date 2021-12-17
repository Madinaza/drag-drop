let dragi=document.querySelectorAll(".drag")
let dZone=document.querySelector(".dropZone")
let colorC=document.querySelector(".colorCir")

dragi.forEach((drag)=>{
    drag.addEventListener("dragstart",function(e) {
        e.dataTransfer.setData("text",e.target.id)
        
       
    });

});


    dZone.addEventListener("dragover",function(e){
        e.preventDefault();
    });

    dZone.addEventListener("drop",function(e){
        let Colorid=e.dataTransfer.getData("text")
        dZone.style.backgroundColor=Colorid

    })
    

    function color(){
        let red=document.getElementById("red").value;
        let green=document.getElementById("green").value;
        let blue=document.getElementById("blue").value;
        let color ='rgb('+ red +','+ green +','+ blue +')';

        colorC.style.backgroundColor=color;
        dZone.addEventListener("drop",function(e){
            dZone.style.backgroundColor=color
        })
    }
    red.addEventListener('input',color);
    green.addEventListener('input',color);
    blue.addEventListener('input',color);











