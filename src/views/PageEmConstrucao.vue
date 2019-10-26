<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card color="white" light>
          <v-card-title class="title font-weight-bold warning--text">
            <div>Esta página ainda está em construção...</div>
            <div class="pl-2">
              <v-progress-circular indeterminate color="warning"></v-progress-circular>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PageEmConstrucao",
  data() {
    return {};
  },
  methods: {}
};
</script>
