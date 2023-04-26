import React from 'react'
import { useChromeStorage } from '../utils/useChromeStorage';
import { ChakraProvider, FormControl, FormLabel, Switch, Spacer, Text, Input } from '@chakra-ui/react';

function Popup() {
    const [toggleState, setToggleState] = useChromeStorage('youtube-interventions', false);
    const handleToggle = () => {
        setToggleState(!toggleState);
    };

    const [rhetoricChoice, setRhetoricChoice] = useChromeStorage('rhetoric-choice', 0);


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
                        <Switch onChange={handleToggle} isChecked={toggleState} id='youtube-interventions' />
                    </FormControl>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Rhetoric Choice
                        </FormLabel>
                        <Spacer />
                        //Rehtetoic Choice can be either 1, 2 or 3
                        <Input type='number' value={rhetoricChoice} onChange={e => setRhetoricChoice(e.target.value)} />
                    </FormControl>
                </div>
            </div>
        </ChakraProvider>
    )
}

export default Popup