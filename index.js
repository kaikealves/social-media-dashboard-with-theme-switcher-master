function toggleToLight(checkboxElem) {
    if(checkboxElem.checked) {
      document.body.classList.add("light_background");
      document.getElementsByClassName("container")[0].classList.add('container--light');
      document.getElementsByClassName("header__title__subtitle")[0].classList.add('header__title__subtitle--light');
      [...document.getElementsByClassName("card")].forEach(
        (element) => {
            element.classList.add("card--light");
      });
      [...document.getElementsByClassName("card__overview_today__title")].forEach(
        (element) => {
            element.classList.add("card__overview_today__title--light");
      });
    } else {
      document.body.classList.remove("light_background");
      document.getElementsByClassName("container")[0].classList.remove("container--light");
      document.getElementsByClassName("header__title__subtitle")[0].classList.remove('header__title__subtitle--light');
      // header__title__subtitle
      [...document.getElementsByClassName("card")].forEach(
        (element) => {
            element.classList.remove("card--light");
      });
      [...document.getElementsByClassName("card__overview_today__title")].forEach(
        (element) => {
            element.classList.remove("card__overview_today__title--light");
      });
    }
  }