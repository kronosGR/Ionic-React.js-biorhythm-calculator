import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';

export default function BiorhythmCard({ targetDate }) {
  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>{targetDate}</IonCardTitle>
        <IonCardContent>
          <p>Physical: 80%</p>
          <p>Emotional: 80%</p>
          <p>Intellectual: 80%</p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}
