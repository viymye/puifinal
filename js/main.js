
window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }

    let parent2 = document.getElementById('hero');
    let children2 = parent2.children
    for(let i = 0; i < children2.length; i++) {
        children2[i].style.transform = 'translateY(-' + (window.pageYOffset * 1 / 6) + 'px)';
      }

 }, false)
 




 $(document).ready(function () {
    var pictureCount = $('#container img').length;
    var scrollResolution = 50;

    animateHorse();
    
    function animateHorse() {
        var x = $("#container").offset();

        var currentScrollPosition = window.pageYOffset - x.top;
        var imageIndex = Math.round(currentScrollPosition / scrollResolution);
        
        if (imageIndex >= pictureCount) {
            imageIndex = pictureCount - 1; // Select last image
        }
        
        $("#container img").hide();
        $("#container img").eq(imageIndex).show();
    }
    
    $(window).bind('scroll', function() {
        animateHorse();
    });
});



