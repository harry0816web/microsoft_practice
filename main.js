(function ($) {
    
    $('#navBar').on('mouseenter', function () {
        this.style.borderBottom = '2px solid black';
    })
    .on('mouseout', function () {
        this.style.borderBottom = '';
    })



})($)