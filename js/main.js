new WOW().init();
		var swiper = new Swiper('.swiper-container', {
			centeredSlides: true,
      		navigation: {
	       	 	nextEl: '.swiper-button-next',
	       	 	prevEl: '.swiper-button-prev',
     	 	},
     	 	pagination: {
        		el: '.swiper-pagination',
        		clickable:true,
      		},	
    	});

		$('#vehicle-list').mCustomScrollbar({
			theme:'dark'
		});
		function move(value){
			$('#vehicle-list').mCustomScrollbar("scrollTo",value,{
				scrollEasing:'easeOut'
			})
		}
		$('.vehicle-nav ul li a').click(function(){
			if($(this).attr('id')==="cars-nav"){
				move("#cars");
			}		
		})
		var count ="";
		$('#navbar > a').click(function(){
			if(count === ""){
				count = $(this).attr('id');
				$(this).addClass('active');
				if(count === "vehicles-link"){
					$('#vehicles').removeClass('hide-vehicle');
					$('.vehicle-nav').addClass('fadeInDown')
					$('#vehicle-list').addClass('fadeInUp')
				}
			}
			else{
				if(count === $(this).attr('id')){
					$(this).removeClass('active');
					count = "";
					$('.vehicle-nav').addClass('fadeOutUp');
					$('#vehicle-list').addClass('fadeOutDown')
					setTimeout(function(){
						$('#vehicles').addClass('hide-vehicle');
						$('.vehicle-nav').removeClass('fadeOutUp');
						$('#vehicle-list').removeClass('fadeOutDown')
					},300)		
				}
				else{
					$('#navbar > a').removeClass('active');
					$(this).addClass('active');
					count = $(this).attr('id');
					if(count != "vehicles-link"){
						$('.vehicle-nav').addClass('fadeOutUp');
						$('#vehicle-list').addClass('fadeOutDown')
						setTimeout(function(){
							$('#vehicles').addClass('hide-vehicle');
							$('.vehicle-nav').removeClass('fadeOutUp');
							$('#vehicle-list').removeClass('fadeOutDown')
						},300)							
					}
					else{
						$('#vehicles').removeClass('hide-vehicle');
						$('.vehicle-nav').addClass('fadeInDown')
						$('#vehicle-list').addClass('fadeInUp')
					}
				}
			}
		})
		$('#vehicle-close').click(function(){
			$('.vehicle-nav').addClass('fadeOutUp');
			$('#vehicle-list').addClass('fadeOutDown');
			setTimeout(function(){
				$('#vehicles').addClass('hide-vehicle');
				$('.vehicle-nav').removeClass('fadeOutUp');
				$('#vehicle-list').removeClass('fadeOutDown');
			},300)
			$('#navbar a').removeClass('active');
			count ="";
		})
		$('.vehicle-product').addClass('animated fadeInUp');
		// khi click vào đâu nó active tới đó 
		// khi ta đang có active 1 chỗ muốn ấn sang cái khác để nó active luôn thì trc tiên ta phải xóa active trc rồi them active vào cái sau z
		$('.carousel-indicators-config li').click(function(){
			$('.carousel-indicators-config li').removeClass('active');// khi mình click vào cái gì thì nó sẽ remove cái active các trc đó rồi sau đó mình thêm active vào phía dưới cho nó 
			$(this).addClass('active');
		})
		$('.indicators-xs-header').click(function(){
			// slideToggle nếu click vào class thì cái hàm dưới sẽ chạy nên chạy xuống dựa vào hàm slideToggle hàm này giúp chạy xuoosngvaf lênn
			// tất nhiên ban đầu cho hàm ý nó ẩn đi

			// hàm slideToggle tạo hiệu ứng chuyển động trượt : slow, fast.
			$('.carousel-indicatiors-xs ol').slideToggle();// chay lên chạy xuống nhớ cài cái display none cho nó để nó ẩn từ trc 
			// ta sẽ chỉnh cái mũi tên khi click thì mũi tên nó xoay nên xoay xuống theo  
			// ($('.indicators-xs-header i').css("transform","rotate(180deg") nó sẽ hương nên trên và muốn thay đc quá trình xoay ta sử transiton:all .5s 
			// mình tạo class transform-1 với thuộc tính trasfoem:DeviceRotationRate(180) 180 để xoay tròn 
			if($('.indicators-xs-header i').hasClass('transform-rotate')){//kiểu tra xem có class transform chwua có rồi thì nó remove đi còn ngược lại nó thêm vào 
				$('.indicators-xs-header i').removeClass('transform-rotate')
			}
			else{
				$('.indicators-xs-header i').addClass('transform-rotate')
			}
			
		})
		$('.carousel-indicatiors-xs ol li').click(function(){
			// khi mình click li thì mình gọi thằng li ra ròi sd html để thay thế bằng nd của li 
			// hàm html ó tác dụng lấy nd trng HTML gắn nó vào 1 thành phần nó cso tác dụng ý như thuộc tính của innerHTML
			// ví dung $('selector').html(); tức nó sẽ lấy hết gtri html của hàm Selector 
			// còn $('selector').html('content'); này thí nó láy html của hàm content gán thay cho hàm seclector 

			// cái này hàm html thì mk lấy đc đoạn text trong đó và dựa vào id hay class để thay html còn hàm text thì chỉ lấy đc đoạn text 

			$('.indicators-title span').html($(this).html());//  như vậy thì nd html của cái thang span sẽ đc thay thế bằng nd của thằng mình đang click
			$('.carousel-indicatiors-xs ol').slideUp();//khi click vào cái đó thfi cái ol sẽ chạy nên dựa vào cái hàm slideUp
		})
		var count= 0;
		$('.carousel-control-prev').click(function(){
			$('.carousel-indicators-config li').removeClass('active');
			// có phải cái đầu tiên active khi load màn hình luonowr tri thứ 1 tương ứng với count là 0 vậy khi mình ấn lùi nó sẽ chạy vể cuối tức vtrij thứ 5 với gtri count là 4 

			// lần đầu tiên ta có đc vtri đầu tiên là 1 tương ứng với count là 4 tức vtri thằng cuối 
			// sau đó mang thằng này mang xuống dưới để so sánh 
			if(count ==0){// nếu =0 tức lần đầu tiên 
				count= 4;
			}
			else{// nếu k phải 0 ví dụ là 3 thì nó phải chạy về vtri 2 do nó là nút lùi 
				// nếu count k phải 0 ví dụ 3 thì sẽ về 
				count--;
			}
			$('.carousel-indicators-config li').each(function(i){
				// ta duyệt li 
				// từ đây ta có 5 cái li từ 0-4
				// lần đầu với count là 4 nó sẽ cho i = 4 và i sẽ tìm và chả về cái hình số 4 ở vtri thứ 5 và thêm active vào đó 
				if(i == count){
					$(this).addClass('active');
					$('.indicators-title span').html($(this).html());
				}
			})
		})
		$('.carousel-control-next').click(function(){
			$('.carousel-indicators-config li').removeClass('active');
			// nút tiến lại khác khi ấn tiến nó sẽ tiến lên 
			if(count ==4 ){
				count= 0;
			}
			else{
				count++;
			}
			$('.carousel-indicators-config li').each(function(i){
				if(i == count){
					$(this).addClass('active');
					$('.indicators-title span').html($(this).html());
				}
			})
		})
		$('.back-to-top').click(function(){
			$('body,html').animate({scrollTop:0},1000);
		})
		function collapse(){
			var width = $(window).width();
			console.log(width);
			if(width >= 750){
				$('.collapse-ul').removeClass('collapse');
			}
			if(width<750){
				$('.collapse-ul').addClass('collapse');
			}
		}
		$(window).resize(function(){
			collapse();
		})
		$(document).ready(function(){
			collapse();
		})