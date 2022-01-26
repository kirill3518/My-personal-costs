<template>
  <div id="app">
    <!-- <div :class="[$style.wrapper]"> -->
    <div class="wrapper">
      <header>
        <!-- <div :class="[$style.title]">My personal costs</div> -->
        <div class="title">My personal costs</div>
      </header>
      <main>
        <AddPaymentForm @addNewPayment="addNewPayment" />
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      maxId: 0,
    };
  },
  methods: {
    fetchData() {
      this.maxId = 3;
      return [
        {
          id: 1,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 2,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 3,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      data.id = ++this.maxId;
      this.paymentsList = [...this.paymentsList, data];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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