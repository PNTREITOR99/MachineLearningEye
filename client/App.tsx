import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native'
import AppStyles from './src/themes/AppStyles'
import InputWithLabel from './src/components/inputs/inputWithLabel'
import AuthLogo from './src/components/logo/auth'
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <AuthLogo />
        <View style={{ width: '100%', flex: 1 }}>
          <Text style={styles.text}>Iniciar sesión</Text>
          <InputWithLabel
            text="Correo o nombre de usuario"
            stylesInput={styles.input}
          />
          <InputWithLabel text="Contraseña" stylesInput={styles.input} />
          <TouchableOpacity>
            <Text style={styles.smallText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={styles.containerSignup}>
            <Text>¿Aún no estás registrado? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: AppStyles.color.primary
                }}>
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: AppStyles.color.bgDefault
  },
  container: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxWidth: 500
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: AppStyles.color.primary,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 25
  },
  input: {
    backgroundColor: 'white'
  },
  smallText: {
    fontSize: 12,
    color: AppStyles.color.primary,
    alignSelf: 'flex-end'
  },
  button: {
    backgroundColor: AppStyles.color.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  containerSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})
