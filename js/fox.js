axios
  .get('https://randomfox.ca/floof/', {})
  .then((res) => {
    console.log(res);
    const img = document.createElement('img');
    img.src = res.data.image;
    img.classList.add('fox-img');
    document.querySelector('.fox').appendChild(img);
  })
  .catch(() => {
    document.querySelector('.fox').innerHTML = 'error';
  });
