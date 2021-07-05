let arrowRight = document.querySelector('#arrow_right');
let arrowLeft = document.querySelector('#arrow_left');

let linkNavigation = document.querySelectorAll('.proj_nav_link');

let arrowRound = document.querySelectorAll('.round_arrow_navigation');

let photos = document.querySelectorAll('.photo_projects');


let currentIdx = 0;


arrowRight.onclick = function(){

    photos[currentIdx].style.display = 'none';
    arrowRound[currentIdx].classList.add('round_arrow_fon');
    linkNavigation[currentIdx].classList.remove('yellow_proj_nav_link');
    
    currentIdx++;
 
    if(currentIdx >= photos.length){
        currentIdx = 0;
    }

    photos[currentIdx].style.display = 'block';
    arrowRound[currentIdx].classList.remove('round_arrow_fon');
    linkNavigation[currentIdx].classList.add('yellow_proj_nav_link');
}


arrowLeft.onclick = function(){
    photos[currentIdx].style.display = 'none';
    arrowRound[currentIdx].classList.add('round_arrow_fon');
    linkNavigation[currentIdx].classList.remove('yellow_proj_nav_link');

    currentIdx--;

    if(currentIdx < 0){
        currentIdx = photos.length - 1;
    };

    photos[currentIdx].style.display = 'block';
    arrowRound[currentIdx].classList.remove('round_arrow_fon');
    linkNavigation[currentIdx].classList.add('yellow_proj_nav_link');
}


for(let i = 0; i < linkNavigation.length; i++){
    linkNavigation[i].onclick = function(){
        for(let j = 0; j < photos.length; j++){
            photos[j].style.display = 'none';
            linkNavigation[j].classList.remove('yellow_proj_nav_link');
            arrowRound[j].classList.add('round_arrow_fon');
        }
      
        photos[i].style.display = 'block';
        linkNavigation[i].classList.add('yellow_proj_nav_link');
        arrowRound[i].classList.remove('round_arrow_fon');
        currentIdx = i;
    }
}

for(let i = 0; i < arrowRound.length; i++){
    arrowRound[i].onclick = function(){
        for(let j = 0; j < photos.length; j++){
            photos[j].style.display = 'none';
            arrowRound[j].classList.add('round_arrow_fon');
            linkNavigation[j].classList.remove('yellow_proj_nav_link');
        }

        photos[i].style.display = 'block';
        arrowRound[i].classList.remove('round_arrow_fon');
        linkNavigation[i].classList.add('yellow_proj_nav_link');
        currentIdx = i;
    }
}

