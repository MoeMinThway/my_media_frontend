import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      postLists: {},
      categoryLists: {},
      searchKey : '',

    };
  },
  methods: {
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
                    console.log(this.postLists);

        
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
    }
  
  },
  mounted() {
    this.getAllPost();
    this.loadCategory();
  },
};