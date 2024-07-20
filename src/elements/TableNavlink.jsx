/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function TableNavlink(props) {
    const location = useLocation();
    const isActive = location.pathname === props.href;
    return (
        <Link to={props.href} className={`active ${isActive ? 'text-blue-500 relative before:absolute before:h-[2px] before:bg-blue-500 before:content-[""] before:top-[100%] before:left-0 before:w-full' : ''}`}>
            {props.children}
        </Link>
    )
}