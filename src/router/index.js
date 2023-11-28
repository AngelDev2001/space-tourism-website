import {Route, Routes} from "react-router-dom";
import { BaseLayout } from "../components/";
import { Home } from "../pages/home";
import { Destination } from "../pages/destination";
import { Crew } from "../pages/crew";

export const Router = () => {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <BaseLayout>
                        <Home/>
                    </BaseLayout>
                }
            />
            <Route
                exact
                path="/destination"
                element={
                    <BaseLayout>
                        <Destination/>
                    </BaseLayout>
                }
            />
            <Route
                exact
                path="/crew"
                element={
                    <BaseLayout>
                        <Crew/>
                    </BaseLayout>
                }
            />
        </Routes>
    )
};
