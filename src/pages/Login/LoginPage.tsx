import React, { FunctionComponent, useContext} from 'react';
import "./LoginPage.css";
import { AppContext } from "../../store/Store";
import { History } from "history";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LOGS_LIST_URL_CONFIG } from "../../utils/constants";
import { loginUser } from "../../utils/api";
import {
  IonPage,
  IonContent
} from '@ionic/react';

interface LoginPageHistory {
  history: History
}

const LoginPage: FunctionComponent<LoginPageHistory> = ({ history }) => {

  const { dispatch } = useContext(AppContext);

  const onClickLogin = async (body: LoginForm) => {
    const onSuccess = (res: any) => {
      dispatch({
        type: 'SET_USER',
        payload: {id: res.id, name: body.username}
      })
      dispatch({
        type: 'LOGIN'
      })
      history.push(LOGS_LIST_URL_CONFIG.path)
    }
    await loginUser(body, onSuccess)
  }

  return (
    <IonPage>
      <IonContent color="primary">
        <LoginForm onClickLogin={onClickLogin}/>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage;
