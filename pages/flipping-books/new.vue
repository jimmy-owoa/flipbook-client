<template>
  <div>
    <v-file-input label="File input" v-model="file"></v-file-input>
    <v-btn color="primary" @click.stop="onUpload" :loading="loading">Crear</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      url: "",
      loading: false
    };
  },
  methods: {
    async onUpload() {
      this.loading = true;
      const formData = new FormData();
      formData.append("flipping_book[file]", this.file);
      formData.append("flipping_book[name]", "libro xd");
      try{
        const res = await this.$axios.post("flipping_books", formData );
        this.loading = false;
      }catch(error){
        console.log(error)
        this.loading = false;
      }
    }
  }
};
</script>