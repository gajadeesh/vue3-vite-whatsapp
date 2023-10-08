// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { myTheme } from './theme'


// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme,
    },
  },
})
