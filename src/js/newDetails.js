
import axios from 'axios';

export default {
    name: 'NewDetails',
    data() {
        return {
            postId : 0,
            post : {},
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
      // console.log(this.$route.query.newsId);
      this.postId =this.$route.query.newsId; 
      this.loadPost (this.postId);
      // console.log(this.postId);
  
    
    },

    
};