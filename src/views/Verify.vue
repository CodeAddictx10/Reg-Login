<template>
    <div class="col-12">
        <div class="row">
            <div class="col-11 col-md-7 mx-auto">
                <div class="form-wrapper form-wrapper-login">
                    <h2 class="heading-1 mb-4 text-center text-md-left">
                        Verify Email
                    </h2>
                    <form @submit.prevent="login">
                        <small
                            class="form-text text-muted text-center d-block"
                            v-if="msg"
                            >{{ msg }}
                        </small>
                        <div class="form-group">
                            <label for="">Enter OTP</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="otp"
                            />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary-bg btn-primary"
                        >
                            Verify
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
        ...mapActions(["isLoggedIn"]),

        async login() {
            // check user's input
            if (this.otp != "") {
                let data = {
                    mobile: localStorage.getItem("GRAND_PHONE"),
                    otp: this.otp,
                };
                try {
                    //make post req. for verification
                    let response = await axios.post("validate-otp", data);
                    if (response.status == 200) {
                        this.msg =
                            "Verified, redirecting you to the dashbaord ";
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
                this.msg = "OTP field is required";
            }
        },
    },
};
</script>

<style></style>
