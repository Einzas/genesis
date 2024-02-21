import axios from "axios";

export const axiosEcommerce = axios.create({
  //url base de la api
  baseURL: "https://e-commerce-api-v2.academlo.tech/api/v1/",
});

export const getConfig = () => {
  const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
