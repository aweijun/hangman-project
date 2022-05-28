import { Flex, Image, Img } from '@chakra-ui/react'
import React from 'react'

function HangManDisplay(props) {
  return (
    <Flex w='30vw' h='30vw'>
      {displayImage(props.count)}
    </Flex>
  )
}

const displayImage = (value) => {
  console.log("display" + value)
  switch (value) {
    case 0:
      return <Img src='/0.png'/>
    case 1:
      return <Image src="/1.png"/>
    case 2:
      return <Image src="/2.png"/>
    case 3:
      return <Image src="/3.png"/>
    case 4:
      return <Image src="/4.png"/>
    case 5:
      return <Image src="/5.png"/>
    case 6:
      return <Image src="/6.png"/>
  }
}

export default HangManDisplay