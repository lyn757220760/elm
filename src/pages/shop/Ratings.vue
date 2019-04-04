<template>
  <section class="ratings">
    <header class="header">
      <div class="left">
        <p>{{seller.rating}}</p>
        <p>综合评价</p>
        <p>高于周边商家76.9%</p>
      </div>
      <div class="right">
        <p><span>服务态度：</span><em>4.7</em></p>
        <p><span>菜品评价：</span><em>4.8</em></p>
        <p><span>配送评价：</span><em>4.9</em></p>
      </div>
    </header>
    <ul class="tag">
      <li>全部 473</li>
      <li>满意 453</li>
      <li>差评 5</li>
      <li>味道好 47</li>
      <li>有图 2</li>
      <li>送货快 32</li>
      <li>分量足 18</li>
      <li>包装精美 15</li>
      <li>干净卫生 15</li>
      <li>食材新鲜 15</li>
      <li>服务不错 11</li>
    </ul>
    <ul class="rating">
      <li>
        <img src="https://i.loli.net/2019/04/04/5ca5543268086.jpg" alt="" class="user">
        <section class="detail">
          <header>
            <div>
              <p>4*******b</p>
              <p>4.7</p>
              <p>按时送达</p>
            </div>
            <time>2017-02-10</time>
          </header>
          <ul>
            <li>
              <img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg" alt="">
            </li>
            <li>
              <img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg" alt="">
            </li>
          <p><span>超级至尊比萨</span><span>韩式浓情风味鸡</span></p>
        </ul>
        </section>
      </li>
      <li>
        <img src="https://i.loli.net/2019/04/04/5ca5537355ba9.jpg" alt="" class="user">
        <section class="detail">
          <header>
            <div>
              <p>4*******b</p>
              <p>4.7</p>
              <p>按时送达</p>
            </div>
            <time>2017-02-10</time>
          </header>
          <ul>
            <li>
              <img src="https://i.loli.net/2019/04/04/5ca5544210970.jpg" alt="">
            </li>
            <li>
              <img src="https://i.loli.net/2019/04/04/5ca5544232ad9.jpg" alt="">
            </li>
          <p><span>超级至尊比萨</span><span>韩式浓情风味鸡</span></p>
        </ul>
        </section>
      </li>
      <li>
        <img src="https://i.loli.net/2019/04/04/5ca5544230d34.jpg" alt="" class="user">
        <section class="detail">
          <header>
            <div>
              <p>4*******b</p>
              <p>4.7</p>
              <p>按时送达</p>
            </div>
            <time>2017-02-10</time>
          </header>
          <ul>
            <li>
              <img src="https://i.loli.net/2019/04/04/5ca554423d1c1.jpg" alt="">
            </li>
            <li>
              <img src="https://i.loli.net/2019/04/04/5ca5544234b76.jpg" alt="">
            </li>
          <p><span>超级至尊比萨</span><span>韩式浓情风味鸡</span></p>
        </ul>
        </section>
      </li>
    </ul>
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
  .ratings {
    position: absolute;
    top: 4.809667rem;
    z-index: -1;
    .header {
      display: flex;
      background-color: #fff;
      padding: .6rem .375rem;
      margin-bottom: .0375rem;
      .left {
        flex: 4;
        text-align: center;
        p:nth-of-type(1) {
          font-size: 0.8rem;
          color: #f60;
          margin-bottom: .1rem;
        }
        p:nth-of-type(2) {
          font-size: .4875rem;
          color: #666;
          margin-bottom: .1rem;
        }
        p:nth-of-type(3) {
          font-size: .3rem;
          color: #999;
        }
      }
      .right {
        flex: 4;
        p {
          font-size: .35rem;
          line-height: 0.6rem;
          span {
            margin-right: 0.6rem;
          }
          em {
            color: #f60;
            font-size: .4rem;
          }
        }
      }
    }
    .tag {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      padding: .25rem;
      li {
        font-size: 0.3rem;
        color: #6d7885;
        padding: .25rem;
        background-color: #ebf5ff;
        border-radius: 0.1rem;
        border: 1px;
        margin: 0 .3rem .2rem 0;
      }
      li:nth-of-type(1) {
        background-color: #3190e8;
        color: #fff;
      }
      li:nth-of-type(3) {
        background-color: #f5f5f5;
        color: #aaa;
      }
    }
    .rating {
      background-color: #fff;
      padding: 0 0.3rem;
      li {
        display: flex;
        padding: .4rem 0;
        border-top: 1px solid #f1f1f1;
        .user {
          width: 1rem;
          height: 1rem;
          border: 0.02rem;
          border-radius: 50%;
          margin-right: .6rem;
        }
        .detail {
          flex: 1;
          header {
            display: flex;
            flex: 1;
            justify-content: space-between;;
            margin-bottom: .2rem;
            div {
              color: #666;
              font-size: 0.4rem;
              p {
                margin-bottom: .15rem;
              }
            }
            time {
              font-size: .3rem;
              color: #999;
            }
          }
          ul {
            display: flex;
            margin-bottom: .3rem;
            flex-wrap: wrap;
            img {
              width: 2rem;
              height: 2rem;
              margin-right: .3rem;
              display: block;
            }
          }
          p {
            span {
              font-size: .4rem;
              color: #999;
              width: 1rem;
              padding: .15ren;
              border: .02rem solid #ebebeb;
              border-radius: .1rem;
              margin-right: .2rem;
              margin-bottom: 3rem;
            }
          }
        }
      }
    }
  }
</style>
