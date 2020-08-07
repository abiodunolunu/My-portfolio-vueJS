<template>
  <div class="parent">
    <div class="container has-shadow" data-before="<body>" data-after="</body>">
      <div class="text">
        <h1 class="has-shadow" data-before="<h1>" data-after="</h1>">
          <span>Hi,</span>
          <span>I'm Abiodun 😁,</span>
          <span>A web Developer.</span>
        </h1>
        <p data-before="<p>" data-after="<p/>">Front End Developer / Back End Developer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.parent {
  background-image: url("../assets/img/wall.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $text-color;
  background-blend-mode: luminosity;
}
.text {
  h1 {
    color: $text-color;

    span {
      display: block;
    }
  }
  p {
    color: $text-color;
    margin-top: 30px;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    height: 40px;
    width: 150px;
    color: #fff;
    border-radius: 5px;

    &:hover {
      background: #fff;
      border: 1px solid $text-color;
      color: #181818;
    }
  }
}
</style>