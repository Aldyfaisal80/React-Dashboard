/* eslint-disable react/prop-types */
import TableNavbar from "../../components/TableNavbar";

export default function DashboardTableLayout({children}) {
    return (
        <>
            <TableNavbar />
            <div className="p-5 border mt-2">
                {children}
            </div>
        </>
    )
}