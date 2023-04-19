import React from 'react'
import { useChromeStorage } from '../utils/useChromeStorage';

function Popup() {
    const [toggleState, setToggleState] = useChromeStorage('myKey', 'myDefaultValue');
    const handleToggle = () => {
        setToggleState(!toggleState);
    };

    return (
        <div className='w-72'>
            <div className='p-4'>
                <h1 className='text-base mb-4 font-medium'>HabitLab 2.0</h1>

                <div className='mb-10'>
                    <div className='flex items-center justify-start'>
                        <button className="bg-green-500 hover:bg-green-400 transition duration-300 px-6 py-2 rounded-md text-white text-center">
                            <span>Hide Home Feed</span>
                        </button>
                    </div>
                    <input
                        type="checkbox"
                        checked={toggleState}
                        onChange={handleToggle}
                        className="bg-gray-50 border border-gray-200 w-full rounded-lg px-4 py-2 text-black focus:outline-none mb-5" />
                </div>
            </div>
        </div>
    )
}

export default Popup