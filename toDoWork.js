let tableId = document.getElementById("tables");
let addbtn = document.getElementById("addButton");
let selected , selectedId;

retrive();
function retrive(){   
for (let i = 0; i < localStorage.length; i++) {
    let retrivedId = localStorage.key(i);
  
        if(addbtn.innerHTML=="Add Course"){
            let row=document.createElement('tr');
            let id=document.createElement('td');
            let cName=document.createElement('td');
            cName.setAttribute("class","courseName")
            let action=document.createElement('td');
            id.innerHTML=retrivedId;
            cName.innerHTML=localStorage.getItem(retrivedId);
            let btnDelete = document.createElement('button');
            btnDelete.innerHTML='Delete';
            let btnEdit = document.createElement('button');
            btnEdit.innerHTML='Edit';
            action.setAttribute("class","actionwork")
            btnDelete.setAttribute("class","buttonDelete");
            btnEdit.setAttribute("class","buttonEdit");
        
            action.appendChild(btnEdit);
            action.appendChild(btnDelete);
            row.appendChild(id);
            row.appendChild(cName);
            row.appendChild(action);
            tableId.appendChild(row);
        }
    };
}

addbtn.addEventListener("click", addInList);
let buttons = tableId.addEventListener("click",buttonWork);
let inputbox = document.getElementById("inputss");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function addInList(){
    if(addbtn.innerHTML=="Add Course"){
    let row=document.createElement('tr');
    let id=document.createElement('td');
    let cName=document.createElement('td');
    cName.setAttribute("class","courseName")
    let action=document.createElement('td');
    let taskId = getRndInteger(100000 , 999999);
    id.innerHTML=taskId;
    cName.innerHTML=inputbox.value;
    let btnDelete = document.createElement('button');
    btnDelete.innerHTML='Delete';
    let btnEdit = document.createElement('button');
    btnEdit.innerHTML='Edit';
    action.setAttribute("class","actionwork")
    btnDelete.setAttribute("class","buttonDelete");
    btnEdit.setAttribute("class","buttonEdit");

    if(!inputbox.value){
        window.alert('Please insert course');
    }else{
    action.appendChild(btnEdit);
    action.appendChild(btnDelete);
    row.appendChild(id);
    row.appendChild(cName);
    row.appendChild(action);
    tableId.appendChild(row);
        localStorage.setItem(taskId,inputbox.value)
    }
    inputbox.value="";
}
    else if(addbtn.innerHTML=="UPDATE"){
        selected.innerHTML=inputbox.value;
        localStorage.setItem(selectedId,inputbox.value);
        addbtn.innerHTML="Add Course";
        inputbox.value="";
    }
}

function buttonWork(e){
    let tgt = e.target;
    let clickedButton=tgt.closest('button');
    let parenet = tgt.closest('tr');
    if(!clickedButton){}    
    else if(clickedButton.innerHTML == 'Delete'){  
        selectedId=parenet.childNodes[0].innerHTML;
           localStorage.removeItem(selectedId);
        parenet.remove();
    }else if(clickedButton.innerHTML== 'Edit'){
        
        selectedId=parenet.childNodes[0].innerHTML;
        editfunction(parenet);
    }
}

function editfunction(parenet){
    selected = parenet.childNodes[1];    
    inputbox.value=selected.innerHTML;
    addbtn.innerHTML="UPDATE";
}

inputbox.addEventListener(("keypress"), function (clickTarget) {
    if(clickTarget.key=="Enter" && (inputbox.value!="")){
        clickTarget.preventDefault();
        addbtn.click();
    }
});