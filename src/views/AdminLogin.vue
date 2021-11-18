<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 col-lg-5 col-xl-5">
          <div class="card o-hidden card-hidden">
            <div class="card-body">
              <div class="row">
               <div class="col-12 border-dark">
                  <form id="admin-form" @submit.prevent="adminLogin">
                    <div class="display-4">Admin Login</div>
                    <hr>
                  <div class="form-row pt-3">
                    <div class="col-md-12">
                      <input type="text" class="form-control" placeholder="Admin@gmail.com" v-model="email">
                    </div>
                    <div></div>
                    <hr>
                    <div class="col-md-12 pt-3">
                      <input type="submit" name="" id="" class="rounded-pill btn block btn-success" value="Login">
                    </div>
                  </div>
                </form>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminLogin',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    adminLogin: function () {
      let {email} = this;
      axios.post('adminLogin.php', {email}).then(res => {
        if (res.data === "admin is valid") {
          this.$router.push({name:'AdminDashboard'})
        }else{
          return false;
        }
      }).catch(err=>console.log(err))
    }
  },
}

</script>