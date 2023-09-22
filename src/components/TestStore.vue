<template>
    <div>
        <Form @submit="handleLogin">
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
                <Field name="email" type="text" class="form-control" v-model="dtuser.email" />
                <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
                <Field name="password" type="password" class="form-control" v-model="dtuser.password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Log in</button>
            </div>
        </Form>
    </div>
    <p>
        store sidebar : {{ $store.state.sidebarModule.sidebarVisible }}
        {{ $store.state.sidebarModule.sidebarUnfoldable }}
    </p>
    <pre>Data User {{ $store.getters["profiluserModule/getUser"] }}</pre>
    <pre>{{ $store.getters["profiluserModule/getHakUnit"] }}</pre>
    <pre>{{ $store.getters["profiluserModule/getHakFitur"] }}</pre>
    <pre>{{ $store.getters["profiluserModule/getHakFitur"] }}</pre>
    <button @click="isidata">Isi data</button>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthService from "../services/auth.service";
import axios from "axios";
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            email: yup.string().required("Email is required!"),
            password: yup.string().required("Password is required!"),
        });

        return {
            apiUrl1: "https://dbeviapp.essrex.my.id/api",
            loading: false,
            message: "",
            schema,
            status: { loggedIn: false },
            dtuser: {
               
            },
            hak_unit: [
                {
                    nama_grup: "uk2",
                    key_unit: "id_es2",
                    level_unit: "es2",
                    parameter_unit: "7",
                },
                {
                    nama_grup: "pengolah",
                    key_unit: "id_es2",
                    level_unit: "es2",
                    parameter_unit: "7",
                },
            ],
            hak_fitur: [
                {
                    nama_grup: "pengolah",
                    kode_menu: "1",
                    nama_fitur: "all",
                },
                {
                    nama_grup: "pengolah",
                    kode_menu: "2.*",
                    nama_fitur: "all",
                },
                {
                    nama_grup: "pengolah",
                    kode_menu: "3.*",
                    nama_fitur: "all",
                },
            ],
        };
    },
    methods: {
        async handleLogin(user) {
            console.log(import.meta.env.VITE_API_URL)
            await AuthService.login(user)
                .then((response) => {
                    this.dtuser = {
                        id_user: response.data.user.id,
                        name: response.data.user.name,
                        email: response.data.user.email,
                        token: response.data.token,
                    };
                    console.log(response.data);
                    this.$store.dispatch("profiluserModule/setUser", this.dtuser);
                })
                .catch((error) => {
                    console.log(error);
                });
            this.isidata();
        },
        isidata() {
            // this.$store.dispatch('setUser', this.dtuser)
            // this.$store.dispatch('setHakUnit', this.hak_unit)
            // this.$store.dispatch('setHakFitur', this.hak_fitur)

            this.$store.commit("sidebarModule/updateSidebarVisible", { value: true });

            this.$store.dispatch("profiluserModule/setHakUnit", this.hak_unit);
            this.$store.dispatch("profiluserModule/setHakFitur", this.hak_fitur);
        },
    },
};
</script>
