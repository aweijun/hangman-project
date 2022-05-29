import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React from 'react'

function AlertDuplicate(props) {

  const isVisible = props.isVisible
  
  return isVisible? (
    <Alert 
      status='error'   
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      >
      <AlertIcon/>
      <Box>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          This letter has already been added
        </AlertDescription>
      </Box>
    </Alert>
  ) : (<></>)
}

export default AlertDuplicate