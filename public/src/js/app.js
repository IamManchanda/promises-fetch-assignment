const button = document.querySelector('#start-button');
const output = document.querySelector('#output');

button.addEventListener('click', () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('http://httpbin.org/put');
    }, 1000);
  })
    .then((url) => fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        person: {
          name: 'Harry Manchanda',
          age: 25,
        },
      }),
    }))
    .then((response) => response.json())
    .then((data) => {
      output.textContent = data.json.person.name;
    })
    .catch((error) => {
      console.error(error);
    });
});
