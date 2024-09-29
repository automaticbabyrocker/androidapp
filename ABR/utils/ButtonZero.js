import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonZero({children,style,...props}) {
    return (
    <TouchableOpacity {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styleC = StyleSheet.create({
    button:{
        
    }
})