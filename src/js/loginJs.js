export default {

    name: 'LoginPage',
    data() {
        return {
            
        }
    },
    methods: {
        home(){
            this.$router.push({
              name : 'home'
            })
          },
        login(){
            this.$router.push({
              name : 'login'
            })
          },
          
    },
}