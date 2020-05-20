import React, { Component } from "react";
import { Spinner, Content, List, Text, Button, Icon } from "native-base";
import { observer } from "mobx-react";

// stores
import projectStore from "../../Stores/ProjectStore";

// Components
import ProjectRequestsItem from "./ProjectRequestsItem";

class ProjectRequestsList extends Component {
  render() {
    if (projectStore.loadingR) return <Spinner />;

    const { navigation } = this.props;
    const projectID = this.props.navigation.getParam("projectID");
    const project = projectStore.myprojects.find(
      projects => projects.id === projectID
    );
    const myrequest = projectStore.requests.filter(
      requestP =>
        requestP.project === project.title && requestP.status == "Pending"
    );

    const requests = myrequest.map(request => (
      <ProjectRequestsItem request={request} key={request.id} />
    ));

    return (
      <Content>
        <List>{requests}</List>
      </Content>
    );
  }
}

export default observer(ProjectRequestsList);
