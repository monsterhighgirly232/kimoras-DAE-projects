function dressUp(item) {
    let clothingItem = document.getElementById(item);
    clothingItem.style.display = (clothingItem.style.display === "none" || clothingItem.style.display === "") ? "block" : "none";
}
{src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"}

{ $(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});}