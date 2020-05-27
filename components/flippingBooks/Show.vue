<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-flex headline>{{fb.name}}</v-flex>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn :href="fb.file">Ver pdf</v-btn>
      </v-col>
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
}
</script>