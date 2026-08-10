# J.hyun Portfolio

퍼블리셔 J.hyun의 개인 포트폴리오 웹사이트입니다. GSAP 스크롤 애니메이션을 활용한 인터랙티브한 원페이지 구성으로, 자기소개/스킬/프로젝트/연락처를 소개합니다.

## 주요 구성

- **Home (Visual)** — 메인 비주얼, 무한 텍스트 루프 애니메이션
- **Skill** — 보유 기술 스택 소개 (Photoshop, Figma, HTML/CSS, JavaScript, jQuery, React)
- **Project** — 참여 프로젝트 7종을 가로 스크롤 갤러리로 소개 (스크롤에 따라 이미지가 확대/전환)
- **Goal** — 지향하는 개발자상 소개
- **Contact** — 연락처(footer)

## 기술 스택

- HTML5 / CSS3
- jQuery 3.7.1
- [GSAP](https://gsap.com/) + ScrollTrigger — 스크롤 기반 애니메이션(핀, 가로 스크롤, clip-path 확대 등)
- [Splitting.js](https://splitting.js.org/) — 텍스트 분할 애니메이션
- jquery.scrolla, jquery.simplyscroll — 보조 스크롤/슬라이드 효과

별도의 빌드 도구 없이 정적 파일로 구성되어 있습니다.

## 폴더 구조

```
├── index.html
├── css/
│   ├── style.css
│   └── reset.css
├── js/
│   ├── script.js          # 커스텀 스크립트(GNB, 스크롤 애니메이션 등)
│   ├── jquery-3.7.1.min.js
│   ├── splitting.min.js
│   ├── jquery.scrolla.min.js
│   └── jquery.simplyscroll.min.js
├── img/                    # 이미지 및 프로젝트 썸네일
└── PSD/                    # 디자인 원본(psd)
```

## 포트폴리오 사이트 URL

🔗 [https://portfolio-jhyun.vercel.app/](https://portfolio-jhyun.vercel.app/)

## Contact

- Email: error7410@hanmail.net
