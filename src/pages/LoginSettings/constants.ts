import { ILoginSettings, INotificationOptions } from "../../utils/declarations";
import { NOTIFICATION_MESSAGES, NOTIFICATION_TYPE } from "../../utils/constants";

export enum LOGIN_SETTINGS_TYPE {
  SAVE_LOGIN_SETTINGS_ACTION = "SAVE_LOGIN_SETTINGS_ACTION",
  ERROR_LOGIN_SETTINGS_ACTION = "ERROR_LOGIN_SETTINGS_ACTION",
  SET_KEY_ACTION = "SET_KEY_ACTION"
}

export interface ILoginSettingsAction {
  type: LOGIN_SETTINGS_TYPE;
}

export interface SAVE_LOGIN_SETTINGS_ACTION extends ILoginSettingsAction {
  type: LOGIN_SETTINGS_TYPE.SAVE_LOGIN_SETTINGS_ACTION,
  payload: {
    loginSettings: ILoginSettings,
    notificationOptions: INotificationOptions,
    key: string
  }
}

export interface ERROR_LOGIN_SETTINGS_ACTION extends ILoginSettingsAction {
  type: LOGIN_SETTINGS_TYPE.ERROR_LOGIN_SETTINGS_ACTION,
  payload: {
    notificationOptions: INotificationOptions
  }
}

export const createErrorLoginSettingsAction = (): ERROR_LOGIN_SETTINGS_ACTION => ({
  type: LOGIN_SETTINGS_TYPE.ERROR_LOGIN_SETTINGS_ACTION,
  payload: {
    notificationOptions: {
      header: NOTIFICATION_MESSAGES.SAVE_SETTINGS_ERROR_HEADER,
      message: NOTIFICATION_MESSAGES.SAVE_SETTINGS_ERROR_BODY,
      color: NOTIFICATION_TYPE.ERROR
    }
  }
});

export interface SET_KEY_ACTION extends ILoginSettingsAction {
  type: LOGIN_SETTINGS_TYPE.SET_KEY_ACTION,
  payload: string
}

export const createSetKeyAction = (key: string): SET_KEY_ACTION => ({
  type: LOGIN_SETTINGS_TYPE.SET_KEY_ACTION,
  payload: key
});