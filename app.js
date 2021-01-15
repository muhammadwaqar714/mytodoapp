var list = document.getElementById('list');


function addTodo() {
    var todo_item = document.getElementById('todo_item');


    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    list.appendChild(li)
    todo_item.value = ""

    li.setAttribute('class','li')
    // DELETE BUTTON
    var delBtn = document.createElement("button");
    var btnText = document.createTextNode("DELETE");
    delBtn.appendChild(btnText)
    delBtn.setAttribute('class', 'btn')
    delBtn.setAttribute('onclick', 'del_item(this)')
    li.appendChild(delBtn)
    // Edit Item
 var editBtn=document.createElement('button');
 var editText=document.createTextNode('EDIT');
 editBtn.appendChild(editText);
 li.appendChild(editBtn)

 editBtn.setAttribute('class','btn')
 editBtn.setAttribute('onclick','edit_item(this)')


}

function del_item(e) {
    e.parentNode.remove()
}

function deleteALL() {
    list.innerHTML = ""
}

function edit_item(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt('Enter Edit Value',val)
    e.parentNode.firstChild.nodeValue=editValue;
}










// function addTodo() {
//     var todo_item = document.getElementById('todo_item');

//     var li = document.createElement('li')
//     var liText = document.createTextNode(todo_item.value)
//     li.appendChild(liText)
//     list.appendChild(li)
//     console.log(li);
// }

