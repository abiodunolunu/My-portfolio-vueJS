<template>
  <nav>
    <a href="#" class="brand">
      <img src="../assets/img/A.png" alt />
    </a>

    <ul class="nav-list">
      <li>
        <router-link activeClass="active" to="/home">
          <img src="../assets/img/home.svg" alt />
        </router-link>
      </li>
      <li>
        <router-link activeClass="active" to="/about-me">
          <img src="../assets/img/user.svg" alt />
        </router-link>
      </li>
      <li>
        <router-link activeClass="active" to="/skills">
          <img src="../assets/img/stack.svg" alt />
        </router-link>
      </li>
      <li>
        <router-link activeClass="active" tag="a" to="/projects">
          <img src="../assets/img/work.svg" alt />
        </router-link>
      </li>
      <li>
        <router-link activeClass="active" to="/contact">
          <img src="../assets/img/mail.svg" alt />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}

a.brand {
  height: 50px;
  background-color: $clr-box-shadow;

  img {
    filter: drop-shadow(0px 0px 2px var(--clr-dark));
  }
}

a {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    color: red;
  }
}

ul.nav-list {
  flex-grow: 1;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    // height: 50px;
    &:hover,
    .active {
      background-color: $clr-original;

      img {
        filter: drop-shadow(0px 0px 1px $clr-box-shadow);
      }
    }
  }
}
</style>