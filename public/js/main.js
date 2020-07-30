// RoyalSlider Init
jQuery(function() {
  jQuery('.royalSlider').royalSlider({
    imageScaleMode: 'fit',
    imageScalePadding: 0,
    controlNavigation: 'none',
    arrowsNavAutoHide: true,
    slidesSpacing: 10,
    loop: true,
    numImagesToPreload: 1,
    usePreloader: true,
    navigateByClick: false,
    sliderDrag: false
  });
});

// Magnific Popup Init
jQuery(document).ready(function() {
  jQuery('.open-popup > a').magnificPopup({
    mainClass: 'mfp-fade',
    closeOnBgClick: false,
    closeBtnInside: false,
    removalDelay: 250
  });
});
