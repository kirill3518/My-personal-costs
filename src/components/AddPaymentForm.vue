<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div class="wrapper">
    <div class="save-cost">
      <input placeholder="Date" v-model="date" />
      <input placeholder="Category" v-model="category" />
      <input placeholder="Value" v-model="value" />
      <button @click="onSaveClick">ADD</button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: "",
      category: "",
      date: "",
      id: 0,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate() + "";
      const m = today.getMonth() + "" + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        id: this.id,
        date: this.date || this.getCurrentDate,
        category: this.category || "Unknown",
        value: +this.value,
      };
      this.$emit("addNewPayment", data);
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
  margin: 0 auto;
  width: 300px;

  .save-cost {
    margin: 0 auto;
    width: 185px;
  }

  input {
    padding: 10px 5px;
    margin-bottom: 10px;
  }
  button {
    background-color: #24ada1;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    color: #ffffff;
    padding: 5px 40px 5px 40px;
    margin-top: 10px;
    margin-right: -70px;
  }
}
</style>