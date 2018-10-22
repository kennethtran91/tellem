<template>
<section>
  <div class="content">
      <div class="title">
          Tell'em 📣 😎
      </div>
      <div class="form">
          <form @submit.prevent="getFormData">
            <b-field label="Message">
                <b-input maxlength="200" v-model="message" type="textarea"></b-input>
            </b-field>
            <button class="button is-primary" @click="openLoading">Tell em 🐶</button>
          </form>
        </div>
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
  </section>
</template>

<script>
    const API_URL= 'http://localhost:5000/msg'

export default {
  name: 'Home',
  data() {
      return {
          message: '',
          isLoading: false,
          isFullPage: true
      }
  },
  methods: {
      getFormData () {
          console.log(this.message);
      },
      openLoading() {
          this.isLoading = true;
          setTimeout(() => {
              this.isLoading = false
          }, 10 * 300)
      }
  }
}
</script>

<style scoped>
.title {
    text-align: center;
}

.form {
    width: 50%;
    margin: 0 auto;
}
</style>
