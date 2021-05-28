$(document).ready(function(){

    $('#climbing, #img42, #sbCloud, .redLight, .black').hide(function(){});
   
    $('#addClass').click(function(){
        $(".addClass").addClass("red");
    })

    $('#toggleSlide').click(function(){
        $("#climbing").slideToggle("slow");
    });
    
    $('#addClass').click(function(){
        $(".addClass").addClass("red");
    })
    
    $('.imgtop').children('img').hover(function(){
        $(this).fadeOut(1000);
        $("#sbCloud").show();
    });

    $('#theAnswer').click(function(){
        $("#img42").fadeIn(2000);
    });

    $('#toggle').click(function(){
        $(".greenLight").toggle();
        $(".redLight").toggle();
    });

    $('#slideUpDown').click(function(){
        $(".black").slideDown(500);
        $(".blue").slideUp(500);
    });

    $('#before').click(function(){
        $("#before").before("<h1>Before the Button</h1>");
        $("#before").after("<h1>But also After</h1>");
    });

    $('#and').click(function(){
        $("#soLong").append("Thanks for all the fish");
        
    });

    $('#inspect').click(function(){
        var pageHTML = $("body").html();
        $('#inspectText').text(pageHTML);
        
    });

    $('#kuzco').click(function(){
        var hidden = $(this).attr("hidden-attr");
        $('#attr').text(hidden);
        
    });

    $('#value').click(function(){
        var val = $(this).val();
        $('#val').text(val);
        
    });

})