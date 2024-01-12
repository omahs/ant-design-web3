"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[51],{57653:function(Un,J,u){u.d(J,{GU:function(){return Wn},MV:function(){return Cn},mg:function(){return P.mg},VX:function(){return Pn},gV:function(){return Mn},M6:function(){return V},hm:function(){return gn},be:function(){return wn}});var K=u(77117),b=u.n(K),z=u(67855),Y=u.n(z),x=u(95530),U=u.n(x),M=u(50959),P=u(72257),q=u(25433),_=u(14842),nn=u(48978),en=u(13448),a=u.n(en),an=u(74815),C=u.n(an),rn=u(28152),B=u.n(rn),k=u(18661),tn=u(65998),un=u(33944),ln=u(17114),sn=u(8326),cn=u(78086),on=u(14861),dn=u(58037);function vn(h,c,m){return Q.apply(this,arguments)}function Q(){return Q=C()(a()().mark(function h(c,m,o){var r;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,dn.w)(c,{address:m.address,chainId:o});case 2:return r=s.sent,s.abrupt("return",b()(b()({},m),{},{name:r??void 0}));case 4:case"end":return s.stop()}},h)})),Q.apply(this,arguments)}var fn=u(52660);function hn(h,c,m,o){return F.apply(this,arguments)}function F(){return F=C()(a()().mark(function h(c,m,o,r){var d,s;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,fn.L)(c,{address:(0,k.O_)(m),args:[o],chainId:r,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return d=n.sent,n.next=5,(0,k.Xw)(d);case 5:return s=n.sent,n.abrupt("return",s);case 7:case"end":return n.stop()}},h)})),F.apply(this,arguments)}var T=u(11527),mn=function(c){var m,o=c.children,r=c.chainAssets,d=c.walletFactorys,s=c.availableChains,v=c.availableConnectors,n=c.ens,t=c.balance,f=c.locale,$=(0,tn.m)(),e=$.address,y=$.isDisconnected,w=$.chain,j=(0,un.Z)(),D=M.useState(),L=B()(D,2),N=L[0],X=L[1],En=(0,ln.$)(),Sn=En.connectAsync,kn=(0,sn.o)(),O=kn.switchChain,Tn=(0,cn.q)(),jn=Tn.disconnectAsync,Qn=M.useState(void 0),Z=B()(Qn,2),A=Z[0],H=Z[1],Fn=(0,on.K)({address:t&&N?(0,k.O_)(N.address):void 0}),I=Fn.data;M.useEffect(function(){if(!e||y){X(void 0);return}var g=function(){var l=C()(a()().mark(function i(){var W;return a()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(W={address:e},p.t0=X,!n){p.next=8;break}return p.next=5,vn(j,W);case 5:p.t1=p.sent,p.next=9;break;case 8:p.t1=W;case 9:p.t2=p.t1,(0,p.t0)(p.t2);case 11:case"end":return p.stop()}},i)}));return function(){return l.apply(this,arguments)}}();g()},[e,y,w,n]);var Dn=M.useMemo(function(){v.forEach(function(l){var i=d==null?void 0:d.find(function(W){var R;return(R=W.connectors)===null||R===void 0?void 0:R.includes(l.name)});i!=null&&i.create||console.error("Can not find wallet factory for ".concat(l.name,", you should config it in WagmiWeb3ConfigProvider 'wallets'."))});var g=d==null?void 0:d.map(function(l){var i=l.connectors.map(function(W){return v.find(function(R){return R.name===W})}).filter(function(W){return!!W});return i.length===0?null:l.create(i)}).filter(function(l){return l!==null});return g},[v,d]),Nn=M.useMemo(function(){return s.map(function(g){var l=r==null?void 0:r.find(function(i){return i.id===g.id});return l!=null&&l.id?{id:l.id,name:l.name,icon:l.icon}:(console.error("Can not find chain ".concat(g.id,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(g){return g!==null})},[s,r]);return M.useEffect(function(){var g;if(!(!w&&A)){var l=w??s[0];if(l){var i=r==null?void 0:r.find(function(W){return W.id===(l==null?void 0:l.id)});(g=i)!==null&&g!==void 0&&g.id||(i={id:l.id,name:l.name}),H(i)}}},[w,r,s,A]),(0,T.jsx)(k.BQ,{locale:f,availableChains:Nn,chain:A,account:N,balance:t?{symbol:I==null?void 0:I.symbol,value:I==null?void 0:I.value,decimals:I==null?void 0:I.decimals,icon:A==null||(m=A.nativeCurrency)===null||m===void 0?void 0:m.icon}:void 0,availableWallets:Dn,connect:function(){var g=C()(a()().mark(function l(i){var W,R,p;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,i==null||(W=(R=i).getWagmiConnector)===null||W===void 0?void 0:W.call(R);case 2:if(p=E.sent,p||(p=v.find(function(On){return On.name===(i==null?void 0:i.name)})),p){E.next=6;break}throw new Error("Can not find connector for ".concat(i==null?void 0:i.name));case 6:return E.next=8,Sn({connector:p,chainId:A==null?void 0:A.id});case 8:case"end":return E.stop()}},l)}));return function(l){return g.apply(this,arguments)}}(),disconnect:C()(a()().mark(function g(){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,jn();case 2:case"end":return i.stop()}},g)})),switchChain:function(){var g=C()(a()().mark(function l(i){return a()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:w?O==null||O({chainId:i.id}):H(i);case 1:case"end":return R.stop()}},l)}));return function(l){return g.apply(this,arguments)}}(),getNFTMetadata:function(){var g=C()(a()().mark(function l(i){var W,R;return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return W=i.address,R=i.tokenId,S.abrupt("return",hn(j,W,R,w==null?void 0:w.id));case 2:case"end":return S.stop()}},l)}));return function(l){return g.apply(this,arguments)}}(),children:o})},pn=["children","wallets","chains","ens","locale","balance","config","queryClient"];function gn(h){var c=h.children,m=h.wallets,o=m===void 0?[]:m,r=h.chains,d=r===void 0?[]:r,s=h.ens,v=h.locale,n=h.balance,t=h.config,f=h.queryClient,$=U()(h,pn),e=[].concat(Y()(d),[P.ny]),y=M.useMemo(function(){return f??new q.S},[f]);return(0,T.jsx)(nn.F,b()(b()({config:t},$),{},{children:(0,T.jsx)(_.aH,{client:y,children:(0,T.jsx)(mn,{locale:v,chainAssets:e,walletFactorys:o,availableChains:t.chains,availableConnectors:t.connectors,ens:s,balance:n,children:c})})}))}var Cn=function(c){return{connectors:["MetaMask"],create:function(){return b()(b()({},P.Zv),{},{hasWalletReady:function(){var o=C()(a()().mark(function d(){var s;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",!!((s=window.ethereum)!==null&&s!==void 0&&s.isMetaMask));case 1:case"end":return n.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}(),hasExtensionInstalled:function(){var o=C()(a()().mark(function d(){var s;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",!!((s=window.ethereum)!==null&&s!==void 0&&s.isMetaMask));case 1:case"end":return n.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()},c)}}},yn=["useWalletConnectOfficialModal"],wn=function(c){var m=c||{},o=m.useWalletConnectOfficialModal,r=o===void 0?!1:o,d=U()(m,yn);return{connectors:["WalletConnect"],create:function(v){var n=function(){var t=C()(a()().mark(function f(){var $,e;return a()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,v==null||($=v[0])===null||$===void 0?void 0:$.getProvider();case 2:return e=w.sent,w.abrupt("return",new Promise(function(j){e==null||e.on("display_uri",function(D){j({uri:D})})}));case 4:case"end":return w.stop()}},f)}));return function(){return t.apply(this,arguments)}}();return b()(b()({},P.Tl),{},{hasWalletReady:function(){var t=C()(a()().mark(function $(){return a()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",!0);case 1:case"end":return y.stop()}},$)}));function f(){return t.apply(this,arguments)}return f}(),getQrCode:r?void 0:n},d)}}},Wn=function(c){return{connectors:["Coinbase Wallet"],create:function(){return b()(b()({},P.p_),{},{hasWalletReady:function(){var o=C()(a()().mark(function d(){return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",!0);case 1:case"end":return v.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()},c)}}},$n=u(96345),bn=u.n($n),Rn=u(15033),An=u.n(Rn),In=u(21320),G=u.n(In),V=bn()(function h(c){var m=this;An()(this,h),G()(this,"connectors",[]),G()(this,"create",function(o){var r=o==null?void 0:o.find(function(n){return n.name==="WalletConnect"}),d=o==null?void 0:o.find(function(n){return n.name===m.wallet.name}),s=function(){var n=C()(a()().mark(function t(){var f;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r==null?void 0:r.getProvider();case 2:return f=e.sent,e.abrupt("return",new Promise(function(y){f==null||f.on("display_uri",function(w){y({uri:w})})}));case 4:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}(),v=function(){var n=C()(a()().mark(function t(){var f;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d==null?void 0:d.getProvider();case 2:return f=e.sent,e.abrupt("return",!!f);case 4:case"end":return e.stop()}},t)}));return function(){return n.apply(this,arguments)}}();return b()(b()({},m.wallet),{},{getWagmiConnector:function(){var n=C()(a()().mark(function f(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",d);case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}},f)}));function t(){return n.apply(this,arguments)}return t}(),hasExtensionInstalled:function(){var n=C()(a()().mark(function f(){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v());case 1:case"end":return e.stop()}},f)}));function t(){return n.apply(this,arguments)}return t}(),hasWalletReady:function(){var n=C()(a()().mark(function f(){var $;return a()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,v();case 2:return $=y.sent,y.abrupt("return",!!($||r));case 4:case"end":return y.stop()}},f)}));function t(){return n.apply(this,arguments)}return t}(),getQrCode:r?s:void 0})}),this.wallet=c,c.extensions&&this.connectors.push(c.name),c.app&&this.connectors.push("WalletConnect")}),Mn=function(c){return new V(b()(b()({},P.eu),c))},Pn=function(c){return{connectors:["Safeheron"],create:function(o){return b()(b()({},P.OJ),{},{hasWalletReady:function(){var r=C()(a()().mark(function s(){var v;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o==null||(v=o[0])===null||v===void 0?void 0:v.getProvider();case 2:return t.abrupt("return",!!t.sent);case 3:case"end":return t.stop()}},s)}));function d(){return r.apply(this,arguments)}return d}(),hasExtensionInstalled:function(){var r=C()(a()().mark(function s(){var v;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o==null||(v=o[0])===null||v===void 0?void 0:v.getProvider();case 2:return t.abrupt("return",!!t.sent);case 3:case"end":return t.stop()}},s)}));function d(){return r.apply(this,arguments)}return d}()},c)}}}}}]);