import { useState } from "react";
import TableLayout from "../../../elements/TableLayout";
import { useEffect } from "react";

export default function ProductPage() {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <TableLayout title={"Products"}>
            <div className="p-6 px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Products</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Categories</p>
                            </th>
                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Price</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold capitalize">{product.title}</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600 capitalize">${product.category}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600 capitalize">$ {product.price}</p>
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