import axiosClient from "./axiosClient";

const foodApi = {
  async  getAll(category,params) {
        const url = `/${category}`;
        return axiosClient.get(url,{params: params});
    }, 

    get(category,id) {
      const url = `${category}/${id}`;
      return axiosClient.get(url);
    },

    add(data) {
      const url = '';
      return axiosClient.post(url,data);
    },

    update(data) {
      const url = `/${data.id}`;
        return axiosClient.patch(url,data);
    },

    remove(id) {
      const url = `/${id}`;
      return axiosClient.delete(url);
    }
};

export default foodApi;