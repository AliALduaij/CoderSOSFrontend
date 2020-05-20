import { createStackNavigator } from "react-navigation-stack";

import ProjectRequestsList from "../Components/ProjectRequestsList/index";
import RequestDetail from "../Components/RequestDetail";
import MyProjects from "../Components/MyProjects";

const RequestStack = createStackNavigator(
  {
    MyProjects: MyProjects,
    ProjectRequestsList: ProjectRequestsList,
    RequestDetail: RequestDetail
  },
  {
    initialRoutName: "MyProjects"
  }
);

export default RequestStack;
