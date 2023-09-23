import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import { format } from 'date-fns';

// lazy-loaded
const loginpage = () => import("../components/TestStore.vue");
const detiluser = () => import("../components/DetilUser.vue");


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            component: loginpage,
        },
        {
            path: "/detiluser",
            meta: { requiresAuth: true },
            component: detiluser,
        },
    ],
});

// router.beforeEach(async (to, from, next) => {
//     await store.restored;
//     next();
// });

router.beforeEach((to, from, next) => {
    // console.log(to.path);
    // console.log(isAuthenticated());
    const vuexData = localStorage.getItem("vuex");
    const vuexObject = JSON.parse(vuexData)
    const isLoggedIn = vuexObject.profiluserModule.profileuser.status.loggedIn === true;
    const storedToken = vuexObject.profiluserModule.profileuser.user.token;
    let tokenkadaluwarsa=false;
    if (storedToken) {
        console.log('Cek Token')

        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));

        // Dapatkan nilai 'exp' dari payload.
        const expirationTime = payload.exp;
        const exptime = new Date(expirationTime * 1000);
        const expDate =  format(exptime, 'yyyy-MM-dd');

        // Dapatkan waktu saat ini dalam bentuk timestamp Unix (jumlah detik sejak 1 Januari 1970).
        const currentTime = Math.floor(Date.now() / 1000);
        // Bandingkan waktu saat ini dengan 'exp'.
        if (currentTime >= expirationTime) {
            // Token telah kadaluwarsa.
            tokenkadaluwarsa = true;
        } else {
            // Token masih berlaku.
            tokenkadaluwarsa= false;
        }
        console.log(expDate)
    }
    else
        {
            // Token tidak tersimpan di local storage.
            console.log('Token tidak tersimpan di local storage.');
        }


    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // Pemeriksaan otentikasi di sini
        if (!isLoggedIn  ) {
            // Pengguna belum login, arahkan ke halaman login
            next("/login");
        } else {
            // Pengguna telah login, lanjutkan ke halaman yang diminta
            next();
        }
    } else {
        // Halaman tidak memerlukan otentikasi, lanjutkan saja
        next();
    }
});

export default router;
