
const form = document.querySelector('.form-control')
const searchIcon = document.querySelector('.fa-search')
console.log(form);

searchIcon.addEventListener('click', () => {
 
    form.classList.toggle('current');
})


function scrollAppear(){

    
    var instagram = document.querySelector('.insta')
    var show = document.querySelector('.show')
    var about = document.querySelector('.about')
    var mixed = document.querySelector('.sushi')
    var fish = document.querySelector('.fish')
    var chocolate = document.querySelector('.chocolate')
    var dchocolate = document.querySelector('.dchocolate')
    var showSweet = document.querySelector('.show-sweet')
    var follow = document.querySelector('.follow')
    
    // left animation selector
    
    var lates = document.querySelector('.latest')
    var breakfast = document.querySelector('.breakfast')
    var news = document.querySelector('.news')
    var lucy = document.querySelector('.lucy')
    
    //end of left animation selector
    var screenPosition = window.innerHeight
   
    var aboutPosition = about.getBoundingClientRect().top
    var instagramPosition = instagram.getBoundingClientRect().top
    
    var dchocolatePosition = dchocolate.getBoundingClientRect().top 
   
    // // left animation selector
    var latestPosition = lates.getBoundingClientRect().top
    var followPosition = follow.getBoundingClientRect().top
    var breakfastPosition = breakfast.getBoundingClientRect().top
    var newsPosition = news.getBoundingClientRect().top
    
    
    if(aboutPosition < screenPosition){
        about.classList.add('show-about')  
    }
    else{
        about.classList.remove('show-about')  
    }
    
    if(instagramPosition < screenPosition){
        instagram.classList.add('show-ig')  
    }
    else{
        instagram.classList.remove('show-ig')  
    }
    
   
    
    if(dchocolatePosition < screenPosition){
        dchocolate.classList.add('show-dchocolate')  
    }
    else{
        dchocolate.classList.remove('show-dchocolate')  
    }

   
    if(latestPosition < screenPosition){
        lates.classList.add('show-latest')  
    }
    else{
        lates.classList.remove('show-latest')  
    }
    
    if(followPosition < screenPosition){
        follow.classList.add('show-follow')  
    }
    else{
        follow.classList.remove('show-follow')  
    }

    if(breakfastPosition < screenPosition){
        breakfast.classList.add('show-breakfast')  
    }
    else{
        breakfast.classList.remove('show-breakfast')  
    }
    
    if(newsPosition < screenPosition){
        news.classList.add('show-news')  
    }
    else{
        news.classList.remove('show-news')  
    }
    
    
}
    

 window.addEventListener('scroll', scrollAppear)


// back to top 

 const backToTop = document.querySelector('.back-to-top')

 window.addEventListener('scroll', () =>{

     const scrollHeight = window.pageYOffset

     if (scrollHeight > 400) {
         backToTop.classList.add('show-back-to-top')
     }else{
         backToTop.classList.remove('show-back-to-top')
     }
 })
