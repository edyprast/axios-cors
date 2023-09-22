import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

// const initialState = {
//     id_user: '',
//     name: "xxx",
//     email: "yyyy",
//     token: "qasasa"
// };

const profileuser = {
    namespaced: true,
    state() {
        return {
            profileuser: initialState,
            hak_unit: {},
            hak_fitur: {}
        }
    },
    mutations: {
        setUser(state, payload) {
            state.profileuser.user = payload;
            state.profileuser.status.loggedIn = true;
        },
        setHakUnit(state, payload) {
            state.hak_unit = payload
        },
        setHakFitur(state, payload) {
            state.hak_fitur = payload
        },
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    },
    getters: {
        getUser(state) {
            return state.profileuser
        },
        getHakUnit(state) {
            return state.hak_unit
        },
        getHakFitur(state) {
            return state.hak_fitur
        },
    },
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },

        setUser(context, payload) {
            context.commit('setUser', payload);
        },
        setHakUnit(context, payload) {
            context.commit('setHakUnit', payload);
        },
        setHakFitur(context, payload) {
            context.commit('setHakFitur', payload);
        }
    }
}

export default profileuser;