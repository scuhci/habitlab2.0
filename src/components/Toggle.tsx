import React from 'react';

function Toggle(props) {
    const { label, handleToggle, toggleState } = props;

    return (
        <label className="relative flex justify-between items-center group p-2 text-base">
            {label}
            <input type="checkbox" onChange={handleToggle} checked={toggleState} className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-10 h-5 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-red-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-0.5"></span>
        </label>
    );
}

export default Toggle;
