import './css/main.scss';
import './js/application.js';
import 'jquery';
import 'popper.js';
import 'bootstrap';

$(function () {
    $(document).ready(function () {
        $('#qty-minus, #qty-plus').on('click', function () {
            // Activer le bouton
            $('#add-to-cart-btn').prop('disabled', false);

            let qty = parseInt($('#qty-input').val());

            if ($(this).attr('id') === 'qty-minus') {
                if (qty > 1) {
                    $('#qty-input').val(qty - 1);
                }
            } else {
                $('#qty-input').val(qty + 1);
            }
        });
    });
    $(document).ready(function () {
        $('.dropdown-header').on('click', function () {
            $(this).next('.dropdown-items').slideToggle(); // ou .toggle() si tu veux sans animation
        });
    });

    $('.dropdown-menu').hide();

    const $produitsDropdown = $('#produitsDropdown');
    const $dropdownMenu = $produitsDropdown.next('.dropdown-menu');


    $produitsDropdown.on('click', function (e) {
        e.preventDefault();

        // Si menu visible, on ferme sinon on ouvre
        $dropdownMenu.stop(true, true).slideToggle(200);


        const expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
    });


    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $dropdownMenu.slideUp(200);
            $produitsDropdown.attr('aria-expanded', false);
        }
    });
});

$(document).ready(function () {
    $('#dropdownLang').on('click', function (e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle(200);
    });

    // Clique en dehors pour fermer
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav-item.dropdown').length) {
            $('.dropdown-menu').slideUp(200);
        }
    });
    // Cache le menu au chargement
    $('#mainNavbar').hide();

    $('#btnToggleMenu').on('click', function () {
        // Toggle menu avec effet slide
        $('#mainNavbar').slideToggle(300);

        // Toggle bouton hamburger ↔ X
        $(this).toggleClass('active');

        // Accessibilité
        let isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !isExpanded);
    });
});