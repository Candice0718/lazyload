<template>
  <div class="lazy-container">
    <div class="img-container" v-for="(item, idx) in pdtList" :key="idx">
      <img class="test" v-lazyLoad="item.imgUrl"/>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import lazyLoad from 'testlazyload';
  @Component({
    directives: {
      lazyLoad,
    },
  })
  export default class LazyLoad extends Vue {
    public src = 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150107_8.jpg';
    public pdtList = [
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150107_8.jpg',
        name: '节能保鲜',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20160617140638_42.jpg',
        name: '空气进化器',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20170406140747_17.jpg',
        name: '吸尘器',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150107_8.jpg',
        name: '戴森',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20160617140638_42.jpg',
        name: '飞利浦',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20170406140747_17.jpg',
        name: '松下',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150107_8.jpg',
        name: '节能保鲜-',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20160617140638_42.jpg',
        name: '空气进化器-',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20170406140747_17.jpg',
        name: '吸尘器-',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150107_8.jpg',
        name: '戴森-',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20160617140638_42.jpg',
        name: '飞利浦-',
      },
      {
        imgUrl: 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20170406140747_17.jpg',
        name: '松下-',
      },
    ];
    public created() {
      // console.log(lazyLoad);
    }
  }
</script>
<style scoped>
  .lazy-container {
    width: 100%;
    height: 100%;
  }
  .img-container {
    width: 49%;
    height: 160px;
    border: 1px solid #e0e0e0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .test{
    width: 100%;
    height: 100%;
  }
</style>