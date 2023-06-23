window.addEventListener("DOMContentLoaded", () => {
  // лоадер

  const popupd = document.querySelector('.popupd');
  const popupdName = document.querySelector('.popupd_text_content-name');
  const popupdTime = document.querySelector('.popupd_text_content-time-text');
  const names = [
    'Giuseppe',
    'Francesco',
    'Marco',
    'Alessandro'
  ];
  const letters = [
    'Rodríguez',
    'García',
    'González',
    'Martínez',
    'López',
    'Hernández',
    'Pérez',
    'Ramírez',
    'Sánchez',
    'Torres',
    'Gómez',
    'Díaz',
    'Vargas',
    'Franco',
    'Castro',
    'Jiménez',
    'Mendoza',
    'Ríos',
    'Morales',
    'Navarro'
  ];

  function showPopupd() {
    popupdName.textContent = getRandomName();
    popupdTime.textContent = getRandomTime();
    popupd.classList.add('show');
  }

  function hidePopupd() {
    popupd.classList.remove('show');
  }

  function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return names[randomIndex] + ' ' + randomLetter + '.';
  }
  function getRandomTime() {
    const randomTime = Math.floor(Math.random() * 1) + 1;
    return randomTime + ' secondo fa';
  }

  setTimeout(() => {
    showPopupd();
    setTimeout(() => {
      hidePopupd();
    }, 5000);
  }, 19500);
  setTimeout(() => {
    showPopupd();
    setTimeout(() => {
      hidePopupd();
    }, 5000);
  }, 59500);
  setTimeout(() => {
    showPopupd();
    setTimeout(() => {
      hidePopupd();
    }, 5000);
  }, 99500);

  // setInterval(() => {
  //   showPopupd();
  //   setTimeout(() => {
  //     hidePopupd();
  //   }, 5000);
  // }, 20000);

  // нижний счетчик попап 
  var element = document.getElementById("bottombar1");

  element.addEventListener("click", function () {
    element.classList.add("hidden-red");
  });
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setInterval(function () {
    var randomNumber = getRandomNumber(100, 350);
    document.getElementById("rancount").innerHTML = randomNumber;
  }, 10000);

  // function showPopupdAfterDelay() {
  //   setTimeout(() => {
  //     showPopupd();
  //     setTimeout(() => {
  //       hidePopupd();
  //     }, 5000);
  //   }, 5000);
  // }

  // showPopupdAfterDelay();

  window.addEventListener('scroll', stickyHeader);
  stickyHeader();

  const observerNums = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("chart__value--animation");
          return;
        }
        // entry.target.classList.remove("chart__value--animation");
      });
    },
    {
      threshold: 1,
      // rootMargin: '0px 0px -75px 0px',
    }
  );

  const bars = document.querySelectorAll(".chart__value");
  bars.forEach((bar) => {
    observerNums.observe(bar);
  });

  const observerNums2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("chart-v__value--animation");
          return;
        }
        // entry.target.classList.remove("chart__value--animation");
      });
    },
    {
      threshold: 1,
      // rootMargin: '0px 0px -75px 0px',
    }
  );

  const bars2 = document.querySelectorAll(".chart-v__value");
  bars2.forEach((bar) => {
    observerNums2.observe(bar);
  });
  // конец лоадера
});
