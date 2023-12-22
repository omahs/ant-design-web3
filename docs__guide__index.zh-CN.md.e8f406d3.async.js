"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6981],{58593:function(j,r,_){_.r(r);var x=_(25158),l=_(8709),h=_(77576),d=_(14593),o=_(31240),t=_(5995),p=_(47308),g=_(44768),a=_(69271),m=_(50959),e=_(11527);function c(){var v=(0,a.eL)(),n=v.texts;return(0,e.jsx)(a.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"ant-design-web3",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ant-design-web3",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Ant Design Web3"]}),(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("a",{href:"https://ant.design/index-cn",children:n[1].value}),n[2].value]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[4].value,(0,e.jsx)("code",{children:n[5].value}),n[6].value,(0,e.jsx)("code",{children:n[7].value}),n[8].value,(0,e.jsx)("code",{children:n[9].value}),n[10].value,(0,e.jsx)("a",{href:"https://docs.ethers.org/v6/",children:n[11].value}),n[12].value,(0,e.jsx)("a",{href:"https://viem.sh/",children:n[13].value}),n[14].value,(0,e.jsx)("a",{href:"https://web3js.org/",children:n[15].value}),n[16].value]}),(0,e.jsxs)("li",{children:[n[17].value,(0,e.jsx)("code",{children:n[18].value}),n[19].value,(0,e.jsx)("code",{children:n[20].value}),n[21].value,(0,e.jsx)("a",{href:"https://wagmi.sh/",children:n[22].value}),n[23].value]}),(0,e.jsxs)("li",{children:[n[24].value,(0,e.jsx)("code",{children:n[25].value}),n[26].value,(0,e.jsx)(a.rU,{to:"/zh-CN/guide/adapter",children:n[27].value}),n[28].value]})]}),(0,e.jsxs)("p",{children:[n[29].value,(0,e.jsx)("code",{children:n[30].value}),n[31].value]})]}),(0,e.jsx)(a.Dl,{demo:{id:"docs-guide-demo-guide"},previewerProps:{filename:"docs/guide/demos/guide.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("p",{children:[n[32].value,(0,e.jsx)(a.rU,{to:"/zh-CN/guide/quick-start",children:n[33].value}),n[34].value]})})]})})}r.default=c},44768:function(j,r,_){_.d(r,{Z:function(){return y}});var x=_(18840),l=_.n(x),h=_(50959),d=_(70001),o=_(29466),t=_(11527),p,g=function(){var s=(0,d.Fg)(),i=(0,d.vJ)(p||(p=l()([`
    ul.anticons-list {
      margin: 10px 0;
      overflow: hidden;
      direction: ltr;
      list-style: none;

      li {
        position: relative;
        float: left;
        width: 16.66%;
        height: 100px;
        margin: 3px 0;
        padding: 10px 0 0;
        overflow: hidden;
        color: #555;
        text-align: center;
        list-style: none;
        background-color: inherit;
        border-radius: 4px;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

        .rtl & {
          margin: 3px 0;
          padding: 10px 0 0;
        }

        .anticon {
          margin: 12px 0 8px;
          font-size: 36px;
          transition: transform 0.3s ease-in-out;
          will-change: transform;
        }

        .anticon-class {
          display: block;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
            monospace;
          white-space: nowrap;
          text-align: center;
          transform: scale(0.83);

          .ant-badge {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: color 0.3s ease-in-out;
          }
        }

        &:hover {
          color: #fff;
          background-color: `,`;

          .anticon {
            transform: scale(1.4);
          }

          .ant-badge {
            color: #fff;
          }
        }

        &.CircleFilled .anticon {
          border-radius: 50%;
        }

        &.CircleFilled:hover {
          color: #000;

          .anticon {
            color: #000;
            background-color: #000;
          }
        }

        &.isWhite .anticon {
          background-color: #000;
        }

        &.copied:hover {
          color: rgba(255, 255, 255, 0.2);
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          line-height: 110px;
          text-align: center;
          background: #1677ff;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
          content: 'Copied!';
        }

        &.copied::after {
          opacity: 1;
        }
      }
    }

    .copied-code {
      padding: 2px 4px;
      font-size: 12px;
      background: #f5f5f5;
      border-radius: 2px;
    }
  `])),s.colorPrimary);return(0,t.jsx)(i,{})},a=g,m,e,c,v=h.lazy(function(){return Promise.all([_.e(9611),_.e(6057),_.e(5903),_.e(9246),_.e(9579)]).then(_.bind(_,49579))}),n=(0,d.kc)(function(u){var s=u.css;return{searchWrapper:s(m||(m=l()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:s(e||(e=l()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:s(c||(c=l()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),f=function(){var s=n(),i=s.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:i.searchWrapper,children:[(0,t.jsx)(o.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(o.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(o.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:i.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,t.jsx)("div",{className:i.skeletonWrapper,children:(0,t.jsx)(o.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},b=function(){return(0,t.jsxs)(h.Suspense,{fallback:(0,t.jsx)(f,{}),children:[(0,t.jsx)(a,{}),(0,t.jsx)(v,{})]})},y=b}}]);