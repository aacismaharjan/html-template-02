// Testimonial Carousel
$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1500: {
      items: 3,
    },
  },
})

// $(window).on("load", function () {
//   $(".preloader").fadeOut("slow")
// })

$(document).ready(function () {
  // Scroll to top
  // $(".btn-top").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 800)
  // })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".btn-top").fadeIn()
    } else {
      $(".btn-top").fadeOut()
    }

    if ($(this).scrollTop() > 200) {
      $(".header").addClass("sticky")
    } else {
      $(".header").removeClass("sticky")
    }
  })

  // Add scrollspy to <body>
  $("body").scrollspy({ target: ".navbar-nav", offset: 67 })

  // Add smooth scrolling on all links inside the navbar
  $(".navbar-nav .nav-link").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        300,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      )

      // Hide navbar on mobile
      $(".navbar-collapse").collapse("hide")
    } // End if
  })
})
