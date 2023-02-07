const startTime = () => {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  minute = checkTime(minute);
  second = checkTime(second);
  document.querySelector('.date').innerHTML = today.toDateString();
  document.querySelector('.time').innerHTML = `${hour}:${minute}:${second}`;
  setTimeout(startTime, 1000);
};

const checkTime = (i) => {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
};

startTime();
