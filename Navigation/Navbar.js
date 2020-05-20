import { createBottomTabNavigator } from "react-navigation-tabs";

import ProjectStack from "./ProjectStack";
import RequestStack from "./RequestStack";
import MyRequests from "../Components/MyRequests";

const BottomTabNav = createBottomTabNavigator({
  ProjectStack: ProjectStack,
  RequestStack: RequestStack,
  MyRequests: MyRequests
});

export default BottomTabNav;
