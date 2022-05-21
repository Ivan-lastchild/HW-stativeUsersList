const table = document.querySelector(".table_list");

let users = [{
        "id": 1,
        "first_name": "Dulcinea",
        "last_name": "Beeton",
        "email": "dbeeton0@google.co.uk"
    }, {
        "id": 2,
        "first_name": "Shoshanna",
        "last_name": "Eymer",
        "email": "seymer1@behance.net"
    }, {
        "id": 3,
        "first_name": "Cull",
        "last_name": "Nazareth", 
        "email": "cnazareth2@squidoo.com" 
    }, {  
        "id": 4,
        "first_name": "Dorella",
        "last_name": "Damerell",
        "email": "ddamerell3@taobao.com" 
    }, {
        "id": 5,
        "first_name": "Robena", 
        "last_name": "Jankovic",
        "email": "rjankovic4@youtube.com"
    }, {
        "id": 6,
        "first_name": "Jarret",
        "last_name": "Guitton",
        "email": "jguitton5@ucoz.ru"
    }, {
        "id": 7,
        "first_name": "Elias",  
        "last_name": "Hanson",  
        "email": "ehanson6@aol.com"
    }, {
        "id": 8,
        "first_name": "Corby",
        "last_name": "Gartrell",
        "email": "cgartrell7@sogou.com"
    }, {
        "id": 9,
        "first_name": "Scarlet",
        "last_name": "Eilhertsen",
        "email": "seilhertsen8@reverbnation.com"
    }, {
        "id": 10,
        "first_name": "Merv",
        "last_name": "Lequeux",
        "email": "mlequeux9@sohu.com" 
}];

openArrOfUsers(users);


table.addEventListener('click', onClickTable);

table.addEventListener('dblclick', onDblclickTable);

function onClickTable(event){
    if(event.target.closest(".list_row")){
        event.target.closest(".list_row").classList.toggle('paint');
    }
}

function onDblclickTable(event){
    const rows = document.querySelectorAll(".list_row");
    
    for(let i = 0; i < rows.length; i++){
        if(rows[i] == event.target.closest('.list_row')){
            alert(users[i]["first_name"]);
        }
    }
}

function openArrOfUsers(arr){
    for(let i =0; i < arr.length; i++){
        createRow(arr[i]);
    }
}

function createRow(obj){
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1); 
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    addClass(row, "list_row");
    addingData(cell1, cell2, cell3, cell4, obj);
}

function addingData(cell1, cell2, cell3, cell4, obj){
    cell1.innerHTML = `${obj.id}`;
    cell2.innerHTML = `${obj.first_name}`;
    cell3.innerHTML = `${obj.last_name}`;
    cell4.innerHTML = `${obj.email}`;
}

function addClass (elem, className){
    elem.classList.add(`${className}`);
}

function toggleClass (elem, className){
    elem.classList.toggle(`${className}`);
}