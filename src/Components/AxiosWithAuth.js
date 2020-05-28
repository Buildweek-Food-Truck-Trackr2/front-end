import axios from "axios";

const AxiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: `Bearer: ${localStorage.getItem("token")}`,
    },
  });
};

export default AxiosWithAuth;
