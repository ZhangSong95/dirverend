<template>
    <div class="wrap ">
      <div class="content ">
        <img  class="img" src="../assets/img/evcall.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped lang="less">
  @media screen and (max-width:321px){
    .m-navlist{font-size:15px}
  }

  @media screen and (min-width:321px) and (max-width:400px){
    .m-navlist{font-size:16px}
  }

  @media screen and (min-width:400px){
    .m-navlist{font-size:18px}
  }
  html {
    font-size: 1rem
  };
  .wrap {
    background:rgba(249,244,244,1);
    width: 100vw;
    height: 100vh;
    .content {
      max-width:1280px;
      max-height:800px;
      background:rgba(249,244,244,1);
      margin: 0 auto;
      .img {
        width: 18.375rem;
        height: 2.815rem;
      }
    }
  }
</style>
