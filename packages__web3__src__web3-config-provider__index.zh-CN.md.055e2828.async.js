"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[2780],{79464:function(v,r,n){n.r(r);var g=n(25158),a=n(8709),u=n(77576),d=n(14593),o=n(31240),e=n(5995),p=n(47308),x=n(44768),i=n(69271),m=n(50959),_=n(11527);function l(){var h=(0,i.eL)(),f=h.texts;return(0,_.jsx)(i.dY,{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"web3configprovider",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#web3configprovider",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Web3ConfigProvider"]}),(0,_.jsx)("p",{children:f[0].value}),(0,_.jsxs)("h2",{id:"\u57FA\u672C\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u4F7F\u7528"]})]}),(0,_.jsx)(i.Dl,{demo:{id:"web3-config-provider-demo-basic"},previewerProps:{filename:"packages/web3/src/web3-config-provider/demos/basic.tsx"}})]})})}r.default=l},44768:function(v,r,n){n.d(r,{Z:function(){return y}});var g=n(18840),a=n.n(g),u=n(50959),d=n(70001),o=n(29466),e=n(11527),p,x=function(){var t=(0,d.Fg)(),s=(0,d.vJ)(p||(p=a()([`
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
  `])),t.colorPrimary);return(0,e.jsx)(s,{})},i=x,m,_,l,h=u.lazy(function(){return Promise.all([n.e(9611),n.e(6057),n.e(5903),n.e(9246),n.e(9579)]).then(n.bind(n,49579))}),f=(0,d.kc)(function(c){var t=c.css;return{searchWrapper:t(m||(m=a()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:t(_||(_=a()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:t(l||(l=a()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),b=function(){var t=f(),s=t.styles;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:s.searchWrapper,children:[(0,e.jsx)(o.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,e.jsx)(o.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,e.jsx)(o.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,e.jsx)("div",{className:s.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,e.jsx)("div",{className:s.skeletonWrapper,children:(0,e.jsx)(o.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},j=function(){return(0,e.jsxs)(u.Suspense,{fallback:(0,e.jsx)(b,{}),children:[(0,e.jsx)(i,{}),(0,e.jsx)(h,{})]})},y=j}}]);