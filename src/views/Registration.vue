<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-6 col-xl-6">
        <div class="card o-hidden card-hidden">
          <div class="card-body">
           <div class="row">
             <div class="col-6">
                <form id="signup-form" @submit.prevent="handleSignupForm">
              <div class="display-4">Sign Up</div>
              <div class="form-row pt-3">
                <div class="col-md-12">
                  <!-- <label for="">First Name:</label> -->
                  <input type="text" class="form-control" placeholder="First Name" v-model="fName">
                </div>
                <div class="col-md-12 pt-2">
                  <!-- <label for="">Last Name:</label> -->
                  <input type="text" class="form-control" placeholder="Last Name" v-model="lName">
                </div>
                <div class="col-md-12 pt-2">
                  <!-- <label for="">Email:</label> -->
                  <input type="text" class="form-control" placeholder="Email Address" v-model="email">
                </div>
                <div class="col-md-12 pt-2">
                  <!-- <label for="">Phone:</label> -->
                  <input type="text" class="form-control" placeholder="Phone" v-model="phone">
                </div>
                <div class="col-md-12 pt-2">
                  <!-- <label for="">Password:</label> -->
                  <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="col-md-12 pt-2">
                  <input type="submit" class="rounded-pill input-btn btn-block bg-light" value="Submit">
                </div>
              </div>
            </form>
             </div>
             <div class="col-6 bg-dark rounded">
               <h1 class="justify-content-center pt-4">SIgn Up</h1>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Registration',
  el: 'signup-form',
  data() {
    return {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    handleSignupForm: function () {
      let { fName, lName, email, phone, password } = this ;
      axios.post('registration.php', { fName, lName, email, phone, password }).then(res =>{
        if (res.data === "Data added Successfully") {
          this.$router.push({ name: 'Login' })
        }
      }).catch(err => console.log(err))
      
    }
  },
}
</script>

<style scoped>

</style>
