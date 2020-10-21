<template>
  <div class="home">
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn rounded dark @click="dialog = true">
          <span>Criar uma conta</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
