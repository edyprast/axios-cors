import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import localForage from "localforage";
import profiluserModule from './profiluser.module';
import sidebarModule from './sidebar.module';

const vuexLocal = new VuexPersistence({
    // storage: localForage,
    // asyncStorage: true,
    storage: window.localStorage,
});
const store = createStore({
    modules: {
        profiluserModule,sidebarModule
    },
    plugins: [vuexLocal.plugin]
  })
  


export default store;