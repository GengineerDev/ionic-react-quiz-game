import { 
    IonButton,
    IonContent, 
    IonIcon, 
    IonInput, 
    IonItem, 
    IonLabel 
} from "@ionic/react";
import React from "react";
import { sendOutline } from 'ionicons/icons';

const Main: React.FC = () => {
    return (
        <IonContent className="ion-padding">
            <IonItem>
                <IonLabel position="floating">1. What comes after number 2?</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">2. What is the number before 5?</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">3. What's known as the Pearl of the Orient?</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">4. What is the most popular social media site?</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">5. What is the framework used for this website?</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonButton expand="full" color="light">
                <IonIcon slot="start" icon={sendOutline}></IonIcon>
                Submit Your Answers
            </IonButton>
        </IonContent>
    )
};

export default Main;