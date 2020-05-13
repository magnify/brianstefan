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

          var items = document.querySelectorAll(".masthead .animated");

          if (items.length != 0) {
            items.forEach(function(item, i) {
              item.classList.add(items[i].getAttribute("data-animate-in"));
              item.classList.add(items[i].getAttribute("data-animate-delay"));
            });
          }

          break;
        case 1:
          document.title = "Head of Design at No Zebra - Brian Stefan Jensen";

          var items = document.querySelectorAll(".page--work .animated");

          if (items.length != 0) {
            items.forEach(function(item, i) {
              item.classList.add(items[i].getAttribute("data-animate-in"));
              item.classList.add(items[i].getAttribute("data-animate-delay"));
            });
          }

          break;
        case 2:
          document.title = "Internet and wildlife enthusiast - Brian Stefan Jensen";

          var items = document.querySelectorAll(".page--about .animated");

          if (items.length != 0) {
            items.forEach(function(item, i) {
              item.classList.add(items[i].getAttribute("data-animate-in"));
              item.classList.add(items[i].getAttribute("data-animate-delay"));
            });
          }

          break;
        case 3:
          document.title = "Contact - Brian Stefan Jensen";

          var items = document.querySelectorAll(".page--contact .animated");

          if (items.length != 0) {
            items.forEach(function(item, i) {
              item.classList.add(items[i].getAttribute("data-animate-in"));
              item.classList.add(items[i].getAttribute("data-animate-delay"));
            });
          }

          break;
      }

      if (activeSlide) {
        var items = document.querySelectorAll(".page .animated");

        if (items.length != 0) {
          items.forEach(function(item, i) {
            item.classList.add(items[i].getAttribute("data-animate-in"));
            item.classList.add(items[i].getAttribute("data-animate-delay"));
          });
        }
      }
    }
  }
});
