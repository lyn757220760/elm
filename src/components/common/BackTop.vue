<template>
  <transition name="slide">
    <div class="back-top" @click="backTop" v-show="showBackTop">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-top.7a234e5"></use>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showBackTop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-active {
    opacity: 0;
  }
  .back-top {
    position: fixed;
    width: 1.133333rem;
    height: 1.133333rem;
    border: .013333rem solid #999;
    border-radius: 50%;
    background: #fff;
    right: .4rem;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: .533333rem;
      height: .533333rem;
      fill: #999;
    }
  }
</style>
