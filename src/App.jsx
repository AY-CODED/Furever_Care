import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./layout/PageLayout";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import PetOwner from "./pages/PetOwner";
import Veterinarian from "./pages/Veterinarian";
import AnimalShelter from "./pages/AnimalShelter";
import { useEffect, useReducer } from "react";
import PetCare from "./pages/PetCare";
import PetProfile from "./pages/PetProfile";
import FeedingGuide from "./pages/FeedingGuide";
import HealthTips from "./pages/HealthTips";
import Grooming from "./pages/Grooming";
import Training from "./pages/Training";

const reducerFunction = function (state, action) {
    switch (action.type) {
        case "auth/login":
            return {
                ...state,
                userName: action.value.userName,
                userType: action.value.userType,
            };

        default:
            throw new Error("Unspecified Action Type");
    }
};

const initialState = {
    userName: "",
    userType: "",
};

const App = () => {
    const [state, dispatch] = useReducer(reducerFunction, {});
    console.log(state);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path=""
                        element={
                            <PageLayout state={state} dispatch={dispatch} />
                        }
                    >
                        <Route
                            path="/"
                            element={
                                <LandingPage
                                    state={state}
                                    dispatch={dispatch}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <SignUp state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <LogIn state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/pet-owner"
                            element={
                                <PetOwner state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/veterinary"
                            element={
                                <Veterinarian
                                    state={state}
                                    dispatch={dispatch}
                                />
                            }
                        />
                        <Route
                            path="/shelter"
                            element={
                                <AnimalShelter
                                    state={state}
                                    dispatch={dispatch}
                                />
                            }
                        />
                        <Route
                            path="/petcare"
                            element={
                                <PetCare state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/pet-profile"
                            element={
                                <PetProfile state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/feeding-guide"
                            element={
                                <FeedingGuide
                                    state={state}
                                    dispatch={dispatch}
                                />
                            }
                        />
                        <Route
                            path="/health-tips"
                            element={
                                <HealthTips state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="grooming"
                            element={
                                <Grooming state={state} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="training"
                            element={
                                <Training state={state} dispatch={dispatch} />
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
