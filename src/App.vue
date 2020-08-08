<template>
  <div id="app">
    <header>
      <navigation-bar />
    </header>
    <main class="main">
      <transition mode="out-in" name="router-anim">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import NavigationBar from "./components/NavigationBar";
export default {
  components: {
    NavigationBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

p {
  font-size: 14px !important;
}

.parent {
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.has-shadow {
  position: relative;
  padding-top: 25px;
  padding-bottom: 20px;
  color: #fff;
  &::before,
  &::after {
    line-height: 1;
    position: absolute;
    font-size: 13px;
    font-weight: 100;
    font-family: "Kalam", cursive;
    color: $text-color;
  }

  &::before {
    top: 0;
    left: 0;
    content: attr(data-before);
  }

  &::after {
    bottom: 0;
    left: 0;
    content: attr(data-after);
  }
}

a {
  text-decoration: none;
}

.container {
  width: 90%;
  margin: auto;
  max-width: 1320px;
}

body {
  background: #1d1d1d;
  width: 100vw;
  overflow-x: hidden;
  background: $clr-original;
  max-width: 1500px;
  margin: auto;
}

header {
  background-color: $clr-button;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  display: grid;
  grid-template-columns: 50px 1fr;
  max-height: 100vh;
  max-width: 100vw;
}

main {
  overflow: hidden;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-anim-enter-active {
  transform-origin: center;
  animation: coming 1s linear;
}
.router-anim-leave-active {
  transform-origin: center;
  animation: going 1s linear;
}

@keyframes going {
  from {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
  to {
    transform: rotateY(90deg) scale(2);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: rotateY(-90deg) scale(2);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
}


@media (min-width: 550px) {
  p {
    font-size: 15px !important;
  }
}
</style>
