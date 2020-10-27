import Header from './Header.js'
import Body from './Body.js'
import Ingredients from './Ingredients.js'
import Footer from './Footer.js'


function App() {
    return (
        <div>
            <Header
                background="../assets/hr-img.png" />
            <Body />
            <Ingredients background="../assets/list-bg.png" />
            <Footer background="../assets/hr-img.png" />
        </div>
    );
}

export default App;
