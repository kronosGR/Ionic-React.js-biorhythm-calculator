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
import { useLocalStorage } from './hooks';

function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='biorhythm-card ion-padding'>
        {birthDate && <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />}
        <IonItem>
          <IonLabel position='fixed'>Date of birth:</IonLabel>
          <IonDatetime
            value={birthDate}
            displayFormat='D MMM YYYY'
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position='fixed'>Target Date:</IonLabel>
          <IonDatetime
            value={targetDate}
            displayFormat='D MMM YYYY'
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
