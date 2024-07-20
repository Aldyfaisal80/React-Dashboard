import { Outlet } from "react-router-dom";
import DashboardTableLayout from "../layouts/dashboard/DashboardTableLayout";


export default function DashboardTable() {
    return (
        <>
            <DashboardTableLayout>
                <Outlet />
            </DashboardTableLayout> 
        </>
    )
}