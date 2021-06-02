import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployeeName: function() {
    return axios.get("https://randomuser.me/api/employeeName/image/random");
  },
  getEmployeeDepartment: function(department) {
    return axios.get("https://randomuser.me/api/department/" + department + "/images");
  },
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/employee/list");
  }
};
