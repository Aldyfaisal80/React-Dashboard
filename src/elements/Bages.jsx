/* eslint-disable react/prop-types */
const Bages = ({ children }) => {
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            {children}
        </div>
    )
}

const Icons = ({ icon, className }) => {
    return (
        <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center ${className}`}>
            {icon}
        </div>
    )
}

const Description = ({ Title, Value }) => {
    return (
        <div className= "p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{Title}</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{Value}</h4>
        </div>
    )
}

const Status = ({ Persen, Period }) => {
    return (
        <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-green-500">{Persen}</strong>&nbsp;{Period}
            </p>
        </div>
    )
}

Bages.Icons = Icons
Bages.Description = Description
Bages.Status = Status

export default Bages