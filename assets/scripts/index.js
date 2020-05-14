window.pepe = new Vue({
  el: "#app",
  name: "app",
  data: function() {
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
        controlArrows: false
      }
    };
  },
  methods: {
    onLeave: function() {
      var itemsLeave = document.querySelectorAll(".section [data-aos]");

      if (itemsLeave.length != 0) {
        itemsLeave.forEach(function(item, i) {
          item.classList.remove("aos-animate");
        });
      }
    },
    afterLoad: function() {
      var itemsAfterLoad = document.querySelectorAll(".section.active [data-aos]");

      if (itemsAfterLoad.length != 0) {
        itemsAfterLoad.forEach(function(item, i) {
          item.classList.add("aos-animate");
        });
      }
    },
    onSlideLeave: function() {
      var itemsSlideLeave = document.querySelectorAll(".slide [data-aos]");

      if (itemsSlideLeave.length != 0) {
        itemsSlideLeave.forEach(function(item, i) {
          item.classList.remove("aos-animate");
        });
      }
    },
    afterSlideLoad: function() {
      var itemsSlideLoad = document.querySelectorAll(".slide.active [data-aos]");

      if (itemsSlideLoad.length != 0) {
        itemsSlideLoad.forEach(function(item, i) {
          item.classList.add("aos-animate");
        });
      }
    }
  }
});
