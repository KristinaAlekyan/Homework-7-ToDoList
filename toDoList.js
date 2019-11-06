let idLi;
let idDeletBut;
let i=0;
function addtask(){
    let nextTask = document.getElementById('textbox').value;
    let box = document.createElement("li");
        box.innerHTML = nextTask;
        let b=Math.random();
    
        idLi = ""+nextTask+i;
        ++i;
        box.className="box";
        box.id=idLi;
        document.getElementById("list").append(box);
    
    
    let delButton=document.createElement("button");
        delButton.className = "delete";
        idDeletBut=idLi;
        delButton.innerHTML = "delete";
        document.getElementById(idLi).append(delButton);
        delButton.addEventListener('click',function(){
        deletTask(this);
  })
    
}

function deletTask(el){
    let removEl=el.parentNode;
    removEl.remove();
    
}
