<template>
<section class="container">
    <div class="content markdown-body">
        <Card>
            <h1>{{info.title}}</h1>
            <div v-html="info.content">

            </div>
        </Card>
    </div>
</section>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            info:{}
        }
    },
    created () {
      this.getData()  
    },
    methods:{
        getData(){
            let id = this.$route.query.id
            this.$http.post('/article/query',{id}).then(res=>{
                this.info = res.data
                console.log(this.info)
            })
        }
    }
}
</script>
<style scoped>
.content{
    padding: 0 50px;
}
</style>