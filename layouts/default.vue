<template>
  <div>
    <header>
      <div class="logo">
        <h1>logo</h1>
      </div>
      <nav>
        <nuxt-link to="/" class="nav-item" :class="{'active':path=='index'}">
            首页
        </nuxt-link>
        <nuxt-link to="/archives" class="nav-item" :class="{'active':path=='archives'}">
            归档
        </nuxt-link>
        <nuxt-link to="/tags" class="nav-item" :class="{'active':path=='tags'}">
            标签
        </nuxt-link>
        <nuxt-link to="/about" class="nav-item" :class="{'active':path=='about'}">
            关于
        </nuxt-link>
      </nav>
      <div class="min-nav" @click="showBox">
        <div class="min-nav-content"></div>
        <div class="min-nav-content"></div>
        <div class="min-nav-content"></div>
      </div>
    </header>
    <div class="collapse" :style="{height:boxH+'px'}">
      <!-- <div class="coll-box"> -->
        <nuxt-link to="/" class="coll-item" :class="{'active':path=='index'}">
        <Icon type="home"></Icon>
            首页
        </nuxt-link>
        <nuxt-link to="/archives" class="coll-item" :class="{'active':path=='archives'}">
        <Icon type="filing"></Icon>
            归档
        </nuxt-link>
        <nuxt-link to="/tags" class="coll-item" :class="{'active':path=='tags'}">
        <Icon type="pricetags"></Icon>
            标签
        </nuxt-link>
        <nuxt-link to="/about" class="coll-item" :class="{'active':path=='about'}">
        <Icon type="ios-information"></Icon>
            关于
        </nuxt-link>
      <!-- </div> -->
    </div>
    <nuxt class="layout-box"/>
  </div>
</template>
<script>
      export default {
        data () {
            return {
                boxH:0
            }
        },
        computed:{
          path(){
            return this.$route.name
          }
        },
        created(){
          
        },
        methods:{
          showBox(){
            if(this.boxH==0){
              this.boxH = 140
            }else{
              this.boxH = 0
            }
          }
        }
    }
</script>
<style lang="less">
@headerHeight:60px;
@media screen and (max-width: 460px){
  nav{
    display: none;
  }
  .collapse{
    display: block;
  }
}
@media screen and (min-width: 460px){
  .min-nav{
    display: none;
  }
  .collapse{
    display: none;
  }
}
body{
    min-height: 100vh;
    background-color: #f4f5f5;
    .layout-box{
      padding-top: @headerHeight+10px;
    }
    .collapse{
      overflow: hidden;
      width: 100%;
      background-color: #fff;
      position: absolute;
      top: 60px;
      left: 0;
      z-index: 900;
      transition: height .3s;
      .coll-box{
        overflow: hidden;
      }
      .coll-item:nth-of-type(1){
        border-top: 1px solid #ccc;
      }
      .coll-item{
        color: #888;
        width: 100%;
        padding: 5px;
        display: block;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
      }
    }
    header{
      position: absolute;
      top: 0;
      left: 0;
      height: @headerHeight;
      background-color:#fff;
      box-shadow: 1px 0 1px 1px #ccc;
      width: 100vw;
      overflow: hidden;
      .logo{
        float: left;
        height: @headerHeight;
        line-height: @headerHeight;
        padding: 0 10px;
      }
      .min-nav{
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px; 
        float: right;
        margin-top:16px;
        margin-right: 10px; 
        padding: 5px;
        cursor: pointer;
        .min-nav-content{
          width: 22px;
          margin: 3px 0;
          height: 2px;
          background-color: #888;
          border-radius: 1px;
        }
      }
      nav{
        padding: 0 10px;
        float: right;
      }
      .nav-item{
        padding: 0 20px;
        float: left;
        line-height: @headerHeight - 2px;
        font-size: 20px;
        box-sizing: border-box;
        border-bottom: 2px solid #fff;
        color: #909090;
        &:hover{
          color: #2d8cf0;
          border-bottom: 2px solid #2d8cf0;
        }
        &.active{
          color: #2d8cf0;
          border-bottom: 2px solid #2d8cf0;
        }
      }
    }
}
</style>
