class Link {
    constructor(navItem) {
        this.navItem = navItem
        document.querySelectorAll('.nav-link').forEach(item => item.style.color = 'white')
        // console.log(this.navItem)
        this.navLink = navItem.querySelectorAll('.nav-link')
        // console.log(this.navLink)
        this.navLink.forEach(item => item.addEventListener('click', this.clicked.bind(this)))
    }

    clicked() {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'))
        this.navItem.classList.add('active')
        document.querySelectorAll('.nav-link').forEach(item => item.style.color = 'white')
        this.navLink.forEach(item => item.style.color = 'gray')
    }
}







let linkItems = document.querySelectorAll('.navbar-nav .nav-item').forEach(item => new Link(item))








