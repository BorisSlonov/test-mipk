"use strict"

//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        document.querySelector('.header__btn').classList.toggle('header__btn_active')
        document.querySelector('.header-top__item_logo').classList.toggle('header__logo_active')
        document.querySelector('.header-top__item_btn').classList.toggle('header-top__item_btn_active')
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');

            document.querySelector('.header__btn').classList.toggle('header__btn_active')
            document.querySelector('.header-top__item_logo').classList.toggle('header__logo_active')
            document.querySelector('.header-top__item_btn').classList.toggle('header-top__item_btn_active')
        })
    })
})