import { useState } from "react";
import TableLayout from "../../../elements/TableLayout";
import { useEffect } from "react";

export default function CostomerPage() {
    const [users, setUsers] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/users?limit=10')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <TableLayout title={"Costomer"}>
            <div className="p-6 px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Users</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Email</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Phone</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((users, index) => {
                            return (
                                <tr key={index}>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold capitalize">{users.username}</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600 capitalize">{users.email}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600 capitalize">+{users.phone}</p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </TableLayout>
    )
}