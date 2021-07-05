import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';


import "primevue/resources/themes/bootstrap4-light-blue/theme.css" //theme
import "primevue/resources/primevue.min.css"  // core css
import "primeicons/primeicons.css"  //prime icons

const app = createApp(App)

app.use(router).mount('#app');
app.use(PrimeVue)
app.component("InputText", InputText)
app.component("Button", Button )
app.component("Card", Card )
app.component("Calendar" , Calendar)