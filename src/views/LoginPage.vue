<template>
  <div class="mb-3" >
    <div class="d-flex justify-content-center py-3 ">
      <p class="btn btn-danger px-2 mx-3" @click="home()">Home</p>
      <p class="btn btn-dark bg-dark px-2 mx-3" @click="login()">Login</p>
    </div>
  </div>
   <!-- <br> -->
  <div class="container col-6 shadow offset-3 my-5 p-5" style="height: 400px;">
  
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script src="../js/loginJs.js"></script>
