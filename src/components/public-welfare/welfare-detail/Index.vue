<template>
<section class="wrap">
    <div class="container">
    <header class="header">
      <img src="../../../assets/banner2@2x.png" class="header-image" alt="">
      <div class="walfare-amount">
        <div class="item">
          <p class="amount">10000.00</p>
          <p class="desc">项目筹款/元</p>
        </div>
        <div class="item">
          <p class="amount">8000.00</p>
          <p class="desc">已筹款/元</p>
        </div>
        <div class="item">
          <p class="amount">100</p>
          <p class="desc">捐款人数/次</p>
        </div>
      </div>
    </header>
    <section class="project-detail">
      <div class="first-content">
        <div class="title">
          <span class="icon"></span>
          <span class="text">项目说明</span>
        </div>
        <div class="desc">
          经过与长武县相公中学对接，拟捐赠图示1798种，共计544册，并捐赠书柜6个
        </div>
      </div>
      <div class="other-content">
        <div class="other-title">
          <span class="icon"></span>
          <span class="text">捐赠目的</span>
        </div>
        <div class="desc">
          经过与长武县相公中学对接，拟捐赠图示1798种，共计544册，并捐赠书柜6个
        </div>
      </div>
      <div class="other-content">
        <div class="other-title">
          <span class="icon"></span>
          <span class="text">捐赠目的</span>
        </div>
        <div class="desc">
          经过与长武县相公中学对接，拟捐赠图示1798种，共计544册，并捐赠
        </div>
      </div>
      <div class="look-all">
        <span class="text">查看完整项目说明</span>
        <span class="icon"></span>
      </div>
    </section>
    <section class="comment">
      <div class="title">
        <span class="icon"></span>
        <span class="text">众筹留言 （770条）</span>
      </div>
      <ul class="content">
        <li class="item">
          <div class="photo"></div>
          <div class="midden">
            <div class="name-amount">
              <span class="name">公益甲</span>
              <span class="donate">捐赠<span class="amount">100.00</span>元</span>
            </div>
            <p class="text">这个世界人人都献出一点爱。</p>
            <p class="time">刚刚</p>
          </div>
        </li>
        <li class="item">
          <div class="photo"></div>
          <div class="midden">
            <div class="name-amount">
              <span class="name">公益甲</span>
              <span class="donate">捐赠<span class="amount">100.00</span>元</span>
            </div>
            <p class="text">这个世界人人都献出一点爱。</p>
            <p class="time">刚刚</p>
          </div>
        </li>
        <li class="item">
          <div class="photo"></div>
          <div class="midden">
            <div class="name-amount">
              <span class="name">公益甲</span>
              <span class="donate">捐赠<span class="amount">100.00</span>元</span>
            </div>
            <p class="text">这个世界人人都献出一点爱。</p>
            <p class="time">刚刚</p>
          </div>
        </li>
        <div class="look-more">
          <span class="text">查看更多</span>
          <span class="icon"></span>
        </div>
      </ul>
    </section>
    <div class="more-project">查看更多公益项目</div>
    <p class="bottom-text">用爱连接故乡</p>
  </div>
  <div class="donate-btn">我要捐款</div>
</section>
</template>
<script>
import Wx from '@/common/utils/wx'
export default {
  data () {
    return {
    }
  },

  components: {
  },

  created () {
    Wx.setDocumentTitle('今日书屋计划')
  }
}
</script>
<style lang="less" scoped>
.container{
  margin-bottom: 96px;
}
.header{
  .header-image{
    width: 750px;
    height: 432px;
  }
  .walfare-amount{
    height: 147px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    .item{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .amount{
        color: #ea4b45;
        font-size: 36px;
      }
      .desc{
        color: #585957;
        font-size: 27px;
        margin-top: 10px;
      }
    }
  }
}
.project-detail{
  margin-top: 10px;
  background-color: #ffffff;
  padding: 0 30px;
  position: relative;
  max-height: 567px;
  .first-content{
    .title{
      height: 95px;
      .icon{
        display: inline-block;
        width: 38px;
        height: 38px;
        background-image: url('../../../assets/project-desc@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 27px;
      }
      .text{
        font-size: 30px;
        color: #2b2b2a;
        vertical-align: top;
        line-height: 95px;
      }
    }
    .desc{
      color: #585957;
      font-size: 27px;
    }
  }
  .other-content{
    .other-title{
      height: 73px;
      .icon{
        display: inline-block;
        width: 19px;
        height: 19px;
        background-image: url('../../../assets/circle.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 27px;
      }
      .text{
        font-size: 28px;
        color: #585957;
        line-height: 73px;
        margin-left: 10px;
      }
    }
    .desc{
      color: #585957;
      font-size: 27px;
    }
  }
  .look-all{
    width: 690px;
    height: 96px;
    position: absolute;
    bottom: 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,1));
    .text{
      font-size: 26px;
      color: #ea4b45;
    }
    .icon{
      width: 38px;
      height: 38px;
      background-image: url('../../../assets/more.png');
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
.comment{
  background-color: #ffffff;
  margin-top: 10px;
  padding: 0 30px;
  .title{
    height: 107px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon{
      width: 38px;
      height: 38px;
      background-image: url('../../../assets/comment.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .text{
      font-size: 30px;
      color: #2b2b2a;
      margin-left: 10px;
    }
  }
  .content{
    list-style-type: none;
    position: relative;
      .look-more{
        width: 690px;
        height: 96px;
        position: absolute;
        bottom: 0;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,1));
        .text{
          font-size: 26px;
          color: #ea4b45;
        }
        .icon{
          width: 38px;
          height: 38px;
          background-image: url('../../../assets/more.png');
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    .item{
      display: flex;
      flex-direction: row;
      margin-top: 79px;
      .photo{
        width: 70px;
        height: 70px;
        background-image: url('../../../assets/default-photo.png');
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .midden{
        margin-left: 20px;
        flex: 1;
        .name-amount{
          height: 26px;
          display: flex;
          justify-content: space-between;
          .name{
            font-size: 28px;
            color: #2b2b2a;
          }
          .donate{
            font-size: 24px;
            color: #8e8e8e;
            .amount{
              color: #f1c38f;
            }
          }
        }
        .text{
          font-size: 26px;
          color: #8e8e8e;
          margin-top: 18px;
        }
        .time{
          font-size: 24px;
          color: #8e8e8e;
          margin-top: 22px;
        }
      }
    }
  }
}
.more-project{
  width: 291px;
  height: 66px;
  margin: 40px auto;
  text-align: center;
  line-height: 66px;
  font-size: 26px;
  color: #8e8e8e;
  background-color: #ffffff;
  border: solid 1px #bbbbbb;
}
.bottom-text{
  font-size: 18px;
  color: #8e8e8e;
  margin-top: 39px;
  text-align: center;
}
.donate-btn{
  width: 100%;
  height: 96px;
  line-height: 96px;
  text-align: center;
  background-color: #ea4b45;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  font-size: 32px;
}
</style>
