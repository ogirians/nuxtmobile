<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
            >
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                color="#385F73"
                dark
              >
                <v-card-title class="text-h5">
                  Pendaftaran
                </v-card-title>

                <v-card-subtitle>Umum</v-card-subtitle>

                <v-card-actions class="justify-end">
                  <NuxtLink to="/umum">
                    <v-btn color="green">
                      <v-icon
                        dark
                        left
                      >
                        mdi mdi-location-enter
                      </v-icon>
                      Daftar
                    </v-btn>
                  </NuxtLink>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
            >
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                color="#385F73"
                dark
              >
                <v-card-title class="text-h5">
                  Pendaftaran
                </v-card-title>
                <v-card-subtitle>JKN</v-card-subtitle>
                <v-card-actions class="justify-end">
                  <NuxtLink to="/jkn">
                    <v-btn color="green">
                      <v-icon
                        dark
                        left
                        >
                          mdi mdi-location-enter
                      </v-icon>
                      Daftar
                    </v-btn>
                  </NuxtLink> 
                </v-card-actions>
              </v-card>
            </v-hover>
              
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
            >
              <v-card
                color="#385F73"
                dark
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-card-title class="text-h5">
                  Pembatalan
                </v-card-title>
  
                <v-card-subtitle>pendaftaran</v-card-subtitle>
  
                <v-card-actions class="justify-end">
                  <v-btn color="red">
                    <v-icon
                      dark
                      left
                    >
                      mdi mdi-minus-circle-outline
                    </v-icon>
                    Batal
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }
  }
}
</script>
