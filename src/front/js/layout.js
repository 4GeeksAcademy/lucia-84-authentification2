import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.js";
import injectContext from "./store/appContext";
import Signup from "./pages/signup.js"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {Private} from "./pages/Private.js";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Signup />} path="/register" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Private />} path="/private" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);