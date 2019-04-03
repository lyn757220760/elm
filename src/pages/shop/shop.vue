<template>
  <div class="shop">
    <!-- 头部组件 -->
    <elm-top :seller="seller"></elm-top>
    <!-- 切换导航 -->
    <nav>
      <ul>
        <li @click="current = 'elm-goods'" :class="{active:current=='elm-goods'}"><span>商品</span></li>
        <li @click="current = 'elm-ratings'" :class="{active:current=='elm-ratings'}"><span>评价</span></li>
        <li @click="current = 'elm-seller'" :class="{active:current=='elm-seller'}"><span>店铺</span></li>
      </ul>
    </nav>
    <!-- 动态组件 -->
    <component :is='current' :goods="goods" :seller="seller"></component>
  </div>
</template>

<script>
import Top from './Top'
import Goods from './Goods'
import Ratings from './Ratings'
import Seller from './Seller'
import { getGoods, getRatings, getRestaurant } from '@/api/shop'

export default {
  data () {
    return {
      current: 'elm-goods',
      goods: [], // 商品数据
      ratings: [], // 评价数据
      seller: {
        piecewise_agent_fee: {},
        activities: []
      } // 商家信息
    }
  },
  beforeMount () {
    // console.log(this.$route.query.id)
    let id = this.$route.query.id
    // 调用api获取数据
    getGoods(id).then((res) => {
      this.goods = res.data
      console.log('食品shop', this.goods)
    }).catch((err) => {
      console.log(err)
    })

    // 调用api获取评价数据
    getRatings(id).then((res) => {
      this.ratings = res.data
      console.log('评价shop', this.ratings)
    }).catch((err) => {
      console.log(err)
    })

    // 调用api获取商家信息
    getRestaurant(id).then((res) => {
      this.seller = res.data
      console.log('商家', this.seller.float_delivery_fee)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 注册子组件
  components: {
    'elm-top': Top,
    'elm-goods': Goods,
    'elm-ratings': Ratings,
    'elm-seller': Seller
  }
}
</script>

<style lang="less" scoped>
  .shop {
    position: relative;
    nav {
      line-height: 1.066667rem;
      height: 1.066667rem;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      ul {
        display: flex;
        justify-content: space-around;
        font-size: .373333rem;
        color: #666;
        li.active {
          span {
            color: #3190e8;
            font-weight: 700;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              bottom: -.266667rem;
              left: 0;
              right: 0;
              height: .08rem;
              background-color: #2395ff;
            }
          }
        }
      }
    }
  }
</style>
