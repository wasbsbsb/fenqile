<template>
  <div id="app">
    <div class="hello">
      <div id="bodyer">
        <router-view></router-view>
      </div>
     
    </div>
     <div id="footer">
        <router-link class="linkto" v-for="(o,index) in smlog" :key="index" :to="o.path">
          <div class="f1 ft" @click="dinji(index)">
            <div class="smlllogo" :style="active === index ? o.leixin2 : o.leixin"></div>
            {{o.name}}
          </div>
        </router-link>
      </div>
  </div>
</template>
<script>

export default {
  components: {
  
  },
  name: "app",
  data() {
    return {
      smlog: [
        {
          path: "/fenqile",
          name: "首页",
          leixin: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/consume.png") '
          },
          leixin2: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/consume_on.png")'
          }
        },
        {
          path: "/fenlei",
          name: "分类",
          leixin: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/class.png") '
          },
          leixin2: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/lecard_on.png")   '
          }
        },
        {
          path: "/leka",
          name: "乐卡",
          leixin: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/lecard.png")  '
          },
          leixin2: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/lecard_on.png") '
          }
        },
        {
          path: "/xingyonka",
          name: "信用卡",
          leixin: {
            backgroundImage:
              'url("https://cres.fenqile.cn/creditcard_m/img/v2/tab/icon/creditcard_normal_s.png")  '
          },
          leixin2: {
            backgroundImage:
              'url("https://cres.fenqile.cn/creditcard_m/img/v2/tab/icon/creditcard_actived_s.png")   '
          }
        },
        {
          path: "/me",
          name: "个人中心",
          leixin: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/mine.png")  '
          },
          leixin2: {
            backgroundImage:
              'url("https://cres.fenqile.cn/mobile/img/nav/list/mine_on.png")  '
          }
        }
      ],
      active: 0
    };
  },
  methods: {
    dinji(index) {
      this.active = index;
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 10.25px;
}
body {
  font-size: 13px;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.hello {
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
}

#bodyer {
  flex: 1;
  overflow: hidden;
}
#footer {
  background-color: #fafafa;
  border-top: 1px solid #d9d9d9;
  height: 49px;
  display: flex;
  width: 100%;
  .ft {
    text-align: center;
    color: #666666;
    background-size: 23px;
    background-repeat: no-repeat;
  }
  .linkto {
    text-decoration: none;
    color: #666;
    flex: 1;

    .smlllogo {
      background-size: 23px;
      background-repeat: no-repeat;
      display: block;
      height: 23px;
      position: relative;
      background-position: center top;
      margin-top: 5px;
    }
  }
}
</style>
