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
          <IonLabel position='floating'>Name:</IonLabel>
          <IonInput value={name} onIonChange={(event) => setName(event.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Date of birth:</IonLabel>
          <IonDatetime
            displayFormat='D MMM YYYY'
            onIonChange={(event) => setBirthday(event.detail.value)}
          />
        </IonItem>
        <p>Name {name}</p>
        <p>Birthday {birthday}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
