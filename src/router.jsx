import Dashboard from "./pages/Dashboard"
import DashboardNotification from "./pages/DashboardNotification"
import DashboardProfile from "./pages/DashboardProfile"
import DashboardTable from "./pages/DashboardTable"
import DashboardMainLayout from "./layouts/dashboard/DashboardMainLayout"
import CostomerPage from "./pages/sub-pages/tables/CostomerPage"
import ProductPage from "./pages/sub-pages/tables/ProductPage"

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="tables" element={<DashboardTable />} >
                <Route path="products" element={<ProductPage />} />
                <Route path="customers" element={<CostomerPage />} />
            </Route>
            <Route path="notifications" element={<DashboardNotification />} />
        </Route>
    )
);