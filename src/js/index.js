// import 'bootstrap';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';

//اختفاء نوع المشروع وضهور بعض التفاصيل
$(function(){
$('.thumbnail2').hover(function(){
    $(this).find('.project-category').hide();
    $(this).find('.caption2').slideDown(250);
},
function(){
    $(this).find('.caption2').slideUp(250);
    $(this).find('.project-category').show();

}
)
});

var data = new Date();
var year = data.getFullYear();
document.getElementById("date").innerHTML = year;
