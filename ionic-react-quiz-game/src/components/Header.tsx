import React from "react";
import { 
    IonHeader, IonTitle, IonToolbar, 
  } from '@ionic/react';

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color="dark" className="ion-text-center">
                <IonTitle>Ionic Quiz</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};

export default Header;