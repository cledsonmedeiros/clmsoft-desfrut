<template>
  <v-app id="app">
    <v-app-bar app clipped-left class="secondary" dense>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Desfrut</span>
        <span class="title font-weight-light ml-2">Açaiteria & Hot Bread</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-row align="center" style="max-width: 350px" class="mr-1">
        <v-text-field placeholder="Pesquisar" single-line append-icon="mdi-magnify" color="white" hide-details></v-text-field>
      </v-row> -->
    </v-app-bar>

    <v-content class="primary">
      <v-container fluid>
        <v-layout row>

          <v-flex sm12 md6 class="pa-3">
            <v-card color="white" light>
              <v-card-title class="title font-weight-bold warning--text">
                Açaí e cremes na tigela
                <v-spacer></v-spacer>
                <v-text-field v-model="pesquisaTabela01" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
              </v-card-title>
              <v-data-table :headers="cabecalhoTabela01" :items="tabela01" :search="pesquisaTabela01" hide-default-footer :items-per-page="tabela01.length"></v-data-table>
            </v-card>
          </v-flex>

          <v-flex sm12 md6 class="pa-3">
            <v-card color="white" light>
              <v-card-text class="title font-weight-bold warning--text pt-5">
                Açaí no copo
              </v-card-text>
              <v-data-table :headers="cabecalhoTabela02" :items="tabela02" hide-default-footer :items-per-page="tabela02.length"></v-data-table>
              <v-card-text class="caption font-weight-medium warning--text pt-1">
                <v-divider class="pb-3"></v-divider>
                <div>Escolha 3 acompanhamentos para 300 ml</div>
                <div>Escolha 4 acompanhamentos para 500 ml</div>
                <div>Escolha 6 acompanhamentos para 700 ml</div>
                <div class="pb-2 pt-2 black--text body-2 font-weight-bold">
                  Leite ninho, Granola, Sucrilhos, Aveia, Flocos de arroz, Farinha láctea, Chocoball, Amendoim, Paçoca, Banana, Morango, Kiwi
                </div>
                <v-divider class="pb-3"></v-divider>
                <div>Escolha 2 caldas</div>
                <div class="pb-2 pt-2 black--text body-2 font-weight-bold">
                  Morango, Chocolate, Kiwi, Mel, Leite condensado
                </div>
              </v-card-text>
            </v-card>
          </v-flex>

          
        </v-layout>

        <!-- <v-layout row> -->

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

        <!-- <v-flex xs6 class="px-3">
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

        </v-layout> -->

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      pesquisaTabela01: "",
      cabecalhoTabela01: [
        {
          text: "Sabor",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "250 g", value: "preco250" },
        { text: "500 g", value: "preco500" },
        { text: "750 g", value: "preco750" }
      ],
      tabela01: [
        {
          nome: "Açai Tradicional",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Açai Banana",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Açai Morango",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Creme de Pitaya",
          preco250: "R$11,00",
          preco500: "R$14,00",
          preco750: "R$21,00"
        },
        {
          nome: "Creme de Cupuaçu",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Creme Energético",
          preco250: "R$9,00",
          preco500: "R$12,00",
          preco750: "R$19,00"
        }
      ],
      cabecalhoTabela02: [
        { text: "300 ml", sortable: false, value: "preco300" },
        { text: "500 ml", sortable: false, value: "preco500" },
        { text: "700 ml", sortable: false, value: "preco700" }
      ],
      tabela02: [
        {
          preco300: "R$13,50",
          preco500: "R$16,50",
          preco700: "R$25,50"
        },
      ],
    };
  }
};
</script>
