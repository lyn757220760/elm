<template>
  <div>
    <section class="goods">
      <!-- 左侧的导航 -->
      <nav>
        <ul>
          <li v-for="(item, index) in goods" :key="index" @click="selectCategory(index)" :class="{active: index==current}">
            <span v-if="item.icon_url"><img :src="item.icon_url | iconUrl" alt=""></span>
            {{item.name}}
          </li>
        </ul>
      </nav>
      <!-- 右边的主体内容 -->
      <div class="main">
        <div>
          <dl v-for="(item, index) in goods" :key="index" ref="dls">
            <dt><h3>{{item.name}}</h3><small>{{item.description}}</small></dt>
            <dd v-for="(food, index2) in item.foods" :key="index2">
              <img :src="food.image_path | imgUrl" alt="">
              <div class="food">
                <h4>{{food.name}}</h4>
                <p class="desc">{{food.description}}</p>
                <p class="sale">月售{{food.month_sales}} 好评率是{{food.satisfy_rate}}%</p>
                <p>
                  <strong><span>￥15</span></strong>
                  <del>￥28</del>
                </p>
                <div class="buy">
                  <elm-buy :food="food"></elm-buy>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <!-- 购物车组件 -->
    <elm-cart :goods="goods" :fee="seller.float_delivery_fee" :minimun="seller.float_minimum_order_amount"></elm-cart>
  </div>

</template>

<script>
import IScroll from '../../../static/iscroll-probe'
import Buy from '@/components/buy/Buy'
import Cart from './Cart'
export default {
  data () {
    return {
      current: 0 // 当前所在分类，默认是第一个分类
    }
  },
  methods: {
    selectCategory (index) {
      this.current = index // 修改当前分类
      this.goodsScroll.scrollToElement(this.$refs.dls[this.current])
      console.log(this.goodsScroll.scrollToElement)
    }
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    seller: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.goodsScroll = new IScroll('.main', {probeType: 2})
      // 注册scroll事件
      this.goodsScroll.on('scroll', function () {
        console.log(this.y)
      })
    })
  },
  updated () {
    // this.goodsScroll.refresh()
  },
  filters: {
    // 处理icon图片
    iconUrl (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      return `https://fuss10.elemecdn.com/${name}.jpeg`
    },
    // 处理食品图片
    imgUrl (str) {
      return `//elm.cangdu.org/img/${str}`
    }
  },
  components: {
    'elm-buy': Buy,
    'elm-cart': Cart
  }
}
</script>

<style lang="less" scoped>
  .goods {
    position: fixed;
    left: 0;
    right: 0;
    top:4.812667rem;
    bottom: 1.28rem;
    display: flex;
    nav {
      overflow: auto;
      width: 2.266667rem;
      min-width: 2.266667rem;
      ul {
        li {
          background-color: #f8f8f8;;
          font-weight: bolder;
          padding: .466667rem .2rem;
          border-bottom: 1px solid #ededed;
          font-size: .346667rem;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &.active {
            background: #fff;
          }
        }
      }
    }
    .main {
      flex-grow: 1;
      overflow: auto;
      dt {
        position: relative;
        padding: .2rem .8rem .2rem .266667rem;
        background-color: #f1f1f1;
        h3 {
          font-size: .373333rem;
          font-weight: 700;
          color: #666;
          small {
            maring-left: .133333rem;
            color: #999;
            font-size: .266667rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      dd {
        position: relative;
        display: flex;
        min-height: 3.066667rem;
        box-shadow: 0.4rem 1px 0 0 #ddd;
        padding: .4rem .266667rem;
        background: #fff;
        img {
          height: 140px;
          width: 140px;
          margin-right: .266667rem;
        }
        .food{
          flex-grow: 1;
          position: relative;
          h4 {
            width: 5.066667rem;
            font-size: .4rem;
            font-weight: 700;
            line-height: 1.1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p {
            margin:.173333rem 0;
            color: #666;
            font-size: .293333rem;
          }
          .buy {
            width: 120px;
            height: 40px;
            position: absolute;
            right: 0;
            bottom: 10px;
          }
        }
      }
    }
  }
</style>
