
function addtask(){
    let nextTask = document.getElementById('textbox').value;
    let box = document.createElement("li");
    box.innerHTML = nextTask;
    document.getElementById("list").appendChild(box);
}