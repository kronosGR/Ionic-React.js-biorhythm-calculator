import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM YYYY');
}

export default function BiorhythmCard({ targetDate }) {
  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        <IonCardContent>
          <p>Physical: 80%</p>
          <p>Emotional: 80%</p>
          <p>Intellectual: 80%</p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}
