import type { HttpResponseType } from "../types/httpType";
import http from "./http";

const httpCheckNetwork = () => {
  return http
    .get<HttpResponseType>("/utils/check-network")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export { httpCheckNetwork };
