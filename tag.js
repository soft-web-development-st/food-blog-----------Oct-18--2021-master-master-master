
const form = document.querySelector('.form-control')
const searchIcon = document.querySelector('.fa-search')
console.log(form);

searchIcon.addEventListener('click', () => {
 
    
    form.classList.toggle('current')   
})

// fade in effect

function scrollAppear(){

    
    var instagram = document.querySelector('.insta')
    var subscribe = document.querySelector('.subscribe')
    var show = document.querySelector('.show')
    var about = document.querySelector('.about')
    var mixed = document.querySelector('.sushi')
    var mixedd = document.querySelector('.sushii')
    var sushi1 = document.querySelector('.sushi1')
    var fish = document.querySelector('.fish')
    var chocolate = document.querySelector('.chocolate')
    var dchocolate = document.querySelector('.dchocolate')
    var showSweet = document.querySelector('.sweet')
    var follow = document.querySelector('.follow')
    var lucy = document.querySelector('.lucy')
    var like = document.querySelector('.like')
    var coment = document.querySelector('.coment')
    var lastestPost = document.querySelector('.lastestPost')
    
    // left animation selector
    
    var lates = document.querySelector('.latest')
    var breakfast = document.querySelector('.breakfast')
    var news = document.querySelector('.news')
    var lucy = document.querySelector('.lucy')
    
    //end of left animation selector
    var screenPosition = window.innerHeight
   
    var aboutPosition = about.getBoundingClientRect().top
    // var subscribePosition = subscribe.getBoundingClientRect().top
    var instagramPosition = instagram.getBoundingClientRect().top
    // var postPosition = lastestPost.getBoundingClientRect().top
    var mixedPosition = mixed.getBoundingClientRect().top
    var mixeddPosition = mixedd.getBoundingClientRect().top
    var sushi1Position = sushi1.getBoundingClientRect().top
    var fishPosition = fish.getBoundingClientRect().top
    var chocolatePosition = chocolate.getBoundingClientRect().top 
   
    // // left animation selector
    var latestPosition = lates.getBoundingClientRect().top
    var followPosition = follow.getBoundingClientRect().top
    var breakfastPosition = breakfast.getBoundingClientRect().top
    var newsPosition = news.getBoundingClientRect().top
    var lucyPosition = lucy.getBoundingClientRect().top
    var likePosition = like.getBoundingClientRect().top
    
    //end of left animation selector

    
    
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
    
  
   

    if(mixedPosition < screenPosition){
        mixed.classList.add('show-sushi')  
    }
    else{
        mixed.classList.remove('show-sushi')  
    }
    
    if(mixeddPosition < screenPosition){
        mixedd.classList.add('show-sushii')  
    }
    else{
        mixedd.classList.remove('show-sushii')  
    }
    
    if(sushi1Position < screenPosition){
        sushi1.classList.add('show-sushi1')  
    }
    else{
        sushi1.classList.remove('show-sushi1')  
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
    
    
    if(lucyPosition < screenPosition){
        lucy.classList.add('show-lucy')  
    }
    else{
        lucy.classList.remove('show-lucy')  
    }
    
    if(likePosition < screenPosition){
        like.classList.add('show-like')  
    }
    else{
        like.classList.remove('show-like')  
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



