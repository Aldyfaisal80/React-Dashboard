/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AsideLink(props) {
    const location = useLocation();
    const isActive = location.pathname === props.href;

    return (
        <Link
            aria-current="page"
            className={`active ${isActive ? 'bg-blue-700' : ''}`}
            to={props.href}
        >
            <button
                className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white   hover:bg-white/10 w-full flex items-center gap-4 px-4 capitalize ${isActive ? 'bg-blue-700' : ''}`}
                type="button"
            >
                {props.children}
            </button>
        </Link>
    );
}
