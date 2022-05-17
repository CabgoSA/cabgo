<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>CabGo Home</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header>
         <ion-list>
          <ion-item class="item-active">
            <router-link to="#"><ion-label>Past</ion-label></router-link>
          </ion-item>
          <ion-item>
            <router-link to="/trips-upcoming"><ion-label>Upcoming</ion-label></router-link>
          </ion-item>
        </ion-list>
      </ion-header>
      <div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
         IonLabel, IonList, IonItem
          } from '@ionic/vue';

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
    IonLabel, 
    IonList, 
    IonItem
    
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
ion-list{
  width: 100%;
  display: flex;
}

ion-list ion-item{
  width: 50%;
border-bottom: solid 2px #8c8c8c;
}
ion-item.item-active{
  border-bottom: solid 2px #3880ff;
  color: #3880ff;
}
</style>
