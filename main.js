// console.log(document.domain)

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// headerTitle.textContent = "Hello";
// headerTitle.innerText = 'text';

// let myArray = [1,2,3,4]; 
// let mixedArray = [1, "two", true, {name: "John"}, [6, 7, 8]];


// for(let value of mixedArray) {
//     console.log(value);
// }



const userName = document.querySelector('.input-field'); 
const githubForm = document.querySelector('#githubForm');

const profile_section = document.querySelector('.profile-section');

const alertSuccess = document.querySelector('#alertSuccess');
const alertError = document.querySelector('#alertError');

const userName_details = document.querySelector('.username_value'); 
const name_details = document.querySelector('.name_value');
const email_details = document.querySelector('.email_value');
const location_details = document.querySelector('.location_value');
const followers_details = document.querySelector('.followers_value');
const following_details = document.querySelector('.following_value');
const bio_details = document.querySelector('.bio_value'); 
const url_details = document.querySelector('.url_value');
const userAvatar = document.querySelector('#userAvatar');

githubForm.addEventListener('submit', onSubmit); 

 function onSubmit(e) {
  e.preventDefault();

  fetch(`https://api.github.com/users/${userName.value}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');    }
      console.log("wala");
    return response.json();
  })
  .then(data => {

    // show alert change display hidden 
    profile_section.style.display = 'block';
    alertSuccess.style.display = 'block';

    setTimeout(function() {
      alertSuccess.style.display = 'none';
    }, 5000);

    console.log(data); 
    console.log(data.login); // Process the fetched data here


    userName_details.textContent = data.login;
    name_details.textContent = data.name; 
      
    email_details.textContent = data.email; 
      
  

    location_details.textContent = data.location;
    followers_details.textContent = data.followers;
    following_details.textContent = data.following; 
    bio_details.textContent = data.bio; 
    url_details.textContent = data.url; 

    userAvatar.src = data.avatar_url; 



  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    console.log("wala2");

    alertError.style.display = 'block';

    setTimeout(function() {
      alertError.style.display = 'none';
    }, 5000);

  });

}


