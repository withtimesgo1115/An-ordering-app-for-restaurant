// axios is just like fetch but fetch cannot work well in old browsers
import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }
    
    //async methods of class Search
    async getResults(query){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            // get the recipes and store it in a member attribute 
            this.result = res.data.recipes;
            //console.log(this.recipes);
        }catch(error) {
            alert(error);
        }
    }

}
