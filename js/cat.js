axios
  .get('https://meowfacts.herokuapp.com/', {})
  .then((res) => {
    document.querySelector('.cat-fact').innerHTML = res.data.data[0];
  })
  .catch((error) => {
    document.querySelector('.cat-fact').innerHTML = 'error';
  });
