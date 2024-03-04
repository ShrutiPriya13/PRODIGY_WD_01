let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if ( top >= offSet && top < offSet + height ) {
            navLinks.forEach( link => { 
                link.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        };
    });
};