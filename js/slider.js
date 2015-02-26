function slider(){
	  var $active = $('.slider .slider-active');
      var $next = ($active.next().length > 0) ? $active.next() : $('.slider div:first');
      $next.css('z-index',2);
      $active.fadeOut(2500,function(){
	  		$active.css('z-index',1).show().removeClass('slider-active'); 
          	$next.css('z-index',3).addClass('slider-active');
      });

}
function bullets_show(){
	var count=$(".slider-item").length;
	console.log(count);
	for (var i = 1; i <= count; i++) {
		var htm="<li id='a-"+i+"' class='bullet-item'><a href='#item-"+i+"'>.</a></li>";
		$(".slider-bullet").append(htm);
	}
}
function bullet_click(){
	$('.bullet-item').on('click',function(){
		
	})
}
 $(document).ready(function(){
 	bullets_show();
 	bullet_click();
 	setInterval('slider()',3500);
 });
 