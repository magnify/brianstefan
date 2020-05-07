window.pepe = new Vue({
  el: "#app",
  name: "app",
  data: function() {
    return {
      options: {
        licenseKey: "CCC2F49A-6707493B-8FE375A3-F4886160",
        afterLoad: this.afterLoad,
        afterRender: this.afterRender,
        onLeave: this.onLeave,
        scrollBar: false,
        menu: "#navigation",
        navigation: true,
        slidesNavPosition: "top",
        anchors: ["home", "work", "about", "contact"],
        controlArrows: false
      }
    };
  },
  methods: {
    afterLoad: function() {
      if (this.$refs.fullpage.api != undefined) {
        activeSection = this.$refs.fullpage.api.getActiveSection().index;
        activeSlide = this.$refs.fullpage.api.getActiveSlide();
      } else {
        activeSection = 0;
        activeSlide = 0;
      }

      switch (activeSection) {
        case 0:
          document.title = "Brian Stefan Jensen - Frontend and UX Designer, Head of Design at No Zebra";

          document.querySelector("#masthead-headline").classList.add("fadeInDown");
          document.querySelector("#masthead-headline").classList.add("animated");
          document.querySelector("#masthead-headline").classList.add("delay-1s");

          document.querySelector("#masthead-image").classList.add("fadeInLeftBig");
          document.querySelector("#masthead-image").classList.add("animated");
          document.querySelector("#masthead-image").classList.add("delay-2s");

          document.querySelector("#masthead-lead-first").classList.add("fadeInDown");
          document.querySelector("#masthead-lead-first").classList.add("animated");
          document.querySelector("#masthead-lead-first").classList.add("delay-1s");

          document.querySelector("#masthead-lead-second").classList.add("fadeInDown");
          document.querySelector("#masthead-lead-second").classList.add("animated");
          document.querySelector("#masthead-lead-second").classList.add("delay-1s");

          document.querySelector("#masthead-background").classList.add("fadeInUp");
          document.querySelector("#masthead-background").classList.add("animated");
          document.querySelector("#masthead-background").classList.add("delay-1s");

          document.querySelector("#masthead-action").classList.add("fadeInUp");
          document.querySelector("#masthead-action").classList.add("animated");
          document.querySelector("#masthead-action").classList.add("delay-1s");

          break;
        case 1:
          document.title = "Head of Design at No Zebra - Brian Stefan Jensen";
          break;
        case 2:
          document.title = "Internet and wildlife enthusiast - Brian Stefan Jensen";
          break;
        case 3:
          document.title = "Contact - Brian Stefan Jensen";
          break;
      }
    }
  }
});
