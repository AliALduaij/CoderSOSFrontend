import { createStackNavigator } from "react-navigation-stack";

import ProjectList from "../Components/ProjectList";
import ProjectDetail from "../Components/ProjectDetail";
import CreateProject from "../Components/CreateProject";
import Login from "../Components/Login";
import CreateRequest from "../Components/CreateRequest";

const ProjectStack = createStackNavigator(
  {
    Login: Login,
    ProjectList: ProjectList,
    ProjectDetail: ProjectDetail,
    CreateProject: CreateProject,
    CreateRequest: CreateRequest
  },
  {
    initialRoutName: "Login"
  }
);

export default ProjectStack;
