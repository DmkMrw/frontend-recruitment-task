// selectors
const selectElement = selector => {
     const element = document.querySelector(selector);
     if (element) return element;
};

const overlay = selectElement('.overlay');
const alrt = selectElement('.alert');
const section = selectElement('.section');
const numOfClick = selectElement('.numOfClick');
const rstButton = selectElement('.rst')

let counter = 0;

// functions

const showAlert = () => {
     overlay.classList.add('active');
     alrt.classList.add('active');


     if (localStorage.getItem('number') > 3) {
          rstButton.classList.add('active');
          localStorage.setItem('number', 0)
          rstButton.addEventListener('click' ,()=> rstAction())
     }
     else if (localStorage.getItem('number') < 2) {
          counter = localStorage.getItem('number');
          rstButton.classList.remove('active');
     };

     counter++;

     //local storage

     localStorage.setItem('number', counter)

     //get number of click from local storage

     let result = localStorage.getItem('number');
     numOfClick.innerHTML = `${result} times`;

};

const hideAlert = () => {
     overlay.classList.remove('active');
     alrt.classList.remove('active');
};

const rstAction = () => {
     rstButton.classList.remove('active');
     counter = 0;
     hideAlert();
};


// buttons
selectElement('.content-btn').addEventListener('click', showAlert);
overlay.addEventListener('click', hideAlert);


