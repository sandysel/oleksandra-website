 function swapStyleSheet(sheet){
	        document.getElementById('pagestyle').setAttribute('href', sheet);
            }
            
swapStyleSheet();

/* $ global*/
 var $;

(function() {

    var headgreeting = $(".headgreeting");
    var fadeIndex = -1;
    
    function showNext() {
        ++fadeIndex;
        headgreeting.eq(fadeIndex % headgreeting.length)
            .show(3000)
            .delay(3000)
            .hide(3000, showNext);
    }

    showNext();
})();
