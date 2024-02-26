 const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars')
    const mobile_nav = document.querySelector('.mobile_nav')
    const mobileLinks = document.querySelectorAll('.mobile_nav__link');

    //state
    let isMobileNavOpen = false;
   
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen) {
            mobile_nav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobile_nav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
  
    })

    mobileLinks.forEach(link=> {
        link.addEventListener('click', () => {
            isMobileNavOpen = false; 
            mobile_nav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
 }

 export default mobileNav;
