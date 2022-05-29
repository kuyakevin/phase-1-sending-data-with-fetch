function submitData(firstName, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(body => addNewContact(body.id))
    .catch(error => {
        alert("Unauthorized Access")
        document.body.append(error.message)
    })
}
    function addNewContact(newID){
        document.getElementsByTagName("body")[0].innerHTML = newID;
        document.body.append(message)
    }
    submitData("name", "name@name.com");
