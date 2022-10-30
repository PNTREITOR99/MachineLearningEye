import { TextInput, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import AppStyles from '../../themes/AppStyles'
interface Props {
  stylesInput?: TextStyle | ViewStyle
  [key: string]: any
}
const Input = ({ stylesInput, ...props }: Props) => {
  return (
    <TextInput
      style={[styles.input, stylesInput]}
      selectionColor={AppStyles.color.primary}
      {...props}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderColor: AppStyles.color.lowGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})
