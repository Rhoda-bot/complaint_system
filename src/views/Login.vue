<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 col-lg-5 col-xl-5">
        <div class="card o-hidden card-hidden">
          <div class="card-body">
            <form id="signin-form" @submit.prevent="handleSigninForm">
              <b class="alert alert-danger" v-if="msg">{{msg}}</b>
              <div class="display-4">Sign in</div>
              <div class="form-row pt-3">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Email Address" v-model="email">
                </div>
                <div class="col-md-12 pt-2">
                  <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="col-md-12 pt-2">
                  <input type="submit" class="rounded-pill btn block btn-success" value="Submit">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  el: 'signin-form',
  data() {
    return {
      email: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    handleSigninForm: function () {
      let { email, password } = this;
      axios.post('login.php', { email, password }).then(res => {
        if (res.data==="something went wrong") {
          this.msg = "Invalid email or password";
          }else{
          localStorage.userToken = res.data
          console.log(res.data);
          this.$router.push({name: 'Home'})
        }
      }).catch(err => console.log(err))
    }
  },
}
</script>

<style scoped>

</style>
