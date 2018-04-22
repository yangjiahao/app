<template>
  <section>
    <section class="top"></section>
    <section class="project">
      <div class="title">
        <em class="icon"></em>
        <span class="text">最新项目进展</span>
      </div>
      <div class="content">
        <ul>
          <li>
            <img src="../../../assets/project.png" alt="" class="image">
            <div class="text-message">
              <p class="message-title">关爱学生成功，主力完成学业，美好的明天希望有你的参与！</p>
              <p class="has-obtion">已经筹款<span class="amount">50122.75</span></p>
              <p class="expected-obtion">项目筹款<span class="amount">60000.00</span></p>
            </div>
          </li>
          <li>
            <img src="../../../assets/project.png" alt="" class="image">
            <div class="text-message">
              <p class="message-title">关爱学生成功，主力完成学业，美好的明天希望有你的参与！</p>
              <p class="has-obtion">已经筹款<span class="amount">50122.75</span></p>
              <p class="expected-obtion">项目筹款<span class="amount">60000.00</span></p>
            </div>
          </li>
          <li>
            <img src="../../../assets/project.png" alt="" class="image">
            <div class="text-message">
              <p class="message-title">关爱学生成功，主力完成学业，美好的明天希望有你的参与！</p>
              <p class="has-obtion">已经筹款<span class="amount">50122.75</span></p>
              <p class="expected-obtion">项目筹款<span class="amount">60000.00</span></p>
            </div>
          </li>
          <li>
            <img src="../../../assets/project.png" alt="" class="image">
            <div class="text-message">
              <p class="message-title">关爱学生成功，主力完成学业，美好的明天希望有你的参与！</p>
              <p class="has-obtion">已经筹款<span class="amount">50122.75</span></p>
              <p class="expected-obtion">项目筹款<span class="amount">60000.00</span></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="crowd-funding">
      <div class="title">
        <em class="icon"></em>
        <span class="text">最新项目进展</span>
      </div>
      <div class="content">
        <div class="content-item">
          <div class="left">
            <p class="item-title">今日书屋计划</p>
            <p class="item-content">中银国际证券有限公司发起“今日书屋计划”,为贫困学生的学习主力，成为社会的一股暖流</p>
            <div class="all-progress">
              <div class="progress" style="width: 60%;"></div>
            </div>
            <div class="amount">
              <span class="project-obtion">项目筹集<span class="money">91515150.0</span>元</span>
              <span class="proportion" v-if="true">60%</span>
              <span class="status" v-else>已完成</span>
            </div>
            <p class="persons"><span>1680</span>人次捐款</p>
          </div>
          <img src="../../../assets/picture1.jpg" alt="" class="right"/>
        </div>
        <div class="content-item">
          <div class="left">
            <p class="item-title">今日书屋计划</p>
            <p class="item-content">中银国际证券有限公司发起“今日书屋计划”,为贫困学生的学习主力，成为社会的一股暖流</p>
            <div class="all-progress">
              <div class="progress" style="width: 60%;"></div>
            </div>
            <div class="amount">
              <span class="project-obtion">项目筹集<span class="money">91515150.0</span>元</span>
              <span class="proportion" v-if="true">60%</span>
              <span class="status" v-else>已完成</span>
            </div>
            <p class="persons"><span>1680</span>人次捐款</p>
          </div>
          <img src="../../../assets/picture1.jpg" alt="" class="right"/>
        </div>
      </div>
    </section>
    <section class="crowd-funding">
      <div class="title">
        <em class="icon"></em>
        <span class="text">个人求助</span>
      </div>
      <div class="content">
        <div class="content-item">
          <div class="left">
            <p class="item-title">今日书屋计划</p>
            <p class="item-content">中银国际证券有限公司发起“今日书屋计划”,为贫困学生的学习主力，成为社会的一股暖流</p>
            <div class="all-progress">
              <div class="progress" style="width: 60%;"></div>
            </div>
            <div class="amount">
              <span class="project-obtion">项目筹集<span class="money">91515150.0</span>元</span>
              <span class="proportion" v-if="true">60%</span>
              <span class="status" v-else>已完成</span>
            </div>
            <p class="persons"><span>1680</span>人次捐款</p>
          </div>
          <img src="../../../assets/picture1.jpg" alt="" class="right"/>
        </div>
        <div class="content-item">
          <div class="left">
            <p class="item-title">今日书屋计划</p>
            <p class="item-content">中银国际证券有限公司发起“今日书屋计划”,为贫困学生的学习主力，成为社会的一股暖流</p>
            <div class="all-progress">
              <div class="progress" style="width: 60%;"></div>
            </div>
            <div class="amount">
              <span class="project-obtion">项目筹集<span class="money">91515150.0</span>元</span>
              <span class="proportion" v-if="true">60%</span>
              <span class="status" v-else>已完成</span>
            </div>
            <p class="persons"><span>1680</span>人次捐款</p>
          </div>
          <img src="../../../assets/picture1.jpg" alt="" class="right"/>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import url('../../../common/css/common.less');
.top{
  height: 326px;
  background-image: url('../../../assets/banner.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.project{
  height: 463px;
  background: #ffffff;
  border:1px solid #ffffff;
  margin-top: 10px;
  .title{
    height: 43px;
    margin: 39px 0 20px 20px;
    .icon{
      display: inline-block;
      width: 33px;
      height: 43px;
      background-image: url('../../../assets/icon_chapter.png');
      background-repeat: no-repeat;
      background-position: center;
      vertical-align: top;
    }
    .text{
      font-size: 32px;
      color: #8e8e8e;
      line-height: 43px;
    }
  }
  .content{
    height: 334px;
    overflow: auto;
    ul{
      height: 100%;
      list-style-type: none;
      margin-left: 3px;
      margin-right: 31px;
      display: -webkit-box;
      flex-direction: row;
      li{
        width: 298px;
        height: 100%;
        border: solid 1px #bbbbbb;
        margin-left: 28px;
        box-sizing: border-box;
        .image{
          width: 100%;
          height: 176px;
        }
        .text-message{
          height:158px;
          display: flex;
          flex-direction: column;
          margin-left: 21px;
          .message-title{
            width: 236px;
            font-size: 28px;
            color: #2b2b2b;
            .single();
            margin-top: 20px;
          }
          .has-obtion{
            width: 247px;
            text-align: left;
            font-size: 26px;
            color: #2b2b2a;
            .single();
            margin-top: 6px;
          }
          .expected-obtion{
            width: 247px;
            text-align: left;
            font-size: 26px;
            color: #2b2b2a;
            .single();
            margin-top: 6px;
          }
          .amount{
            color: #f1c38f;
          }
        }
      }
    }
  }
}
.crowd-funding{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  margin-top: 10px;
  .title{
    height: 43px;
    margin: 39px 0 20px 20px;
    .icon{
      display: inline-block;
      width: 33px;
      height: 43px;
      background-image: url('../../../assets/icon_chapter.png');
      background-repeat: no-repeat;
      background-position: center;
      vertical-align: top;
    }
    .text{
      font-size: 32px;
      color: #8e8e8e;
      line-height: 43px;
    }
  }
  .content{
    .content-item{
      height: 313px;
      border-top: 1px solid #bbbbbb;
      display: flex;
      flex-direction: row;
      .left{
        width: 433px;
        margin-left: 33px;
        .item-title{
          font-size: 28px;
          color: #2b2b2a;
          line-height: 28px;
          margin-top: 39px;
          .single();
        }
        .item-content{
          width: 433px;
          margin-top: 19px;
          font-size: 26px;
          color: #8e8e8e;
          .multiline();
        }
        .all-progress{
          width: 439px;
          height: 10px;
          background-color: #bbbbbb;
          margin: 16px 0;
          border-radius: 5px;
          .progress{
            height: 100%;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            background-color: #ea4b45;
          }
        }
        .amount{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .project-obtion{
            font-size: 26px;
            color: #8e8e8e;
            .money{
              color: #f1c38f;
            }
          }
          .proportion{
            font-size: 26px;
            color: #f1c38f;
          }
          .status{
            font-size: 26px;
            color: #8e8e8e;
          }
        }
        .persons{
          font-size: 26px;
          line-height: 26px;
          color: #8e8e8e;
          margin-top: 17px;
          span{
            color: #f1c38f;
          }
        }
      }
      .right{
        width: 222px;
        height: 215px;
        margin: 38px 30px 60px;
      }
    }
  }

}
</style>
