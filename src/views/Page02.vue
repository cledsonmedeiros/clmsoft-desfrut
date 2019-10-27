<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card id="cardAcaiNaTigela" color="white" light :min-height="this.AlturaCardAcaiNaTigela">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Açaí na tigela
              </v-flex>
              <v-text-field v-model="pesquisaAcaiNaTigela" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              <v-flex xs12 sm6>
              </v-flex>
            </v-layout>
            <v-card-text class="caption font-weight-medium warning--text pt-1" style="padding: 0px">
              Caldas: leite condensado, morango, chocolate, kiwi ou mel
            </v-card-text>
          </v-card-title>
          <v-data-table :headers="cabecalhoAcaiNaTigela" :items="tabelaAcaiCremeTigela" :search="pesquisaAcaiNaTigela" hide-default-footer :items-per-page="tabelaAcaiCremeTigela.length"></v-data-table>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Page01",
  data() {
    return {
      AlturaCardAcaiNaTigela: 0,
      pesquisaAcaiNaTigela: "",
      cabecalhoAcaiNaTigela: [
        {
          text: "Item",
          align: "left",
          sortable: true,
          value: "nome"
        },
        {
          text: "Descrição",
          align: "left",
          sortable: true,
          value: "descricao"
        },
        { text: "250 g", align: "right", sortable: true, value: "preco250" },
        { text: "500 g", align: "right", sortable: true, value: "preco500" },
        { text: "750 g", align: "right", sortable: true, value: "preco750" }
      ],
      tabelaAcaiCremeTigela: [
        {
          nome: "Apuí",
          descricao: "Banana e granola",
          preco250: "R$13,50",
          preco500: "R$16,50",
          preco750: "R$23,50"
        },
        {
          nome: "Anori",
          descricao: "Banana, farinha láctea e leite ninho",
          preco250: "R$15,50",
          preco500: "R$18,50",
          preco750: "R$25,50"
        },
        {
          nome: "Autazes",
          descricao: "Metade açaí, metade cupuaçu e granola",
          preco250: "R$12,00",
          preco500: "R$15,00",
          preco750: "R$22,00"
        },
        {
          nome: "Anori 2",
          descricao: "Banana, castanha de cajú, granola e paçoca",
          preco250: "R$18,00",
          preco500: "R$21,00",
          preco750: "R$28,00"
        },
        {
          nome: "Barcelos",
          descricao: "Bis, chocoball e sucrilhos",
          preco250: "R$16,00",
          preco500: "R$19,00",
          preco750: "R$26,00"
        },
        {
          nome: "Barreirinha",
          descricao: "Nutella, banana e diamante negro",
          preco250: "R$19,00",
          preco500: "R$22,00",
          preco750: "R$29,00"
        },
        {
          nome: "Beruri",
          descricao: "Morango, ovomaltine e kitkat",
          preco250: "R$21,00",
          preco500: "R$24,00",
          preco750: "R$31,00"
        },
        {
          nome: "Fonte boa",
          descricao: "Bis, M&M's e baton",
          preco250: "R$19,00",
          preco500: "R$22,00",
          preco750: "R$29,00"
        },
        {
          nome: "Novo airão",
          descricao: "Leite em pó, oreo e ovomaltine",
          preco250: "R$18,50",
          preco500: "R$21,50",
          preco750: "R$28,50"
        },
        {
          nome: "Rio preto da eva",
          descricao: "Diamante negro, baton e ovomaltine",
          preco250: "R$21,00",
          preco500: "R$24,00",
          preco750: "R$31,00"
        },
        {
          nome: "Itamarati",
          descricao: "Castanha de cajú, amendoim e granola",
          preco250: "R$17,50",
          preco500: "R$20,50",
          preco750: "R$27,50"
        },
        {
          nome: "Itapiranga",
          descricao: "Flocos de arroz, gotas de chocolate e sucrilhos",
          preco250: "R$15,50",
          preco500: "R$18,50",
          preco750: "R$25,50"
        },
        {
          nome: "Ipixuna",
          descricao: "Nutella, banana e leite ninho",
          preco250: "R$17,50",
          preco500: "R$20,50",
          preco750: "R$27,50"
        },
        {
          nome: "Jutaí",
          descricao: "Banana e paçoca",
          preco250: "R$13,50",
          preco500: "R$16,50",
          preco750: "R$23,50"
        },
        {
          nome: "Parintins",
          descricao: "Morango, banana e nutella",
          preco250: "R$19,50",
          preco500: "R$22,50",
          preco750: "R$29,50"
        },
        {
          nome: "Manaus",
          descricao: "Morango, banana e kiwi",
          preco250: "R$19,50",
          preco500: "R$22,50",
          preco750: "R$29,50"
        }
      ]
    };
  },
  methods: {
    fixAlturaCardAcaiCopo: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardAcaiNaTigela === 0 &&
          document.getElementById("cardAcaiNaTigela").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardAcaiNaTigela = 0;
          } else {
            this.AlturaCardAcaiNaTigela = document.getElementById(
              "cardAcaiNaTigela"
            ).offsetHeight;
          }
        }
      });
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function() {
    this.fixAlturaCardAcaiCopo();
  }
};
</script>
