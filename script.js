console.log('hello')
function myFunction(){
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function myFunctionReset(){
    document.getElementById("demo").innerHTML = "A Paragraph";
}
fetch('https://reqres.in/api/users', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name:'George',
        surname:'Vidalis',
        id:'231092'
    })
})
    .then(res => {
      return res.json()
        })
        .then(data => console.log(data))
    .catch(error => console.log('ERROR'))