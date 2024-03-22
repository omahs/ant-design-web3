"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5416],{92484:function(q,x){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};x.Z=e},15591:function(q,x,e){e.d(x,{Z:function(){return E}});var o=e(50959),P=e(65651),B=e(2387),I=e(34133),H=e(94436),X=e(4365),S=e(82187),z=e.n(S),c=e(10091),r=e(50361),v=e(86739),a=e(93289),s=e(70833),M=e(30817),p=e(11783);const D=(t,n,d,l,i)=>({background:t,border:`${(0,s.unit)(l.lineWidth)} ${l.lineType} ${n}`,[`${i}-icon`]:{color:d}}),u=t=>{const{componentCls:n,motionDurationSlow:d,marginXS:l,marginSM:i,fontSize:W,fontSizeLG:L,lineHeight:f,borderRadiusLG:O,motionEaseInOutCirc:U,withDescriptionIconSize:F,colorText:oe,colorTextHeading:Q,withDescriptionPadding:y,defaultPadding:te}=t;return{[n]:Object.assign(Object.assign({},(0,M.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:te,wordWrap:"break-word",borderRadius:O,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:l,lineHeight:0},["&-description"]:{display:"none",fontSize:W,lineHeight:f},"&-message":{color:Q},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${d} ${U}, opacity ${d} ${U},
        padding-top ${d} ${U}, padding-bottom ${d} ${U},
        margin-bottom ${d} ${U}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",padding:y,[`${n}-icon`]:{marginInlineEnd:i,fontSize:F,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:l,color:Q,fontSize:L},[`${n}-description`]:{display:"block",color:oe}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},R=t=>{const{componentCls:n,colorSuccess:d,colorSuccessBorder:l,colorSuccessBg:i,colorWarning:W,colorWarningBorder:L,colorWarningBg:f,colorError:O,colorErrorBorder:U,colorErrorBg:F,colorInfo:oe,colorInfoBorder:Q,colorInfoBg:y}=t;return{[n]:{"&-success":D(i,l,d,t,n),"&-info":D(y,Q,oe,t,n),"&-warning":D(f,L,W,t,n),"&-error":Object.assign(Object.assign({},D(F,U,O,t,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},_=t=>{const{componentCls:n,iconCls:d,motionDurationMid:l,marginXS:i,fontSizeIcon:W,colorIcon:L,colorIconHover:f}=t;return{[n]:{["&-action"]:{marginInlineStart:i},[`${n}-close-icon`]:{marginInlineStart:i,padding:0,overflow:"hidden",fontSize:W,lineHeight:(0,s.unit)(W),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${d}-close`]:{color:L,transition:`color ${l}`,"&:hover":{color:f}}},"&-close-text":{color:L,transition:`color ${l}`,"&:hover":{color:f}}}}},b=t=>({withDescriptionIconSize:t.fontSizeHeading3,defaultPadding:`${t.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${t.paddingMD}px ${t.paddingContentHorizontalLG}px`});var C=(0,p.I$)("Alert",t=>[u(t),R(t),_(t)],b),T=function(t,n){var d={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&n.indexOf(l)<0&&(d[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,l=Object.getOwnPropertySymbols(t);i<l.length;i++)n.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(t,l[i])&&(d[l[i]]=t[l[i]]);return d};const A={success:P.Z,info:X.Z,error:B.Z,warning:H.Z},Z=t=>{const{icon:n,prefixCls:d,type:l}=t,i=A[l]||null;return n?(0,v.wm)(n,o.createElement("span",{className:`${d}-icon`},n),()=>({className:z()(`${d}-icon`,{[n.props.className]:n.props.className})})):o.createElement(i,{className:`${d}-icon`})},m=t=>{const{isClosable:n,prefixCls:d,closeIcon:l,handleClose:i,ariaProps:W}=t,L=l===!0||l===void 0?o.createElement(I.Z,null):l;return n?o.createElement("button",Object.assign({type:"button",onClick:i,className:`${d}-close-icon`,tabIndex:0},W),L):null};var h=t=>{const{description:n,prefixCls:d,message:l,banner:i,className:W,rootClassName:L,style:f,onMouseEnter:O,onMouseLeave:U,onClick:F,afterClose:oe,showIcon:Q,closable:y,closeText:te,closeIcon:ne,action:re}=t,ce=T(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[le,de]=o.useState(!1),ue=o.useRef(null),{getPrefixCls:fe,direction:ge,alert:g}=o.useContext(a.E_),w=fe("alert",d),[ve,Ce,be]=C(w),me=G=>{var Y;de(!0),(Y=t.onClose)===null||Y===void 0||Y.call(t,G)},ie=o.useMemo(()=>t.type!==void 0?t.type:i?"warning":"info",[t.type,i]),Ee=o.useMemo(()=>typeof y=="object"&&y.closeIcon||te?!0:typeof y=="boolean"?y:ne!==!1&&ne!==null&&ne!==void 0?!0:!!(g!=null&&g.closable),[te,ne,y,g==null?void 0:g.closable]),ae=i&&Q===void 0?!0:Q,he=z()(w,`${w}-${ie}`,{[`${w}-with-description`]:!!n,[`${w}-no-icon`]:!ae,[`${w}-banner`]:!!i,[`${w}-rtl`]:ge==="rtl"},g==null?void 0:g.className,W,L,be,Ce),pe=(0,r.Z)(ce,{aria:!0,data:!0}),_e=o.useMemo(()=>{var G,Y;return typeof y=="object"&&y.closeIcon?y.closeIcon:te||(ne!==void 0?ne:typeof(g==null?void 0:g.closable)=="object"&&(!((G=g==null?void 0:g.closable)===null||G===void 0)&&G.closeIcon)?(Y=g==null?void 0:g.closable)===null||Y===void 0?void 0:Y.closeIcon:g==null?void 0:g.closeIcon)},[ne,y,te,g==null?void 0:g.closeIcon]),Oe=o.useMemo(()=>{const G=y??(g==null?void 0:g.closable);if(typeof G=="object"){const{closeIcon:Y}=G;return T(G,["closeIcon"])}return{}},[y,g==null?void 0:g.closable]);return ve(o.createElement(c.default,{visible:!le,motionName:`${w}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:G=>({maxHeight:G.offsetHeight}),onLeaveEnd:oe},G=>{let{className:Y,style:se}=G;return o.createElement("div",Object.assign({ref:ue,"data-show":!le,className:z()(he,Y),style:Object.assign(Object.assign(Object.assign({},g==null?void 0:g.style),f),se),onMouseEnter:O,onMouseLeave:U,onClick:F,role:"alert"},pe),ae?o.createElement(Z,{description:n,icon:t.icon,prefixCls:w,type:ie}):null,o.createElement("div",{className:`${w}-content`},l?o.createElement("div",{className:`${w}-message`},l):null,n?o.createElement("div",{className:`${w}-description`},n):null),re?o.createElement("div",{className:`${w}-action`},re):null,o.createElement(m,{isClosable:Ee,prefixCls:w,closeIcon:_e,handleClose:me,ariaProps:Oe}))}))},k=e(13490),N=e(77013),V=e(95629),K=e(91396),J=function(t){(0,K.Z)(n,t);function n(){var d;return(0,k.Z)(this,n),d=(0,V.Z)(this,n,arguments),d.state={error:void 0,info:{componentStack:""}},d}return(0,N.Z)(n,[{key:"componentDidCatch",value:function(l,i){this.setState({error:l,info:i})}},{key:"render",value:function(){const{message:l,description:i,children:W}=this.props,{error:L,info:f}=this.state,O=f&&f.componentStack?f.componentStack:null,U=typeof l>"u"?(L||"").toString():l,F=typeof i>"u"?O:i;return L?o.createElement(h,{type:"error",message:U,description:o.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},F)}):W}}]),n}(o.Component);const $=h;$.ErrorBoundary=J;var E=$},95404:function(q,x,e){e.d(x,{Ag:function(){return I},IH:function(){return H},w:function(){return B}});var o=e(50959);const P=o.createContext(null),B=P.Provider;x.ZP=P;const I=o.createContext(null),H=I.Provider},6384:function(q,x,e){var o=e(50959),P=e(82187),B=e.n(P),I=e(29953),H=e(50361),X=e(93289),S=e(19202),z=e(95404),c=e(29503),r=e(98010),v=e(54063);const a=o.forwardRef((s,M)=>{const{getPrefixCls:p,direction:D}=o.useContext(X.E_),[u,R]=(0,I.Z)(s.defaultValue,{value:s.value}),_=f=>{const O=u,U=f.target.value;"value"in s||R(U);const{onChange:F}=s;F&&U!==O&&F(f)},{prefixCls:b,className:C,rootClassName:T,options:A,buttonStyle:Z="outline",disabled:m,children:j,size:h,style:k,id:N,onMouseEnter:V,onMouseLeave:K,onFocus:ee,onBlur:J}=s,$=p("radio",b),E=`${$}-group`,t=(0,v.Z)($),[n,d,l]=(0,r.Z)($,t);let i=j;A&&A.length>0&&(i=A.map(f=>typeof f=="string"||typeof f=="number"?o.createElement(c.Z,{key:f.toString(),prefixCls:$,disabled:m,value:f,checked:u===f},f):o.createElement(c.Z,{key:`radio-group-value-options-${f.value}`,prefixCls:$,disabled:f.disabled||m,value:f.value,checked:u===f.value,title:f.title,style:f.style,id:f.id,required:f.required},f.label)));const W=(0,S.Z)(h),L=B()(E,`${E}-${Z}`,{[`${E}-${W}`]:W,[`${E}-rtl`]:D==="rtl"},C,T,d,l,t);return n(o.createElement("div",Object.assign({},(0,H.Z)(s,{aria:!0,data:!0}),{className:L,style:k,onMouseEnter:V,onMouseLeave:K,onFocus:ee,onBlur:J,id:N,ref:M}),o.createElement(z.w,{value:{onChange:_,value:u,disabled:s.disabled,name:s.name,optionType:s.optionType}},i)))});x.Z=o.memo(a)},66331:function(q,x,e){var o=e(6384),P=e(29503),B=e(25385);const I=P.Z;I.Button=B.Z,I.Group=o.Z,I.__ANT_RADIO=!0,x.ZP=I},29503:function(q,x,e){var o=e(50959),P=e(82187),B=e.n(P),I=e(90607),H=e(78404),X=e(2903),S=e(87922),z=e(93289),c=e(66256),r=e(73020),v=e(95404),a=e(98010),s=e(54063),M=function(u,R){var _={};for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&R.indexOf(b)<0&&(_[b]=u[b]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,b=Object.getOwnPropertySymbols(u);C<b.length;C++)R.indexOf(b[C])<0&&Object.prototype.propertyIsEnumerable.call(u,b[C])&&(_[b[C]]=u[b[C]]);return _};const p=(u,R)=>{var _,b;const C=o.useContext(v.ZP),T=o.useContext(v.Ag),{getPrefixCls:A,direction:Z,radio:m}=o.useContext(z.E_),j=o.useRef(null),h=(0,H.sQ)(R,j),{isFormItemInput:k}=o.useContext(r.aM),N=oe=>{var Q,y;(Q=u.onChange)===null||Q===void 0||Q.call(u,oe),(y=C==null?void 0:C.onChange)===null||y===void 0||y.call(C,oe)},{prefixCls:V,className:K,rootClassName:ee,children:J,style:$,title:E}=u,t=M(u,["prefixCls","className","rootClassName","children","style","title"]),n=A("radio",V),d=((C==null?void 0:C.optionType)||T)==="button",l=d?`${n}-button`:n,i=(0,s.Z)(n),[W,L,f]=(0,a.Z)(n,i),O=Object.assign({},t),U=o.useContext(c.Z);C&&(O.name=C.name,O.onChange=N,O.checked=u.value===C.value,O.disabled=(_=O.disabled)!==null&&_!==void 0?_:C.disabled),O.disabled=(b=O.disabled)!==null&&b!==void 0?b:U;const F=B()(`${l}-wrapper`,{[`${l}-wrapper-checked`]:O.checked,[`${l}-wrapper-disabled`]:O.disabled,[`${l}-wrapper-rtl`]:Z==="rtl",[`${l}-wrapper-in-form-item`]:k},m==null?void 0:m.className,K,ee,L,f,i);return W(o.createElement(X.Z,{component:"Radio",disabled:O.disabled},o.createElement("label",{className:F,style:Object.assign(Object.assign({},m==null?void 0:m.style),$),onMouseEnter:u.onMouseEnter,onMouseLeave:u.onMouseLeave,title:E},o.createElement(I.Z,Object.assign({},O,{className:B()(O.className,!d&&S.A),type:"radio",prefixCls:l,ref:h})),J!==void 0?o.createElement("span",null,J):null)))},D=o.forwardRef(p);x.Z=D},25385:function(q,x,e){var o=e(50959),P=e(93289),B=e(95404),I=e(29503),H=function(S,z){var c={};for(var r in S)Object.prototype.hasOwnProperty.call(S,r)&&z.indexOf(r)<0&&(c[r]=S[r]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,r=Object.getOwnPropertySymbols(S);v<r.length;v++)z.indexOf(r[v])<0&&Object.prototype.propertyIsEnumerable.call(S,r[v])&&(c[r[v]]=S[r[v]]);return c};const X=(S,z)=>{const{getPrefixCls:c}=o.useContext(P.E_),{prefixCls:r}=S,v=H(S,["prefixCls"]),a=c("radio",r);return o.createElement(B.IH,{value:"button"},o.createElement(I.Z,Object.assign({prefixCls:a},v,{type:"radio",ref:z})))};x.Z=o.forwardRef(X)},98010:function(q,x,e){var o=e(70833),P=e(30817),B=e(11783),I=e(10818);const H=c=>{const{componentCls:r,antCls:v}=c,a=`${r}-group`;return{[a]:Object.assign(Object.assign({},(0,P.Wf)(c)),{display:"inline-block",fontSize:0,[`&${a}-rtl`]:{direction:"rtl"},[`${v}-badge ${v}-badge-count`]:{zIndex:1},[`> ${v}-badge:not(:first-child) > ${v}-button-wrapper`]:{borderInlineStart:"none"}})}},X=c=>{const{componentCls:r,wrapperMarginInlineEnd:v,colorPrimary:a,radioSize:s,motionDurationSlow:M,motionDurationMid:p,motionEaseInOutCirc:D,colorBgContainer:u,colorBorder:R,lineWidth:_,colorBgContainerDisabled:b,colorTextDisabled:C,paddingXS:T,dotColorDisabled:A,lineType:Z,radioColor:m,radioBgColor:j,calc:h}=c,k=`${r}-inner`,N=4,V=h(s).sub(h(N).mul(2)),K=h(1).mul(s).equal();return{[`${r}-wrapper`]:Object.assign(Object.assign({},(0,P.Wf)(c)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:v,cursor:"pointer",[`&${r}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:c.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${(0,o.unit)(_)} ${Z} ${a}`,borderRadius:"50%",visibility:"hidden",content:'""'},[r]:Object.assign(Object.assign({},(0,P.Wf)(c)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${r}-wrapper:hover &,
        &:hover ${k}`]:{borderColor:a},[`${r}-input:focus-visible + ${k}`]:Object.assign({},(0,P.oN)(c)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:K,height:K,marginBlockStart:h(1).mul(s).div(-2).equal(),marginInlineStart:h(1).mul(s).div(-2).equal(),backgroundColor:m,borderBlockStart:0,borderInlineStart:0,borderRadius:K,transform:"scale(0)",opacity:0,transition:`all ${M} ${D}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:K,height:K,backgroundColor:u,borderColor:R,borderStyle:"solid",borderWidth:_,borderRadius:"50%",transition:`all ${p}`},[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[k]:{borderColor:a,backgroundColor:j,"&::after":{transform:`scale(${c.calc(c.dotSize).div(s).equal()})`,opacity:1,transition:`all ${M} ${D}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[k]:{backgroundColor:b,borderColor:R,cursor:"not-allowed","&::after":{backgroundColor:A}},[`${r}-input`]:{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:C,cursor:"not-allowed"},[`&${r}-checked`]:{[k]:{"&::after":{transform:`scale(${h(V).div(s).equal({unit:!1})})`}}}},[`span${r} + *`]:{paddingInlineStart:T,paddingInlineEnd:T}})}},S=c=>{const{buttonColor:r,controlHeight:v,componentCls:a,lineWidth:s,lineType:M,colorBorder:p,motionDurationSlow:D,motionDurationMid:u,buttonPaddingInline:R,fontSize:_,buttonBg:b,fontSizeLG:C,controlHeightLG:T,controlHeightSM:A,paddingXS:Z,borderRadius:m,borderRadiusSM:j,borderRadiusLG:h,buttonCheckedBg:k,buttonSolidCheckedColor:N,colorTextDisabled:V,colorBgContainerDisabled:K,buttonCheckedBgDisabled:ee,buttonCheckedColorDisabled:J,colorPrimary:$,colorPrimaryHover:E,colorPrimaryActive:t,buttonSolidCheckedBg:n,buttonSolidCheckedHoverBg:d,buttonSolidCheckedActiveBg:l,calc:i}=c;return{[`${a}-button-wrapper`]:{position:"relative",display:"inline-block",height:v,margin:0,paddingInline:R,paddingBlock:0,color:r,fontSize:_,lineHeight:(0,o.unit)(i(v).sub(i(s).mul(2)).equal()),background:b,border:`${(0,o.unit)(s)} ${M} ${p}`,borderBlockStartWidth:i(s).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:s,cursor:"pointer",transition:[`color ${u}`,`background ${u}`,`box-shadow ${u}`].join(","),a:{color:r},[`> ${a}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:i(s).mul(-1).equal(),insetInlineStart:i(s).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:s,paddingInline:0,backgroundColor:p,transition:`background-color ${D}`,content:'""'}},"&:first-child":{borderInlineStart:`${(0,o.unit)(s)} ${M} ${p}`,borderStartStartRadius:m,borderEndStartRadius:m},"&:last-child":{borderStartEndRadius:m,borderEndEndRadius:m},"&:first-child:last-child":{borderRadius:m},[`${a}-group-large &`]:{height:T,fontSize:C,lineHeight:(0,o.unit)(i(T).sub(i(s).mul(2)).equal()),"&:first-child":{borderStartStartRadius:h,borderEndStartRadius:h},"&:last-child":{borderStartEndRadius:h,borderEndEndRadius:h}},[`${a}-group-small &`]:{height:A,paddingInline:i(Z).sub(s).equal(),paddingBlock:0,lineHeight:(0,o.unit)(i(A).sub(i(s).mul(2)).equal()),"&:first-child":{borderStartStartRadius:j,borderEndStartRadius:j},"&:last-child":{borderStartEndRadius:j,borderEndEndRadius:j}},"&:hover":{position:"relative",color:$},"&:has(:focus-visible)":Object.assign({},(0,P.oN)(c)),[`${a}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${a}-button-wrapper-disabled)`]:{zIndex:1,color:$,background:k,borderColor:$,"&::before":{backgroundColor:$},"&:first-child":{borderColor:$},"&:hover":{color:E,borderColor:E,"&::before":{backgroundColor:E}},"&:active":{color:t,borderColor:t,"&::before":{backgroundColor:t}}},[`${a}-group-solid &-checked:not(${a}-button-wrapper-disabled)`]:{color:N,background:n,borderColor:n,"&:hover":{color:N,background:d,borderColor:d},"&:active":{color:N,background:l,borderColor:l}},"&-disabled":{color:V,backgroundColor:K,borderColor:p,cursor:"not-allowed","&:first-child, &:hover":{color:V,backgroundColor:K,borderColor:p}},[`&-disabled${a}-button-wrapper-checked`]:{color:J,backgroundColor:ee,borderColor:p,boxShadow:"none"}}}},z=c=>{const{wireframe:r,padding:v,marginXS:a,lineWidth:s,fontSizeLG:M,colorText:p,colorBgContainer:D,colorTextDisabled:u,controlItemBgActiveDisabled:R,colorTextLightSolid:_,colorPrimary:b,colorPrimaryHover:C,colorPrimaryActive:T,colorWhite:A}=c,Z=4,m=M,j=r?m-Z*2:m-(Z+s)*2;return{radioSize:m,dotSize:j,dotColorDisabled:u,buttonSolidCheckedColor:_,buttonSolidCheckedBg:b,buttonSolidCheckedHoverBg:C,buttonSolidCheckedActiveBg:T,buttonBg:D,buttonCheckedBg:D,buttonColor:p,buttonCheckedBgDisabled:R,buttonCheckedColorDisabled:u,buttonPaddingInline:v-s,wrapperMarginInlineEnd:a,radioColor:r?b:A,radioBgColor:r?D:b}};x.Z=(0,B.I$)("Radio",c=>{const{controlOutline:r,controlOutlineWidth:v}=c,a=`0 0 0 ${(0,o.unit)(v)} ${r}`,s=a,M=(0,I.TS)(c,{radioFocusShadow:a,radioButtonFocusShadow:s});return[H(M),X(M),S(M)]},z,{unitless:{radioSize:!0,dotSize:!0}})},90607:function(q,x,e){var o=e(37469),P=e(53262),B=e(67469),I=e(81322),H=e(48230),X=e(82187),S=e.n(X),z=e(29953),c=e(50959),r=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],v=(0,c.forwardRef)(function(a,s){var M=a.prefixCls,p=M===void 0?"rc-checkbox":M,D=a.className,u=a.style,R=a.checked,_=a.disabled,b=a.defaultChecked,C=b===void 0?!1:b,T=a.type,A=T===void 0?"checkbox":T,Z=a.title,m=a.onChange,j=(0,H.Z)(a,r),h=(0,c.useRef)(null),k=(0,z.Z)(C,{value:R}),N=(0,I.Z)(k,2),V=N[0],K=N[1];(0,c.useImperativeHandle)(s,function(){return{focus:function(E){var t;(t=h.current)===null||t===void 0||t.focus(E)},blur:function(){var E;(E=h.current)===null||E===void 0||E.blur()},input:h.current}});var ee=S()(p,D,(0,B.Z)((0,B.Z)({},"".concat(p,"-checked"),V),"".concat(p,"-disabled"),_)),J=function(E){_||("checked"in a||K(E.target.checked),m==null||m({target:(0,P.Z)((0,P.Z)({},a),{},{type:A,checked:E.target.checked}),stopPropagation:function(){E.stopPropagation()},preventDefault:function(){E.preventDefault()},nativeEvent:E.nativeEvent}))};return c.createElement("span",{className:ee,title:Z,style:u},c.createElement("input",(0,o.Z)({},j,{className:"".concat(p,"-input"),ref:h,onChange:J,disabled:_,checked:!!V,type:A})),c.createElement("span",{className:"".concat(p,"-inner")}))});x.Z=v}}]);
