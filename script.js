let arrowRight = document.querySelector('#arrow_right');
let arrowLeft = document.querySelector('#arrow_left');

let linkNavigation = document.querySelectorAll('.proj_nav_link');

let arrowRound = document.querySelectorAll('.round_arrow_navigation');

let photos = document.querySelectorAll('.photo_projects');

let i = 0;
let j = 0;


arrowRight.onclick = function(){
    photos[i].style.display = 'none';
    i++;
 
    if(i >= photos.length){
        i = 0;
    }
 
    photos[i].style.display = 'block';
}


arrowLeft.onclick = function(){
    photos[i].style.display = 'none';

    i--;

    if(i < 0){
        i = photos.length - 1;
    };

    photos[i].style.display = 'block';
}


for(let i = 0; i < linkNavigation.length; i++){
    linkNavigation[i].onclick = function(){
        for(let j = 0; j < photos.length; j++){
            photos[j].style.display = 'none';
            linkNavigation[j].classList.remove('yellow_proj_nav_link');
        }
      
        photos[i].style.display = 'block';
        linkNavigation[i].classList.add('yellow_proj_nav_link');
    }
}

for(let i = 0; i < arrowRound.length; i++){
    arrowRound[i].onclick = function(){
        for(let j = 0; j < photos.length; j++){
            photos[j].style.display = 'none';
            arrowRound[j].classList.add('round_arrow_fon');
        }

        photos[i].style.display = 'block';
        arrowRound[i].classList.remove('round_arrow_fon');
    }
}

