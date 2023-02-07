const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
});

unsplash
  .get('/photos/random', {
    params: {
      client_id: 'yQxodSBjUQ8r4DUsAF9stzjYZVjF_apMALkE2JjKKKA',
    },
  })
  .then((res) => {
    updateBackground(res.data.urls.full);
    updateCredits(res.data.user.name);
  })
  .catch((error) => {
    updateBackground('/img/default.jpg');
    updateCredits("Charles O'Rear");
  });

const updateBackground = (img) => {
  const body = document.body.style;
  body.background = `url(${img})`;
  body.backgroundSize = 'cover';
  body.backgroundRepeat = 'no-repeat';
  body.backgroundPosition = 'center center';
};

const updateCredits = (name) => {
  const nameDiv = document.querySelector('.credit-name');
  nameDiv.innerHTML = name;
};

// updateBackground('/img/default.jpg');
// updateCredits("Charles O'Rear");
