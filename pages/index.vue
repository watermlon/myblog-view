<template>
  <section class="container">
      <Row>
          <Col span="24">
              <Card style="margin-bottom:10px;" v-for="item in article" :key="item._id" @click.native="show(item._id)">
                  <h1>{{item.title}}</h1>
                  
                  <p class="markdown-body" v-html="item.content" ></p>
              </Card>
          </Col>
          <!-- <Col span="7" offset='1'>
              <Card>
              </Card>
          </Col> -->
      </Row>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            msg:'hello'
        }
    },
    async asyncData(){
        let {data} =await axios.get('/article/list',{pageNo:1,pageSize:10})
        console.log(data)
        return {
            article:data
        }
    },
    // data(){
    //     return {

    //     }
    // },
    methods:{
        show(id){
            this.$router.push({
                path:'/detail',
                query:{id}
            })
        }
    }
}
</script>

<style>
@media (min-width: 1032px){
  .container{
    width: 1000px;
    margin: 0 auto;
  }
}
.container{
  padding: 0 20px;
}
</style>
