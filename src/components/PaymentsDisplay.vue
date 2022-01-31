<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div class="wrapper">
    <div class="table-header">
      <div class="el">#</div>
      <div class="el">Date</div>
      <div class="el">Category</div>
      <div class="el">Value</div>
    </div>
    <div class="item" v-for="item in getFPV" :key="item.id">
      <div class="el">{{ item.id }}</div>
      <div class="el">{{ item.date }}</div>
      <div class="el">{{ item.category }}</div>
      <div class="el">{{ item.value }}</div>
    </div>
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPaymentsList", "getPaymentsList2"]),
    getFPV() {
      // return this.getPaymentsList;
      return this.getPaymentsList2;
    },
  },
};
</script>
 
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  padding-top: 15px;
  width: 500px;
  margin: 0 auto 0 auto;
  .table-header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
    font-weight: bold;
    .el {
      justify-self: start;
    }
  }

  .item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
    .el {
      justify-self: start;
    }
  }
}
</style>