
import axios from 'axios';
import {mapGetters} from "vuex";

export default {
    name: 'NewDetails',
    data() {
        return {
            postId : 0,
            post : {},
            viewCount  : 0
        }
    },
    computed: {
      ...mapGetters(["storeToken","storeUserData"]),
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
      back(){
        history.back();
      },
      loadPost(id){
        let post = {
          "id" :  id
        }
        axios.post("http://localhost:8000/api/post/detail" ,post).then (  (response) => {
          if(response.data.post.image == null){
                  response.data.post.image =  "http://localhost:8000/defaultImage/default.jpg"  ;
  
              }else{
                  response.data.post.image =  "http://localhost:8000/postImage/" + response.data.post.image ;
              }
          this.post = response.data.post;
       
        } );
       
      }
    },
    mounted() {

      // console.log(this.storeUserData.id);

      let data = {
        user_id : this.storeUserData.id,
        post_id : this.$route.query.newsId,
      }
      console.log(data);

      axios.post("http://localhost:8000/api/post/action/log",data).then( (response ) => {
        console.log(response.data.actions.length);
        this.viewCount = response.data.actions.length;
        console.log(this.viewCount);
      } );

     
      this.postId =this.$route.query.newsId; 
      this.loadPost (this.postId);
   
      // console.log(this.storeToken);
      // console.log(this.storeUserData);
  
    
    },

    
};