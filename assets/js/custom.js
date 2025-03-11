$(document).ready(function() {
    $(document).ready(function() {
        jQuery('#side_form').on('submit', function (e) {
            var currentDateInput = document.getElementById("currentDate");
            currentDateInput.value = getCurrentDate();  
          
            var currentDateValue = currentDateInput.value;
    
            e.preventDefault();
            var filter = /[0-9]{10}/;
            var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            var leadName = $('#side_name').val();
            var leadPhone = $('#side_phone').val();
            var leadEmail = $('#side_email').val();
            var leadMessage = $('#side_msg').val();
            if (leadName == "") {
                $('#sideerror_name').show(0).delay(5000).hide(0);
                return false;
            } else if (leadPhone == "" || !filter.test(leadPhone)) {
                $('#sideerror_mobile').show(0).delay(5000).hide(0);
                return false;
            } else if (leadEmail != '' && !pattern.test(leadEmail)) {
                $('#sideerror_email').show(0).delay(5000).hide(0);
                return false;
            }
            $('#contactus_side').hide();
            $('.sidebuttonload').show();
            jQuery.ajax({
                url: 'https://script.google.com/macros/s/AKfycbwDYSo5lbN1QYxxMoJAe6xaN17F1ziZLuMttwkjct-brAfWhwpWiWcy429Xrj3b0k6GTw/exec',
                type: 'post',
                data: jQuery('#side_form').serialize(),
                success: function (result) {
                    jQuery('#side_form')[0].reset();
                    window.location.href = 'thank-you.html';
                }
            });
        });
    
    
        jQuery('#modal_form').on('submit', function (e) {
            var currentDateInput = document.getElementById("modalDate");
            currentDateInput.value = getCurrentDate();  
          
            var currentDateValue = currentDateInput.value;
    
            e.preventDefault();
            var filter = /[0-9]{10}/;
            var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            var leadName = $('#modal_name').val();
            var leadPhone = $('#modal_phone').val();
            var leadEmail = $('#modal_email').val();
            if (leadName == "") {
                $('#modalerror_name').show(0).delay(5000).hide(0);
                return false;
            } else if (leadPhone == "" || !filter.test(leadPhone)) {
                $('#modalerror_mobile').show(0).delay(5000).hide(0);
                return false;
            } else if (leadEmail != '' && !pattern.test(leadEmail)) {
                $('#modalerror_email').show(0).delay(5000).hide(0);
                return false;
            }
            $('#contactus_modal').hide();
            $('.modalbuttonload').show();
            jQuery.ajax({
                url: 'https://script.google.com/macros/s/AKfycbwDYSo5lbN1QYxxMoJAe6xaN17F1ziZLuMttwkjct-brAfWhwpWiWcy429Xrj3b0k6GTw/exec',
                type: 'post',
                data: jQuery('#modal_form').serialize(),
                success: function (result) {
                    jQuery('#modal_form')[0].reset();
                    window.location.href = 'thank-you.html';
                }
            });
        });
    
        jQuery('#banner-form').on('submit', function (e) {
            var currentDateInput = document.getElementById("bannerDate");
            currentDateInput.value = getCurrentDate();  
          
            var currentDateValue = currentDateInput.value;
    
            e.preventDefault();
            var filter = /[0-9]{10}/;
            var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            var leadName = $('#banner_name').val();
            var leadPhone = $('#banner_phone').val();
            var leadEmail = $('#banner_email').val();
            if (leadName == "") {
                $('#bannererror_name').show(0).delay(5000).hide(0);
                return false;
            } else if (leadPhone == "" || !filter.test(leadPhone)) {
                $('#bannererror_mobile').show(0).delay(5000).hide(0);
                return false;
            } else if (leadEmail != '' && !pattern.test(leadEmail)) {
                $('#bannererror_email').show(0).delay(5000).hide(0);
                return false;
            }
            $('#contactus_banner').hide();
            $('.bannerbuttonload').show();
            jQuery.ajax({
                url: 'https://script.google.com/macros/s/AKfycbwDYSo5lbN1QYxxMoJAe6xaN17F1ziZLuMttwkjct-brAfWhwpWiWcy429Xrj3b0k6GTw/exec',
                type: 'post',
                data: jQuery('#banner-form').serialize(),
                success: function (result) {
                    jQuery('#banner-form')[0].reset();
                    window.location.href = 'thank-you.html';
                }
            });
        });

        function getCurrentDate() {
            var currentDate = new Date();
            var dateTime = currentDate.toLocaleString();
            return dateTime;
          }
        $(function() {
            var owl = $(".gallerycarousel");
            owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 10,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    820: {
                        items: 3
                    },
                    1040: {
                        items: 4
                    }
                }
            });
        });
        if ((window).matchMedia('(max-width: 767px').matches) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= 120) {
                    $('#mobile-footer-widget').fadeIn('slow');
                } else {
                    $('#mobile-footer-widget').fadeOut('slow');
                }
            });
            if ($('.row-home-details')[0] != undefined) {
                let propertyinfo = $('.row-home-details')[0].children.length;
                if (propertyinfo == 5) {
                    $('.row-home-details').children(':not(:first-child)').addClass('w-50');
                    $('.row-home-details').children(':not(:first-child):nth-child(even)').addClass('border-right');
                }
                if (propertyinfo == 6 || propertyinfo == 4) {
                    $('.row-home-details').children().addClass('w-50');
                    $('.row-home-details').children(':nth-child(odd)').addClass('border-right');
                }
            }
        }
    });
    (jQuery);
    $('.condition-label').mouseover(function() {
        $('.check-box').css('display', "block");
        $('.check-box').css('position', "absolute");
        $('.check-box').css('transition', 'all 1.5s ease')
        $('.check-box').css('-webkit-transition', 'all 1.5s ease')
    });
    $('.condition-label').mouseout(function() {
        $('.check-box').css('display', "none");
        $('.check-box').css('transition', 'all 1.5s ease')
        $('.check-box').css('-webkit-transition', 'all 1.5s ease')
    });
    $('.sidecondition-label').mouseover(function() {
        $('.sidecheck-box').css('display', "block");
        $('.sidecheck-box').css('position', "absolute");
        $('.sidecheck-box').css('transition', 'all 1.5s ease')
        $('.sidecheck-box').css('-webkit-transition', 'all 1.5s ease')
    });
    $('.sidecondition-label').mouseout(function() {
        $('.sidecheck-box').css('display', "none");
        $('.sidecheck-box').css('transition', 'all 1.5s ease')
        $('.sidecheck-box').css('-webkit-transition', 'all 1.5s ease')
    });
    
    function modalInput() {
        let input1 = document.getElementById('modal_name').value.trim();
        let input2 = document.getElementById('modal_phone').value.length;
        let input3 = document.getElementById('modal_checkbox').checked;
        let submitBtn = document.getElementById('contactus_modal');
        if (input1 !== '' && input2 == '10' && input3) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
    
    function footerInput() {
        let input1 = document.getElementById('footer_name').value.trim();
        let input2 = document.getElementById('footer_phone').value.length;
        let input3 = document.getElementById('footer_checkbox').checked;
        let submitBtn = document.getElementById('contactus_footer');
        if (input1 !== '' && input2 == '10' && input3) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
    
    function sideInput() {
        let input1 = document.getElementById('side_name').value.trim();
        let input2 = document.getElementById('side_phone').value.length;
        let input3 = document.getElementById('side_checkbox').checked;
        let submitBtn = document.getElementById('contactus_side');
        if (input1 !== '' && input2 == '10' && input3) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
    
    function bannerInput() {
        let input1 = document.getElementById('banner_name').value.trim();
        let input2 = document.getElementById('banner_phone').value.length;
        let input3 = document.getElementById('banner_checkbox').checked;
        let submitBtn = document.getElementById('contactus_banner');
        if (input1 !== '' && input2 == '10' && input3) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
    $('.nav-item').on('click', function() {
        $('#navbarSupportedContent').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
    })
    $('#nav-menu li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.enquireModal').on('click', function(e) {
        e.stopPropagation();
        console.log('clicked')
        const target = $(e.currentTarget);
        const heading = target.attr('data-name');
        $('.modal-title').html(heading);
    })
    $(function() {
        var owl = $(".gallerycarousel");
        owl.owlCarousel({
            items: 1,
            loop: false,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                820: {
                    items: 3
                },
                1040: {
                    items: 4
                }
            }
        });
    });
    if ((window).matchMedia('(max-width: 767px').matches) {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $('#mobile-footer-widget').fadeIn('slow');
            } else {
                $('#mobile-footer-widget').fadeOut('slow');
            }
        });
        if ($('.row-home-details')[0] != undefined) {
            let propertyinfo = $('.row-home-details')[0].children.length;
            if (propertyinfo == 5) {
                $('.row-home-details').children(':not(:first-child)').addClass('w-50');
                $('.row-home-details').children(':not(:first-child):nth-child(even)').addClass('border-right');
            }
            if (propertyinfo == 6 || propertyinfo == 4) {
                $('.row-home-details').children().addClass('w-50');
                $('.row-home-details').children(':nth-child(odd)').addClass('border-right');
            }
        }
    }
});
(jQuery);
$('.condition-label').mouseover(function() {
    $('.check-box').css('display', "block");
    $('.check-box').css('position', "absolute");
    $('.check-box').css('transition', 'all 1.5s ease')
    $('.check-box').css('-webkit-transition', 'all 1.5s ease')
});
$('.condition-label').mouseout(function() {
    $('.check-box').css('display', "none");
    $('.check-box').css('transition', 'all 1.5s ease')
    $('.check-box').css('-webkit-transition', 'all 1.5s ease')
});
$('.sidecondition-label').mouseover(function() {
    $('.sidecheck-box').css('display', "block");
    $('.sidecheck-box').css('position', "absolute");
    $('.sidecheck-box').css('transition', 'all 1.5s ease')
    $('.sidecheck-box').css('-webkit-transition', 'all 1.5s ease')
});
$('.sidecondition-label').mouseout(function() {
    $('.sidecheck-box').css('display', "none");
    $('.sidecheck-box').css('transition', 'all 1.5s ease')
    $('.sidecheck-box').css('-webkit-transition', 'all 1.5s ease')
});

function modalInput() {
    let input1 = document.getElementById('modal_name').value.trim();
    let input2 = document.getElementById('modal_phone').value.length;
    let input3 = document.getElementById('modal_checkbox').checked;
    let submitBtn = document.getElementById('contactus_modal');
    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}

function footerInput() {
    let input1 = document.getElementById('footer_name').value.trim();
    let input2 = document.getElementById('footer_phone').value.length;
    let input3 = document.getElementById('footer_checkbox').checked;
    let submitBtn = document.getElementById('contactus_footer');
    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}

function sideInput() {
    let input1 = document.getElementById('side_name').value.trim();
    let input2 = document.getElementById('side_phone').value.length;
    let input3 = document.getElementById('side_checkbox').checked;
    let submitBtn = document.getElementById('contactus_side');
    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}

function bannerInput() {
    let input1 = document.getElementById('banner_name').value.trim();
    let input2 = document.getElementById('banner_phone').value.length;
    let input3 = document.getElementById('banner_checkbox').checked;
    let submitBtn = document.getElementById('contactus_banner');
    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}
$('.nav-item').on('click', function() {
    $('#navbarSupportedContent').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
})
$('#nav-menu li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
})
$('.enquireModal').on('click', function(e) {
    e.stopPropagation();
    console.log('clicked')
    const target = $(e.currentTarget);
    const heading = target.attr('data-name');
    $('.modal-title').html(heading);
})