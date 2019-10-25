<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex sm12>
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
    </v-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "AcaiECremesNaTigela",
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
        }
      ]
    };
  }
};
</script>
