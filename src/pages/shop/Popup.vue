<template>
  <transition name='fade'>
    <section class="popup" v-show="show">
      <div class="content">
        <h2>{{name}}</h2>
        <h3><span>优惠信息</span></h3>
        <ul v-if="activities.length == 0">
          <li>
            <strong style="background-color: rgb(240, 115, 115)">减</strong>
            <span>满30减5，满60减8（APP专享）</span>
          </li>
        </ul>
        <ul v-else>
          <li v-for="(item, index) in activities" :key="index">
            <strong :style="{backgroundColor: '#'+item.icon_color}">{{item.icon_name}}</strong>
            <span>{{item.description}}</span>
          </li>
        </ul>
        <h3><span>商家公告</span></h3>
        <p>{{promotion}}</p>
      </div>
      <div class="close" @click="show = false">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-x"></use>
        </svg>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: false // 控制弹出层的显示和隐藏
    }
  },
  methods: {
    // 打开弹出层
    open () {
      this.show = true
    }
  },
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    rating: {
      type: Number,
      required: true,
      default: 5
    },
    activities: {
      type: Array,
      required: true
    },
    promotion: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .fade-enter-active,.fade-leave-active {
    transition: all 0.5s
  }
  .fade-enter,.fade-leave-active {
    opacity: 0;
  }
  .popup {
    z-index: 101;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #262626;
    color: #fff;
    padding-top: 1.173333rem;
    .content {
      padding: 1.066667rem .8rem 2.4rem;
      h2 {
        font-size: 1.5em;
        text-align: center;
        font-weight: 400;
      }
      h3 {
        margin: .8rem 0 .533333rem;
        text-align: center;
        span {
          font-size: .32rem;
          padding: .133333rem .266667rem;
          border-radius: .666667rem;
          border: 1px solid #555;
          background-color: #262626;
        }
      }
      ul {
        li {
          margin-top: .186667rem;
          font-size: .293333rem;
          strong {
            margin-right: .16rem;
            width: .373333rem;
            height: .373333rem;
            text-align: center;
            line-height: .373333rem;
            border-radius: .053333rem;
            display: inline-block;
          }
        }
      }
    }
    .close {
      position: absolute;
      left: 0;
      right: 0;
      bottom: .666667rem;
      width: 1.2rem;
      height: 1.2rem;
      margin: auto;
      border: 1px solid #888;
      border-radius: 50%;
      svg {
        fill: #fff;
        width: 100%;
        height: 100%;
        transform: scale(.3);
      }
    }
  }
</style>
