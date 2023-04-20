import React from 'react'
import { useChromeStorage } from '../utils/useChromeStorage';
import { ChakraProvider, FormControl, FormLabel, Switch, Spacer, Text } from '@chakra-ui/react';

function Popup() {
    const [toggleState, setToggleState] = useChromeStorage('youtube-interventions', false);
    const handleToggle = () => {
        setToggleState(!toggleState);
    };

    return (
        <ChakraProvider>
            <div className='w-96'>
                <div className='p-4'>
                    <Text as='b' fontSize='xl'>Habitlab 2.0</Text>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Youtube Interventions
                        </FormLabel>
                        <Spacer />
                        <Switch onChange={handleToggle} defaultChecked={toggleState} id='youtube-interventions' />
                    </FormControl>
                </div>
            </div>
        </ChakraProvider>
    )
}

export default Popup