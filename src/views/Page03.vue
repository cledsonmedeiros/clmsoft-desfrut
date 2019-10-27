<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card id="cardHotBread" color="white" light :min-height="this.AlturaCardHotBread">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Hot bread
              </v-flex>
              <v-text-field v-model="pesquisaHotBread" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              <v-flex xs12 sm6>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoHotBread" :items="tabelaHotBread" :search="pesquisaHotBread" hide-default-footer :items-per-page="tabelaHotBread.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card color="white" light :min-height="this.AlturaCardHotBread">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Sopas fit
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaSopasFit" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoSopasFit" :items="tabelaSopasFit" :search="pesquisaSopasFit" hide-default-footer :items-per-page="tabelaSopasFit.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardTapiocas" color="white" light :min-height="this.AlturaCardTapiocas">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Tapiocas
              </v-flex>
              <v-text-field v-model="pesquisaTapiocas" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              <v-flex xs12 sm6>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoTapiocas" :items="tabelaTapiocas" :search="pesquisaTapiocas" hide-default-footer :items-per-page="tabelaTapiocas.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardSucosNaturais" color="white" light :min-height="this.AlturaCardTapiocas">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Sucos naturais
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaSucosNaturais" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-text class="caption font-weight-medium warning--text pt-1" style="padding: 0px">
              500 ml
            </v-card-text>
          </v-card-title>
          <v-data-table :headers="cabecalhoSucosNaturais" :items="tabelaSucosNaturais" :search="pesquisaSucosNaturais" hide-default-footer :items-per-page="tabelaSucosNaturais.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardSanduichesNaturais" color="white" light :min-height="this.AlturaCardSucosPolpa">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Sanduíches naturais
              </v-flex>
              <v-text-field v-model="pesquisaSanduichesNaturais" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              <v-flex xs12 sm6>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoSanduichesNaturais" :items="tabelaSanduichesNaturais" :search="pesquisaSanduichesNaturais" hide-default-footer :items-per-page="tabelaSanduichesNaturais.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardSucosPolpa" color="white" light :min-height="this.AlturaCardSucosPolpa">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Sucos polpa
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaSucosPolpa" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-text class="caption font-weight-medium warning--text pt-1" style="padding: 0px">
              500 ml
            </v-card-text>
          </v-card-title>
          <v-data-table :headers="cabecalhoSucosPolpa" :items="tabelaSucosPolpa" :search="pesquisaSucosPolpa" hide-default-footer :items-per-page="tabelaSucosPolpa.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardBebidas" color="white" light :min-height="this.AlturaCardBebidas">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Bebidas
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaBebidas" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table :headers="cabecalhoBebidas" :items="tabelaBebidas" :search="pesquisaBebidas" hide-default-footer :items-per-page="tabelaBebidas.length"></v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card id="cardSucosMixAcai" color="white" light :min-height="this.AlturaCardBebidas">
          <v-card-title class="title font-weight-bold warning--text">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                Sucos mix açaí
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="pesquisaSucosMixAcai" append-icon="mdi-magnify" label="Pesquisar" style="padding: 0px" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-text class="caption font-weight-medium warning--text pt-1" style="padding: 0px">
              400 ml
            </v-card-text>
          </v-card-title>
          <v-data-table :headers="cabecalhoSucosMixAcai" :items="tabelaSucosMixAcai" :search="pesquisaSucosMixAcai" hide-default-footer :items-per-page="tabelaSucosMixAcai.length"></v-data-table>
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
      AlturaCardHotBread: 0,
      AlturaCardSopasFit: 0,
      AlturaCardTapiocas: 0,
      AlturaCardSucosNaturais: 0,
      AlturaCardSucosPolpa: 0,
      AlturaCardSucosMixAcai: 0,
      AlturaCardSanduichesNaturais: 0,
      AlturaCardBebidas: 0,
      pesquisaHotBread: "",
      cabecalhoHotBread: [
        { text: "Item", align: "left", sortable: true, value: "nome" },
        {
          text: "Descrição",
          align: "left",
          sortable: true,
          value: "descricao"
        },
        { text: "750 g", align: "right", sortable: true, value: "preco" }
      ],
      tabelaHotBread: [
        {
          nome: "Dinamarquês",
          descricao:
            "Pão especial, queijo prato, lombo, maionese ou requeijão e orégano",
          preco: "R$15,80"
        },
        {
          nome: "Itália",
          descricao:
            "Pão especial, queijo especial, presunto, maionese ou requeijão e orégano",
          preco: "R$16,40"
        },
        {
          nome: "Milão",
          descricao:
            "Pão especial, queijo gorgonzola, peito de peru, maionese ou requeijão e orégano",
          preco: "R$17,20"
        },
        {
          nome: "3 queijos",
          descricao:
            "Pão especial, queijo gorgonzola, mussarela, provolone, requeijão e orégano",
          preco: "R$19,10"
        }
      ],
      pesquisaSopasFit: "",
      cabecalhoSopasFit: [
        {
          text: "Sopa",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaSopasFit: [
        {
          nome: "Sopa de abóbora com patinho moído",
          valor: "R$9,00"
        },
        {
          nome: "Sopa de cebola com frango desfiado",
          valor: "R$9,00"
        },
        {
          nome: "Sopa de legumes com frango desfiado",
          valor: "R$9,00"
        }
      ],
      pesquisaTapiocas: "",
      cabecalhoTapiocas: [
        {
          text: "Tapioca",
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
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaTapiocas: [
        {
          nome: "Tradicional",
          descricao: "Côco ralado",
          valor: "R$5,00"
        },
        {
          nome: "Frango",
          descricao: "Côco ralado, frango com queijo, ou requeijão",
          valor: "R$15,00"
        },
        {
          nome: "Carne do sol",
          descricao: "Côco ralado, carne do sol com queijo, ou requeijão",
          valor: "R$16,00"
        },
        {
          nome: "Marguerita",
          descricao: "Côco ralado, queijo e tomate",
          valor: "R$14,00"
        },
        {
          nome: "Nutella",
          descricao: "Nutella e morango",
          valor: "R$17,50"
        },
        {
          nome: "Doce de leite",
          descricao: "Côco ralado, queijo e doce de leite",
          valor: "R$12,00"
        },
        {
          nome: "Cartola",
          descricao: "Côco ralado, queijo, banana, canela e açúcar",
          valor: "R$13,50"
        },
        {
          nome: "Nutella plus",
          descricao:
            "Nutella, banana ou morango, 2 bolas de sorvete de creme e cobertura",
          valor: "R$19,50"
        }
      ],
      pesquisaSucosNaturais: "",
      cabecalhoSucosNaturais: [
        {
          text: "Sabor",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaSucosNaturais: [
        {
          nome: "Abacaxi",
          valor: "R$5,00"
        },
        {
          nome: "Laranja",
          valor: "R$5,00"
        },
        {
          nome: "Limão",
          valor: "R$5,00"
        },
        {
          nome: "Morango",
          valor: "R$7,00"
        },
        {
          nome: "Faça seu suco",
          valor: "R$8,00"
        }
      ],
      pesquisaSucosMixAcai: "",
      cabecalhoSucosMixAcai: [
        {
          text: "Item",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaSucosMixAcai: [
        {
          nome: "Leite",
          valor: "R$8,50"
        },
        {
          nome: "Banana",
          valor: "R$8,50"
        },
        {
          nome: "Limão",
          valor: "R$8,50"
        },
        {
          nome: "Laranja",
          valor: "R$8,50"
        },
      ],
      pesquisaSucosPolpa: "",
      cabecalhoSucosPolpa: [
        {
          text: "Sabor",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaSucosPolpa: [
        {
          nome: "Acerola",
          valor: "R$4,50"
        },
        {
          nome: "Cajá",
          valor: "R$4,50"
        },
        {
          nome: "Uva",
          valor: "R$4,50"
        },
        {
          nome: "Goiaba",
          valor: "R$4,50"
        },
        {
          nome: "Graviola",
          valor: "R$4,50"
        },
        {
          nome: "Manga",
          valor: "R$4,50"
        },
        {
          nome: "Maracujá",
          valor: "R$5,50"
        },
        {
          nome: "Morango",
          valor: "R$5,50"
        }
      ],
      pesquisaBebidas: "",
      cabecalhoBebidas: [
        {
          text: "Item",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaBebidas: [
        {
          nome: "Água sem gás",
          valor: "R$3,00"
        },
        {
          nome: "Água com gás",
          valor: "R$3,50"
        },
        {
          nome: "Água de côco",
          valor: "R$4,00"
        },
        {
          nome: "Chá ice tea leão",
          valor: "R$4,00"
        },
        {
          nome: "Aquarius fresh",
          valor: "R$5,00"
        },
        {
          nome: "Refrigerante lata",
          valor: "R$5,00"
        },
        {
          nome: "Cerveja budweiser",
          valor: "R$7,00"
        },
        {
          nome: "Cerveja eisenbahn",
          valor: "R$7,00"
        },
        {
          nome: "Cerveja heineken",
          valor: "R$8,00"
        }
      ],
      pesquisaSanduichesNaturais: "",
      cabecalhoSanduichesNaturais: [
        {
          text: "Sabor",
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
        { text: "Valor", align: "right", sortable: true, value: "valor" }
      ],
      tabelaSanduichesNaturais: [
        {
          nome: "Milho",
          descricao: "Frango cremoso, milho, cenoura e ricota no pão integral",
          valor: "R$11,00"
        },
        {
          nome: "Azeitona",
          descricao: "Frango cremoso, azeitona verde e ricota no pão integral",
          valor: "R$11,50"
        },
        {
          nome: "Tomate seco",
          descricao: "Frango cremoso, tomate seco e ricota no pão integral",
          valor: "R$12,00"
        },
        {
          nome: "Atum Cremoso",
          descricao:
            "Atum, milho, cenoura, requeijão e maionese no pão integral",
          valor: "R$13,00"
        },
        {
          nome: "Peito de peru",
          descricao:
            "Pasta de peito de peru, azeitona preta e ricota no pão integral",
          valor: "R$12,25"
        },
        {
          nome: "À moda desfrut",
          descricao:
            "Frango, cenoura, milho, ervilha e molho rosê no pão integral",
          valor: "R$11,25"
        }
      ]
    };
  },
  methods: {
    fixAlturaCardHotBread: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardHotBread === 0 &&
          document.getElementById("cardHotBread").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardHotBread = 0;
          } else {
            this.AlturaCardHotBread = document.getElementById(
              "cardHotBread"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardSucosNaturais: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardSucosNaturais === 0 &&
          document.getElementById("cardSucosNaturais").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardSucosNaturais = 0;
          } else {
            this.AlturaCardSucosNaturais = document.getElementById(
              "cardSucosNaturais"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardSucosMixAcai: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardSucosMixAcai === 0 &&
          document.getElementById("cardSucosMixAcai").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardSucosMixAcai = 0;
          } else {
            this.AlturaCardSucosMixAcai = document.getElementById(
              "cardSucosMixAcai"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardSucosPolpa: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardSucosPolpa === 0 &&
          document.getElementById("cardSucosPolpa").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardSucosPolpa = 0;
          } else {
            this.AlturaCardSucosPolpa = document.getElementById(
              "cardSucosPolpa"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardBebidas: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardBebidas === 0 &&
          document.getElementById("cardBebidas").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardBebidas = 0;
          } else {
            this.AlturaCardBebidas = document.getElementById(
              "cardBebidas"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardSanduichesNaturais: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardSanduichesNaturais === 0 &&
          document.getElementById("cardSanduichesNaturais").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardSanduichesNaturais = 0;
          } else {
            this.AlturaCardSanduichesNaturais = document.getElementById(
              "cardSanduichesNaturais"
            ).offsetHeight;
          }
        }
      });
    },
    fixAlturaCardTapiocas: function() {
      this.$nextTick(function() {
        if (
          this.AlturaCardTapiocas === 0 &&
          document.getElementById("cardTapiocas").offsetHeight > 0
        ) {
          if (this.isMobile()) {
            this.AlturaCardTapiocas = 0;
          } else {
            this.AlturaCardTapiocas = document.getElementById(
              "cardTapiocas"
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
    this.fixAlturaCardHotBread();
    this.fixAlturaCardSucosNaturais();
    this.fixAlturaCardSucosPolpa();
    this.fixAlturaCardSucosMixAcai();
    this.fixAlturaCardTapiocas();
    this.fixAlturaCardSanduichesNaturais();
    this.fixAlturaCardBebidas();
  }
};
</script>
