<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>CabGo Home</ion-title>
           <ion-buttons slot="end">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
          
      <div id="container">
       <ion-card>
          <ion-card-header>
            <div id="wallet">
              <ion-icon :ios="walletOutline" :md="walletOutline" ></ion-icon>
              <ion-card-subtitle>Your Wallet Amount is : </ion-card-subtitle>
              <ion-card-title>R2300</ion-card-title>
            </div>
          </ion-card-header>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Add Money</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
                <ion-grid>
                <ion-row>
                  <ion-col >
                   <ion-item>
                    <ion-label>R</ion-label>
                    <ion-input></ion-input>
                  </ion-item>
                  </ion-col>
                  <ion-col >
                   <ion-button color="dark" expand="block" fill="outline">R4500</ion-button>
                  </ion-col>
                <ion-col>
                 <ion-button color="dark" expand="block" fill="outline">R4500</ion-button>
                </ion-col>
                <ion-col>
                 <ion-button color="dark" expand="block" fill="outline">R4500</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </div>
      <ion-grid>
        <ion-row>
          <ion-col >
            <ion-button expand="block">Block Button</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons,IonButton,  IonContent, IonHeader, IonMenuButton, IonPage,IonLabel,IonBackButton,
        IonTitle, IonToolbar, IonCard, IonCardContent, IonInput,IonGrid, IonRow,IonCol,IonItem,
        IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon
    } from '@ionic/vue';

import { walletOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    IonIcon,
    IonButton,
    IonInput,
    IonGrid, 
    IonRow,
    IonCol,
    IonLabel,
    IonBackButton,
    IonItem
    
  }

  ,setup() {

    return  {
      walletOutline
    }
  }
});
</script>

<style scoped>
ion-button {
  font-size : 10px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-icon {
  font-size: 65px;
  color: #739a7e;
  
}
#wallet {
  text-align: center;
}
</style>
