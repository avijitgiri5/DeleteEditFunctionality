let form = document.querySelector('#addForm');
let listItems = document.querySelector('#items');

///form submit Event
form.addEventListener('submit', onsubmit);
//delete items
listItems.addEventListener('click', removeItem);

//add value
function onsubmit(e) {
    e.preventDefault();

    //get input value;
    let newitem = document.querySelector('#item').value;

    //create new li element
    let li = document.createElement('li');

    //add class into the li
    li.className = 'list-group-item'


    //add text into the li

    li.appendChild(document.createTextNode(newitem));

    //add edit button
    let editbtn = document.createElement('button');
    let edittext = document.createTextNode('Edit');
    editbtn.appendChild(edittext);
    //class add
    editbtn.className = "btn btn-success btn-sm float-right edit";


    //add edit button to li
    li.appendChild(editbtn)

    //create delete botton element
    let deletebtn = document.createElement("button");


    //add css class in btn
    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    //append text node
    let btntext = document.createTextNode('X')
    deletebtn.appendChild(btntext);
    //append delete button to li
    li.appendChild(deletebtn)

    
    //append li to list
    listItems.appendChild(li)

}
//delete item
function removeItem(e) {
    //console.log(1)
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let delete_li = e.target.parentElement;
            listItems.removeChild(delete_li)

        }

    }
}
