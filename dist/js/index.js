$(function(){function e(e){$(e).on("focus",function(){$(this).siblings("label").addClass("light"),$(this).on("input",function(){$(this).siblings("label").removeClass("light").addClass("hide")}),$(this).on("blur",function(){""==$(this).val()?($(this).siblings("label").removeClass("hide"),$(this).siblings("label").removeClass("light")):$(this).siblings("label").removeClass("light").addClass("hide")})})}new Swiper(".ban-swiper-container",{loop:!0,effect:"fade",autoplay:1e4,speed:2e3,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",pagination:".swiper-pagination",autoplayDisableOnInteraction:!1,fade:{crossFade:!1},paginationClickable:!0});var s={data:[{title:"苏幕遮·怀旧",des:"碧云天，黄叶地。秋色连波，波上寒烟翠。山映斜阳天接水。芳草无情，更在斜阳外。黯乡魂，追旅思。夜夜除非，好梦留人睡。明月楼高休独倚。酒入愁肠，化作相思泪。",md:"12-04",year:"2011"},{title:"木兰花令",des:"人生若只如初见，何事秋风悲画扇？等闲变却故人心，却道故人心易变。骊山语罢清宵半，泪雨零铃终不怨。何如薄幸锦衣郎，比翼连枝当日愿。",md:"12-07",year:"2071"},{title:"长相思",des:"山一程，水一程，身向榆关那畔行，夜深千帐灯。风一更，雪一更，聒碎乡心梦不成，故园无此声。",md:"12-04",year:"2011"},{title:"画堂春",des:"一生一代一双人，争教两处销魂。相思相望不相亲，天为谁春。浆向蓝桥易乞，药成碧海难奔。若容相访饮牛津，相对忘贫。",md:"12-04",year:"2011"}]};$(".newsmore,.readmore").on("click",function(){$.each(s.data,function(e,s){$('<div class="news-list"><div class="item-block"><div class="item-info"><a href="#" class="item-a break">'+s.title+'</a><div class="item-des">'+s.des+'</div></div><div class="item-date"><span class="md">'+s.md+'</span><span class="year">'+s.year+"</span></div></div></div>").appendTo($(".news .inner"))})}),(new WOW).init(),e(".formblock-s input"),e(".formblock-b textarea"),$("#subBtn1").on("click",function(){for(var e=$(".nes"),s=$(".tips-error"),n=0,a=0;a<e.length;a++)""==e.eq(a).val()?(s.eq(a).show(),n++):s.eq(a).hide();0==n&&($(".tips-seccess").addClass("tips-show"),$(".nes").val(""),$(".nec").removeClass("hide"))});var n=!1;$(".menudown").on("click",function(){return 0==n?($(".menu-open").addClass("hiden"),$(".menu-close").removeClass("hiden"),$(".down").removeClass("down").addClass("up"),$(".menu-ph").show().removeClass("menuhide").addClass("menushow"),void(n=!0)):($(".menu-open").removeClass("hiden"),$(".menu-close").addClass("hiden"),$(".up").removeClass("up").addClass("down"),$(".menu-ph").removeClass("menushow").addClass("menuhide"),setTimeout(function(){$(".menu-ph").hide()},300),void(n=!1))}),addEventListener("scroll",function(){window.scrollY>=200?($("#toTop").show(),$("#toTop").on("click",function(){$("body,html").stop().animate({scrollTop:0},500)})):$("#toTop").hide()});var a=new BMap.Map("allmap"),i=new BMap.Point(116.4489641892,39.8988930242);a.centerAndZoom(i,17),a.addControl(new BMap.MapTypeControl),a.setCurrentCity("北京");var o=new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}),t=new BMap.NavigationControl;a.addControl(o),a.addControl(t);var l=new BMap.Marker(i);a.addOverlay(l)});