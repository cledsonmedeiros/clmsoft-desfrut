<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex sm12>
          <v-card color="white" light>
            <v-card-title class="title font-weight-bold warning--text">
              Açaí e cremes na tigela
              <v-spacer></v-spacer>
              <v-text-field v-model="pesquisaTabela01" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="cabecalhoTabela01" :items="tabela01" :search="pesquisaTabela01" hide-default-footer :items-per-page="tabela01.length"></v-data-table>
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
      pesquisaTabela01: "",
      cabecalhoTabela01: [
        {
          text: "Sabor",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "250 g", sortable: false, value: "preco250" },
        { text: "500 g", sortable: false, value: "preco500" },
        { text: "750 g", sortable: false, value: "preco750" }
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
      ]
    };
  }
};
</script>
