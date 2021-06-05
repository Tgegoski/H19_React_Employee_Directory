import axios from "axios";

export default {
  getEmployeeByName: function() {
    return axios.get("https://randomuser.me/api/name" + name + "/images");
  },
  getEmployeeByDepartment: function(breed) {
    return axios.get("https://randomuser.me/api/department" + department + "/images");
  },
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/list");
  };
};
