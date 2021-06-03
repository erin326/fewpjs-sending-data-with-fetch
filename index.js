function submitData(userName, email) {
    const formData = {
        name: userName,
        email: email
    }
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    const fetchData = fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const li = document.createElement('li');
          
          li.textContent = object.id;
          console.log(object.id);
          document.body.appendChild(li);
    })
    .catch(function(message) {
        const p = document.createElement('p');
        p.textContent = message;
        document.body.appendChild(p);
    })
    return fetchData;

}