<template>
  <v-app id="app">
    <v-app-bar app clipped-left class="secondary" dense>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Desfrut</span>
        <span class="title font-weight-light ml-2">Açaiteria & Hot Bread</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 350px" class="mr-1">
        <v-text-field placeholder="Pesquisar" single-line append-icon="mdi-magnify" color="white" hide-details></v-text-field>
      </v-row>
    </v-app-bar>

    <v-content class="primary">
      <!--  <v-container fluid >
        <h1 class="title font-weight-light">Home</h1>
        <v-card class="px-3 my-3" color="white" light v-for="projeto in projetos" :key="projeto.titulo">
          <v-layout row wrap :class="`projeto ${projeto.status}`">
            <v-flex xs12 md5>
              <v-card-title class="caption font-weight-black grey--text">Título</v-card-title>
              <v-card-text>{{projeto.titulo}}</v-card-text>
            </v-flex>
            <v-flex xs6 sm4 md3>
              <v-card-title class="caption font-weight-black grey--text">Pessoa</v-card-title>
              <v-card-text>{{projeto.pessoa}}</v-card-text>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <v-card-title class="caption font-weight-black grey--text">Prazo</v-card-title>
              <v-card-text>{{projeto.prazo}}</v-card-text>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <v-card-title class="caption font-weight-black grey--text">Status</v-card-title>
              <v-card-text>{{projeto.status}}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container> -->

      <v-container fluid>

        <v-layout row>

          <!-- <v-flex xs6 class="px-3">
            <v-card color="white" light>
              <v-layout row>
                <v-card-text>
                  <v-flex xs12 class="mx-3">
                    <div class="headline text-uppercase font-weight-bold warning--text">Açaí e cremes na tigela</div>
                  </v-flex>
                  <v-flex xs6>
                    <div class="subtitle-1 text-uppercase font-weight-bold">Escolha seu sabor</div>
                  </v-flex>
                  <v-flex xs6>
                    <div class="subtitle-1 text-uppercase font-weight-bold">Escolha seu sabor</div>
                  </v-flex>
                </v-card-text>
              </v-layout>
              <v-layout row>
                <v-flex xs12 class="mx-3">
                  <v-card-text>
                    <div class="subtitle-2 font-weight-light">Açai Tradicional</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex> -->

          <v-flex xs6 class="px-3">
            <v-card color="white" light>
              <v-layout row>
                <v-flex xs12 class="mx-3">
                  <v-card-text>
                    <div class="headline text-uppercase font-weight-bold warning--text">Açaí no copo</div>
                    <div class="subtitle-1 text-uppercase font-weight-bold">Escolha seu sabor</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 class="mx-3">
                  <v-card-text>
                    <div class="subtitle-2 font-weight-light">Açai Tradicional</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

        </v-layout>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      projetos: [
        {
          titulo: "Desenvolver um novo website",
          pessoa: "Cledson Medeiros",
          prazo: "01/11/2019",
          status: "finalizado"
        },
        {
          titulo: "Criar homepage",
          pessoa: "Cledson Medeiros",
          prazo: "01/09/2019",
          status: "finalizado"
        },
        {
          titulo: "Criar arte de thumbnails",
          pessoa: "Cledson Medeiros",
          prazo: "01/09/2019",
          status: "finalizado"
        },
        {
          titulo: "Desenvolver fórum da comunidade",
          pessoa: "Cledson Medeiros",
          prazo: "01/12/2019",
          status: "finalizado"
        },
        {
          titulo: "Entregar trabalho da faculdade",
          pessoa: "Cledson Medeiros",
          prazo: "17/09/2019",
          status: "finalizado"
        }
      ]
    };
  }
};
</script>
<style>
.projeto.finalizado {
  border-left: 4px solid orange;
}
.projeto.pendente {
  border-left: 4px solid orange;
}
.projeto.atrasado {
  border-left: 4px solid tomato;
}
/* .theme--light.v-chip:not(.v-chip--active) {
  background: #e0e0e0;
} */
/* .v-chip.finalizado {
  color: #3cd1c2;
}
.v-chip.pendente {
  background: orange;
}
.v-chip.atrasado {
  background: tomato;
} */
</style>
