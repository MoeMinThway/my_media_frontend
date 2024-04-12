import axios from "axios";
import {mapGetters} from "vuex";

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
  computed: {
    ...mapGetters(["storeToken","storeUserData"]),
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
          // console.log(response.data);
          this.activeAccount = response.data;
          // console.log(this.activeAccount);

          if(this.activeAccount.token !=null){
            this.storeUserInfo(response);
           
             
               this.home();
                
          } else{
              //   this.$router.push({
              //     name: 'login'
              // })
              alert("Something is wrong")
       }
       });

      
     
    },
    storeUserInfo(response){
      this.$store.dispatch('setToken',response.data.token);
      this.$store.dispatch('setUserData',response.data.user);
    },
    checkToken(){
        console.log(this.storeToken);
        console.log(this.storeUserData);
    }
  },
};
