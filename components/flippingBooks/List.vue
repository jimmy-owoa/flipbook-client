<template>
  <div>
    <v-flex display-1 text-md-center pb-4>Listado de Flipping Books</v-flex>
    <v-btn color="green" dark fab small nuxt to="/flipping-books/new">
      <v-icon color="white">mdi-plus</v-icon>
    </v-btn>

    <v-row>
      <div v-for="fb in flippingBooks" :key="fb.id">
        <v-col cols="12" sm3>
          <v-card class="mx-auto" max-width="200" height="290">
            <v-img class="white--text align-end" height="200px" :src="fb.image">
              <v-card-title style="background: rgba(0,0,0,0.5);">{{fb.name}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">Páginas: {{fb.pages}}</v-card-subtitle>

            <v-card-actions>
              <v-btn color="green" text block nuxt :to="`/flipping-books/${fb.id}`">Ver</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    flippingBooks: {
      type: Array,
      required: true
    }
  }
};
</script>