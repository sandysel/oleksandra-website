 function swapStyleSheet(sheet){
	        document.getElementById('pagestyle').setAttribute('href', sheet);
            }
            

/* $ global*/
 var $;

// (function() {

//     var headgreeting = $(".headgreeting");
//     var fadeIndex = -1;
    
//     function showNext() {
//         ++fadeIndex;
//         headgreeting.eq(fadeIndex % headgreeting.length)
//             .show(3000)
//             .delay(3000)
//             .hide(3000, showNext);
//     }

//     showNext();
// })();


var x = document.getElementById("contactMe");


         $(document.getElementById("contactme")).click(function() {
                $("#contactme").toggle();
            }); 



            
            // $('#contactCheckbox').click(function() {
            //     if ($(this.is(':checked'))) {
            //         $("#contactme").show();
            //     } else {
            //         $("#contactme").hide();
            //     }
            // }); 


// $('#contactCheckbox').click(function() {
//     if( $('#contactCheckbox').checked) {
//         document.getElementById("contactme").style.display = "flex";
//     } else {
//         document.getElementById("contactme").style.display = "none";
//     }
// }); 

