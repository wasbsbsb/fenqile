<template>
  <div>
    <div id="header">
      <div class="n1">
        <input type="text" placeholder="天王会员日全场免息 每满300减30">
      </div>
      <div class="n2">
        <img src="https://cres1.fenqile.cn/fenqile_m/img/global/cart_normal_new--7fcaaa8909.png" alt="" srcset="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
#header {
  height: 45px;
  padding: 0 12px 0 12px;
  display: flex;

  .n1 {
    width: 90%;
    height: 100%;
    box-sizing: border-box;
    padding: 8px 0;
    input {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.05);
      font-size: 13px;
      border: none;
      color: #b9bdc6;
    }
  }
  .n2 {
    flex: 1;
    img{
      width: 33px;
      height: 33px;
      margin: 5px;
    }
  }
}
</style>
