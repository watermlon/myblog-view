<template>
    <div>
         <Row>
             <Col>
                <Card>
                    <Form :model="formLeft" label-position="left" :label-width="100">
                        <FormItem label="标题">
                            <Input v-model="formLeft.title"></Input>
                        </FormItem>
                        <FormItem label="描述">
                            <Input v-model="formLeft.desc"></Input>
                        </FormItem>
                        <FormItem label="内容">
                            <mavon-editor @change='valChange'></mavon-editor>
                        </FormItem>
                        <FormItem label="分类">
                            <Input v-model="formLeft.category"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" long @click="save">发表</Button>
                        </FormItem>
                    </Form>
                </Card>
             </Col>
         </Row>
    </div>
</template>
<script>
let mavonEditor;
if (process.browser) {
    console.log('browser')
  mavonEditor = require("mavon-editor");
}
//   import mavonEditor from 'mavon-editor'
export default {
  layout: "empty",
  data() {
    return {
      formLeft: {
        title: "",
        desc: "",
        content: "",
        category: ""
      }
    };
  },
//   components:{
//       mavonEditor
//   },
  methods: {
    save() {
        console.log(this.formLeft.content)
      this.$http.post("/article/publish", this.formLeft).then(res => {
        if (res.code == 201) {
          this.$Message.success("保存成功");
        }
      });
    },
    valChange(val,render){
        this.formLeft.content = render
        console.log(val,render)
    }
  }
};
</script>
<style lang="less">
</style>

