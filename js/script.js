console.log("Your index.js file i sloaded correctly");


const toggleButton = document.getElementById('toggle-button');
  const naviList = document.getElementById('navi-list');

  toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');

  });

const scrollUp = document.querySelector('.scrollUp');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
      scrollUp.classList.add ("active");
  } else {
      scrollUp.classList.remove("active");
  }
});