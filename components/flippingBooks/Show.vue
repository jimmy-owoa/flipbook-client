<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-flex headline>{{fb.name}}</v-flex>
      </v-col>
      <v-layout fill-height >
        <v-flex style="background-color: grey;" >
          <flipbook class="flipbook" :pages="fb.images" v-slot="flipbook">
            <div class="action-bar">
              <v-icon :disabled="!flipbook.canFlipLeft" @click="flipbook.flipLeft">mdi-arrow-left</v-icon>
              <v-icon :disabled="!flipbook.canZoomIn" @click="flipbook.zoomIn">mdi-plus</v-icon>
              <span class="page-num">Página {{ flipbook.page }} de {{ flipbook.numPages }}</span>
              <v-icon :disabled="!flipbook.canZoomOut" @click="flipbook.zoomOut">mdi-minus</v-icon>
              <v-icon
                :disabled="!flipbook.canFlipRight"
                @click="flipbook.flipRight"
              >mdi-arrow-right</v-icon>
            </div>
          </flipbook>
          <v-btn nuxt to="/flipping-books">Volver</v-btn>
        </v-flex>
      </v-layout>
    </v-row>

  </div>
</template>

<script>
export default {
  props: {
    fb: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.flipbook {
  height: 94vh;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>