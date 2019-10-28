<template>
  <v-app>
    <v-app-bar app clipped-left class="secondary" dense>
      <v-app-bar-nav-icon dark @click.stop="menu = !menu"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Desfrut</span>
        <span class="title font-weight-light ml-2">Açaiteria & Hot Bread</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app fixed v-model="menu" dark color="#960c51" temporary>
      <v-list-item>
        <span class="font-weight-light">Desfrut</span>
        <span class="font-weight-light pl-1">Açaiteria</span>
        <div class="flex-grow-1"></div>
        <span>Menu</span>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense rounded>
        <v-list-item-group v-for="rota in rotas" :key="rota.titulo" link>
          <v-list-item :to="rota.link">
            <v-list-item-content>
              <v-list-item-title>{{ rota.titulo }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content class="primary">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: false,
      rotas: [
        {
          titulo: "Página 01",
          link: "/pagina01"
        },
        {
          titulo: "Página 02",
          link: "/pagina02"
        },
        {
          titulo: "Página 03",
          link: "/pagina03"
        },
      ],
    };
  },
};
</script>
