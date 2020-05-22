import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uBAIrlaZt7anUKIdZNU_SuS5tzUhvcHWQWuXza08n7E",
  },
});
