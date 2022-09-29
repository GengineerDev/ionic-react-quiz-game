import React from "react";

import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle
} from "@ionic/react";

const Result: React.FC<{score: number}> = props => {
    let date = new Date()
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Quiz Result: {props.score}/5</IonCardTitle>
                <IonCardSubtitle>Date Submitted: {date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()}</IonCardSubtitle>
                <IonCardContent>Have a great day!</IonCardContent>
            </IonCardHeader>
        </IonCard>
    )
}

export default Result;