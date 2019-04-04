<template>
  <section>
    <elm-navbar :goBack="true" title="我的"></elm-navbar>
    <section class="profile">
      <div class="number">
        <img src="https://i.loli.net/2019/04/04/5ca5544230d34.jpg" alt="">
        <div class="">
          <p class="name">lyn</p>
          <p>
            <span class="icon">
              <symbol viewBox="0 0 655 1024" id="mobile"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path>
              </symbol>
              <svg fill="#fff">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
              </svg>
            </span>
            <span class="mobile">
              暂无绑定手机号
            </span>
          </p>
        </div>
        <span class="arrow">
          <svg data-v-735ff1be="" fill="#fff" class="arrow-svg">
            <use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
              <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
            </use>
          </svg>
        </span>
      </div>
      <div class="balance">
        <ul>
          <li>
            <strong><b>0.00</b>元</strong>
            <p>我的余额</p>
          </li>
          <li>
            <strong><b>3</b>个</strong>
            <p>我的优惠</p>
          </li>
          <li>
            <strong><b>0</b>分</strong>
            <p>我的积分</p>
          </li>
        </ul>
      </div>
      <section class="serve">
        <a href="#">
          <aside class="">
            <svg fill="#4aa5f0">
              <use xlink:href="#address">
                <svg viewBox="0 0 16 16" id="address" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g>
                </svg>
              </use>
            </svg>
          </aside>
          <div class="">我的地址
            <span>
              <svg>
                <use xlink:href="#arrow-right">
                  <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use>
              </svg>
            </span>
          </div>
        </a>
      </section>
      <section class="serve">
        <a href="#">
          <aside class="">
            <svg fill="#fc7b53">
              <use xlink:href="#point">
                <svg viewBox="0 0 16 16" id="point" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
              </use>
            </svg>
          </aside>
          <div class="">金币商城
            <span>
              <svg>
                <use xlink:href="#arrow-right">
                  <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use>
              </svg>
            </span>
          </div>
        </a>
        <a href="#">
          <aside class="">
            <svg fill="">
              <use xlink:href="#commend">
                <svg viewBox="0 0 40 40" id="commend" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FC7B53" d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"></path></g></svg>
              </use>
            </svg>
          </aside>
          <div class="">分享拿10元现金
            <span>
              <svg>
                <use xlink:href="#arrow-right">
                  <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use>
              </svg>
            </span>
          </div>
        </a>
      </section>
      <section class="serve">
        <a href="#">
          <aside class="">
            <svg fill="#4aa5f0">
              <use xlink:href="#service">
                <svg viewBox="0 0 54 54" id="service" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21"></path><path fill="#4DA6F0" d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path fill="#4DA6F0" d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"></path></g></svg>
              </use>
            </svg>
          </aside>
          <div class="">我的客服
            <span>
              <svg>
                <use xlink:href="#arrow-right">
                  <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use>
              </svg>
            </span>
          </div>
        </a>
        <a href="#">
          <aside class="">
            <svg fill="#3cabff">
              <use xlink:href="#download">
                <svg viewBox="0 0 40 40" id="download" width="100%" height="100%"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></svg>
              </use>
            </svg>
          </aside>
          <div class="">下载饿了么APP
            <span>
              <svg>
                <use xlink:href="#arrow-right">
                  <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use>
              </svg>
            </span>
          </div>
        </a>
        <a href="#">
          <aside class="">
            <svg fill="#3cabff">
              <use xlink:href="#rule">
                <svg viewBox="0 0 17 18" id="rule" width="100%" height="100%"><g fill="#4DA6F0" fill-rule="evenodd"><path d="M10.389 18H2.444a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h12.112a1.5 1.5 0 0 1 1.5 1.5V12h-4.867a.8.8 0 0 0-.8.8V18zM3.978 4a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978zm0 3a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978z"></path><path d="M15.111 13l-3.778 4v-3.6c0-.22.18-.4.4-.4h3.378z"></path></g></svg>
              </use>
            </svg>
          </aside>
          <div class="">规则中心
            <span>
              <svg>
                <use xlink:href="#arrow-right">
                  <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use>
              </svg>
            </span>
          </div>
        </a>
      </section>
    </section>
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
  .number {
    display: flex;
    align-items: center;
    background: #2395ff;
    padding: .42rem .4rem;
    border-top: 2px solid #2395ff;
    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }
    div {
      margin-left: .3rem;
      flex-grow: 1;
      .name {
        font-weight: 700;
        font-size: .57rem;
        color: #fff;
        margin-bottom: .3rem;
      }
      p {
        .icon {
          svg {
            width: .4rem;
            height: .45rem;
            display: inline-block;
            line-height: .55rem;
            vertical-align: middle;
          }
        }
        .mobile {
          display: inline-block;
          font-size: .36rem;
          color: #fff;
          line-height: .45rem;
        }
      }
    }
    .arrow {
      width: .3rem;
      height: .7rem;
      display: inline-block;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .balance {
    width: 100%;
    background-color: #fff;
    ul {
      display: flex;
    }
    li {
      flex: 1;
      text-align: center;
      border-right: 1px solid #f1f1f1;
      p {
        font-size: .4rem;
        color: #666;
        font-weight: 400;
        padding-bottom: .3rem;
      }
      strong {
        display: inline-block;
        font-size: .4rem;
        color: #333;
        padding: .6rem 0 .3rem;
      }
    }
    li:nth-of-type(1) {
      strong {
        b {
          font-size: .8rem;
          color: #f90;
          font-weight: 700;
        }
      }
    }
    li:nth-of-type(2) {
      strong {
        b {
          font-size: .8rem;
          color: #ff5f3e;
          font-weight: 700;
        }
      }
    }
    li:nth-of-type(3) {
      strong {
        b {
          font-size: .8rem;
          color: #6ac20b;
          font-weight: 700;
        }
      }
    }
  }
  .serve {
    margin-top: .266667rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: .426667rem;
    line-height: .426667rem;
    background-color: #fff;
    a {
      color: #333;
      display: flex;
      align-items: center;
      padding-left: .666667rem;
      text-decoration: none;
      aside {
        svg {
          width: .48rem;
          height: .48rem;
          margin-right: .266667rem;
        }
      }
      div {
        display: flex;
        justify-content: space-between;
        padding: .373333rem .2666667rem .373333rem 0;
        width: 100%;
        svg {
          width: .2666667rem;
          height: .2666667rem;
          fill: #bbb;
        }
      }
    }
  }
</style>
