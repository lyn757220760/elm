<template>
  <section>
    <elm-navbar :goBack="true" title="发现"></elm-navbar>
    <form class="" action="index.html" method="post">
      <input type="search" name="search" value="" placeholder="请输入商家、商品名称" class="search">
      <input type="submit" name="submit" value="提交" class="submit">
    </form>
    <elm-tabbar></elm-tabbar>
  </section>
</template>

<script>
import Tabbar from '@/components/footer/Tabbar'
import Navbar from '@/components/header/Navbar'
export default {
  components: {
    'elm-tabbar': Tabbar,
    'elm-navbar': Navbar
  }
}
</script>

<style lang="less" scoped>
  form {
    background-color: #fff;
    padding: .3rem;
    display: flex;
    .search {
      flex: 4;
      border: .02rem solid #e4e4e4;
      font-size: .4rem;
      color: #333;
      border-radius: .1rem;
      background-color: #f5f5f5;
      font-weight: bold;
      padding: .2rem;
    }
    .submit {
      flex: 1;
      border: .02rem solid #3190e8;
      background-color: #3190e8;
      border-radius: .1rem;
      margin-left: .1rem;
      font-size: .4rem;
      color: #fff;
      font-weight: bold;

    }
  }
</style>
