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
        $(".chatroom .titleArea::before").css("display","none");
    })

    //傳送訊息
    $(".chatroom textarea").keydown(function(event){

        if ( event.which == 13)
        {
            var text = $("textarea").val();
            $(".chatroom .text").append("<li><p>"+ text +"</p></li>");

            $(this).val(" ");
        }
    })
})