"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6074],{90430:function(E,v,n){n.r(v);var f=n(25158),u=n(8709),m=n(77576),h=n(14593),d=n(31240),s=n(5995),_=n(47308),t=n(44768),p=n(39517),g=n(77405),i=n(69271),x=n(50959),e=n(11527);function y(){var j=(0,i.eL)(),a=j.texts;return(0,e.jsx)(i.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"internationalization",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#internationalization",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Internationalization"]}),(0,e.jsx)("p",{children:a[0].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[a[1].value,(0,e.jsx)("code",{children:a[2].value}),a[3].value]}),(0,e.jsxs)("li",{children:[a[4].value,(0,e.jsx)("code",{children:a[5].value}),a[6].value,(0,e.jsx)(i.rU,{to:"/components/web3-config-provider",children:a[7].value}),a[8].value]}),(0,e.jsxs)("li",{children:[a[9].value,(0,e.jsx)("code",{children:a[10].value}),a[11].value]})]})]}),(0,e.jsx)(i.Dl,{demo:{id:"docs-guide-intl-demo-intl"},previewerProps:{title:"Component configuration",filename:"docs/guide/demos/intl.tsx"}}),(0,e.jsx)(i.Dl,{demo:{id:"docs-guide-intl-demo-intl-with-provider"},previewerProps:{title:"Global configuration",filename:"docs/guide/demos/intl-with-provider.tsx"}}),(0,e.jsx)(i.Dl,{demo:{id:"docs-guide-intl-demo-intl-with-builtin"},previewerProps:{title:"Built-in language",filename:"docs/guide/demos/intl-with-builtin.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[a[12].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts",children:a[13].value}),a[14].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/pulls",children:a[15].value}),a[16].value]}),(0,e.jsxs)("p",{children:[a[17].value,(0,e.jsx)("code",{children:a[18].value}),a[19].value,(0,e.jsx)("code",{children:a[20].value}),a[21].value,(0,e.jsx)("code",{children:a[22].value}),a[23].value,(0,e.jsx)("code",{children:a[24].value}),a[25].value]})]})]})})}v.default=y},44768:function(E,v,n){n.d(v,{Z:function(){return w}});var f=n(18840),u=n.n(f),m=n(50959),h=n(70001),d=n(29466),s=n(11527),_,t=function(){var r=(0,h.Fg)(),l=(0,h.vJ)(_||(_=u()([`
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
  `])),r.colorPrimary);return(0,s.jsx)(l,{})},p=t,g,i,x,e=m.lazy(function(){return Promise.all([n.e(9611),n.e(6057),n.e(5903),n.e(9246),n.e(9579)]).then(n.bind(n,49579))}),y=(0,h.kc)(function(b){var r=b.css;return{searchWrapper:r(g||(g=u()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:r(i||(i=u()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:r(x||(x=u()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),j=function(){var r=y(),l=r.styles;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:l.searchWrapper,children:[(0,s.jsx)(d.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,s.jsx)(d.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,s.jsx)(d.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,s.jsx)("div",{className:l.fallbackWrapper,children:Array(24).fill(1).map(function(c,o){return(0,s.jsx)("div",{className:l.skeletonWrapper,children:(0,s.jsx)(d.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},o)})})]})},a=function(){return(0,s.jsxs)(m.Suspense,{fallback:(0,s.jsx)(j,{}),children:[(0,s.jsx)(p,{}),(0,s.jsx)(e,{})]})},w=a},39517:function(E,v,n){n.d(v,{Z:function(){return b}});var f=n(18840),u=n.n(f),m=n(31240),h=n(50959),d=n(85608),s=n(45997),_=n(70001),t=n(11527),p=function(l){var c=l.className,o=l.style;return(0,t.jsx)("svg",{className:c,style:o,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em",children:(0,t.jsx)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"})})},g=p,i=function(l){var c=l.className,o=l.style;return(0,t.jsx)("svg",{className:c,style:o,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",children:(0,t.jsx)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"})})},x=i,e=function(l){var c=l.className,o=l.style;return(0,t.jsx)("svg",{className:c,style:o,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em",children:(0,t.jsx)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"})})},y=e,j,a=(0,_.kc)(function(){return{packageManager:(0,_.iv)(j||(j=u()([`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-inline-end: 8px;
    }
  `])))}}),w=function(l){var c=l.npm,o=l.yarn,M=l.pnpm,D=a(),I=D.styles,P=h.useMemo(function(){return[{key:"npm",children:c?(0,t.jsx)(m.Z,{lang:"bash",children:c}):null,label:(0,t.jsxs)("div",{className:I.packageManager,children:[(0,t.jsx)(g,{}),(0,t.jsx)("span",{children:"npm"})]})},{key:"yarn",children:o?(0,t.jsx)(m.Z,{lang:"bash",children:o}):null,label:(0,t.jsxs)("div",{className:I.packageManager,children:[(0,t.jsx)(y,{}),(0,t.jsx)("span",{children:"yarn"})]})},{key:"pnpm",children:M?(0,t.jsx)(m.Z,{lang:"bash",children:M}):null,label:(0,t.jsxs)("div",{className:I.packageManager,children:[(0,t.jsx)(x,{}),(0,t.jsx)("span",{children:"pnpm"})]})}].filter(function(O){return O.children})},[c,o,M]);return(0,t.jsx)(d.ZP,{theme:{components:{Tabs:{horizontalMargin:"0"}}},children:(0,t.jsx)(s.Z,{className:"markdown",size:"small",defaultActiveKey:"npm",items:P})})},b=w},77405:function(E,v,n){var f=n(39517),u=n(11527),m=function(d){var s=d.packageNames,_=d.save,t=!1;(_==="true"||_!=="false")&&(t=!0);var p=t?"".concat(_==="true"?"--save":"--save".concat(_==="dev"?"-dev":"-".concat(_))," "):"",g="npm install ".concat(s," ").concat(p),i="yarn add ".concat(s),x="pnpm add ".concat(s," ").concat(p);return(0,u.jsx)(f.Z,{npm:g,yarn:i,pnpm:x})};v.Z=m}}]);
