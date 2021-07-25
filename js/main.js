
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navBar').addClass('sticky');
        }
        else{
            $('.navBar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // Scroll - up Scripting
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop:0});
    })
    $('.menuBtn').click(function(){
        $('.menu').toggleClass("active");
        $('.menuBtn i').toggleClass("active");
    });    
    // Carousel Scripting
    $(".owl-carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

(()=>{
    const readMoreBtn = document.querySelector('.read-more-btn');
    const dots = document.querySelector('#dots');
    const readMore = document.querySelector('.read-more');
    readMoreBtn.addEventListener('click',()=>{
        if(dots.style.display === 'none'){
            dots.style.display = 'inline';
            readMoreBtn.innerHTML='read more';
            readMore.style.display='none';
        }else{
            dots.style.display = 'none';
            readMoreBtn.innerHTML = 'read less';
            readMore.style.display = 'inline';
        }
    })
})();