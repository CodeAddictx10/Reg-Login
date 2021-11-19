<template>
    <div class="col-12">
        <div class="row">
            <div class="col-11 col-md-7 mx-auto">
                <div class="form-wrapper">
                    <h2 class="heading-1 mb-4 text-center text-md-left">
                        Create an Account
                    </h2>
                    <form @submit.prevent="submit">
                        <small
                            class="form-text text-muted text-center d-block"
                            v-if="successMsg"
                            >{{ message }}
                        </small>
                        <small
                            v-if="formDirty"
                            class="form-text text-danger text-center d-block"
                            >Please check form and try again.</small
                        >
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="firstName"
                                v-model="firstName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="lastName"
                                v-model="lastName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1"
                                >Email address</label
                            >
                            <input
                                type="email"
                                v-model="email"
                                class="form-control"
                                id="exampleInputEmail1"
                            />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="phone"
                                v-model="phone"
                            />
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input
                                type="password"
                                v-model="password"
                                class="form-control"
                            />
                        </div>

                        <div class="form-group form-check mt-3">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="tc"
                                v-model="checker"
                            />
                            <label
                                class="form-check-label custom-small-text"
                                for="tc"
                            >
                                I have read and agree
                                <a href="#" class="custom-link"
                                    >terms and conditions</a
                                >
                                and confirm that you are at least 18 years old.
                            </label>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary-bg btn-primary"
                        >
                            {{ btnText }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            checker: false,
            password: "",
            formDirty: false,
            btnText: "Register",
            message: "",
            successMsg: false,
        };
    },
    methods: {
        submit() {
            this.sendData();
            if (
                this.firstName == "" ||
                this.lastName == "" ||
                this.phone == "" ||
                this.email == "" ||
                this.checker == false ||
                this.password == ""
            ) {
                this.formDirty = true;
                console.log(this);
                this.btnText = "Register";
            } else {
                this.btnText = "Submitting....";
                this.formDirty = false;
            }
        },

        async sendData() {
            let data = {
                firstname: this.firstName,
                lastname: this.lastName,
                email: this.email,
                mobile: this.phone,
                password: this.password,
            };
            try {
                let response = await axios.post("register", data);
                if (
                    response.status == 200 &&
                    response.data.success.status == "SUCCESS"
                ) {
                    console.log(response);
                    this.successMsg = true;
                    this.message =
                        "Registration successful, redirecting to Login...";

                    setTimeout(() => {
                        this.$router.push({
                            name: "Login",
                        });
                    }, 3000);
                } else {
                    this.successMsg = true;
                    this.message = "Something has went wrong...";
                }
            } catch (error) {
                this.successMsg = true;
                this.message = error.response.data.message;
            }
        },
    },
};
</script>

<style></style>
