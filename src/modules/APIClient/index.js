import Axios from "axios";
import config from "../../../config";

class APIClient {
  constructor() {
    this.client = Axios.create({
      timeout: 15000,
      baseURL: config.baseUrl,
    });

    this.client.interceptors.response.use((response) => {
      const responseData = response.data;
      if (!responseData.success) {
        return Promise.reject(
          new Error(
            (response.payload && response.payload.message) || "UNDEFINED_ERROR"
          )
        );
      }
      return Promise.resolve(responseData);
    });
  }
  setAuthenticatedInstance(token) {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetAuthenticatedInstance() {
    this.client.defaults.headers.common.Authorization = udefined;
  }
}

export default new APIClient();
