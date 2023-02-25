import React, { useState } from 'react'

import {
    FormControl,
    FormLabel,
    Box,
    Input,
    VStack,
    Center,
    Button,
  } from '@chakra-ui/react'



const Form = ({ submit }) => {
  const [prompt, setPrompt] = useState('');

  const submitHelper = () => {
    submit(prompt)
    setPrompt('');
  }
  
    return (

            <Box
              borderRadius='7px'
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              display='flex'
              flexDir='column'
              justifyContent='center'
              alignItems='center'
              p={5}
              mx='auto'
              mt='5vh'
              w='80%'
              h='30vh'
              bg='#ADD8E6'
            >
                 <FormControl w='90%' p={3}>
                 <Center mb='50px'>
                 <FormLabel mx='auto' fontWeight={700} letterSpacing='1.5px'>Generate Open AI Image </FormLabel>
                 </Center>
          <VStack w='100%' mt={3} >
            <Input  borderRadius='5px' p='5px 15px' value={prompt} onChange={(e) => setPrompt(e.target.value)} 
            placeholder='Enter a brief description for image generator...' w='70%' />
            <Button cursor='pointer' className='submit' py='10px' fontWeight={700} letterSpacing='1.2px' textTransform='uppercase' px='20px' onClick={submitHelper}>Submit</Button>
          </VStack>
      </FormControl>
  </Box>
  )
}

export default Form
