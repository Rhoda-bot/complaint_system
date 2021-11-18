<template>
  <div class="home">
   <div class="container">
     <div class="row">
       <div class="col-4 border-right">
         <div class="card-title">
           <button class="btn btn-block btn-light text-dark" data-toggle="modal" data-target="#modelId">Lodge Complaints</button>
         </div>
       </div>
     </div>
   </div>
  
  <!-- Modal -->
  <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Lodge Complaints</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
         <div class="row">
           <div class="col-12">
              <input type="text" name="" id="" placeholder="Complaint Title" class="form-control" v-model="title">
           </div>
           <div class="col-12 pt-3">
             <textarea name="" class="form-control" id="" cols="30" rows="10" placeholder="Body of Complaint..." v-model="complaint"></textarea>
           </div>
         </div>
          <hr>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleComplaint">Send Complaint to admin...</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Home',
  data() {
    return {
      complaint: '',
      title: ''
    }
  },
  methods: {
    handleComplaint: function () {
      let { complaint, title } = this;
      axios.post('userComplaint.php',{ complaint, title }).then(res => {
        console.log(res.data)
      }).catch(err => console.log(err))
      // console.log({ complaint, title });
    }
  },
}
</script>
