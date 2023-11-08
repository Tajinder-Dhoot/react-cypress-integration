import React from 'react'
import { VStack, Input, Button } from '@chakra-ui/react'

function InputComponent() {
  return (
    <VStack>
        <h1>Fill in details to Sign In</h1>
        <Input variant='outline' placeholder='Username' width='80%' />
        <Input variant='outline' placeholder='Password' width='80%' />
        <Button colorScheme='teal' variant='outline' width='30%' >Sign In</Button>
    </VStack>
  )
}

export default InputComponent