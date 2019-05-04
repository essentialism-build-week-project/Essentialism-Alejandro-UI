class Nav {
    constructor(navItem) {
        this.navItem = navItem
        this.navLink = navItem.querySelectorAll('.nav-link')
        this.navLink.forEach(item => item.addEventListener('click', this.clicked.bind(this)))
    }

    clicked() {
        document.querySelectorAll('.nav-item').forEach(item =>item.classList.remove('active'))
        this.navItem.classList.add('active')
    }
}

let linkItems = document.querySelectorAll('.navbar-nav .nav-item').forEach(item => new Nav(item));


let reactLink = document.querySelectorAll('.react-btn').forEach(item => item.addEventListener('click', () => window.location.href='http://essentialism-20190428172101-hostingbucket-mysandbox.s3-website-us-east-1.amazonaws.com'));






