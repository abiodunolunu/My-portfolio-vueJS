<template>
  <section class="projects parent" id="projects">
    <h1 class="title" data-before="<h1>" data-after="</h1>">My Projects (Personal)</h1>
    <div class="container">
      <project v-for="(p, i) in projects" :key="i" :project="p" />
    </div>
  </section>
</template>

<script>
import Project from "../components/Project.vue";
export default {
  components: {
    Project: Project,
  },
  data() {
    return {
      projects: [
        {
          title: "Asknonymous",
          desc:
            "A website where users can send and receive anonymous messages with shareable links.",
          stack: ["HTML", "CSS", "EXPRESS", "MONGODB"],
          imageLink:
            "https://res.cloudinary.com/abeydev/image/upload/v1596743782/portfolio/Asknoymous_nk09jb.png",
          links: {
            live: "https://asknonymos.herokuapp.com/",
            code: "https://github.com/abiodunolunu/Asknonymous",
          },
        },
        {
          title: "MY PICTURE APP",
          desc: "A website where users can share and interact with pictures.",
          stack: ["HTML", "CSS", "SCSS", "Vue.Js", "Express", "GraphQL"],
          imageLink:
            "https://res.cloudinary.com/abeydev/image/upload/v1596743781/portfolio/picture-app_hrjubl.png",
          links: {
            live: "https://my-picture-app.herokuapp.com/",
            code: "https://github.com/abiodunolunu/my-picture-app---server",
          },
        },
        {
          title: "football-live-chat",
          desc: "real time live chat app/website for football/soccer fans.",
          stack: ["HTML", "CSS", "JS", "EXPRESS", "MONGODB", "WEBSOCKETS"],
          imageLink:
            "https://res.cloudinary.com/abeydev/image/upload/v1596743782/portfolio/SoccerChat_rg63xz.png",
          links: {
            live: "https://football-live-chat.herokuapp.com/",
            code:
              "https://github.com/abiodunolunu/football-soccer-chat-LIVE-chat-app-with-rooms",
          },
        },
        {
          title: "URL Shortner",
          desc:
            "A website where you can convert long links into really short ones",
          stack: ["HTML", "CSS", "SCSS", "EXPRESS", "MONGODB"],
          imageLink:
            "https://res.cloudinary.com/abeydev/image/upload/v1596857262/portfolio/url-shortner_kfprkb.png",
          links: {
            live: "https://abedev.herokuapp.com/",
            code: "https://github.com/abiodunolunu/url-shortner",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section.projects {
  padding-top: 50px;
  padding-bottom: 50px;
  max-height: 100vh;
  overflow-y: auto;

  h1 {
    text-align: center;
    width: 100%;
  }
  h3.title {
    text-align: center;
    font-size: 20px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 100px;
      background-color: $text-color;
    }
  }

  .container {
    padding-top: 30px;
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: auto;
    gap: 1.5rem;
    grid-auto-rows: auto;
    place-items: center;
    justify-items: center;
    justify-content: center;
  }
  @media (min-width: 530px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 900px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
  background: $text-color;
}

::-webkit-scrollbar-thumb:hover {
  background: $clr-top;
}
</style>