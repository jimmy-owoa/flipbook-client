<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field v-model="name" label="Nombre del libro" outlined shaped></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-file-input label="Archivo pdf" v-model="file" accept="application/pdf"></v-file-input>
          </v-col>
          <v-col cols="12" sm="4">
            <v-file-input multiple label="Imágenes" v-model="images" accept="image/jpeg,image/png"></v-file-input>
          </v-col>
          <v-col cols="12" sm="12">
            <v-textarea counter label="Descripción del libro" :rules="rules" :value="value"></v-textarea>
          </v-col>
          <v-col cols="12" sm="12">
            <v-btn color="primary" @click.stop="onUpload" :loading="loading">Crear</v-btn>
            <v-btn color="red" dark to="/flipping-books">Cancelar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      images: [],
      loading: false,
      rules: [v => v.length <= 25 || "Max 25 characters"],
      value: "",
      name: ""
    };
  },
  methods: {
    async onUpload() {
      this.loading = false;
      if (!this.file){
        alert("Debe adjuntar un archivo PDF");
        return
      }
      const formData = new FormData();
      formData.append("flipping_book[name]", this.name);
      formData.append("flipping_book[description]", this.value);
      formData.append("flipping_book[file]", this.file);
      for (var i = 0; i < this.images.length; i++) {
        let image = this.images[i];
        console.log(image);
        formData.append("flipping_book[images][" + i + "]", image);
      }
      try {
        this.loading = true;
        const res = await this.$axios.post("flipping_books", formData);
        this.loading = false;
        this.$router.push("/flipping-books");
        alert("Flipping book creado exitosamente")
      } catch (error) {
        console.log(error);
        return { error: error };
      }
    }
  }
};
</script>