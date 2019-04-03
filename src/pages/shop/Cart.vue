<template>
  <div>
    <section class="cart">
      <div class="cart-left" @click="toggleList">
        <div class="cart-outer" :class="{active: count}">
          <svg v-if="count == 0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58">
                  <defs>
                    <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
                      <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
                      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
                      <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                      <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <path id="b" d="M7.614 4.051c-1.066.086-1.452-.398-1.752-1.584C5.562 1.28.33 5.88.33 5.88l3.71 19.476c0 .148-1.56 7.515-1.56 7.515-.489 2.19.292 4.27 3.56 4.32 0 0 36.917.017 36.92.047 1.979-.012 2.981-.995 3.013-3.039.03-2.043-1.045-2.978-2.987-2.993L8.83 31.192s.86-3.865 1.077-3.865c0 0-5.788.122 32.065-1.956.606-.033 2.018-.764 2.298-1.848 1.113-4.317 4.008-13.26 4.458-15.64.932-4.925 2.061-8.558-4.28-7.405 0 0-35.768 3.487-36.833 3.573z"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(3 2)">
                  <g transform="translate(5.038 7.808)">
                    <mask id="c" fill="#fff">
                      <use xlink:href="#b"/>
                    </mask>
                    <use fill="#5F5F63" xlink:href="#b"/>
                    <path fill="#EBEEF3" d="M53.962 7.774l-5.701 19.305-40.78 1.574z" mask="url(#c)" opacity=".05"/>
                  </g>
                    <path stroke="#5F5F63" stroke-linecap="round" stroke-width="6" d="M9.374 18.722S7.868 11.283 7.323 8.71C6.778 6.136 5.86 5.33 3.978 4.52 2.096 3.713.367 2.286.367 2.286"/>
                    <circle cx="46" cy="51" r="4" fill="#5F5F63"/>
                    <circle cx="12" cy="51" r="4" fill="#5F5F63"/>
                  </g>
                </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58">
            <defs>
              <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
                <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <path id="b" d="M7.614 4.051c-1.066.086-1.452-.398-1.752-1.584C5.562 1.28.33 5.88.33 5.88l3.71 19.476c0 .148-1.56 7.515-1.56 7.515-.489 2.19.292 4.27 3.56 4.32 0 0 36.917.017 36.92.047 1.979-.012 2.981-.995 3.013-3.039.03-2.043-1.045-2.978-2.987-2.993L8.83 31.192s.86-3.865 1.077-3.865c0 0-5.788.122 32.065-1.956.606-.033 2.018-.764 2.298-1.848 1.113-4.317 4.008-13.26 4.458-15.64.932-4.925 2.061-8.558-4.28-7.405 0 0-35.768 3.487-36.833 3.573z"/>
            </defs>
            <g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(3 2)">
              <g transform="translate(5.038 7.808)">
                <mask id="c" fill="#fff">
                  <use xlink:href="#b"/>
                </mask>
                <use fill="#FFF" xlink:href="#b"/>
                <path fill="#2073C1" d="M53.962 7.774l-5.701 19.305-40.78 1.574z" mask="url(#c)" opacity=".1"/>
              </g>
              <path stroke="#FFF" stroke-linecap="round" stroke-width="6" d="M9.374 18.722S7.868 11.283 7.323 8.71C6.778 6.136 5.86 5.33 3.978 4.52 2.096 3.713.367 2.286.367 2.286"/>
              <circle cx="46" cy="51" r="4" fill="#FFF"/>
              <circle cx="12" cy="51" r="4" fill="#FFF"/>
            </g>
          </svg>
          <div class="badge" v-show="count">{{count}}</div>
        </div>
      </div>
      <div class="cart-md" @click="toggleList">
        <p><strong>￥{{total}}</strong><span>配送费￥{{fee}}</span></p>
      </div>
      <div class="cart-right" :class="{active: total >= minimun}">
        {{payDesc}}
      </div>
    </section>
    <!-- 购物车列表 -->
    <transition name="slide">
      <section class="cart-list" v-show="show">
        <div class="list-hd">
          <h2>购物车</h2>
          <span @click="clear">清空</span>
        </div>
        <ul class="list-bd">
          <li v-for="(item, index) in cartGoods" :key="index">
            <strong>{{item.name}}</strong>
            <span>￥{{item.count * 15}}</span>
            <div class="buy">
              <elm-buy :food="item"></elm-buy>
            </div>
          </li>
        </ul>
      </section>
    </transition>

    <!-- 遮罩层 -->
    <transform class="fade">
      <section class="mask" v-show="show"></section>
    </transform>
  </div>
</template>

<script>
import Buy from '@/components/buy/Buy'
export default {
  data () {
    return {
      show: false, // 是否显示购物车列表
      balls: [ // 定义小球
        {show: false},
        {show: false},
        {show: false},
        {show: false},
        {show: false}
      ]
    }
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    fee: {
      type: Number,
      required: true
    },
    minimun: {
      type: Number,
      required: true
    }
  },
  computed: {
    // 购物车中的商品,需要循环两次
    cartGoods1 () {
      let arr = []
      this.goods.forEach(item => {
        item.foods.forEach(food => {
          arr.push(food)
        })
      })
      return arr
    },
    cartGoods () {
      let arr = []
      this.cartGoods1.forEach((item, index) => {
        if (item.count) {
          arr.push(item)
        }
      })
      return arr
    },
    // 总的数量
    count () {
      let arr = 0
      this.cartGoods.forEach(item => {
        arr += item.count
      })
      return arr
    },
    // 总的价格
    total () {
      return this.count * 15
    },
    // 支付信息
    payDesc () {
      if (this.total === 0) {
        return `￥${this.minimun}起送`
      } else if (this.total < this.minimun) {
        return `还差￥${this.minimun - this.total}起送`
      } else {
        return `去结算`
      }
    }
  },
  methods: {
    clear () {
      this.cartGoods1.forEach(food => {
        food.count = 0
      })
      this.show = false
    },
    // 切换购物车显示和影藏
    toggleList () {
      // 购物车不为空，才修改
      if (this.cartGoods1.length) {
        this.show = !this.show
      }
    }
  },
  components: {
    'elm-buy': Buy
  }
}
</script>

<style lang="less" scoped>
  .slide-enter-active, .slide-leave-active {transition: all 0.5s ease}
  .slide-enter, .slide-leave-active {transform: translateY(100%)}
  .fade-enter-active, .fade-leave-active {transition: all 0.5s ease}
  .fade-enter, .fade-leave-active {opacity: 0}
  .cart {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.28rem;
    background: rgba(61, 61, 63, .9);
    display: flex;
    .cart-left {
      width: 2.266667rem;
      position: relative;
      .cart-outer {
        width: 1.333333rem;
        height: 1.333333rem;
        border: .133333rem solid #444;
        border-radius: 100%;
        position: absolute;
        left: .32rem;
        bottom: .2rem;
        background-image: radial-gradient(circle, #363636 .626667rem, #444 0);
        &.active {
          background-color: #3190e8;
          background-image:none;
        }
        svg {
          width: .6rem;
          height: .6rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .badge {
          font-size: .266667rem;
          background: #ff461d;
          color: #fff;
          padding: .053333rem .133333rem;
          border-radius: .32rem;
          line-height: 1;
          position: absolute;
          right: -.12rem;
          top: -.133333rem;
        }
      }
    }
    .cart-md {
      line-height: 1.28rem;
      flex-grow: 1;
      color: #fff;
      strong {
        font-size: .48rem;
        font-weight: 700;
        margin-right: .133333rem;
      }
    }
    .cart-right {
      width: 2.8rem;
      line-height: 1.28rem;
      color: #fff;
      font-size: .4rem;
      text-align: center;
      background-color: #535356;
      &.active {
        background-color: #4cd964;
        color: #fff;
      }
    }
  }
  .cart-list {
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 1.28rem;
    background: #fff;
    .list-hd {
      position: relative;
      padding: .3rem .333333rem;
      border-bottom: 1px solid #ddd;
      background-color: #eceff1;
      color: #666;
      h2 {
        padding: .1rem .133333rem;
        border-left: .093333rem solid #3190e8;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: .333333rem;
        font-size: .346667rem;
      }
    }
    .list-bd {
      max-height: 5.67rem;
      overflow: auto;
      li {
        position: relative;
        height: 1.466667rem;
        line-height: 1.466667rem;
        margin-left: .333333rem;
        font-size: .426667rem;
        .buy {
          width: 120px;
          height: 40px;
          line-height: 40px;
          position: absolute;
          right: .1333333rem;
          top: 50%;
          transform: translateY(-50%);
        }
        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
        span {
          position: absolute;
          right: 2.1rem;
          color: #f60;
        }
      }
    }
  }
  .mask {
    z-index: 80;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: .4;
  }
</style>
