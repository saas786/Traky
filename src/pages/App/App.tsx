import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables and global styles */
import "../../theme/variables.css";
import "../../styles/global.css";

/* Pages */
import LogsList from "../LogsList/LogsList";
import LogHourPage from "../LogHour/LogHourPage";
import LoginPage from "../Login/LoginPage";
import EditHourPage from "../../pages/EditHour/EditHourPage";

/* Components */
import Menu from "../../components/Menu/Menu";
import AuthProvider from "../../components/AuthProvider/AuthProvider";

/* Util functions and constant values */
import { LOGS_EDIT_URL_CONFIG, LOGS_LIST_URL_CONFIG, LOGS_LOGIN_URL_CONFIG, LOGS_NEW_URL_CONFIG } from "../../utils/constants";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu/>
          <IonRouterOutlet id="main">
            <Route
              path={LOGS_LOGIN_URL_CONFIG.path}
              component={LoginPage}
              exact={true}
            />
            <Route
              path={LOGS_NEW_URL_CONFIG.path}
              render={(props) => <AuthProvider Component={LogHourPage} {...props}/>}
              exact={true}
            />
            <Route
              path={LOGS_LIST_URL_CONFIG.path}
              render={(props) => <AuthProvider Component={LogsList} {...props}/>}
              exact={true}
            />
            <Route path={LOGS_EDIT_URL_CONFIG.path} component={EditHourPage} />
            <Route
              path="/"
              render={() => (
                <Redirect to={LOGS_LOGIN_URL_CONFIG.path} exact={true} />
              )}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
