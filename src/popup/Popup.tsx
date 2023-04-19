import React from 'react'
import { useChromeStorage } from '../utils/useChromeStorage';
import Toggle from '../components/Toggle';

function Popup() {
    const [toggleState, setToggleState] = useChromeStorage('youtube-interventions', false);
    const handleToggle = () => {
        setToggleState(!toggleState);
    };

    return (
        <div className='w-96'>
            <div className='p-4'>
                <h1 className='text-base mb-4 font-medium'>HabitLab 2.0</h1>

                <Toggle label="Youtube Interventions" handleToggle={handleToggle} toggleState={toggleState} />
            </div>
        </div>
    )
}

export default Popup