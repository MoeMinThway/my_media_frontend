<template>
  <div class="mb-3" >
    <div class="d-flex justify-content-center py-3 ">
      <p class="btn btn-danger px-2 mx-3" @click="home()">Home</p>
      <p class="btn btn-dark bg-dark px-2 mx-3" @click="login()">Login</p>
    </div>
  </div>
   <!-- <br> -->
  <div class="container col-4 shadow offset-4 my-5 p-5" style="height: 400px;">
  
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
    
        <button type="submit" class="btn btn-primary">Login</button>
    </form>

  </div>
</template>

<script src="../js/loginJs.js"></script>
