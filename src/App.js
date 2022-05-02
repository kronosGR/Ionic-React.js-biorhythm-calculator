import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

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
          <IonInput />
        </IonItem>
        <p>Name {name}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
