<template>
  <div>
    <div class="display-4">Admin Dashboard</div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card" v-for="(com,ind) in arr" :key="ind">
            <div class="card-title">
             <h4> {{com.complain_title}}</h4>
            </div>
            <hr>
            <div class="card-body">
              {{com.complain_body}}
            </div>
            <div class="card-action">
              <button class="btn-success btn">send feedback</button>
            </div>
          </div>
          br
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminDashboard',
  data() {
    return {
      arr: []
    }
  },
  mounted() {
    axios.get('fetchComplaint.php').then(res=> {
      this.arr = res.data
    }).catch(err=>console.log(err))
  },
}
</script>

<style scoped>

</style>
