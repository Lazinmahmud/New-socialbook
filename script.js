
document.addEventListener('DOMContentLoaded', () => {
  const daySelect = document.getElementById('day');
  const monthSelect = document.getElementById('month');
  const yearSelect = document.getElementById('year');

  // Populate day options
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Populate month options
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  // Populate year options (1900 - current year)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
});
        
        
        
// profile menu click dropdown menu 

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}
// post image select and img display 
const fileInput = document.getElementById('fileInput');
    const selectedImage = document.getElementById('selectedImage');
    const imgSelectIcon = document.querySelector('.img-select-icon');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                selectedImage.src = e.target.result;
                selectedImage.style.display = 'block';
                imgSelectIcon.style.display = 'none'
            }
            reader.readAsDataURL(file);
        }
    });

//edit profile select img 
const profileInp = document.getElementById('profileInp');
    const profileImgSleted = document.getElementById('profileImgSleted');

    profileInp.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImgSleted.src = e.target.result;
                profileImgSleted.style.display = 'block';
                
            }
            reader.readAsDataURL(file);
        }
    });
    
//edit cover selected img 
const coverImgInp = document.getElementById('coverImgInp');
    const coverImgSelect = document.getElementById('coverImgSelect');

    coverImgInp.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                coverImgSelect.src = e.target.result;
                coverImgSelect.style.display = 'block';
                
            }
            reader.readAsDataURL(file);
        }
    });

// post create popup open 
document.getElementById("postTextarea").addEventListener('click', function(){
  
  document.querySelector('.popup-opachity').style.display = 'flex'
  document.querySelector('.mobail-nav').style.zIndex = '0'
});


// post create popup  close
document.querySelector('.post-create-header i ').addEventListener('click', function(){
  document.querySelector('.popup-opachity').style.display = 'none'
  document.querySelector('.mobail-nav').style.zIndex = '1'
  
  selectedImage.src = '';
  selectedImage.style.display = 'none';
  imgSelectIcon.style.display = 'block'
  textareaPlaceholder.value = ''
});

//edit profile pop up close  

document.querySelector('.edit-profile-popup-header i ').addEventListener('click', function(){
  document.querySelector('.edit-profile-popup-opachity').style.display = 'none'
  document.querySelector('.mobail-nav').style.zIndex = '1'
});


// edit profile pop up open  
 document.querySelector('.Edit-profile-btn ').addEventListener('click', function(){
  document.querySelector('.edit-profile-popup-opachity').style.display = 'flex'
  document.querySelector('.mobail-nav').style.zIndex = '0'
});


//profile page open 

document.getElementById('profileNav').addEventListener('click', function(){
  document.querySelector('.profile-page-container').style.display = 'block'
  document.querySelector('.main-container').style.display = 'none'
  document.querySelector('.drop-down-menu').style.display = 'none'
})

//profile-page-close 
document.getElementById('homeNav').addEventListener('click', function(){
  document.querySelector('.profile-page-container').style.display = 'none'
  document.querySelector('.main-container').style.display = 'flex'
})


// nav icon click icon change 

let profileNav = document.getElementById('profileNav');
let notificationNav = document.getElementById('notificationNav');
let homeNav = document.getElementById('homeNav');

let homeGray = document.getElementById('homeGray');
let homeBlue = document.getElementById('homeBlue');
let profileGray = document.getElementById('profileGray');
let profileBlue = document.getElementById('profileBlue');
let notiBlue = document.getElementById('notiBlue');
let notiGray = document.getElementById('notiGray');
let underline = document.querySelector('.underline');



profileNav.addEventListener('click', function(){
  homeGray.style.display = 'block';
  homeBlue.style.display = 'none';
  profileBlue.style.display = 'block';
  profileGray.style.display = 'none';
  notiBlue.style.display = 'none';
  notiGray.style.display = 'block';
  underline.style.marginLeft = '33%'
});

homeNav.addEventListener('click', function(){
  homeGray.style.display = 'none';
  homeBlue.style.display = 'block';
  profileBlue.style.display = 'none';
  profileGray.style.display = 'block';
  notiBlue.style.display = 'none';
  notiGray.style.display = 'block';
  underline.style.marginLeft = '0'
});

notificationNav.addEventListener('click', function(){
  homeBlue.style.display = 'none';
  homeGray.style.display = 'block';
  profileBlue.style.display = 'none';
  profileGray.style.display = 'block';
  notiGray.style.display = 'none';
  notiBlue.style.display = 'block';
  underline.style.marginLeft = '66%'
});


//mobail screen nav bar icon 

let homeBlueM = document.getElementById('homeBlueM');

let homeGrayM = document.getElementById('homeGrayM');
let profileGrayM = document.getElementById('profileGrayM');
let profileBlueM = document.getElementById('profileBlueM');
let notiGrayM = document.getElementById('notiGrayM');
let notiBlueM = document.getElementById('notiBlueM');

let homNavM = document.getElementById('homNavM');
let profileNavM = document.getElementById('profileNavM');
let notiNavM = document.getElementById('notiNavM');
let menuNavM = document.getElementById('menuNavM');
let navMenuImg = document.querySelector('.nav-menu img');



// Create an audio object
const tapSound = new Audio('tap.mp3');

let isHomNavMSelected = true; // ফ্ল্যাগ শুরুতে true

// Home Navigation click
homNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound

  if (isHomNavMSelected) {
    // যদি homNavM সিলেক্ট থাকে
    document.querySelector('.main-container').scrollTop = 0; // স্ক্রোল টপে নিয়ে যাওয়া
    setTimeout(function() {
   //   window.location.reload(); // পেজ রিফ্রেশ
    }, 0);
  } else {
    // যদি homNavM সিলেক্ট না থাকে
    // Toggle icons
    homeGrayM.style.display = 'none';
    homeBlueM.style.display = 'block';
    profileBlueM.style.display = 'none';
    profileGrayM.style.display = 'block';
    notiGrayM.style.display = 'block';
    notiBlueM.style.display = 'none';

    // Change border style
    navMenuImg.style.border = '2px solid #808080';

    // Display and hide containers
    document.querySelector('.profile-page-container').style.display = 'none';
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.mobail-nav').style.marginTop = '0';
    document.querySelector('.menu-page-container').style.display = 'none';

    // Adjust margin
    document.querySelector('.mUnderline').style.marginLeft = '1%';

    // Add overflow-y: scroll to make the element scrollable
    document.querySelector('.main-container').style.overflowY = 'scroll';

    // Scroll to the top of the container
    document.querySelector('.main-container').scrollTop = 0;

    // Update isHomNavMSelected flag
    isHomNavMSelected = true;
  }
});

// Update isHomNavMSelected flag when other navigation items are clicked
profileNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound
  profileGrayM.style.display = 'none';
  profileBlueM.style.display = 'block';
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  navMenuImg.style.border = '2px solid #808080';
  
  document.querySelector('.profile-page-container').style.display = 'block';
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.menu-page-container').style.display = 'none';
  document.querySelector('.mUnderline').style.marginLeft = '25%';
  
  // Update isHomNavMSelected flag
  isHomNavMSelected = false;
});

notiNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'none';
  notiBlueM.style.display = 'block';
  navMenuImg.style.border = '2px solid #808080';
  
  document.querySelector('.profile-page-container').style.display = 'none';
  document.querySelector('.main-container').style.display = 'flex';
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.menu-page-container').style.display = 'none';
  document.querySelector('.mUnderline').style.marginLeft = '51%';
  
  // Update isHomNavMSelected flag
  isHomNavMSelected = false;
});

menuNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  navMenuImg.style.border = '2px solid var(--main-color)';
  document.querySelector('.menu-page-container').style.display = 'block';
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.mUnderline').style.marginLeft = '75%';
  
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.profile-page-container').style.display = 'none';
  
  // Update isHomNavMSelected flag
  isHomNavMSelected = false;
});



//lg popup open 

let lgBtnMenu = document.querySelector('.lg-btn-menu');

lgBtnMenu.addEventListener('click', function(){
  lgPopupOpachity.style.display = 'flex'
});



// logout popup close 

let calcleBtn = document.querySelector('.calcleBtn');
let lgPopupOpachity = document.querySelector('.logout-popup-opachity');


calcleBtn.addEventListener('click', function(){
  
  setTimeout(function() {
    lgPopupOpachity.style.display = 'none'
  }, 100);
});




// img long click download option disable 
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // This prevents the right-click context menu from appearing
  });
  
  img.addEventListener('mousedown', (event) => {
    if (event.button === 2) { // Right-click button
      event.preventDefault(); // Prevent default action for right-click
    }
  });
  
  img.addEventListener('click', () => {
    // Put your click event logic here
    console.log('Image clicked!');
  });
});


const likeBox = document.getElementById('likeBox');
  const reactionContainer = document.querySelector('.reaction-container');
  let holdTimer;

  // স্পর্শ ইভেন্ট শুরু হলে
  likeBox.addEventListener('touchstart', () => {
    holdTimer = setTimeout(() => {
      reactionContainer.style.visibility = 'visible';
      reactionContainer.style.opacity = '1';
      reactionContainer.style.transform = 'scale(1)';
    }, 300); // ১ সেকেন্ড
  });

  // স্পর্শ ইভেন্ট শেষ হলে
  likeBox.addEventListener('touchend', () => {
    clearTimeout(holdTimer);
  });

  // স্পর্শ বাতিল হলে
  likeBox.addEventListener('touchcancel', () => {
    clearTimeout(holdTimer);
  });
  
  
  reactionContainer.addEventListener('click', function(){
    reactionContainer.style.visibility ='hidden'
  })
