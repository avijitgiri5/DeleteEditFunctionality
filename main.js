
let form = document.querySelector('#addForm');
let listItems = document.querySelector('#items');
let filter=document.querySelector('#filter');

///form submit Event
form.addEventListener('submit', onsubmit);
//delete items
listItems.addEventListener('click', removeItem);

//filtar event
filter.addEventListener('keyup',filterItems)

//create new textbox

let disbox=document.createElement('input')
disbox.className='form-control mr-2'
disbox.setAttribute('id','discribetxt')
disbox.type='text'

//insrt textbox  into dom
let submitbtn=document.getElementById('submit');
form.insertBefore(disbox,submitbtn);

//add value
function onsubmit(e) {
    e.preventDefault();

    //get input value;
    let newitem = document.querySelector('#item').value;
    let discribetxtitem=document.querySelector('#discribetxt').value;

    //create new li element
    let li = document.createElement('li');

    //add class into the li
    li.className = 'list-group-item'


    //add text into the li

    li.appendChild(document.createTextNode(newitem +" "+ discribetxtitem));
    console.log(li)

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

//filter items
function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    //get li
    let items = listItems.getElementsByTagName('li')//html collection in the array
    //convert list item in to array
    Array.from(items).forEach(function (itm) {
        let listname = itm.firstChild.textContent;
       let description=itm.childNodes[1].textContent;
        if (listname.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
            itm.style.display = 'block'
        }
        else {
            itm.style.display = 'none'
        }

    });
}


