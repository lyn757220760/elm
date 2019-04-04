<template>
  <section>
    <elm-navbar :goBack="true" title="订单"></elm-navbar>
    <ul>
      <li>
        <img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
        <section class="right">
          <p><strong>效果演示 ></strong><em>支付超时</em></p>
          <p><time>2019-03-04 11:28</time></p>
          <p><em>我问问</em><span>￥15</span></p>
          <p><span>再来一单</span></p>
        </section>
      </li>
    </ul>
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
  li {
    background-color: #fff;
    display: flex;
    margin-bottom: .4rem;
    padding: .4rem;
    img {
      width: 1rem;
      height: 1rem;
      margin-right: .3rem;
    }
    .right {
      flex: 5;
      p {
        strong {
          font-size: .5rem;
          color: #333;
          line-height: .7rem;
        }
        time {
          font-size: .3rem;
          color: #999;
          line-height: .5rem;
        }

      }
      p:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        em {
          font-size: .4rem;
          color: #333;
          line-height: .7rem;
        }
      }
      p:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        em {
          font-size: .4rem;
          color: #333;
          line-height: .9rem;
        }
        span {
          font-size: .4rem;
          color: #f60;
          font-weight: bold;
          line-height: .7rem;
        }
      }
      P:nth-of-type(4) {
        text-align: right;
        line-height: .9rem;
        span {
          font-size: .4rem;
          color: #3190e8;
          border: .02rem solid #3190e8;
          padding: .09rem .16rem;
          border-radius: .1rem;
        }
      }
    }
  }
</style>
