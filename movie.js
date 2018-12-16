/*/
页面滚动事件
 */
var back=document.getElementById("back")
var middleNav=document.getElementById("middleNav")
// console.log(middleNav);
window.onscroll=function () {

  if (getScroll().scrollTop > 893) {
    middleNav.className += " fixed"
  } else {
    middleNav.className = "middle-nav"
  }
  if (getScroll().scrollTop >= 300) {
    back.style.display = "block"
  } else {
    back.style.display = "none"


  }
}



$("#back").click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
    console.log(main-top);

});


//点击播放按钮,弹出播放器屏幕,整个页面颜色变透明
$(function () {
    var $moveLists = $(".movieLists a")
    $moveLists.click(function () {
    $(".screen").stop(true,false).show(500);
    $(".allbody").show();
   // 第一种方法:
   //  var $luiing= $(this).parent().attr("movieLj")
   //  $(".screen video").attr("src",$luiing)


    //第二种方法
    var index=$(this)[0].dataset.index;
    var src="movies/movie"+index+".mp4"
    $(".screen video")[0].src=src;


  })


  $(".screen a").click(function () {
    $(".screen").stop(true,false).hide(1000)
    $(".allbody").hide();
  })
  //视频点击关闭按钮旋转
    $(".screen a").rotate({
        bind:
            {
                mouseover: function () {
                    $(this).rotate({animateTo: 180})
                },
                mouseout: function () {
                    $(this).rotate({animateTo: 0})
                }
            }

    });

    //中间导航栏的切换对应的下面视频页面
    $(".middle-nav ul li").click(function () {
        var index = $(this).index()
        console.log(index);
        $(".movie-list>.ulList").eq(index).show().siblings(".ulList").hide()


    })

    //中间导航栏样式切换

    $(".middle-nav ul .li1").on("click",function () {
        $(this).css({'background-position': '0 0'});
        $(".middle-nav ul .li2").css({'background-position': '0 -77px'});
        $(".middle-nav ul .li3").css({'background-position': '-278px 0px '});

    })
    // $(".middle-nav ul .li1").on("mouseleave",function () {
    //     $(this).css({"background-position":"-278px -152px"})
    // })
    $(".middle-nav ul .li2").on("click",function () {
       $(this).css({'background-position': '0px -152px'});
       $(".middle-nav ul .li1").css({'background-position': '-278px -152px'});
       $(".middle-nav ul .li3").css({'background-position': '-278px 0px '});


    })
    $(".middle-nav ul .li3").on("click",function () {
       $(this).css({'background-position': '-278px -77px'});
       $(".middle-nav ul .li1").css({'background-position': '-278px -152px'});
       $(".middle-nav ul .li2").css({'background-position': '0 -77px'});

    })







    //顶部4个icon图标的跳转

    $(".main-icon ul li>a").click(function (  ) {

    var newWinHeight = 500;
    var newWinWidth = 500;

    //窗口位于屏幕的位置
    var x = window.screen.width/2-newWinWidth/2;
    var  y = window.screen.height/2-newWinHeight/2;

    //获取a标签的data-link中真实链接值
    var dataLink = $(this).attr("data-link");
    console.log ( dataLink );
    //使用window打开
    var newWIn  = window.open(dataLink,
        "_blank",
        "directories=no," +
        "menubar=no+" +
        "status=no," +
        "width="+newWinWidth+"," +
        "height="+newWinHeight+","+
        "top="+y+","+
        "left="+x
    );
    return false;
  });

})

