const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
const imgArr = [{image:'images/pic1.jpg',alt:'Closeup of a human eye'},
{image:'images/pic2.jpg',alt:'An art'},
{image:'images/pic3.jpg',alt:'voilet flowers'},
{image:'images/pic4.jpg',alt:'Egypt mummy'},
{image:'images/pic5.jpg',alt:'butterfly on leaf'}]


imgArr.map((elem) => {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', `${elem.image}`);
    newImage.setAttribute('alt', `${elem.alt}`);
    thumbBar.appendChild(newImage);
})

thumbBar.addEventListener('click',(e) => {
   if( e.target.matches('img'))
    {
        displayedImage.src =  e.target.src;
        displayedImage.alt = e.target.alt;

    }

})

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  
