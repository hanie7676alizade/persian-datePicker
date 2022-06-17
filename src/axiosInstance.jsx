import axios from "axios";
import dotenv from "dotenv";

const instance = axios.create();
dotenv.config();
instance.defaults.baseURL = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}/`;

instance.defaults.headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};
export default instance;
