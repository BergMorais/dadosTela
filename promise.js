//função para buscar usuarios da API
function fetchUsers() {
  return new Promise ((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then ((response) => {
      if (!response.ok) {
        reject('Erro ao obter os dados da API'); //rejeitar a promise se houver erro
      }
      return response.json();//converter a resposta para json
    })
    .then((data) => {
      resolve(data); //resolver a promise com os dados
    })
    .catch((error) => {
      reject(error); //rejeitar a promise em caso de erro
    });
  })
}

// consumindo a promise com then e catch

btn1.onclick = (() => {
  fetchUsers() .then(response =>{
    response.forEach(usuario => { 
      console.log(usuario);
      
      content.innerHTML += ` 
      <p><strong>Nome:</strong> ${usuario.name}</p> 
      <p><strong>Email:</strong> ${usuario.email}</p> 
      <p><strong>Telefone:</strong> ${usuario.phone}</p> 
      <p><strong>Website:</strong> ${usuario.website}</p> 
      <p><strong>Empresa:</strong> ${usuario.company}</p> 
  ` 
    })
  
})

})
