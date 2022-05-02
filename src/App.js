import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [birthday, setBirthday] = useState('2020-01-31');
  const targetDate = new Date().toISOString();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='floating'>Date of birth:</IonLabel>
          <IonDatetime
            displayFormat='D MMM YYYY'
            onIonChange={(event) => setBirthday(event.detail.value)}
          />
        </IonItem>
        <BiorhythmCard targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
