<template>
    <div>
        <Card class="login-box">
            <h3 style="text-align:center;">登陆</h3>
            <Form :model="formItem" :label-width="80">
                <FormItem label="用户名">
                    <Input v-model="formItem.username" ></Input>
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="formItem.password" type="password"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" long @click="login">登陆</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script>
export default {
  layout: 'empty',
  data(){
      return {
          formItem:{
              username:'',
              password:''
          }
      }
  },
  methods:{
      login(){
          this.$http.post('/login',this.formItem).then(res=>{
              if(res.code==200){
                  this.$Message.success('登陆成功')
                  this.$router.push({path:'/admin/article'})
              }
          })
      }
  }
} 
</script>
<style lang="less">
body{
    .login-box{
        width: 500px;
        margin: 0 auto;
        margin-top: 200px;
    }
}
</style>
