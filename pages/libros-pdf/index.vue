<template>
  <div>
   <list-files :flippingBooks="this.flippingBooks"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ListFiles from "~/components/flippingBooks/ListFiles"
export default {
  components:{
    ListFiles
  },
  methods: {
    ...mapActions("flippingBooks", ["fetchFlippingBooks"])
  },
  computed:{
    ...mapState("flippingBooks", ["flippingBooks"])
  },
  mounted(){
    this.fetchFlippingBooks()
  }
};
</script>