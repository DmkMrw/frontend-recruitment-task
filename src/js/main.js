// selectors
const selectElement = selector => {
     const element = document.querySelector(selector);
     if (element) return element;
};

const overlay = selectElement('.overlay');
const alrt = selectElement('.alert');
const section = selectElement('.section');
const numOfClick = selectElement('.numOfClick');

//variables









// functions

const showAlert = () => {
     overlay.classList.add('active');
     alrt.classList.add('active');

     let counter = 0;


     if (localStorage.getItem('number') == 0) {
          counter = 0;
     } else if (localStorage.getItem('number') > 4) {
          counter = 0;
     } else counter = localStorage.getItem('number');

     counter++;

     //local storage

     localStorage.setItem('number', counter)

     //get number of click from local storage

     let result = localStorage.getItem('number');
     numOfClick.innerHTML = `${result} times`;

     if (result > 2) {
          counter = 0
     }
};

const hideAlert = () => {
     overlay.classList.remove('active');
     alrt.classList.remove('active');
};



// buttons
selectElement('.content-btn').addEventListener('click', showAlert);
overlay.addEventListener('click', hideAlert);


