$(document).ready(() => {
  //menu//
  $(".navbar__menu-btn").on("click", function () {
    $(".navbar__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
  });
  
  //carousel//
  const slickOptions = {
    dots: false,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>'
  };
  $('.slider').slick(slickOptions);

  //footer mail form//
  $('.footer__form-button').on('click', () => {
    const email = $('#email').val();
    Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : email,
      Subject : "This is the subject",
      Body : "And this is the body"
      }).then(
        message => alert(message)
      );
  })
});