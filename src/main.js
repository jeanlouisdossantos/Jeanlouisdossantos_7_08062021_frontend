import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/**
 * import des composant prime vue necessaire au projet
 */
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import likemodel from './components/likecounter.vue'


import "primevue/resources/themes/bootstrap4-light-blue/theme.css" //theme
import "primevue/resources/primevue.min.css"  // core css
import "primeicons/primeicons.css"  //prime icons


const app = createApp(App)

app.use(PrimeVue)
app.component("InputText", InputText)
app.component("Button", Button )
app.component("Card", Card )
app.component("Calendar" , Calendar)
app.component("Likes", likemodel)

app.use(router).use(store).mount('#app');

