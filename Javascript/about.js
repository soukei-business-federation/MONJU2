window.onload = function(){
    var scrollAnimationElm = document.querySelectorAll("#about_outline .about_MONJU2, .about_description .about_description1-1_blank, .about_description .about_description1 .about_description1-1, .about_description .about_description1-2_blank, .about_description .about_description1 .about_description1-2, .about_description .about_description2-1_blank, .about_description .about_description2 .about_description2-1, .about_description .about_description2-2_blank, .about_description .about_description2 .about_description2-2, #about_outline .about_features, .about_details .about_details1-1_blank, .about_details .about_details1 .about_details1-1, .about_details .about_details1-2_blank, .about_details .about_details1 .about_details1-2, .about_details .about_details2-1_blank, .about_details .about_details2 .about_details2-1, .about_details .about_details2-2_blank, .about_details .about_details2 .about_details2-2, .about_details .about_details3-1_blank, .about_details .about_details3 .about_details3-1, .about_details .about_details3-2_blank, .about_details .about_details3 .about_details3-2, #about_outline .about_schedule_title, #about_outline .about_supporter_title, #about_outline .about_supporter")
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 150;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  };