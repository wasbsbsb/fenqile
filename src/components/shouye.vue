<template>
  <div>
    <serch/>
    <div class="shouye_fql">
      <div class="neibu_fel">
        <div class="fenqi1">
          <div v-for="(name,index) in nm" :key="index" class="navs">
            <img :src="name.src">
            <div v-html="name.name"></div>
          </div>
        </div>
        <div class="fenqi2">
          <a href="https://sale.fenqile.com/VlVdTEhQVVVFSVdSXkVJ/index.html">
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/E2/jqgHAFz-AGmAeQLQAABHsjDObIU849_375x240.jpg"
              alt
              srcset
            >
          </a>
          <a href="https://sale.fenqile.com/VlVdTEhQVVVFSVdSXkVJ/index.html">
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/E2/jqgHAFz-AHOAc6_uAABQcT222_o280_375x240.jpg"
              alt
              srcset
            >
          </a>
          <a href="https://sale.fenqile.com/VlVdTEhQVVVFSVdSXkVJ/index.html">
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/E2/jqgHAFz-AHyAaHmNAABI3P6qoLM356_375x240.jpg"
              alt
              srcset
            >
          </a>
        </div>
        <div class="fenqi3">
          <div class="swiper-container">
            <div class="swiper-wrapper lbtbg">
              <div
                class="swiper-slide"
                style="background: lavender;"
                v-for="(a,index) in lunbotu"
                :key="index"
              >
                <img :src="a.src" alt srcset>
              </div>
            </div>
            <!--分页-->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="fenqi4">
          <div v-for="(ty,index) in nav_bg" :key="index">
            <img :src="ty.src" alt>
          </div>
        </div>
        <div class="fenqi5">
          <list/>
        </div>
        <div class="fenqi6"></div>
        <div class="fenqi7"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import list from "./list";
import serch from "./serch";

export default {
  components: {
    list,
    serch
  },
  data() {
    return {
      nm: [
        {
          name: "小赚一笔",
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/37/D4/jqgHAFzxCHaAZ-IhAAAdZ-7ssB0545_96x96.png"
        },
        {
          name: "旅游出行",
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/01/33/j6gHAFw3TJaAaBTnAAAoPZS4S2g698_96x96.png"
        },
        {
          name: "乐花借钱",
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/01/33/j6gHAFw3CWOAYIniAAAhq_2zi-A704_96x96.png"
        },
        {
          name: "乐还款",
          src:
            "https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvBDqAF7gCAAAaz3hmlmI290_96x96.png"
        },
        {
          name: "娱乐充值",
          src:
            "https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvBE-AUniGAAAiogTEaHo835_96x96.png"
        }
      ],
      lunbotu: [
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/37/CF/jqgHAFzwjiqARGpoAAI4V6DGdas870_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/06/38/j6gHAFzmZfeAcmaBAADt0qOT_oU899_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/38/B3/jagHAFz4vEyALg3SAAE8xjGgRpo530_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/06/45/j6gHAFz3vTOAOfVDAAMgauw83k8718_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/01/3C/j6gHAFxAa9SANOf8AAF6_QBmUBk640_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/06/16/j6gHAFzRVGWAcZzUAAF_FHQvq4w396_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/37/D4/jqgHAFzxB62AWewdAAJX8kSwTa4588_750x320.jpg"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/06/30/j6gHAFzjWh6AJR6oAAGSVsTQWxc331_750x320.jpg"
        }
      ],
      nav_bg: [
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/38/B6/jagHAFz906CAZbKxAABTJ8yh2I8378_344x144.png"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/37/AA/jqgHAFzY0hiAOIu7AABjwWPWKEI422_344x144.png"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/38/B7/jagHAFz-HQiAf-kWAABkP6-EQLQ807_344x144.png"
        },
        {
          src:
            "https://cimgs1.fenqile.com/ibanner2/M00/38/B3/jagHAFz4wBiAAsmBAABEbomGvUc807_344x144.png"
        }
      ]
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      autoplay: 3000,
      speed: 1000,
      autoplayDisableOnInteraction: false,
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next"
    });
  }
};
</script>
<style lang="scss">
.shouye_fql {
  overflow: auto;
  height: 640px;

}
a {
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
.fenqi1 {
  width: 100%;
  height: 92px;
  display: flex;
  border-bottom: 1px solid #eee;
  .navs {
    flex: 1;
    color: #757c8e;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    img {
      width: 48px;
      height: 48px;
      margin-top: 18px;
    }
  }
}
.fenqi2 {
  width: 100%;
  height: 120px;
  display: flex;
  a {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.neibu_fel{
  overflow: hidden;
}
.fenqi3 {
  height: 168px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}

.fenqi4 {
  display: flex;
  height: 160px;
  flex-wrap: wrap;
  padding: 0 12px;
  div {
    width: 50%;
    height: 45%;
    text-align: center;
    img {
      width: 99%;
      height: 99%;
    }
  }
}

/*移动样式*/
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  //   width: 375px;
  height: 160px;
  font-size: 12px;
  text-align: center;
  line-height: 12px;
  color: #000;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
}
</style>
