import Header from './Header.js'
import Body from './Body.js'
import Ingredients from './Ingredients.js'
import Footer from './Footer.js'
import border from './assets/hr-img.png';

function App() {
    return (
        <div>
            <Header
                background={border} />
            <Body />
            <Ingredients />
            <Footer />
        </div>
    );
}

export default App;
