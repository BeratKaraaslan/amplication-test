import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SurveyList } from "./survey/SurveyList";
import { SurveyCreate } from "./survey/SurveyCreate";
import { SurveyEdit } from "./survey/SurveyEdit";
import { SurveyShow } from "./survey/SurveyShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { CertificationList } from "./certification/CertificationList";
import { CertificationCreate } from "./certification/CertificationCreate";
import { CertificationEdit } from "./certification/CertificationEdit";
import { CertificationShow } from "./certification/CertificationShow";
import { EmployeeFeedbackList } from "./employeeFeedback/EmployeeFeedbackList";
import { EmployeeFeedbackCreate } from "./employeeFeedback/EmployeeFeedbackCreate";
import { EmployeeFeedbackEdit } from "./employeeFeedback/EmployeeFeedbackEdit";
import { EmployeeFeedbackShow } from "./employeeFeedback/EmployeeFeedbackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SelfAutomatedCertificationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Survey"
          list={SurveyList}
          edit={SurveyEdit}
          create={SurveyCreate}
          show={SurveyShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Certification"
          list={CertificationList}
          edit={CertificationEdit}
          create={CertificationCreate}
          show={CertificationShow}
        />
        <Resource
          name="EmployeeFeedback"
          list={EmployeeFeedbackList}
          edit={EmployeeFeedbackEdit}
          create={EmployeeFeedbackCreate}
          show={EmployeeFeedbackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
