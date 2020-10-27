import Header from './Header.js'
import Body from './Body.js'
import Ingredients from './Ingredients.js'
import Footer from './Footer.js'


function App() {
    return (
        <div>
            <Header
                background="../public/assets/hr-img.png" />
            <Body />
            <Ingredients background="../public/assets/list-bg.png" />
            <Footer background="../public/assets/hr-img.png" />
        </div>
    );
}

export default App;
