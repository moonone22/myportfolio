import React from 'react'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

import jscode2 from '../../assets/jscode2.png'
import jsCode1 from '../../assets/jsCode1.PNG'

import teacher1 from '../../assets/teacher1.png'
import teacher2 from '../../assets/teacher2.png'

import flutter01 from '../../assets/flutter01.png'
import flutter02 from '../../assets/flutter02.png'

const MyData = [
    {
      id: "JS",
      image: Image1,
      images:[jscode2,jsCode1],
      title: "JS 문법",
      description:
        "CLICK",
      comment:"JS문법는 유튜브를 통해서 주로 학습하였습니다. 특히 테트리스를 만들어보고 코드를 프린트해서 순서대로 책에 붙혀 모르는 문법 공부하고 코드가 자연습럽게 읽힐 때까지 보고 머리속에서 테트리스가 돌아갈때까지 보다보니 자연습럽게 JS문법 능력이 향상되어있었습니다. 또 이때 공부하며 개발이 재미있을수있겠구나 하고 생각했습니다."
    },
    {
      id: "JSX",
      image: Image2,
      images:[teacher1,teacher2],
      title: "JSX 문법",
      description:
      "CLICK",
      comment:"JS문법을 공부하고 JSX문법을 배우니 확실히 쉽다고 느껴졌습니다. 또 쉽게 느껴지니 정말 재밌게 강의를 들으며 공부했습니다. React는 위의 두분의 강의를 들으며 공부했습니다. 노마드코더에서는 ReactQuery,Recoil,Typescript,FramerMotiond,Styled-Components을 익혔고, 코딩알려주는누나에서는 Redux,React Bootstrap을 익혔습니다. 그후 스스로 Typescript와 Redux를 함께 사용해보며 이해도를 높였습니다."
    },
    {
      id: "Dart",
      image: Image3,
      images:[flutter01,flutter02],
      title: "Dart 문법",
      description:
      "CLICK",
       comment:"React Native 강의를 바로 들으려다 새로운 언어인 Dart를 배우는게 좀더 재밌을것같아서 Flutter 강의를 듣게되었습니다. 강의는 코딩애플에서 들었고 인스타그램을 만들어보며 익혔습니다. JS와 React를 배우고 나니 Dart언어도 전체적인 구조가 비슷하다고 많이 느꼈습니다.  현재 Dart 문법을 보고 이해만 할수있는 정도 이며 현재 노트북 사양으로 프로그램이 잘돌아가지 않아  잠시 STOP 하고 다시 React를 중점으로 공부를하고 있습니다."
    },
  ];

export default MyData