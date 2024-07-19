import {BrowserRouter} from "react-router-dom";

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components";
const App = () => {
    return(
        <BrowserRouter>
            <div className="relative z-0">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar></Navbar>
                    <Hero></Hero>
                </div>
                <About></About>
                {/*<Experience></Experience>*/}
                <Tech></Tech>
                <Works></Works>
                {/*<Feedbacks></Feedbacks>*/}
                <div className="relative z-0">
                    <Contact></Contact>
                    <StarsCanvas></StarsCanvas>
                </div>
                
            </div>
        </BrowserRouter>
    )
}

export default App
