<template>
  <div class="parent">
    <div class="container has-shadow" data-before="<body>" data-after="</body>">
      <div class="text">
        <h1 class="has-shadow" data-before="<h1>" data-after="</h1>">About me.</h1>
        <br />
        <p>I'm a Web (mainly M-E-V-N stack) developer based in Lagos Nigeria.</p>
        <p>I'm confident that i can deliver clean and efficient code while following best practices</p>
        <p>Innovation is my passion.</p>

        <br />

        <p>Leveraging analytical skills and strong attention to detail in order to deliver original and efficient web solutions.</p>
        <p>When I'm not working 👨‍💻, I watch anime 🤡, and sometimes biking 🚴‍♂️.</p>
      </div>
      <div class="image">
        <img src="../assets/img/me1.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text {
  h1 {
    color: $text-color;
  }

  p {
    color: $text-color;
    font-size: 15px;
  }
}

.image {
  margin-left: auto;
  display: none;
  img {
    max-height: 350px;
    filter: grayscale(1);
    box-shadow: 5px 5px 0px #1d1d27, -5px 5px 0px #1d1d27;
    &:hover {
      filter: grayscale(0);
    }
  }
}

@media (min-width: 768px) {
  .container {
    justify-content: space-between;
    align-items: center;
  }

  .text {
    margin-right: 20px;
    max-width: 650px;
  }

  .image {
    display: block;
  }
}
</style>