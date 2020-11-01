const btn = document.querySelector(".share-btn");
const icons = document.querySelector(".share-icons");
const arrow = document.querySelector('.arrow');
let showLinks;

const mediaQuery = window.matchMedia('(max-width: 800px)');

checkMedia(mediaQuery); //call listener function at run time 
mediaQuery.addListener(checkMedia); //Attach listener function on state changes

function checkMedia(e) {
  // Check if the media query is true
  if (e.matches) {
    changeColor();
  } else {
  changeColor();
  }
}


btn.addEventListener('click', function(event){
   showLinks = icons.style.visibility;
  
if (showLinks === 'hidden' || showLinks === '' ) { 
  showIcons();
  changeColor();
} else if(showLinks === 'visible'){
  hideIcons();
  changeColor();
}
  
});



function showIcons() {
  icons.style.visibility = 'visible'; 
  icons.style.opacity = 1;
  btn.style.top = "15px";
  
}

function hideIcons() {
  icons.style.visibility = 'hidden'; 
  icons.style.opacity = 0; 
}

function changeColor() {
  
  if(mediaQuery.matches){

    if(showLinks === 'hidden' || showLinks === ''){
    
      btn.style.backgroundColor = 'hsl(214, 17%, 51%)';
      arrow.style.fill = 'hsl(210, 46%, 95%)';
      
      
    } else{
    
       btn.style.backgroundColor = 'hsl(210, 46%, 95%)';
       arrow.style.fill = 'hsl(217, 19%, 35%)';
      
    }
  
    
  }else{

    if(showLinks === 'hidden' || showLinks === ''){

    
      btn.style.backgroundColor = 'hsl(217, 19%, 35%)';
      arrow.style.fill = 'hsl(210, 46%, 95%)';
      

    }else{
      btn.style.backgroundColor = 'hsl(210, 46%, 95%)';
      arrow.style.fill = 'hsl(217, 19%, 35%)';
      
    }
    
  }
  
}

