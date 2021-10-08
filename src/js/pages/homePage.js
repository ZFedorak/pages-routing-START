import levelHeading from "../components/ui/levelHeading"
import link from "../components/ui/link"
const homePage = function (){
    const app = document.querySelector('#app')

    const header = document.createElement('header')
    const h1 = levelHeading('h1', 'Home Page')
    const home = link('login page', '/login')
    const signUp = link('sign up', '/signup')
    header.append(h1)
    header.append(home)
    header.append(signUp)

    return header
}

export default homePage