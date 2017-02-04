 function swapStyleSheet(sheet){
	        document.getElementById('pagestyle').setAttribute('href', sheet);
            }

/* $ global*/
 var $;

$(function() {

    var headgreeting = $(".headgreeting");
    var fadeIndex = -1;
    
    function showNext() {
        ++fadeIndex;
        headgreeting.eq(fadeIndex % headgreeting.length)
            .show(2000)
            .delay(2000)
            .hide(2000, showNext);
    }
    
    showNext();
})();
