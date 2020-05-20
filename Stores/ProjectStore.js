import { observable, decorate } from "mobx";
import { instance } from "./instance";

class ProjectStore {
  projects = [];
  requests = [];
  myprojects = [];
  myrequests = [];
  updatedprojectID = "";
  updatedStatus = "";
  loading = true;
  loadingR = true;

  fetchProjects = async () => {
    try {
      const res = await instance.get("project/list/");

      const projects = res.data;

      this.projects = projects;

      this.loading = false;
    } catch (err) {
      console.log("I'm an ERROR", err);
    }
  };

  fetchRequests = async () => {
    try {
      const res = await instance.get("request/list/");

      const requests = res.data;

      this.requests = requests;

      this.loadingR = false;
    } catch (err) {
      console.log("I'm an ERROR", err);
    }
  };

  fetchMyProjects = async () => {
    try {
      const res = await instance.get("myprojects/list/");

      const myprojects = res.data;

      this.myprojects = myprojects;

      this.loadingR = false;
    } catch (err) {
      console.log("I'm an ERROR", err);
    }
  };

  fetchMyRequests = async () => {
    try {
      const res = await instance.get("myrequests/list/");

      const myrequests = res.data;

      this.myrequests = myrequests;

      this.loadingR = false;
    } catch (err) {
      console.log("I'm an ERROR", err);
    }
  };

  updateStatus = async (projectId, updatedData) => {
    try {
      let res = await instance.put(`request/update/${projectId}/`, {
        status: updatedData
      });

      alert("Request Updated Successfully");
      this.fetchRequests();
      this.fetchMyRequests();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  deleteProject = async (projectId, navigation) => {
    try {
      const res = await instance.delete(`project/delete/${projectId}`);
      this.fetchProjects();
      this.fetchMyProjects();
      alert("Project Deleted Successfully");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  createProject = async (projectData, navigation) => {
    try {
      let res = await instance.post("project/create/", projectData);
      alert("project added successfully.");
      this.fetchProjects();
      this.fetchMyProjects();
      navigation.navigate("ProjectList");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  createRequest = async (requestData, navigation) => {
    try {
      let res = await instance.post("request/create/", requestData);
      alert("request sent successfully.");
      this.fetchMyRequests();
      this.fetchRequests();
      navigation.navigate("ProjectList");
    } catch (err) {
      console.log(err.response.data);
    }
  };
}
decorate(ProjectStore, {
  projects: observable,
  loading: observable,
  myprojects: observable,
  loadingR: observable,
  myrequests: observable
});

const projectStore = new ProjectStore();
projectStore.fetchProjects();
projectStore.fetchRequests();

export default projectStore;
