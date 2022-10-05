
import netflixlogo from "../../assets/mywork/netflix/netflixlogo.PNG"

import coin from "../../assets/mywork/coin.png"
import TODO from "../../assets/mywork/TODO.png"
import PF from "../../assets/mywork/PF.png"
import N from "../../assets/mywork/N.png"
import milk from "../../assets/mywork/milk.png"
import movie from "../../assets/mywork/movie.png"

import netflix from "../../assets/mywork/netflix/netflix.PNG"
import netflix1 from "../../assets/mywork/netflix/netflix1.PNG"
import netflix2 from "../../assets/mywork/netflix/netflix2.PNG"

import JSPage from "../../assets/mywork/JSPage.png"
import JsPage1 from "../../assets/mywork/JS/JsPage1.png"
import JsPage2 from "../../assets/mywork/JS/JsPage2.png"
import JsPage3 from "../../assets/mywork/JS/JsPage3.png"

import coinPage1 from "../../assets/mywork/coinPage/coinPage1.png"

import nPage1 from "../../assets/mywork/N/nPage1.png"
import nPage2 from "../../assets/mywork/N/nPage2.png"

import milk1 from "../../assets/mywork/milk/milk1.png"
import milk2 from "../../assets/mywork/milk/milk2.png"

import movie1 from "../../assets/mywork/movie/movie1.png"
import movie2 from "../../assets/mywork/movie/movie2.png"

import reduxts from "../../assets/mywork/reduxTs/reduxts.png"
import reduxts01 from "../../assets/mywork/reduxTs/reduxts01.png"

import port1 from "../../assets/mywork/Portfolio/Port01.png"
import port2 from "../../assets/mywork/Portfolio/Port02.png"
import port3 from "../../assets/mywork/Portfolio/Port03.png"

import CSS from '../../assets/skill/css.PNG'
import FM from '../../assets/skill/FM.PNG'
import HTML from '../../assets/skill/HTML.PNG'
import JS from '../../assets/skill/JS.PNG'
import react from '../../assets/skill/react.PNG'
import recoil from '../../assets/skill/recoil.PNG'
import redux from '../../assets/skill/redux.PNG'
import RQ from '../../assets/skill/RQ.PNG'
import TS from '../../assets/skill/TS.PNG'
import boot from '../../assets/skill/boot.PNG'
import beautifulDND from '../../assets/skill/beautifulDND.PNG'


const Menu = [
    {
      id: 1,
      image: netflixlogo,
      title: "Netflix",
      category: "React",
      images:[netflix,netflix1,netflix2],
      skill:[{img:FM,name:"FramerMotion"},{img:react,name:"react"},{img:redux,name:"redux"},{img:boot,name:"bootstrap "}],
      comment:"TMDB API를 이용해서 NetFlix 사이트를 만들어보았습니다. Movies 영화 정렬페이지에서 여러 API를 사용해서 장르별,연도별,인기순으로 영화를 정렬 할 수 있게 스스로 만들면서 API와 Redux를 다루는 스킬이 많이 향샹되었습니다.",
      myPage:"https://ekfdnjs22.netlify.app/",
      GitHub:"https://github.com/moonone22/netflix",
    },
    {
      id: 2,
      image: JSPage,
      title: "JS 실습페이지",
      category: "JS",
      images:[JsPage1,JsPage2,JsPage3],
      skill:[{img:JS,name:"JS"},{img:CSS,name:"CSS"},{img:HTML,name:"HTML"}],
      comment:"이전에는 JQuery,codepen에서 코드를 그대로 따와 동작을 구현했지만 처음으로 JS만 써서 페이지를 만들봤습니다.",
      myPage:"https://moonone22.github.io/",
      GitHub:"https://github.com/moonone22/moonone22.github.io",
    },
    {
      id: 3,
      image: coin,
      title: "COIN TRACKER",
      category: "React",
      images:[coinPage1],
      skill:[{img:RQ,name:"ReactQuery"},{img:recoil,name:"recoil"},{img:react,name:"react"},{img:TS,name:"TypeScript"}],
      comment:"Recoil과 ReactQuery를 써서 구현한 페이지입니다. 코인의 현재가치와 등락률등을 볼 수 있습니다.",
      myPage:"https://moonone22.github.io/coinpage/",
      GitHub:"https://github.com/moonone22/coinpage",
    },
    
    {
      id: 4,
      image: TODO,
      title: "TRELLO CLONE",
      category: "React",
      images:[TODO],
      skill:[{img:react,name:"react"},{img:TS,name:"TypeScript"},{img:recoil,name:"recoil"},{img:beautifulDND,name:"beautifulDND"}],
      comment:"beautiful-dnd로 Drag 기능을 이용한 TRELLO CLONE 페이지입니다.",
      myPage:"https://ekfdnjs22-todoclone.netlify.app/",
      GitHub:"https://github.com/moonone22/todoclone",
    },
    
    {
      id: 5,
      image: N,
      title: "현대 N",
      category: "CSS",
      images:[nPage1,nPage2],
      skill:[{img:CSS,name:"CSS"},{img:HTML,name:"HTML"}],
      comment:"그누보드를 활용해서 만들었고 부족함이 많은 첫작업물 입니다.",
      myPage:"http://rlaekfdnjs22.dothome.co.kr/",
      GitHub:null,
    },
    
    {
      id: 6,
      image: milk,
      title: "파스퇴르 우유 판매 페이지",
      category: "CSS",
      images:[milk1,milk2],
      skill:[{img:CSS,name:"CSS"},{img:HTML,name:"HTML"}],
      comment:"Flex를 많이 사용을 하였고 keyframe을 사용해서 움직임을 주었습니다. 반응형으로 만들어본 첫 페이지입니다.",
      myPage:"http://ekfdnjs22.dothome.co.kr/milk/",
      GitHub:null,
    },
    {
      id: 7,
      image: PF,
      title: "Portfolio",
      category: "React",
      images:[port1,port2,port3],
      skill:[{img:react,name:"react"},{img:FM,name:"FramerMotion"},{img:CSS,name:"CSS"}],
      comment:"FramerMotion을 최대한 많이 활용하면서 만든 저의 포트폴리오 사이트입니다. ",
      myPage:"https://ekfdnjs22.netlify.app/",
      GitHub:"https://github.com/moonone22/netflix",
    },
    {
      id: 8,
      image: movie,
      title: "드라마 홍보 페이지",
      category: "CSS",
      images:[movie1,movie2],
      skill:[{img:CSS,name:"CSS"},{img:HTML,name:"HTML"}],
      comment:"본페이지는 초기 작업물입니다. 고요의바다라는 드라마를 홍보하는 페이지 이고 그누보드를 활용했습니다.이페이지 포인트는 메인페이지 하단에에 스크롤을 내릴때 착률하는 우주선입니다.",
      myPage:"http://ekfdnjs22.dothome.co.kr/",
      GitHub:null,
    },
    {
      id: 9,
      image: reduxts,
      title: "Reudx TypeScript 이해",
      category: "React",
      images:[reduxts01],
      skill:[{img:redux,name:"redux"},{img:TS,name:"TS"}],
      comment:"본페이지는 Redux TypeScript를 같이 적용해보기 위해 연습한 페이지 입니다.",
      myPage:"https://reduxts.netlify.app/",
      GitHub:"https://github.com/moonone22/reduxTS",
    }
  ];
  

export default Menu