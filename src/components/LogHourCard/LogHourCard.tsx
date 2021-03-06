import React from "react";
import {
  IonButton,
  IonDatetime,
  IonIcon,
  IonBadge,
  IonItem,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import { create, timer, trash, calendar } from "ionicons/icons";
import { ILogs } from "../../utils/declarations";
import { LOG_HOUR_CARD_TEXTS } from "./constants";
import { formatDate } from "../../utils/inputHandle";
import { createStringDateFromNumber } from "../LogHourForm/constants";
import "./LogHourCard.css";

interface LogHourCard {
  onEditClick: Function;
  onDeleteClick: Function;
  logHour: ILogs;
  group: string | null;
}

const LogHourCard: React.FC<LogHourCard> = ({
  onEditClick,
  onDeleteClick,
  logHour,
  group
}) => {
  const handleOnEdit = () => {
    if (onEditClick) {
      onEditClick();
    }
  };

  const handleOnDelete = () => {
    if (onDeleteClick) {
      onDeleteClick();
    }
  };
  return (
    <div>
      <IonItem text-wrap className="item-card">
        <IonGrid>
          <IonRow className="item-card__row">
            <IonCol size="6">
              <div className="item-card__icon-container">
                <IonIcon
                  className="item-card__icon"
                  size={"large"}
                  icon={timer}
                />
                <IonDatetime
                  className="item-card__hour"
                  readonly={true}
                  displayFormat={LOG_HOUR_CARD_TEXTS.HOUR_DISPLAY_FORMAT}
                  value={createStringDateFromNumber(logHour.duration)}
                />
                <p className="item-card__hour-text">
                  {LOG_HOUR_CARD_TEXTS.SPENT_TIME_HOURS_TEXT}
                </p>
              </div>
            </IonCol>
            <IonCol size="2" className="item-card__col">
              <div className="item-card__icon-container">
                <IonIcon
                  className="item-card__icon"
                  size={"large"}
                  icon={calendar}
                />
                <IonDatetime
                  readonly={true}
                  className="item-card__date"
                  displayFormat={LOG_HOUR_CARD_TEXTS.DATE_DISPLAY_FORMAT}
                  value={formatDate(logHour.timestamp)}
                />
              </div>
            </IonCol>
          </IonRow>
          <div className="item-card__dividing-line" />
          <IonRow className="item-card__row badge--max-width">
            <IonBadge className="item-card__badge" color="tertiary">
              {group}
            </IonBadge>
          </IonRow>
          <IonRow>
            <IonCol className="item-card__col">
              <p className="item-card__description">{logHour.description}</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="item-card-buttons__container">
                <IonButton
                  fill="clear"
                  shape="round"
                  size="small"
                  color="tertiary"
                  onClick={handleOnEdit}
                >
                  <IonIcon
                    className="item-card__icon"
                    size={"large"}
                    icon={create}
                  />
                </IonButton>
                <IonButton
                  fill="clear"
                  shape="round"
                  size="small"
                  color="danger"
                  onClick={handleOnDelete}
                >
                  <IonIcon
                    className="item-card__icon"
                    size={"large"}
                    icon={trash}
                  />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </div>
  );
};

export default LogHourCard;
