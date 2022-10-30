import { useState, useEffect } from 'react'

import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScaledSize
} from 'react-native'

const AuthLogo = () => {
  const [width, setWidth] = useState(Dimensions.get('window').width)

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => {
      setWidth(window.width)
    }
    Dimensions.addEventListener('change', onChange)
    return () => {
      Dimensions.removeEventListener('change', onChange)
    }
  }, [])

  const styles = styles_(width)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.h1}>Simulador</Text>
        <Text style={styles.h2}>Lámpara de hendidura</Text>
      </View>
    </View>
  )
}

export default AuthLogo

const styles_ = (width: number) =>
  StyleSheet.create({
    container: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: width > 500 ? 'row' : 'column'
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      margin: 10
    },
    h1: {
      fontSize: 18,
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      color: 'black'
    },
    h2: {
      fontSize: 18,
      fontWeight: '400'
    }
  })
