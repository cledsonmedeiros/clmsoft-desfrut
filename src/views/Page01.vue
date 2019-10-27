<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card id="cardAcaiCremesTigela" color="white" light :min-height="this.AlturaCardAcaiCremesTigela" >
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Açaí e cremes na tigela
              </v-flex>
              <v-text-field v-model="pesquisaAcaiCremeTigela" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              <v-flex xs12 sm6>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoAcaiCremeTigela" :items="tabelaAcaiCremeTigela" :search="pesquisaAcaiCremeTigela" hide-default-footer :items-per-page="tabelaAcaiCremeTigela.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card color="white" light :min-height="this.AlturaCardAcaiCremesTigela">
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
        <v-card id="cardChocolates" color="white" light :min-height="this.AlturaCardChocolates * 2 + 8">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Chocolates
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaChocolates" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoChocolates" :items="tabelaChocolates" :search="pesquisaChocolates" hide-default-footer :items-per-page="tabelaChocolates.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 style="padding: 0">
        <v-flex xs12>
          <v-card color="white" light :min-height="this.AlturaCardChocolates">
            <v-card-title class="title font-weight-bold warning--text">
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  Frutas
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="pesquisaFrutas" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-data-table :headers="cabecalhoFrutas" :items="tabelaFrutas" :search="pesquisaFrutas" hide-default-footer :items-per-page="tabelaFrutas.length"></v-data-table>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="white" light :min-height="this.AlturaCardChocolates">
            <v-card-title class="title font-weight-bold warning--text">
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  Outros
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="pesquisaOutros" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-data-table :headers="cabecalhoOutros" :items="tabelaOutros" :search="pesquisaOutros" hide-default-footer :items-per-page="tabelaOutros.length"></v-data-table>
          </v-card>
        </v-flex>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card color="white" light :min-height="this.AlturaCardCaldas">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Grãos, sementes e cereais
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaGraos" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoGraos" :items="tabelaGraos" :search="pesquisaGraos" hide-default-footer :items-per-page="tabelaGraos.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardCaldas" color="white" light :min-height="this.AlturaCardCaldas">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Caldas
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaCaldas" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-text class="caption font-weight-medium warning--text pt-1" style="padding: 0px">
              Escolha 1 calda
            </v-card-text>
          </v-card-title>
          <v-data-table :headers="cabecalhoCaldas" :items="tabelaCaldas" :search="pesquisaCaldas" hide-default-footer :items-per-page="tabelaCaldas.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card color="white" light :min-height="this.AlturaCardAcaiKids">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Açaí tropical
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaAcaiTropical" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoAcaiTropical" :items="tabelaAcaiTropical" :search="pesquisaAcaiTropical" hide-default-footer :items-per-page="tabelaAcaiTropical.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardAcaiKids" color="white" light :min-height="this.AlturaCardAcaiKids">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Açaí Kids
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaAcaiKids" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoAcaiKids" :items="tabelaAcaiKids" :search="pesquisaAcaiKids" hide-default-footer :items-per-page="tabelaAcaiKids.length"></v-data-table>
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
      AlturaCardAcaiCremesTigela: 0,
      AlturaCardChocolates: 0,
      AlturaCardCaldas: 0,
      AlturaCardAcaiKids: 0,
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
          nome: "Açai tradicional",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Açai banana",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Açai morango",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Creme de pitaya",
          preco250: "R$11,00",
          preco500: "R$14,00",
          preco750: "R$21,00"
        },
        {
          nome: "Creme de cupuaçu",
          preco250: "R$10,00",
          preco500: "R$13,00",
          preco750: "R$20,00"
        },
        {
          nome: "Creme energético",
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
      ],
      pesquisaCaldas: "",
      cabecalhoCaldas: [
        {
          text: "Calda",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaCaldas: [
        {
          nome: "Leite condensado",
          valor: ""
        },
        {
          nome: "Cobertura de morango",
          valor: ""
        },
        {
          nome: "Cobertura de kiwi",
          valor: ""
        },
        {
          nome: "Cobertura de chocolate",
          valor: ""
        },
        {
          nome: "Mel",
          valor: ""
        },
        {
          nome: "Ovomaltine",
          valor: "R$2,00"
        },
        {
          nome: "Ninho",
          valor: "R$2,00"
        },
        {
          nome: "Nutella",
          valor: "R$2,00"
        },
      ],
      pesquisaAcaiTropical: "",
      cabecalhoAcaiTropical: [
        {
          text: "Item",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaAcaiTropical: [
        {
          nome: "Servido no côco verde (Açaí, morango, kiwi, banana e granola) + copo de água de côco",
          valor: "R$24,50"
        },
        {
          nome: "Servido no abacaxi (Açaí, morango, kiwi, banana e granola) + abacaxi grelhado com açúcar e canela",
          valor: "R$28,50"
        },
      ],
      pesquisaAcaiKids: "",
      cabecalhoAcaiKids: [
        {
          text: "Item",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: false, value: "valor" }
      ],
      tabelaAcaiKids: [
        {
          nome: "Açaí feliz (Açaí tradicional 150 g, M&M's, Baton, Flocos de arroz e cobertura)",
          valor: "R$12,50"
        },
        {
          nome: "Tropicalzinho (Açaí tradicional 150 g, morango, kiwi, banana, granola e leite condensado)",
          valor: "R$12,50"
        },
      ],
    };
  },
  methods: {
    fixAlturaCardAcaiCopo: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardAcaiCremesTigela === 0 &&
          document.getElementById("cardAcaiCremesTigela").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardAcaiCremesTigela = 0;
          } else {
            this.AlturaCardAcaiCremesTigela = document.getElementById(
              "cardAcaiCremesTigela"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardsVizinhosChocolate: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardChocolates === 0 &&
          document.getElementById("cardChocolates").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardChocolates = 0;
          } else {
            this.AlturaCardChocolates =
              document.getElementById("cardChocolates").offsetHeight / 2 - 4;
          }
        }
      });
    },
    fixAlturaCardGraos: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardCaldas === 0 &&
          document.getElementById("cardCaldas").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardCaldas = 0;
          } else {
            this.AlturaCardCaldas =
              document.getElementById("cardCaldas").offsetHeight;
          }
        }
      });
    },
    fixAlturaCardAcaiKids: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardAcaiKids === 0 &&
          document.getElementById("cardAcaiKids").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardAcaiKids = 0;
          } else {
            this.AlturaCardAcaiKids =
              document.getElementById("cardAcaiKids").offsetHeight;
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
    this.AlturaCardAcaiCremesTigela = 0;
    this.AlturaCardChocolates = 0;
    this.fixAlturaCardAcaiCopo();
    this.fixAlturaCardsVizinhosChocolate();
    this.fixAlturaCardGraos();
    this.fixAlturaCardAcaiKids();
  }
};
</script>
