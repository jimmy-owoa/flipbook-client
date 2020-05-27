<template>
  <div>
   <show :fb="getFlippingBook"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Show from "~/components/flippingBooks/Show"
export default {
  components:{
    Show
  },
  methods: {
    ...mapActions("flippingBooks", ["fetchFlippingBook"])
  },
  computed:{
    ...mapGetters("flippingBooks", ["getFlippingBook"])
  },
  mounted(){
    this.fetchFlippingBook(this.$route.params.id)
  }
};
</script>