
$('head').append('<link class="toggleCss" rel="stylesheet" type="text/css" href="style.css"/>');
//$('#first').click(function(){
//    if($('link.toggleCss').attr('href') === "style.css"){
//        $('link.toggleCss').attr('href',"style2.css");
//    }else{
//        $('link.toggleCss').attr('href',"style.css")
//    }
//})

$(window).load(function(){

    $('#header').css("display","flex");
    $('#post1').css({
        "display" : "block"
    })
    $('#post1').animate({

        "opacity" : 0.7
    },1300,"easeOutBounce");

})

function changePost(intime,outtime){
    var prevPost = $('#post1');
    var isOn = false;
    var i = '1'

    $('.postChange').click(function(){
        if(isOn === false){
            var id = this.id;
            var textIndex = id.slice(0,id.length-1);
            var numIndex = id.slice(id.length-1,id.length);
            var index = textIndex + numIndex
            isOn = true;

            prevPost.animate({

                "opacity" : 0.04


            },intime,function(){



                prevPost.css({
                    "display" : "none"
                })
                $('#post'+numIndex).css({
                    "display" : "block"
                })
                $('#post'+numIndex).animate({
                    "opacity" : 0.7
                },outtime,"easeOutBounce");

                prevPost = $('#post'+numIndex);
                isOn = false;
            });


            //prevPost.slideUp(intime,function(){
            //    $('#post'+numIndex).slideDown(outtime);
            //    prevPost = $('#post'+numIndex);
            //
            //    isOn = false;
            //});
        }
    })
}

changePost(500,900);




