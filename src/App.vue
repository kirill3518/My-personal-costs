<template>
  <div id="app">
    <!-- <div :class="[$style.wrapper]"> -->
    <div class="wrapper">
      <header>
        <!-- <div :class="[$style.title]">My personal costs</div> -->
        <div class="title">My personal costs</div>
      </header>
      <main>
        <div class="add-cost">
          <button @click="onAddClick">ADD NEW COST</button>
        </div>
        <AddPaymentForm v-if="saved" />
        <PaymentsDisplay />
      </main>
    </div>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      saved: false,
    };
  },
  methods: {
    onAddClick() {
      this.saved = !this.saved;
    },
    ...mapMutations([
      "setPaymentsListData",
      "setPageList",
      "setDataToPaymentList",
      "setPageNum",
    ]),
    ...mapActions(["fetchData"]),
    ...mapGetters(["getPaymentsList"]),
  },
  created() {
    this.setPageList();

    let num = 1; // Имитация нажатия кнопки "1" компонента пагинации
    this.setPageNum(num);
    this.setDataToPaymentList(num);
    // this.fetchData(num);
  },
};
</script>
 
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .wrapper {
    .title {
      font-size: 32px;
      color: #222224;
      padding-bottom: 15px;
    }

    .add-cost {
      margin: 0 auto;
      margin-bottom: 15px;
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
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>