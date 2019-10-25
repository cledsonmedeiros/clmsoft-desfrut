<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card id="cardAcaiCremesTigela" color="white" light>
          <v-card-title class="title font-weight-bold warning--text">
            Açaí e cremes na tigela
            <v-spacer></v-spacer>
            <v-text-field v-model="pesquisaAcaiCremeTigela" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="cabecalhoAcaiCremeTigela" :items="tabelaAcaiCremeTigela" :search="pesquisaAcaiCremeTigela" hide-default-footer :items-per-page="tabelaAcaiCremeTigela.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card color="white" light :min-height="this.calcularAlturaCardAcaiCremesTigela">
          <v-card-text class="title font-weight-bold warning--text pt-5">
            Açaí no copo
          </v-card-text>
          <v-data-table :headers="cabecalhoAcaiCopo" :items="tabelaAcaiCopo" hide-default-footer :items-per-page="tabelaAcaiCopo.length"></v-data-table>
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

      <v-flex xs12 sm6>
        <v-card id="cardChocolates" color="white" light>
          <v-card-title class="title font-weight-bold warning--text">
            Chocolates
            <v-spacer></v-spacer>
            <v-text-field v-model="pesquisaChocolates" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="cabecalhoChocolates" :items="tabelaChocolates" :search="pesquisaChocolates" hide-default-footer :items-per-page="tabelaChocolates.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 style="padding: 0">
        <v-flex xs12>
          <v-card color="white" light :min-height="this.calcularAlturaCardCholates / 2 - 4">
            <v-card-title class="title font-weight-bold warning--text">
              Frutas
              <v-spacer></v-spacer>
              <v-text-field v-model="pesquisaFrutas" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="cabecalhoFrutas" :items="tabelaFrutas" :search="pesquisaFrutas" hide-default-footer :items-per-page="tabelaFrutas.length"></v-data-table>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="white" light :min-height="this.calcularAlturaCardCholates / 2 - 4">
            <v-card-title class="title font-weight-bold warning--text">
              Outros
              <v-spacer></v-spacer>
              <v-text-field v-model="pesquisaOutros" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="cabecalhoOutros" :items="tabelaOutros" :search="pesquisaOutros" hide-default-footer :items-per-page="tabelaOutros.length"></v-data-table>
          </v-card>
        </v-flex>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card color="white" light>
          <v-card-title class="title font-weight-bold warning--text">
            Grãos, sementes e cereais
            <v-spacer></v-spacer>
            <v-text-field v-model="pesquisaGraos" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="cabecalhoGraos" :items="tabelaGraos" :search="pesquisaGraos" hide-default-footer :items-per-page="tabelaGraos.length"></v-data-table>
        </v-card>
      </v-flex>

    </v-layout>
    <v-layout row wrap>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MenuCompleto",
  data() {
    return {
      pesquisaAcaiCremeTigela: "",
      cabecalhoAcaiCremeTigela: [
        {
          text: "Sabor",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "250 g", align: "center", sortable: false, value: "preco250" },
        { text: "500 g", align: "center", sortable: false, value: "preco500" },
        { text: "750 g", align: "right", sortable: false, value: "preco750" }
      ],
      tabelaAcaiCremeTigela: [
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
      cabecalhoAcaiCopo: [
        { text: "300 ml", align: "left", sortable: false, value: "preco300" },
        { text: "500 ml", align: "center", sortable: false, value: "preco500" },
        { text: "700 ml", align: "right", sortable: false, value: "preco700" }
      ],
      tabelaAcaiCopo: [
        {
          preco300: "R$13,50",
          preco500: "R$16,50",
          preco700: "R$25,50"
        }
      ],
      pesquisaChocolates: "",
      cabecalhoChocolates: [
        {
          text: "Chocolate",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaChocolates: [
        {
          nome: "Bis (preto ou branco)",
          valor: "R$1,25"
        },
        {
          nome: "Tubetes",
          valor: "R$1,50"
        },
        {
          nome: "Confete",
          valor: "R$2,00"
        },
        {
          nome: "Chocoball",
          valor: "R$2,50"
        },
        {
          nome: "Gotas de chocolate",
          valor: "R$2,50"
        },
        {
          nome: "Ovomaltine",
          valor: "R$3,00"
        },
        {
          nome: "Baton (preto ou branco)",
          valor: "R$3,00"
        },
        {
          nome: "Laka",
          valor: "R$3,00"
        },
        {
          nome: "Diamante negro",
          valor: "R$3,00"
        },
        {
          nome: "KitKat",
          valor: "R$3,00"
        },
        {
          nome: "M&M's",
          valor: "R$4,00"
        },
        {
          nome: "Nutella",
          valor: "R$4,00"
        }
      ],
      pesquisaGraos: "",
      cabecalhoGraos: [
        {
          text: "Item",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaGraos: [
        {
          nome: "Flocos de arroz",
          valor: "R$1,00"
        },
        {
          nome: "Amendoim",
          valor: "R$1,50"
        },
        {
          nome: "Aveia",
          valor: "R$1,50"
        },
        {
          nome: "Granola",
          valor: "R$2,00"
        },
        {
          nome: "Farinha láctea",
          valor: "R$2,00"
        },
        {
          nome: "Sucrilhos",
          valor: "R$2,00"
        },
        {
          nome: "Castanha de cajú",
          valor: "R$3,00"
        }
      ],
      pesquisaFrutas: "",
      cabecalhoFrutas: [
        {
          text: "Fruta",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaFrutas: [
        {
          nome: "Banana",
          valor: "R$1,00"
        },
        {
          nome: "Uva",
          valor: "R$2,00"
        },
        {
          nome: "Morango",
          valor: "R$4,00"
        },
        {
          nome: "Kiwi",
          valor: "R$4,00"
        }
      ],
      pesquisaOutros: "",
      cabecalhoOutros: [
        {
          text: "Item",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaOutros: [
        {
          nome: "Paçoca",
          valor: "R$1,50"
        },
        {
          nome: "Leite ninho",
          valor: "R$2,00"
        },
        {
          nome: "Oreo",
          valor: "R$3,00"
        },
        {
          nome: "Abacaxi grelhado",
          valor: "R$6,00"
        }
      ]
    };
  },
  computed: {
    calcularAlturaCardAcaiCremesTigela: () => {
      return document.getElementById("cardAcaiCremesTigela").offsetHeight;
    },
    calcularAlturaCardCholates: () => {
      return document.getElementById("cardChocolates").offsetHeight;
    },
  }
};
</script>
