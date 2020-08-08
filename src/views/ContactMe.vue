<template>
  <div class="parent">
    <div class="container has-shadow" data-before="<body>" data-after="</body>">
      <div class="text">
        <h1 class="has-shadow" data-before="<h1>" data-after="<h1/>">Contact me</h1>
        <p>I am interested in remote, on-site, part-time and full-time opportunies.</p>

        <!-- <div class="form-wrapper">
          <form action="#">
            <div class="form__item">
              <input type="text" required />
              <label for="#">Name</label>
            </div>
            <div class="form__item">
              <input type="email" required @change="holdUp" />
              <label for="#">Email</label>
            </div>
            <div class="form__item">
              <input type="text" required />
              <label for="#">Subject</label>
            </div>
            <div class="form__item">
              <textarea required />
              <label for="#">Message</label>
            </div>
            <input type="submit" value="SEND" />
          </form>
        </div>-->

        <div class="social-links">
          <a class="mail" href="mailto:abiodunolunu@gmail.com">
            Email me.
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://www.twitter.com/findByUsername">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/abiodunolunu">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abiodunolunu/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    holdUp(e) {
      const itsLabel = e.target.nextElementSibling;
      if (e.target.value !== "") {
        return itsLabel.classList.add("up");
      }
      itsLabel.classList.remove("up");
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  // padding: 4px;
  // min-height: 100vh;
}
.text {
  color: $text-color;
  padding-bottom: 4px;
  max-width: 400px;

  h1 {
    color: $text-color;
  }
}

.social-links {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    margin: 5px;
    width: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $text-color;
    height: 40px;
    color: $text-color;
    border-radius: 5px;

    &.mail {
      width: 100%;
      margin-bottom: 20px;

      i {
        margin-left: 10px;
      }
    }

    &:hover {
      background: $text-color;
      border: 1px solid $text-color;
      color: $clr-original;
    }
  }
}

.form-wrapper {
}

form {
  margin-top: 30px;
  width: 100%;
}

.form__item {
  position: relative;
  margin-bottom: 20px;

  label {
    position: absolute;
    top: 5px;
    left: 10px;
    transition: all 200ms linear;
  }

  input {
    height: 36px;
    outline: none;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:valid ~ label,
  textarea:focus ~ label {
    top: -18px;
    left: 5px;
    background-color: #1d1d1d;
    background-color: transparent;
    color: #fff;
    padding: 2px 15px;
    font-size: 12px;
    font-weight: 500;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding-top: 10px;
    padding-left: 8px;
    outline: none;
    resize: none;
  }

  label.up {
    top: -18px;
    background-color: red;
    color: #fff;
    padding: 2px 15px;
    font-size: 12px;
    font-weight: 500;
  }
}

input[type="submit"] {
  outline: none;
  border: none;
  // width: 100%;
  background-color: #fff;
  color: #191919;
  font-size: 20px;
  font-weight: 700;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  transform: scale(1);
  transition: transform 200ms linear;

  &:active,
  &:hover {
    transform: scale(0.97);
  }
}
</style>