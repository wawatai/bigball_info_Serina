$(function(){
    //自動調整視窗高
    $(function(){
        var th = $('.mainwrap');
        var wh = window.innerHeight;
        th.css("height", (String(wh - 202) + "px"));
        $(window).resize(function () {
            var th = $('.mainwrap');
            var wh = window.innerHeight;
            th.css("height", (String(wh - 202) + "px"));
        });
    });
    //會員資料
    $("header .member .user").click(function(){
        $("header .member .dropList").toggleClass("display");
    })

    //語系
    $("header .other .lang").click(function(){
        $("header .langDrop").toggleClass("display");
    })

    //sideLeft
    $("aside ul li").hover(function(){
        $(this).siblings()
        .removeClass("active");  
    })
    $("aside ul li").click(function(){
        $(this)
        .addClass("active");
    })

    //全部收起
    $(".funtionArea .collapse").click(function(){
        if ($(".middle .dataBox .gameBlock").hasClass("active"))
        {
            $(".middle .dataBox .gameBlock").removeClass("active");
        } 
        else
        {
            $(".middle .dataBox .gameBlock").addClass("active");
        }
    })

    //點擊收起
    $(".gameBlock .title").click(function(){
        $(this).parent().toggleClass("active");
    })

    //開啟聊天室
    $(".chatroom .titleArea").click(function(){
        $(".chatroom").toggleClass("active");
        $(".chatroom .titleArea .notfition").toggleClass("display");
    })

    //傳送訊息
    $(".chatroom textarea").keydown(function(event){

        if ( event.which == 13)
        {
            var text = $("textarea").val();
            $(".chatroom .text").append("<li><p>"+ text +"</p></li>");

            $(this).val(" ");

           
            var h = $(".chatroom .content .history .text").prop("scrollHeight");
            $(".chatroom .content .history .text")
            .animate({scrollTop: h}, 0);
        }  
    })
})

$(function(){
    //賽事場次
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            1600: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1260: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
    });
})

