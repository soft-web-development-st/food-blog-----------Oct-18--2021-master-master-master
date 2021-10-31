
const form = document.querySelector('.form-control')
const searchIcon = document.querySelector('.fa-search')
console.log(form);

searchIcon.addEventListener('click', () => {
 
    
    form.classList.toggle('current')   
})

// fade in effect

function scrollAppear(){

    var subscribe = document.querySelector('.subscribe');
    var about = document.querySelector('.main-contents-right-about-me')
    var instagram = document.querySelector('.insta')
    var lastestPost = document.querySelector('.main-contents-right-latest-posts')
    var show = document.querySelector('.show')
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
    // var subscribePosition = subscribe.getBoundingClientRect().top
    var aboutPosition = about.getBoundingClientRect().top
    var instagramPosition = instagram.getBoundingClientRect().top
    var postPosition = lastestPost.getBoundingClientRect().top
    var mixedPosition = mixed.getBoundingClientRect().top
    var fishPosition = fish.getBoundingClientRect().top
    var chocolatePosition = chocolate.getBoundingClientRect().top 
    var dchocolatePosition = dchocolate.getBoundingClientRect().top 
    var showPosition = show.getBoundingClientRect().top
    // var showSweetPosition = showSweet.getBoundingClientRect().top
    // // left animation selector
    var latestPosition = lates.getBoundingClientRect().top
    var followPosition = follow.getBoundingClientRect().top
    var breakfastPosition = breakfast.getBoundingClientRect().top
    var newsPosition = news.getBoundingClientRect().top
    // var lucyPosition = lucy.getBoundingClientRect().top
    
    //end of left animation selector

    // if(subscribePosition < screenPosition){
    //     subscribe.classList.add('fade-subscribe')
    // }
    // else{
    //     subscribe.classList.remove('fade-subscribe')
    // }
    
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
    
    if(postPosition < screenPosition){
        lastestPost.classList.add('show-post')  
    }
    else{
        lastestPost.classList.remove('show-post')  
    }
    if(showPosition < screenPosition){
        show.classList.add('show-show')  
    }
    else{
        show.classList.remove('show-show')  
    }
   

    if(mixedPosition < screenPosition){
        mixed.classList.add('show-sushi')  
    }
    else{
        mixed.classList.remove('show-sushi')  
    }
    
    if(fishPosition < screenPosition){
        fish.classList.add('show-fish')  
    }
    else{
        fish.classList.remove('show-fish')  
    }
    if(chocolatePosition < screenPosition){
        chocolate.classList.add('show-chocolate')  
    }
    else{
        chocolate.classList.remove('show-chocolate')  
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



