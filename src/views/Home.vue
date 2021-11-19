<template>
    <div class="container">Welcome user</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
    name: "Home",
    computed: {
        ...mapGetters(["isAuth"]),
    },
    mounted() {
        if (!this.isAuth) {
            this.$router.push({
                name: "Login",
            });
        }
    },
};
</script>
