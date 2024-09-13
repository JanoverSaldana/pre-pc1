import axios from "axios";


const http = axios.create({ baseURL: 'https://thecocktaildb.com/api/json/v1/1/search.php?f=a'});

export class DrinksApiService {

    getAllResources() {
        return http.get(undefined);
    }


}