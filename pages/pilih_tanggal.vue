<template>
    <v-container
      class="mx-auto"
    >
        <v-row>
            <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            >
                <v-card>
                    <v-container
                    
                    class="black--text align-end"
                    height="400px"
                    color="black"
                    style="background-color: lightblue"
                    >
                    <v-card-title class="justify-center" v-text="card.title"></v-card-title>
                    </v-container>
                    <v-card-text class="justify-end">
                        <v-row class="justify-center">
                            23 Ferbruari 2023  
                        </v-row>
                    </v-card-text>
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>

<script>
export default{
    data: () => ({
      cards: [
        { title: '23', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
        { title: '23', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
        { title: '23', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
      ],
    }),

}
</script>