<template>
  <div class="hello">
    <div class="counter-2">
      <span>{{ count }}</span>
      <el-button @click="update" icon="el-icon-plus" type="success"
      >累计加1</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      count: 0,
    }
  },
  methods: {
    update() {
      this.count = this.count + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
