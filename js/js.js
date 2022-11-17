$(function(){
    //會員資料
    $("header .member .user").click(function(){
        $("header .member .user ul").toggleClass("display");
    })

    //語系
    $("header .other .lang").click(function(){
        $("header .other .lang ul").toggleClass("display");
    })

    //全部收起
    $(".funtionArea .collapse").click(function(){
        if ($(".middle .dataBox .gameBlock"))
        {
            $(".middle .dataBox .gameBlock:not(.active)").toggleClass("active");
        } 
    })

    //點擊收起
    $(".gameBlock .title").click(function(){
        $(this).parent().toggleClass("active");
    })
})