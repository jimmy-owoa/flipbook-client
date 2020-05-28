<template>
  <div>
   <show :fb="this.selectedFlippingBook" v-if="this.selectedFlippingBook"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Show from "~/components/flippingBooks/Show"
export default {
  components:{
    Show
  },
  methods: {
    ...mapActions("flippingBooks", ["fetchFlippingBook"])
  },
  computed:{
    ...mapState("flippingBooks", ["selectedFlippingBook"])
  },
  mounted(){
    this.fetchFlippingBook(this.$route.params.id)
  }
};
</script>