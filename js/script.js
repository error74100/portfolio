// 스플리팅 호출
$(function () {
  Splitting();
});

// 대메뉴 클릭 이벤트
$(function () {
  const header = document.querySelector('header');

  document.querySelectorAll('.gnb a').forEach((menu) => {
    menu.addEventListener('click', function (e) {
      e.preventDefault();

      const data = this.getAttribute('data-link');
      const target = document.querySelector('#' + data).offsetTop;

      window.scrollTo({
        top: target - header.offsetHeight,
        left: 0,
        behavior: 'smooth',
      });

      if (document.querySelector('.gnb').classList.contains('on')) {
        // 모바일 일때
        $('.gnb').toggleClass('on');
        $('.menuOpen').toggleClass('on');
        $('body').toggleClass('on');
      }
    });
  });
});

// header 영역 스크롤 방향 이벤트
$(function () {
  var prevScrollTop = 0;

  document.addEventListener('scroll', function () {
    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
    prevScrollTop = nowScrollTop;
  });
});

// 03. scrolla.js
$(function () {
  $('.animate').scrolla({
    mobile: true,
    onece: false,
  });
});

// simplyScroll
$(function () {
  $('.secSkills .list').simplyScroll({
    speed: 4,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});

// menuOpen
$(function () {
  $('.menuOpen').on('click', function () {
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
    $('body').toggleClass('on');
  });
});

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width:1024px)': function () {
      // visual 애니메이션(desktop)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.visual .imgBox',
            start: '60% 50%',
            end: '150%',
            scrub: 1,
            pin: true,
            // markers: true,
          },
        })
        .fromTo(
          '.visual .imgBox img',
          { transform: 'rotateY(-40deg) rotateX(50deg)', width: '50%', opacity: '0.2' },
          { transform: 'rotateY(0deg) rotateX(0deg)', width: '100%', opacity: '1' },
          0
        );
    },
    '(min-width: 801px) and (max-width: 1023px)': function () {
      // visual 애니메이션(중간)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.visual .imgBox',
            start: '60% 50%',
            end: '150%',
            scrub: 1,
            pin: true,
            // markers: true,
          },
        })
        .fromTo(
          '.visual .imgBox img',
          { transform: 'rotateY(-40deg) rotateX(50deg)', width: '50%', opacity: '0.2' },
          { transform: 'rotateY(0deg) rotateX(0deg)', width: '70%', opacity: '1' },
          0
        );
    },
    '(max-width: 800px) ': function () {
      // visual 애니메이션(mobile)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.visual .imgBox',
            start: '300% 50%',
            end: '300%',
            scrub: 1,
            pin: true,
            // markers: true,
          },
        })
        .fromTo(
          '.visual .imgBox img',
          { transform: 'translate3d(0px, 200px, 0px) rotateY(-40deg) rotateX(50deg)', width: '10%', opacity: '0.2' },
          { transform: 'translate3d(0px, 200px, 0px) rotateY(0deg) rotateX(0deg)', width: '30%', opacity: '1' },
          0
        );
    },
  });
});

// project 애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width:1024px)': function () {
      //01. 가로스크롤
      let list = gsap.utils.toArray('.project ul li');
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1), // 원래 리스트 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
        ease: 'none',
        scrollTrigger: {
          trigger: '.project',
          pin: true,
          scrub: 1,
          start: 'center center',
          end: '300%', // 뷰포트 높이의 300% -> 숫자가 클수록 느려진다.
          // markers: true,
        },
      });

      //02. .imgBox모션
      gsap.utils.toArray('.project .imgBox').forEach(function (imgBox) {
        //02-1:imgBox커지는 애니매이션 -> 화면 오른쪽에서 커지기 시작해서 중앙에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: 'center right',
              end: 'center center',
              scrub: true,
              // markers: true,
            },
          })
          .to(imgBox, { 'clip-path': 'inset(0%)', ease: 'none', duration: 1 }, 0);

        //02-2:imgBox커지는 애니매이션 -> 화면 중앙에서 작아지기 시작해서 왼쪽에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: 'center center',
              end: 'center left',
              scrub: true,
              // markers: true,
            },
          })
          .to(imgBox, { 'clip-path': 'inset(30%)', ease: 'none', duration: 1 }, 0);
      });

      //03. .textBox모션
      gsap.utils.toArray('.project ul li .textBox').forEach(function (textBox) {
        //03-1:imgBox커지는 애니매이션 -> 화면 오른쪽에서 커지기 시작해서 중앙에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: 'center 70%',
              end: 'center 40%',
              scrub: true,
              // markers: true,
            },
          })
          .to(textBox, { opacity: '1', x: -100 }, 0);

        //03-2:imgBox커지는 애니매이션 -> 화면 중앙에서 작아지기 시작해서 왼쪽에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: 'center 30%',
              end: 'center 20%',
              scrub: true,
              // markers: true,
            },
          })
          .to(textBox, { opacity: '0' }, 0);

        //04 .counter 텍스트 변경
        gsap.utils.toArray('.num').forEach(function (text) {
          let num = text.getAttribute('data-text');
          let counter = document.querySelector('.counter .now');

          ScrollTrigger.create({
            trigger: text,
            start: '0% center',
            end: '100% center',
            scrub: true,
            containerAnimation: scrollTween,
            onEnter: (self) => (counter.innerText = num), // 스크롤위치가 start를 지나 앞으로 이동할때 .counter .now에 적어준다.
            onEnterBack: (self) => (counter.innerText = num), // 스크롤위치가 end를 지나 뒤로 이동할때 .counter .now에 적어준다
            // markers: true,
          });
        });
      });
    },
  });
});

// The Goal 애니메이션
$(function () {
  // textMotion
  gsap.fromTo(
    '.textMotion .mask span',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.textMotion',
        pinnedContainer: '.textMotion',
        start: '0% 60%',
        end: '100% 60%',
        scrub: 1,
        // markers: true,
      },
    }
  );
});
