import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faClock, faPhone, faFaceSmile, faPeopleGroup, faCheck, faTimes, faChevronRight, faStar, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

let app = createApp(App)

library.add(faBars,faClock, faPhone, faFaceSmile, faPeopleGroup, faCheck, faTimes, faChevronRight, faStar, faGlobe)
// Adding use statement
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

// Building the app
app.mount('#app')
