<template>
    <div class="col-12">
        <div class="row">
            <div class="col-11 col-md-7 mx-auto">
                <div class="form-wrapper form-wrapper-login">
                    <h2 class="heading-1 mb-4 text-center text-md-left">
                        Login to Continue
                    </h2>
                    <form @submit.prevent="login">
                        <small
                            class="form-text text-muted text-center d-block"
                            v-if="msg"
                            >{{ msg }}
                        </small>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="phone"
                                v-model="phone"
                                placeholder="E.g 08102267091"
                            />
                        </div>

                        <div class="form-group">
                            <label for="">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Enter Password"
                                v-model="password"
                            />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary-bg btn-primary"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            phone: "",
            password: "",
            msg: "",
        };
    },

    methods: {
        async login() {
            // check user's input
            if (this.phone != "" || this.password != "") {
                let data = {
                    mobile: this.phone,
                    password: this.password,
                };
                try {
                    //make post req.
                    let response = await axios.post("login", data);
                    if (response.status == 200 || true) {
                        this.msg =
                            "Login successful, redirecting you to the dashbaord ";
                        this.isLoggedIn(true);
                        setTimeout(() => {
                            this.$router.push({
                                name: "Home",
                            });
                        }, 3000);
                    }
                } catch (error) {
                    this.msg = error.response.data.message;
                }
            } else {
                this.msg = "All fields are required";
            }
        },

        ...mapActions(["isLoggedIn"]),
    },
};
</script>

<style></style>
