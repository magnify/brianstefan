window.pepe = new Vue({
  el: "#app",
  name: "app",
  data: function() {
    return {
      options: {
        licenseKey: "CCC2F49A-6707493B-8FE375A3-F4886160",
        afterLoad: this.afterLoad,
        afterRender: this.afterRender,
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
    afterRender: function() {},
    afterLoad: function(ga) {
      if (this.$refs.fullpage.api != undefined) {
        $activeSection = this.$refs.fullpage.api.getActiveSection().index;
      } else {
        $activeSection = 0;
      }

      // Home
      if ($activeSection === 0) {
        document.querySelector("#masthead-headline").classList.add("fadeIn");
        document.querySelector("#masthead-headline").classList.add("animated");
        document.querySelector("#masthead-headline").classList.add("delay-2s");

        document.querySelector("#masthead-image").classList.add("fadeInLeftBig");
        document.querySelector("#masthead-image").classList.add("animated");
        document.querySelector("#masthead-image").classList.add("delay-1s");

        document.querySelector("#masthead-lead-first").classList.add("fadeIn");
        document.querySelector("#masthead-lead-first").classList.add("animated");
        document.querySelector("#masthead-lead-first").classList.add("delay-3s");

        document.querySelector("#masthead-lead-second").classList.add("fadeIn");
        document.querySelector("#masthead-lead-second").classList.add("animated");
        document.querySelector("#masthead-lead-second").classList.add("delay-5s");

        document.querySelector("#masthead-background").classList.add("fadeInUp");
        document.querySelector("#masthead-background").classList.add("animated");
        document.querySelector("#masthead-background").classList.add("delay-5s");

        document.querySelector("#masthead-action").classList.add("fadeIn");
        document.querySelector("#masthead-action").classList.add("animated");
        document.querySelector("#masthead-action").classList.add("delay-7s");

        // Work
      } else if ($activeSection === 1) {
      }
    }
  }
});
