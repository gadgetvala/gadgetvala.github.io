{
    let sideMenu = document.querySelector('.side__menu');
    let cross1 = document.querySelector('.cross1');
    let cross2 = document.querySelector('.cross2');
    let cross3 = document.querySelector('.cross3');
    let menuBackground = document.querySelector('.side__menu--background');
    let list = document.querySelector('.side__menu--list');
    cross1.style.transition = 'all .1s';
    cross2.style.transition = 'all .1s';
    cross3.style.transition = 'all .1s';

    sideMenu.addEventListener('click', function() {
        if (cross2.style.opacity === '0') {
            cross2.style.opacity = '1';
            cross1.style.transform = 'rotate(0deg) translateX(-50%) translateY(0px)';
            cross1.style.transformOrigin = 'left';
            
            cross3.style.transform = 'rotate(0deg) translateX(-50%) translateY(0px)';
            cross3.style.transformOrigin = 'left';

            menuBackground.style.transform = 'scale(1)';
            list.style.fontSize = '0';
            list.style.left = '0';

        } else {
            cross2.style.opacity = '0';
            cross1.style.transform = 'rotate(45deg) translateX(-6px) translateY(9px)';
            cross1.style.transformOrigin = 'left center 0px';
            
            cross3.style.transform = 'rotate(-45deg) translateY(-10px) translateX(-7px)';
            cross3.style.transformOrigin = 'left center 0px';

            menuBackground.style.transform = 'scale(100)';
            list.style.fontSize = '5rem';
            list.style.left = '50%';
            window.style.overflow = 'hidden';

        }
    });
}