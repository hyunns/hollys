(function() {
  // gnb 열기
  $('#header .gnb .depth1').on('mouseenter focusin', function() {
    $('#header').addClass('on');
    $('.depth2').stop().fadeIn(500);
  }).on('mouseleave focusout', function() {
    $('#header').removeClass('on');
    $('.depth2').stop().fadeOut(100);
  });
  
  // 검색 열기
  $('#header .btn_search.open').on('click', function() {
    $(this).toggleClass('on');
    $('.search_wrap').toggleClass('on');
  });

  // 언어설정 열기
  $('#header .lang_wrap').on('click', function() {
    $(this).toggleClass('on');
  });

  // 메인슬라이더 초기화
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인슬라이더 토글버튼
  var autoFlag = true;

  $('.main_slider .btn_slider_toggle').on('click', function() {
    $(this).toggleClass('on');

    if(autoFlag) {
      mainSlider.autoplay.stop();
      $(this).find('.blind').text('자동재생');
    } else {
      mainSlider.autoplay.start();
      $(this).find('.blind').text('일시정지');
    }
    
    autoFlag = !autoFlag;
  });

  // 메인 product 슬라이더
  var menuSlider = new Swiper('.menu_slider', {
    slidesPerView: 4,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },    
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_product .menu_slider_wrap').on('click', function(e) {
    e.preventDefault();
  });

  // 메인 뉴스 슬라이더
  var newsSlider = new Swiper('.news_slider', {
    direction: 'vertical',
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_etc .news_slider').on('click', function(e) {
    e.preventDefault();
  });

  // top버튼
  toggleBtnTop();

  function toggleBtnTop() {
    var btnTop = $('.top_wrap .btn_top');
    
    btnTop.hide();
  
    $(window).scroll(function() {
      sc = $(this).scrollTop();
  
      if(sc >= 600) {
        btnTop.fadeIn();
      } else {
        btnTop.fadeOut();
      };
    }).trigger('scroll');
  
    // 클릭시 페이지상단으로 애니메이션
    btnTop.on('click', function(e) {
      e.preventDefault();
  
      $('html, body').animate({scrollTop:0});
    });
  };
  
  /***************** 서브 **********************/
  // 매장찾기 옵션검색버튼
  $('.store_container .option_info li').on('click', function(e) {
    e.preventDefault();
    
    $(this).toggleClass('on');
  });
})();