import axios from "axios";

axios.defaults.baseURL =
    "https://first-rest-framework-api-f72d1788f2ab.herokuapp.com/";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

axios.defaults.withCredentials = true;
