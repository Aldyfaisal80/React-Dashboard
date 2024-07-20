/* eslint-disable react/prop-types */
import Aside from "../../components/Aside"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
export default function DashboardMainLayout() {
    return (
        <div className="min-h-screen bg-gray-50/50">
        <Aside />
        <div className="p-4 xl:ml-80">
            <Navbar />
            <div className="mt-12">
                <Outlet />
            </div>
            <div className="text-blue-gray-600">
                <Footer />
            </div>
        </div>
    </div>
    )
}