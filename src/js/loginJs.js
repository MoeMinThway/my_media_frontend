import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      activeAccount :{},
    };
  },
  methods: {
    home() {
      this.$router.push({
        name: "home",
      });
    },
    login() {
      this.$router.push({
        name: "login",
      });
    },
    userLogin() {
    
      let data = {
        email: this.userData.email,
        password: this.userData.password,
      };

      axios
        .post("http://127.0.0.1:8000/api/user/login", data)
        .then((response) => {
          console.log(response.data);
          this.activeAccount = response.data;
          console.log(this.activeAccount);
          if(this.activeAccount.token !=null){
            this.$router.push({
            name: 'home'
         })
       } else{
        this.$router.push({
          name: 'login'
       })
       }
       });

      
     
    },
  },
};
