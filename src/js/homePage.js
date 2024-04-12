import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      postLists: {},
      categoryLists: {},
      searchKey : '',
      tokenStatus : false
      

    };
  },
  computed: {
    ...mapGetters(["storeToken","storeUserData"]),
  },
  methods: {
    home(){
      this.$router.push({
        name : 'home'
      })
    }
    ,
    login(){
      this.$router.push({
        name : 'login'
      })
    }
    ,
    getAllPost() {
  
      axios
        .get("http://localhost:8000/api/allPostList")
        .then( (response) => {
          // console.log(response.data.post);
            // this.postLists = response.data.post;

          // console.log(this.postLists);

          for ( let i = 0 ; i< response.data.post.length ; i++){
            // http://localhost:8000/postImage/

            if(response.data.post[i].image == null ){
              response.data.post[i].image =  "http://localhost:8000/defaultImage/default.jpg";

            }else{
              response.data.post[i].image =  "http://localhost:8000/postImage/"+response.data.post[i].image ;

            }

          }

          this.postLists = response.data.post;
                    // console.log(this.postLists);

        
        });

    },
    loadCategory(){
      axios.get('http://127.0.0.1:8000/api/allCategoryList').then (  (reponse) =>{
        // console.log(reponse.data);
        this.categoryLists = reponse.data.category;

      })
    },
    search(){
      // console.log(this.searchKey);
      let search = {
        key : this.searchKey,
      }
      axios.post('http://127.0.0.1:8000/api/post/search',search).then (  (response) =>{
        // console.log(reponse.data.searchData);

        for ( let i = 0 ; i< response.data.searchData.length ; i++){
          // http://localhost:8000/searchDataImage/

          if(response.data.searchData[i].image == null ){
            response.data.searchData[i].image =  "http://localhost:8000/defaultImage/default.jpg";

          }else{
            response.data.searchData[i].image =  "http://localhost:8000/postImage/"+response.data.searchData[i].image ;
          }

        }


        this.postLists =  response.data.searchData;
    

      })
    },
  categorySearch(category){
    // alert("ok");
    // alert(category);
    // console.log(category.category_id);
  if(category.category_id != null){
    let id = {
      'categoryId' : category.category_id
    }
    axios.post('http://127.0.0.1:8000/api/searchCategory',id).then( (response )=>{
      console.log(response.data.posts);
      for ( let i = 0 ; i< response.data.posts.length ; i++){
        // http://localhost:8000/postImage/

        if(response.data.posts[i].image == null ){
          response.data.posts[i].image =  "http://localhost:8000/defaultImage/default.jpg";

        }else{
          response.data.posts[i].image =  "http://localhost:8000/postImage/"+response.data.posts[i].image ;

        }

      }
      this.postLists = response.data.posts;
      // console.log(response.data.posts);

    } )
  }
   
  },
  newDetails(id){
    // console.log(id);

    this.$router.push({
      name: 'newsDetails',
      query: {
        newsId: id
      }
    });
    
       
  },
  checkToken(){
    if(this.storeToken != null && this.storeToken != undefined && this.storeToken != ""){
      this.tokenStatus = true;


    }else{
      this.tokenStatus = false;
      // this.login();
    }
  },
  logout(){
    this.tokenStatus= false ;
    this.$store.dispatch('setToken',null);
    this.$store.dispatch('setUserData',null);
    this.login();
  
  }
  
  },
  mounted() {

    this.checkToken();
    this.getAllPost();
    this.loadCategory();
  },
};