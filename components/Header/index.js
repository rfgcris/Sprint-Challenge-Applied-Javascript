// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function Header() {

    const head = document.createElement('div');
    const date = document.creatElement('span');
    const title = document.creatElement('h1');
    const temp = document.createElement('span');

    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'March 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    
   const headerContainer = document.querySelector('.header-container');
   headerContainer.appendChild(head)

   
 
}
 
Header()

