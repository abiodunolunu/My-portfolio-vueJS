<template>
  <div class="parent">
    <div class="container has-shadow" data-before="<body>" data-after="</body>">
      <div class="text">
        <h1 class="has-shadow" data-before="<h1>" data-after="</h1>">
          <span>Skills &</span>
          <span>Experience</span>
        </h1>
        <br />
        <p>I am proficient with both front and backend development</p>
        <br />
        <div class="stack">
          I work with
          <ul>
            <li v-for="(s, i) in stack" :key="i">
              <span>{{s}}</span>
            </li>
          </ul>for now, and still picking up more.
        </div>
        <br />
        <div class="cert">
          <h2>Certificates & Resume</h2>
          <a
            href="https://res.cloudinary.com/abeydev/image/upload/v1596831103/portfolio/doc/Abiodun-Emmanuel-CV_whd3ba.pdf"
            download="Abiodun's resumé"
          >Resumé 📋</a>
          <a
            href="https://res.cloudinary.com/abeydev/image/upload/v1596831102/portfolio/doc/nanodeg_pfjfph.pdf"
            download="Abiodun's ALCwithGoogleCert"
          >Udacity Front-End Nanodegree Cert</a>
        </div>

        <p>
          Visit my
          <a class="ln" href="https://www.linkedin.com/in/abiodunolunu/">
            LinkedIn Profile
            <i class="fab fa-linkedin"></i>
          </a>
        </p>
      </div>
      <div class="image">
        <div class="first-four">
          <img src="../assets/img/html5.svg" alt />
          <img src="../assets/img/vue-js-1.svg" alt />
          <img src="../assets/img/sass-1.svg" alt />
          <img src="../assets/img/css-3.svg" alt />
        </div>
        <div class="gr">
          <img src="../assets/img/graphql.svg" alt />
        </div>
        <img src="../assets/img/nodejs-1.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      stack: [
        "HTML",
        "CSS",
        "SCSS",
        "JS",
        "VUE.JS",
        "NODE.JS(Express, MongoDB)",
        "GraphQL",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text {
  h1 {
    color: $text-color;

    span {
      display: block;
    }
  }

  .stack {
    li {
      @extend .custom-button;
      display: inline-block;
      margin-right: 5px;
    }
  }

  p {
    color: $text-color;
    span {
      color: $text-color;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }
  }

  .cert {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    flex-wrap: wrap;

    h2 {
      width: 100%;
      color: $text-color;
    }

    a {
      font-size: 0.9rem;
      color: $text-color;
      text-decoration: underline;
      margin-right: 10px;
    }
  }

  .ln {
    color: $text-color;
    border: 1px solid #fff;
    padding: 3px 8px;
    text-decoration: none;

    &:hover {
      background: var(clr-dark);
      color: #fff;
    }
  }
}

.image {
  // width: 100px;
  display: none;
  flex-wrap: wrap;
  justify-content: center;

  .first-four {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
    // border: 1px solid red;
    img {
      // flex-grow: 1;
      width: 80px;
      height: 70px;

      // object-position: center;
    }
  }

  .gr {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      height: 100px;
      width: 150px;
    }
  }

  img {
    width: 300px;
    height: 120px;
    // border: 1px solid green;
  }
}

@media (min-width: 800px) {
  .container {
    justify-content: space-between;
    align-items: center;
  }

  .text {
    margin-right: 20px;
    max-width: 600px;
    // width: 50%;
  }

  .image {
    width: 40%;
    display: flex;
    perspective: 30px;
    animation: rote 20s linear infinite alternate;

    &:hover {
      animation-play-state: paused;

      img {
        filter: drop-shadow(0px 0px 1px #ccc);
      }
    }
  }
}

@keyframes rote {
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(180deg);
  }
}
</style>