// Add your code here
const users = {
    name: "Steve",
    email: "steve@steve.com",
}


const newObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(users),
}

const list = document.createElement('li')

function appendData(data) {
    
    
   list.append(data)
}


function submitData() {
    return  fetch('http://localhost:3000/users', newObject)
    .then(res => res.json())
    .then(data => {
        let id = data.id
        let body = document.querySelector('body')
        body.append(id)
    })
    .catch(error => {
        let body = document.querySelector('body')
        body.append(error.message)
    })
}





submitData();