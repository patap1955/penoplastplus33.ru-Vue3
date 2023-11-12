const burger = () => {
    const headerFixed = document.querySelector("#fixedHeader");
    const headerNav = document.querySelector('.header__nav')
    const header = document.querySelector('.header')
    const navListHeader = document.querySelector('.nav-list-header')
    const headerButton = document.querySelector('.header__phone')
    const navLink = document.querySelectorAll('.nav-link')
    const burgerSpan = document.querySelectorAll(".burger-span")

    headerFixed.classList.toggle('active')
    headerNav.classList.toggle('active')
    header.classList.toggle('active')
    navListHeader.classList.toggle('active')
    headerButton.classList.toggle('active')
    navLink.forEach((val) => {
        val.classList.toggle('active-link')
    })

    document.querySelector(".burger").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");

    burgerSpan.forEach((val) => {
        val.classList.toggle("active");
    });

    navLink.forEach((val) => {
        val.addEventListener("click", (e) => {
            // mobileMenu.classList.remove("active");
            // mobileNav.classList.remove("active");
            navLink.forEach((val) => {
                val.classList.remove('active-link')
            })

            document.querySelector(".burger").classList.remove("active");
            document.querySelector("body").classList.remove("lock");
            headerFixed.classList.remove('active')
            headerNav.classList.remove('active')
            navListHeader.classList.remove('active')
            header.classList.remove('active')
            headerButton.classList.remove('active')
            burgerSpan.forEach((val) => {
                val.classList.remove("active");
            });
        })
    })
}

export default burger;
