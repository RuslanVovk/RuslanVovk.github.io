function onYouTubePlayerAPIReady(){$.each(players,function(t,e){function o(t){document.getElementById("close"+e).addEventListener("click",function(){players["player"+e].stopVideo()}),jQuery(function(t){t(document).mouseup(function(o){var a=t(".popup-box");a.is(o.target)||0!==a.has(o.target).length||(t(".popup-img").length?(t(".popup-img").fadeOut("fast"),t(".popup-img").remove(),players["player"+e].stopVideo()):(t(".popup").fadeOut("fast"),players["player"+e].stopVideo()))})})}players["player"+e]=new YT.Player(e.toString(),{events:{onReady:o}})})}function call(){""!==$("#down-phone").val()?(msg=$("#contact-form-down").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(t){$(".popup").fadeOut(),$(".popup-thanks").fadeIn().delay(2e3).fadeOut()},error:function(t,e){alert("Возникла ошибка: "+t.responseCode)}}),$("#contact-form-down")[0].reset()):""!==$("#popup-phone").val()?(msg=$("#contact-form-popup").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(t){$(".popup").fadeOut(),$(".popup-thanks").fadeIn().delay(2e3).fadeOut()},error:function(t,e){alert("Возникла ошибка: "+t.responseCode)}}),$("#contact-form-popup")[0].reset()):""!==$("#calculator-phone").val()?(msg=$("#calculator-form").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(t){$(".popup").fadeOut(),$(".popup-thanks").fadeIn().delay(2e3).fadeOut()},error:function(t,e){alert("Возникла ошибка: "+t.responseCode)}}),$("#calculator-form")[0].reset()):""!==$("#about-phone").val()&&(msg=$("#popup-about-form").serialize(),$.ajax({type:"POST",url:"mail.php",data:msg,success:function(t){$(".popup").fadeOut(),$(".popup-thanks").fadeIn().delay(2e3).fadeOut()},error:function(t,e){alert("Возникла ошибка: "+t.responseCode)}}),$("#popup-about-form")[0].reset())}window.addEventListener("keydown",function(t){27===t.keyCode&&$('.popup[style="display: block;"]').length>0&&($(".popup-img").length?($(".popup-img").fadeOut("fast"),$(".popup-img").remove(),player.pauseVideo()):$(".popup").fadeOut("fast"))}),$(function(){$(".popup-example-cell-img").on("click",function(t){t.preventDefault();var e=$(".popup-example-cell-img-click").attr("src");$("body").append('<div class="popup-box popup-img"><div class="popup-close popup-img-close"></div><div class="popup-content"><img src="'+e+'"></div></div>'),$(".popup-img").fadeIn("fast")}),$("body").on("click",".popup-img-close",function(t){t.preventDefault(),$(".popup-img").fadeOut("fast"),$(".popup-img").remove()})}),$(".contact-map-box").hover(function(){$(".contact-map-info").fadeOut("fast")},function(){$(".contact-map-info").fadeIn("fast")}),$(".call-close").on("click",function(t){$(".popup").fadeOut()}),$(".main-info-button-call, .main-nav-petal-call, .footer-call, .stock-slide-content-button").on("click",function(t){t.preventDefault(),$(".popup-call").fadeIn()}),$(".main-nav-petal-about, .footer-about").on("click",function(t){t.preventDefault(),$(".popup-about").fadeIn()}),$("a[href*=#]").bind("click",function(t){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},700),t.preventDefault()}),$(".stock-slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,infinite:!0,arrows:!0,prevArrow:'<i class="stock-slider-prevArrow"></i>',nextArrow:'<i class="stock-slider-nextArrow"></i>',responsive:[{breakpoint:1025,settings:{arrows:!1,dots:!0}},{breakpoint:769,settings:{arrows:!0,dots:!1}},{breakpoint:480,settings:{arrows:!1,dots:!0}}]});var output=document.querySelectorAll("output")[0];$(document).on("input",'input[type="range"]',function(t){$(this).siblings("output").text($(this).val())}),$(function(){var t=$(".height"),e=$(".color"),o=$(".width"),a=$("#price"),c=1,l=0,n=0,p=0,i=0;t.change(function(){i=+t.val()/16,p=+o.val()/32,n=i*p,l=(n*+e.val()+220*Math.ceil(n/8))*c,a.text(l)}),o.change(function(){i=+t.val()/16,p=+o.val()/32,n=i*p,l=n*+e.val()+220*Math.ceil(n/8),a.text(l)}),e.change(function(c){i=+t.val()/16,p=+o.val()/32,n=i*p,l=n*+e.val()+220*Math.ceil(n/8),a.text(l)}),a.text("0")}),$(".contact-form-phone").mask("+38 (999) 999-99-99"),$(function(){$("select").selectric()});var calculator_contacts=$(".calculator-contacts").innerHeight();$(".example").attr("style","top:-"+calculator_contacts+"px ; margin-bottom:-"+calculator_contacts+"px");var width_window=$(window).width();$(window).resize(function(){var t=$(window).width();t!=$(window).width()&&(calculator_contacts=$(".calculator-contacts").height(),$(".example").attr("style","top:-"+calculator_contacts+"px ; margin-bottom:-"+calculator_contacts+"px"))}),$(".calculator-body-button").on("click",function(t){t.preventDefault(),$(".example").animate({top:0},700),$(".example").attr("style","margin-bottom:0")}),$(".calculator-contacts-cancel").on("click",function(t){t.preventDefault(),$(".example").animate({top:"-"+calculator_contacts+"px"},700),$(".example").attr("style","margin-bottom:-"+calculator_contacts+"px")}),$(".example").on("click",".example-content-item",function(t){t.preventDefault(),$(".popup-example").eq($(this).index()).fadeIn(),$(".youtube-close").on("click",function(t){$(".popup").fadeOut()})});var players=["Youtube0video","Youtube1video","Youtube2video","Youtube3video","Youtube4video","Youtube5video","Youtube6video","Youtube7video"],word_spacing="70px";width_window<770&&(word_spacing="16vw"),$(function(){$(".selectric").hover(function(){$(".selectric-wrapper").addClass("selectric-open"),width_window>770?$(".selectric-items").attr("style","width: 500px"):$(".selectric-items").attr("style","width: 100%")},function(){setTimeout(function(){$(".selectric-wrapper").attr("title","Выберите цвет").delay(6e3).removeClass("selectric-open")},2e3)}),"Красный "==$(".selectric .label").text()||"Червоний "==$(".selectric .label").text()?$(".selectric").attr("style","background-color: #f02051;"):"Зелений Синий Желтый Белый"==$(".selectric .label").text()||"Зелений Синій Жовтий Білий"==$(".selectric .label").text()?$(".selectric").attr("style"," background: linear-gradient(to right, #009847 25%,#5252ff 25%,#5252ff 50%,#d4c202 50%, #d4c202 75%,#ffffff 75%,#ffffff 100%);word-spacing: "+word_spacing+";"):"RGB"==$(".selectric .label").text()&&$(".selectric").attr("style","background: linear-gradient(to left, #00a5df 0%, #3e147b 20%, #e20079 40%, #df132c 60%, #f3ef15 80%, #009847 100%);"),$(".selectric-scroll ul li").on("click",function(t){"Красный "==$(".selectric .label").text()||"Червоний "==$(".selectric .label").text()?$(".selectric").attr("style","background-color: #f02051;"):"Зелений Синий Желтый Белый"==$(".selectric .label").text()||"Зелений Синій Жовтий Білий"==$(".selectric .label").text()?$(".selectric").attr("style"," background: linear-gradient(to right, #009847 25%,#5252ff 25%,#5252ff 50%,#d4c202 50%, #d4c202 75%,#ffffff 75%,#ffffff 100%);word-spacing: "+word_spacing+";"):"RGB"==$(".selectric .label").text()&&$(".selectric").attr("style","background: linear-gradient(to left, #00a5df 0%, #3e147b 20%, #e20079 40%, #df132c 60%, #f3ef15 80%, #009847 100%);")})});
