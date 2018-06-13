<template>
  <section class="container">
      <Row>
          <Col span="16">
              <Card style="margin-bottom:10px;" v-for="item in article" :key="item._id">
                  <h1>{{item.title}}</h1>
                  
                  <p>{{item.content}}</p>
              </Card>
          </Col>
          <Col span="7" offset='1'>
              <Card>
              </Card>
          </Col>
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
        return {
            article:data
        }
    },
    // data(){
    //     return {

    //     }
    // },
    methods:{

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
