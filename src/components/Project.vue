<template>
  <div class="project__item">
    <div class="project__image">
      <img :src="project.imageLink" style="object-fit: cover;" alt />
    </div>
    <div class="project__content">
      <p class="title">{{project.title}}</p>
      <p class="desc">{{project.desc}}</p>
      <div class="technology">
        <h3>Technologies used:</h3>
        <ul>
          <li v-for="(s, i) in project.stack" :key="i">
            <span>{{s}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="project__links">
      <a v-for="(link, k , i) in project.links" :key="i" :href="link" target="_blank">
        <span>
          {{k}}
          <i :class="k == 'live' ? 'fas fa-globe': 'fab fa-github'"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
.project__item {
  font-family: "Montserrat", sans-serif;
  margin: auto;
  color: $text-color;
  background-color: $pro-bg-color;
  box-shadow: 8px 8px 0 $pro-box-shadow, -8px 8px 0 $pro-box-shadow;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  flex-direction: column;

  .project__image {
    height: 250px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .desc {
    min-height: 65px;
  }

  .project__content {
    padding: 8px;
    flex: 1 0 auto;

    .title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.9rem;
    }

    p:last-of-type {
      margin-top: 10px;
      font-size: 0.9rem;
      font-weight: 400;
    }

    .technology {
      margin-top: 15px;

      h3 {
        font-size: 0.95rem;
      }

      ul {
        margin-top: 10px;

        li {
          @extend .custom-button;
          display: inline-block;
          font-size: 0.7em;
          margin: 5px;
        }
      }
    }
  }

  .project__links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    a {
      @extend .custom-button;
      display: block;
      margin-top: 10px;
      padding: 10px;
      transform: scale(1);
      top: 0;
      transition: all 200ms ease-in;

      i {
        margin-left: 8px;
      }

      &:hover,
      &:active {
        top: 2px;
        box-shadow: none;
      }
    }
  }
}
</style>