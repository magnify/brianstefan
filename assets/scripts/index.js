window.pepe = new Vue({
  el: "#app",
  name: "app",
  data: function () {
    return {
      options: {
        licenseKey: "CCC2F49A-6707493B-8FE375A3-F4886160",
        onLeave: this.onLeave,
        onSlideLeave: this.onSlideLeave,
        afterSlideLoad: this.afterSlideLoad,
        afterLoad: this.afterLoad,
        scrollBar: false,
        fadingEffect: true,
        menu: "#navigation",
        navigation: true,
        slidesNavPosition: "top",
        anchors: ["home", "work", "about", "contact"],
        controlArrows: false,
      },
    };
  },
  methods: {
    onLeave: function () {
      var itemsLeave = document.querySelectorAll(".section [data-aos]");

      if (itemsLeave.length != 0) {
        itemsLeave.forEach(function (item, i) {
          item.classList.remove("aos-animate");
        });
      }
    },
    afterLoad: function () {
      if (this.$refs.fullpage.api != undefined) {
        activeSection = this.$refs.fullpage.api.getActiveSection().index;
      } else {
        activeSection = 0;
      }

      switch (activeSection) {
        case 0:
          document.title = "Frontend and UX Designer, Head of Design at No Zebra - Brian Stefan Jensen";
          break;
        case 1:
          document.title = "Head of Design at No Zebra - Brian Stefan Jensen";
          break;
        case 2:
          document.title = "Tech and reptiles - Brian Stefan Jensen";
          break;
        case 3:
          document.title = "Contact - Brian Stefan Jensen";
          break;
      }

      var itemsAfterLoad = document.querySelectorAll(".section.active [data-aos]");

      if (itemsAfterLoad.length != 0) {
        itemsAfterLoad.forEach(function (item, i) {
          item.classList.add("aos-animate");
        });
      }
    },
    onSlideLeave: function () {
      var itemsSlideLeave = document.querySelectorAll(".slide [data-aos]");

      if (itemsSlideLeave.length != 0) {
        itemsSlideLeave.forEach(function (item, i) {
          item.classList.remove("aos-animate");
        });
      }
    },
    afterSlideLoad: function () {
      var itemsSlideLoad = document.querySelectorAll(".slide.active [data-aos]");

      if (itemsSlideLoad.length != 0) {
        itemsSlideLoad.forEach(function (item, i) {
          item.classList.add("aos-animate");
        });
      }
    },
  },
});
