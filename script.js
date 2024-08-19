
window.onload = function() {
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth(); // 0-indexed
            const currentYear = currentDate.getFullYear();

            // Populate days
            const daySelect = document.getElementById('day');
            for (let day = 1; day <= 31; day++) {
                const option = document.createElement('option');
                option.value = day;
                option.textContent = day;
                if (day === currentDay) {
                    option.selected = true;
                }
                daySelect.appendChild(option);
            }

            // Populate months
            const monthSelect = document.getElementById('month');
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            months.forEach((month, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = month;
                if (index === currentMonth) {
                    option.selected = true;
                }
                monthSelect.appendChild(option);
            });

            // Populate years from current year to 1900
            const yearSelect = document.getElementById('year');
            for (let year = currentYear; year >= 1900; year--) {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                if (year === currentYear) {
                    option.selected = true;
                }
                yearSelect.appendChild(option);
            }
        };
        
        
        
// profile menu click dropdown menu 

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}




 let likeCounts = {}; // Object to store like counts for each post

function toggleLike(postId) {
  const likeBox = document.getElementById(`like-box-${postId}`);
  const likeGray = document.getElementById(`likeGray-${postId}`);
  const likeBlue = document.getElementById(`likeBlue-${postId}`);
  const likeText = document.getElementById(`likeText-${postId}`);

  // Initialize like count if not already set
  if (!likeCounts[postId]) {
    likeCounts[postId] = 0;
  }

  if (likeBlue.style.display === 'none') {
    // User likes the post
    likeBlue.style.display = 'block';
    likeGray.style.display = 'none';
    likeCounts[postId]++;
  } else {
    // User unlikes the post
    likeBlue.style.display = 'none';
    likeGray.style.display = 'block';
    likeCounts[postId] = Math.max(likeCounts[postId] - 1, 0); // Ensure count doesn't go below 0
  }

  // Update like text
  likeText.textContent = likeCounts[postId] === 0 ? 'Like' : likeCounts[postId];


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
});


// post create popup  close
document.querySelector('.post-create-header i ').addEventListener('click', function(){
  document.querySelector('.popup-opachity').style.display = 'none'
  selectedImage.src = '';
  selectedImage.style.display = 'none';
  imgSelectIcon.style.display = 'block'
  textareaPlaceholder.value = ''
});

//edit profile pop up close  

document.querySelector('.edit-profile-popup-header i ').addEventListener('click', function(){
  document.querySelector('.edit-profile-popup-opachity').style.display = 'none'
});


// edit profile pop up open  
 document.querySelector('.Edit-profile-btn ').addEventListener('click', function(){
  document.querySelector('.edit-profile-popup-opachity').style.display = 'flex'
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

profileNavM.addEventListener('click', function(){
  profileGrayM.style.display = 'none';
  profileBlueM.style.display = 'block';
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  navMenuImg.style.border = '0px solid var(--main-color)';
  
  document.querySelector('.profile-page-container').style.display = 'block'
  document.querySelector('.main-container').style.display = 'none'
  document.querySelector('.mobail-nav').style.marginTop = '-3rem'
});
homNavM.addEventListener('click', function(){
  homeGrayM.style.display = 'none';
  homeBlueM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  navMenuImg.style.border = '0px solid var(--main-color)';
  
  document.querySelector('.profile-page-container').style.display = 'none'
  document.querySelector('.main-container').style.display = 'flex'
  document.querySelector('.mobail-nav').style.marginTop = '0'
});

notiNavM.addEventListener('click', function(){
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'none';
  notiBlueM.style.display = 'block';
  navMenuImg.style.border = '0px solid var(--main-color)';
  
  document.querySelector('.profile-page-container').style.display = 'none'
  document.querySelector('.main-container').style.display = 'flex'
  document.querySelector('.mobail-nav').style.marginTop = '-3rem'
});

menuNavM.addEventListener('click', function(){
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  navMenuImg.style.border = '2px solid var(--main-color)';
  
  document.querySelector('.mobail-nav').style.marginTop = '-3rem'
  
  document.querySelector('.profile-page-container').style.display = 'none'
  document.querySelector('.main-container').style.display = 'flex'
});
