let idLi;
let idDeletBut;
function addtask(){
    let nextTask = document.getElementById('textbox').value;
    let box = document.createElement("li");
        box.innerHTML = nextTask;
        idLi = ""+nextTask;
        box.className="box";
        box.id=idLi;
        document.getElementById("list").append(box);
        
    let delButton=document.createElement("button");
        delButton.className = "delete";
        idDeletBut=idLi+1;
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
