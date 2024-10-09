$(document).ready(function () {

    //Banner aleatório
    document.getElementById('banner_img').src = './assets/img/banner_IA_' + (Math.floor(Math.random() * (5 - 1 + 1)) + 1) + '.png';



    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 110;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });


    //Efeito ScrollReveal estágios
    ScrollReveal().reveal('.title', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.description', {
        origin: 'left',
        duration: 3000,
        distance: '30%'
    });


    ScrollReveal().reveal('#testimonial_people', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    //Format CPF/CNPJ
    $('<input>', { id: 'cpf' }).hide().insertAfter($('#cpfCnpj')).mask('999.999.999-99');
    $('<input>', { id: 'cnpj'}).hide().insertAfter($('#cpfCnpj')).mask('99.999.999/9999-99');
  
    $('#cpfCnpj').keyup(function(){
        const val = $(this).val().replace(/[^0-9]/g, '');

        if (val.length <= 11) {
            $('#cpf').val(val);
            $(this).val($('#cpf').masked());
            $('#cnpj_cpf').text('CPF');
        } else {
            $('#cnpj').val(val);
            $(this).val($('#cnpj').masked());
            $('#cnpj_cpf').text('CNPJ');
        }
    });

});
