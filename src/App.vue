<template>
    <div class="container-fluid wrapper p-0">
        <nav class="navbar navbar-light bg-white mb-3 mb-md-5 px-5">
            <a class="navbar-brand">Logo</a>
            <div class="">
                <router-link
                    v-if="page != 'Home'"
                    :to="page == 'Login' ? '/register' : '/login'"
                    class="custom-login"
                    >{{ page == "Login" ? "Register" : "Login" }}</router-link
                >
                <span v-else style="cursor: pointer" @click="logout">
                    Logout
                </span>
            </div>
        </nav>
        <div class="row">
            <router-view />
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            page: "register",
        };
    },
    watch: {
        // update page title
        $route(to, from) {
            this.page = to.meta.title;
            document.title = to.meta.title || "Home";
        },
    },

    methods: {
        ...mapActions(["isLoggedIn"]),
        // log user out
        logout() {
            this.isLoggedIn(false);
            this.$router.push({
                name: "Login",
            });
        },
    },
};
</script>

<style src="@/assets/main.css"></style>
