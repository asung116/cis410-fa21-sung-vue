(function(e){function t(t){for(var o,s,c=t[0],l=t[1],i=t[2],d=0,b=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18ce":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"container-fluid"},a={class:"row justify-content-center"},s={class:"col-md-10 col-lg-7"};function c(e,t,n,c,l,i){var u=Object(o["x"])("my-header"),d=Object(o["x"])("router-view");return Object(o["r"])(),Object(o["e"])(o["a"],null,[Object(o["i"])(u),Object(o["f"])("div",r,[Object(o["f"])("div",a,[Object(o["f"])("div",s,[Object(o["i"])(d)])])])],64)}var l=function(e){return Object(o["u"])("data-v-a82c3792"),e=e(),Object(o["s"])(),e},i={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},d=Object(o["h"])("The Roommate App"),b=l((function(){return Object(o["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["f"])("span",{class:"navbar-toggler-icon"})],-1)})),h={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav ms-auto"},p={class:"nav-item"},m=Object(o["h"])("Dashboard"),O={class:"nav-item"},j=Object(o["h"])("Chores"),v={class:"nav-item"},g=Object(o["h"])("Events"),y={class:"nav-item"},w=Object(o["h"])("Needs"),E={class:"nav-item"},k=Object(o["h"])("Account"),C={class:"nav-item"},N=l((function(){return Object(o["f"])("button",{class:"btn btn-warning"},"Login",-1)})),x={class:"nav-item"},S=l((function(){return Object(o["f"])("button",{class:"btn btn-outline-warning text-dark"}," Signup ",-1)})),D=l((function(){return Object(o["f"])("li",{class:"nav-item"},[Object(o["f"])("button",{class:"btn btn-warning"},"Logout")],-1)}));function _(e,t){var n=Object(o["x"])("router-link");return Object(o["r"])(),Object(o["e"])("nav",i,[Object(o["f"])("div",u,[Object(o["i"])(n,{class:"navbar-brand",to:"/"},{default:Object(o["D"])((function(){return[d]})),_:1}),b,Object(o["f"])("div",h,[Object(o["f"])("ul",f,[Object(o["f"])("li",p,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/dashboard"},{default:Object(o["D"])((function(){return[m]})),_:1})]),Object(o["f"])("li",O,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/chores"},{default:Object(o["D"])((function(){return[j]})),_:1})]),Object(o["f"])("li",v,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/events"},{default:Object(o["D"])((function(){return[g]})),_:1})]),Object(o["f"])("li",y,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/needs"},{default:Object(o["D"])((function(){return[w]})),_:1})]),Object(o["f"])("li",E,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(o["D"])((function(){return[k]})),_:1})]),Object(o["f"])("li",C,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(o["D"])((function(){return[N]})),_:1})]),Object(o["f"])("li",x,[Object(o["i"])(n,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(o["D"])((function(){return[S]})),_:1})]),D])])])])}n("b68e");var A=n("6b0d"),$=n.n(A);const I={},P=$()(I,[["render",_],["__scopeId","data-v-a82c3792"]]);var U=P,B={name:"App",components:{"my-header":U},create:function(){this.$store.dispatch("getChores"),this.$store.dispatch("getRoommates"),this.$store.dispatch("getNeeds"),this.$store.dispatch("getEvents"),this.$store.dispatch("getHousehold")}};n("71ad");const F=$()(B,[["render",c]]);var H=F,L=n("bc3a"),V=n.n(L),M=n("6c02"),T=Object(o["f"])("h1",null,"Home",-1),q=[T];function R(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,q)}var z={};const J=$()(z,[["render",R]]);var K=J,G=Object(o["f"])("h1",null,"Account",-1),Q=Object(o["f"])("hr",null,null,-1),W=Object(o["f"])("h5",null,"Household Code: Household Code",-1),X=Object(o["f"])("br",null,null,-1),Y=Object(o["f"])("h4",null,"Roommates",-1);function Z(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,[G,Q,Object(o["f"])("h3",null,Object(o["z"])(s.firstName)+"'s Household",1),W,X,Y])}var ee={data:function(){return{userInfo:null,accountError:!1}},computed:{firstName:function(){return this.$store.state.user.FirstName}},created:function(){var e=this;V.a.get("/roommate/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(t){e.userInfo=t.data}))}};const te=$()(ee,[["render",Z]]);var ne=te,oe=Object(o["g"])('<h1>Chores</h1><hr><table class="table"><thead><tr><th>Chore</th><th>Assigned To</th><th>Description</th><th>Due Date</th><th>Completion</th><th>Completed By</th></tr></thead><tbody><tr><th>imagine if this actually worked</th><th>why won&#39;t it work?</th><th>I really wish i knew the answer</th><th>but alas I do not</th><th>this makes no sense</th><th>i might have to give up on this b4 i lose my mind</th></tr></tbody></table>',3),re=[oe];function ae(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,re)}var se={};const ce=$()(se,[["render",ae]]);var le=ce,ie=Object(o["f"])("h1",null,"Dashboard",-1),ue=[ie];function de(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,ue)}var be={};const he=$()(be,[["render",de]]);var fe=he,pe=Object(o["f"])("h1",null,"Create an Event",-1),me=[pe];function Oe(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,me)}var je={};const ve=$()(je,[["render",Oe]]);var ge=ve,ye=Object(o["f"])("h1",null,"Events",-1),we=[ye];function Ee(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,we)}var ke={};const Ce=$()(ke,[["render",Ee]]);var Ne=Ce,xe=Object(o["f"])("h1",null,"Login",-1),Se={key:0,class:"alert alert-success"},De={class:"mb-e"},_e=Object(o["f"])("label",{for:"email-input",class:"form-label"},"Email",-1),Ae={class:"mb-e"},$e=Object(o["f"])("label",{for:"password-input",class:"form-label"},"Password",-1),Ie=Object(o["f"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Pe={key:0,class:"form-text text-danger"},Ue={key:1,class:"form-text text-danger"};function Be(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,[xe,this.$route.query.signupsuccess?(Object(o["r"])(),Object(o["e"])("div",Se," Thanks for signing up, please log in now. ")):Object(o["d"])("",!0),Object(o["f"])("form",{onSubmit:t[2]||(t[2]=Object(o["F"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(o["f"])("div",De,[_e,Object(o["E"])(Object(o["f"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[o["B"],a.email]])]),Object(o["f"])("div",Ae,[$e,Object(o["E"])(Object(o["f"])("input",{type:"password",class:"form-control",id:"password-input",required:"",placeholder:"Enter password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[o["B"],a.password]])]),Ie,a.credentialsError?(Object(o["r"])(),Object(o["e"])("p",Pe," Invalid credentials ")):Object(o["d"])("",!0),a.loginError?(Object(o["r"])(),Object(o["e"])("p",Ue," Could not log you in, please try again later ")):Object(o["d"])("",!0)],32)])}n("ac1f"),n("5319");var Fe={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var e=this,t={email:this.email,password:this.password};V.a.post("/roommate/login",t).then((function(t){console.log("the response",t),e.$store.commit("storeTokenInApp",t.data.token),e.$store.commit("storeUserInApp",t.data.user),e.$router.replace("/account")})).catch((function(t){console.log("error in /roommate/login",t),401==t.response.status?e.credentialsError=!0:e.loginError=!0}))}}};const He=$()(Fe,[["render",Be]]);var Le=He,Ve=Object(o["f"])("h1",null,"Create a Need",-1),Me=[Ve];function Te(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,Me)}var qe={};const Re=$()(qe,[["render",Te]]);var ze=Re,Je=Object(o["f"])("h1",null,"Needs",-1),Ke=[Je];function Ge(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,Ke)}var Qe={};const We=$()(Qe,[["render",Ge]]);var Xe=We,Ye=Object(o["f"])("h1",null,"Not Found",-1),Ze=Object(o["f"])("h4",null,"Sorry, this page can't be found.",-1),et=[Ye,Ze];function tt(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,et)}var nt={};const ot=$()(nt,[["render",tt]]);var rt=ot,at=Object(o["f"])("h1",null,"Signup",-1),st={class:"mb-3"},ct=Object(o["f"])("label",{for:"fname-input",class:"form-label"},"First name",-1),lt={class:"mb-3"},it=Object(o["f"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),ut={class:"mb-3"},dt=Object(o["f"])("label",{for:"phone-input",class:"form-label"},"Phone Number",-1),bt={class:"mb-3"},ht=Object(o["f"])("label",{for:"email-input",class:"form-label"},"Email",-1),ft={key:0,class:"text-danger"},pt={class:"mb-3"},mt=Object(o["f"])("label",{for:"password-input",class:"form-label"},"Password",-1),Ot=Object(o["f"])("h5",null," If you have a household code, enter your household CODE in the field below. ",-1),jt={id:"hasHousehold",class:"mb-3",visibility:"hidden"},vt=Object(o["f"])("label",{for:"householdCode-input",class:"form-label"},"Household Code",-1),gt=Object(o["f"])("h5",null," If you DO NOT have a household code, enter your household NAME in the field below. ",-1),yt={id:"noHousehold",class:"mb-3"},wt=Object(o["f"])("label",{for:"householdName-input",class:"form-label"},"Household Name",-1),Et=Object(o["f"])("label",{for:"address-input",class:"form-label"},"Address",-1),kt=Object(o["f"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Ct={id:"error-signup",class:"text-danger"};function Nt(e,t,n,r,a,s){return Object(o["r"])(),Object(o["e"])("div",null,[at,Object(o["f"])("form",{onSubmit:t[8]||(t[8]=Object(o["F"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(o["f"])("div",st,[ct,Object(o["E"])(Object(o["f"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.nameFirst=e})},null,512),[[o["B"],a.nameFirst]])]),Object(o["f"])("div",lt,[it,Object(o["E"])(Object(o["f"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.nameLast=e})},null,512),[[o["B"],a.nameLast]])]),Object(o["f"])("div",ut,[dt,Object(o["E"])(Object(o["f"])("input",{type:"tel",class:"form-control",id:"phone-input",required:"",placeholder:"Phone Number","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.phone=e})},null,512),[[o["B"],a.phone]])]),Object(o["f"])("div",bt,[ht,Object(o["E"])(Object(o["f"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.email=e})},null,512),[[o["B"],a.email]]),a.dupEmail?(Object(o["r"])(),Object(o["e"])("small",ft,"Please chose a different email")):Object(o["d"])("",!0)]),Object(o["f"])("div",pt,[mt,Object(o["E"])(Object(o["f"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.password=e})},null,512),[[o["B"],a.password]])]),Object(o["f"])("div",null,[Ot,Object(o["f"])("div",jt,[vt,Object(o["E"])(Object(o["f"])("input",{type:"text",class:"form-control",id:"householdCode-input",placeholder:"Household CODE","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.householdCode=e})},null,512),[[o["B"],a.householdCode]])]),gt,Object(o["f"])("div",yt,[wt,Object(o["E"])(Object(o["f"])("input",{type:"text",class:"form-control",id:"householdName-input",placeholder:"Household NAME","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.householdName=e})},null,512),[[o["B"],a.householdName]]),Et,Object(o["E"])(Object(o["f"])("input",{type:"text",class:"form-control",id:"address-input",placeholder:"Address","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.address=e})},null,512),[[o["B"],a.address]])])]),kt,Object(o["f"])("p",Ct,Object(o["z"])(a.errorMessage),1)],32)])}var xt={data:function(){return{nameFirst:"",nameLast:"",phone:"",email:"",password:"",householdCode:"",householdName:"",address:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var e=this;if(""==this.householdCode){var t={householdName:this.householdName,address:this.address};console.log("my household",t),V.a.post("/household",t).then((function(e){console.log("household Response",e)}))}if(""==this.householdName){var n={nameFirst:this.nameFirst,nameLast:this.nameLast,phone:this.phone,email:this.email,password:this.password,householdCode:this.householdCode};console.log("my form data",n),V.a.post("/roommate",n).then((function(t){console.log("the response",t),e.$router.replace("/login?signupsuccess=true")})).catch((function(t){409===t.response.status?e.dupEmail=!0:e.errorMessage="Cannot sign you up, please try again later"}))}}}};const St=$()(xt,[["render",Nt]]);var Dt=St,_t=Object(M["a"])({history:Object(M["b"])(),routes:[{path:"/",component:K},{path:"/account",component:ne},{path:"/chores",component:le},{path:"/dashboard",component:fe},{path:"/events",component:Ne,children:[{path:"event",component:ge}]},{path:"/login",component:Le},{path:"/needs",component:Xe,children:[{path:"need",component:ze}]},{path:"/signup",component:Dt},{path:"/:invalidroute(.*)",component:rt}]}),At=_t,$t=n("5502"),It=Object($t["a"])({state:{token:null,user:null},mutations:{storeTokenInApp:function(e,t){e.token=t},storeUserInApp:function(e,t){e.user=t},storeChoresInApp:function(e,t){e.chores=t}},actions:{getChores:function(e){var t=e.commit;V.a.get("`/chores/${this.$store.state.user.HouseholdFK}`").then((function(e){console.log("response in /chores/me",e),t("storeChores",e.data)}))}}});V.a.defaults.baseURL="https://cis410-fa21-sung-api.azurewebsites.net/";var Pt=Object(o["c"])(H);Pt.use(At),Pt.use(It),Pt.mount("#app")},"71ad":function(e,t,n){"use strict";n("a26e")},a26e:function(e,t,n){},b68e:function(e,t,n){"use strict";n("18ce")}});
//# sourceMappingURL=app.ca4242b1.js.map