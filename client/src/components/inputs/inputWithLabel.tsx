import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import Input from './'

interface Props {
  text: string
  stylesInput?: TextStyle | ViewStyle
  [key: string]: any
}

const InputWithLabel = ({ text, stylesInput }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Input stylesInput={stylesInput} />
    </View>
  )
}

export default InputWithLabel

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5
  },
  container: {
    marginVertical: 5,
    width: '100%'
  }
})
