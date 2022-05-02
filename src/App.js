import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('2020-01-31');

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
        <IonCard className='ion-text-center'>
          <IonCardHeader>
            <IonCardTitle>18 Feb 2020</IonCardTitle>
            <IonCardContent>
              <p>Physical: 80%</p>
              <p>Emotional: 80%</p>
              <p>Intellectual: 80%</p>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
