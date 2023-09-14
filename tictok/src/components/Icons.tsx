import React from 'react'
import {PropsWithChildren} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type Iconprops = PropsWithChildren<{
    name:string;

}>
function Icons({name}:Iconprops) {
  switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38}
        color="f7CH2E"/>
        break;
    case 'cross':
          return <Icon name='times' size={38}
          color="#38CC77"/>
          break;
  
    default:
      return <Icon name='pencil' size={38}
      color="#0D0D0D"/>
      break;
  }
}

export default Icons