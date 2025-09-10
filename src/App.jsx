import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./layout/PageLayout";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<PageLayout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
