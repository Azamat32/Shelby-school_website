$(document).ready(function() {
    $('.info_img_content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }

    });
});
$(document).ready(function() {
    $('.event_single_content_img').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }

    });
});
$(document).ready(function() {
    $('.class_single_gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }

    });
});
$(document).ready(function() {
    $('.single_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: true,
    });

});

$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

});
$(document).ready(function() {
    $('.gallery_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,


        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

});

const burgerMenu = document.querySelector('.nav__burger'); //выбрать где именно нарисован бургер и скрыт.
const menuList = document.querySelector('.nav_list_burger'); //родительский элемент листа меню
const body = document.querySelector('body'); //это просто body для фиксации
const links = document.querySelectorAll('nav_list_item_adaptive'); // ссылки меню

menuList.onclick = function hideMenu() {
    burgerMenu.classList.toggle('activeBurger');
    menuList.classList.toggle('activeBurger');
    body.classList.remove('lockScroll');
}
burgerMenu.onclick = function showBurger() {
    this.classList.toggle('activeBurger');
    menuList.classList.toggle('activeBurger');
    body.classList.toggle('lockScroll');
}

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function(e) {
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab");

        for (var j = 0; j < tabNavs.length; j++) {
            var contentAttr = tabPanes[j].getAttribute("data-tab-content");

            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add("active");
                tabPanes[j].classList.add("active");
            } else {
                tabNavs[j].classList.remove("active");
                tabPanes[j].classList.remove("active");
            }
        };
    });
}

function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
}

document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
}