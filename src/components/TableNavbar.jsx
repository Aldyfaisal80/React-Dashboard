import TableNavlink from "../elements/TableNavlink";

export default function TableNavbar() {
    return (
        <div className="border-b-2 shadow-md border-gray-100 p-4">
            <nav id="bar" className="flex gap-6 items-center ">
                <TableNavlink href={"/tables/products"} className="mx-8 hover:text-red-900"> Product </TableNavlink>
                <TableNavlink href={"/tables/customers"} className="mx-8 hover:text-red-900"> Customer </TableNavlink>
            </nav>
        </div>
    );
}