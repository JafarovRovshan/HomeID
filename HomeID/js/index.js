"use strict";

$(".owl-carousel").owlCarousel({
  loop: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});
