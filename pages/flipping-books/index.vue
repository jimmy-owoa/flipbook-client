<template>
  <div>
   <list :flippingBooks="this.flippingBooks"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import List from "~/components/flippingBooks/List"
export default {
  components:{
    List
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