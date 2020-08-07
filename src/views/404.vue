<template>
  <div class="parent">
    <div class="container has-shadow" data-before="<error>" data-after="</error>">
      <div class="container">
        <h1>Page Not Found</h1>
        <p>Redirecting you to the homepage in {{time}}...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 4,
    };
  },
  watch: {
    time() {
      if (this.time == 0) {
        this.time = 0;
        this.$router.replace("/");
      }
    },
  },
  mounted() {
    const self = this;
    setInterval(() => {
      self.time -= 1;
    }, 1000);
  },
};
</script>

<style>
</style>