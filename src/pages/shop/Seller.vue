<template>
  <section class="goods">
    <section class="safe">
      <header>
        <p>
          <span>食品监督安全公示</span>
          <a href="#">企业认证详情 ></a>
        </p>
      </header>
      <section class="res">
        <div class="left">
          <svg viewBox="0 0 1024 1024" id="res-bad" width="100%" height="100%">
            <path fill="#D0021B" fill-rule="evenodd" d="M512 0C230.326 0 0 230.326 0 512s230.573 512 512 512 512-230.326 512-512S793.674 0 512 0zM240.694 373.755l158.735-56.285 15.306 46.164L256 419.919l-15.306-46.164zm440.409 384.123c-10.122 0-20.49-10.122-25.674-20.49-10.122-10.122-61.47-25.674-148.366-25.674-86.896 0-138.245 15.306-148.366 25.674 0 10.122-10.122 20.49-25.674 20.49s-25.674-10.122-25.674-25.674c0-71.591 174.041-71.591 194.53-71.591 20.489 0 194.53 0 194.53 71.591 10.122 10.368 0 25.674-15.306 25.674zM768 419.919l-163.672-61.47 15.306-46.164 158.735 56.285-10.368 51.348-.001.001z">
            </path>
          </svg>
        </div>
        <div class="right">
          <p>监督检查结果：<span>差</span></p>
          <p>检查日期：<em>2019年4月4日</em></p>
        </div>
      </section>
    </section>
    <section class="info">
      <header>商家信息</header>
      <p>{{seller.name}}</p>
      <p>地址：{{seller.address}}</p>
      <p>营业时间：[{{seller.opening_hours[0]}}]</p>
      <p><span>营业执照</span><em>></em></p>
      <p><span>餐饮服务许可证</span><em>></em></p>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .goods {
    position: fixed;
    left: 0;
    right: 0;
    top: 4.809667rem;
    .safe {
      background-color: #fff;
      margin: .3rem 0;
      header {
        p {
          line-height: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 .4rem;
          border-bottom: .02rem solid #f1f1f1;
          span {
            font-size: .5rem;
            color: #333;
          }
          a {
            font-size: .45rem;
            color: #bbb;
            text-decoration: none;
          }
        }
      }
      .res {
        display: flex;
        padding: .4rem;
        .left {
          svg {
            width: 1.5rem;
            height: 1.5rem;
            margin: 0 .4rem;
          }
        }
        .right {
          font-size: .4rem;
          color: #666;
          vertical-align: middle;
          p {
            line-height: .8rem;
            margin-left: .4rem;
            span {
              color: red;
            }
          }
        }
      }
    }
    .info {
      background-color: #fff;
      // margin-bottom: .3rem;
      header {
        line-height: 1.3rem;
        padding:  0 .4rem;
        font-size: .5rem;
        color: #333;
        border-bottom: .02rem solid #f1f1f1;
      }
      p {
        font-size: .4rem;
        color: #666;
        padding:  .4rem .3rem .4rem 0;
        margin-left: .4rem;
        border-bottom: .02rem solid #f5f5f5;
      }
      p:nth-of-type(4) {
        display: flex;
        justify-content: space-between;
      }
      p:nth-of-type(5) {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
