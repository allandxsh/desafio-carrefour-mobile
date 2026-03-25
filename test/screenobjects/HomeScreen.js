class HomeScreen {
    get homeScreen () {
        return $('~Home-screen')
    }
    get btnHome () {
        return $('~Home')
    }
    get btnWebview() {
        return $('~Webview')
    }
    get btnLoginMenu() {
        return $('~Login')
    }
    get btnForms() {
        return $('~Forms')
    }
    get btnSwipe() {
        return $('~Swipe')
    }
    get btnDrag() {
        return $('~Drag')
    }
    get btnMenu() {
        return $('~Menu')
    }
}

export default new HomeScreen()