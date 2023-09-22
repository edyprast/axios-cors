import { createStore } from "vuex";
import profiluserModule from './profiluser.module';
import sidebarModule from './sidebar.module';

const store = createStore({
    modules: {
        profiluserModule,sidebarModule
    }
  })
  


export default store;