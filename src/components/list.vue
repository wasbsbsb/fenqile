<template>
  <div>
    <div class="big">
      <div class="big_list"></div>
      <div class="lis_big">
        <div class="small_lis" v-for="(o,index) in list" :key="index">
          <img :src="list[index].src" alt srcset>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.list = this.$store.state.list;
  },
  data() {
    return {
      list: null
    };
  }
};
</script>
<style lang="scss" scoped>
.big {
  .small_lis {
    width: 137.98px;
    height: 132.45px;
    float: left;
    img {
      width: 137.98px;
      height: 132.45px;
    }
  }
}
</style>

