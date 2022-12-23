(function(){"use strict";var e={5429:function(e,t,a){var l=a(9242),r=a(2578),n=a(3396);function d(e,t,a,l,r,d){const s=(0,n.up)("PollPage");return(0,n.wg)(),(0,n.j4)(s)}var s=a(4870),o=a(7139);const u=["value","name","placeholder","readonly","disabled","required","minlength","maxlength","data-test"];var i=(0,n.aZ)({__name:"TextInput",props:{modelValue:{type:String,required:!0},name:{type:String,required:!0},errors:{type:Array,required:!1,default:()=>[]},required:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!1,default:null},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},dataTest:{type:String,required:!1,default:"input"},minLength:{type:Number,required:!1,default:null},maxLength:{type:Number,required:!1,default:null}},emits:["update:model-value"],setup(e,{emit:t}){const a=e;return(e,l)=>((0,n.wg)(),(0,n.iD)("input",{value:a.modelValue,name:a.name,placeholder:a.placeholder,readonly:a.readOnly,disabled:a.disabled,required:a.required,minlength:a.minLength,maxlength:a.maxLength,"data-test":a.dataTest,type:"text",class:"font-light text-body text-grey-900 border border-solid border-grey-300 rounded-md disabled:bg-grey-250 hover:border-grey-250 p-2",onInput:l[0]||(l[0]=e=>t("update:model-value",e.target?.value))},null,40,u))}});const c=i;var p=c;const b=["type","disabled","data-test"];var m=(0,n.aZ)({__name:"VButton",props:{label:{type:String,required:!1,default:null},type:{type:String,required:!1,default:"button"},theme:{type:String,required:!1,default:"primary"},disabled:{type:Boolean,required:!1,default:!1},dataTest:{type:String,required:!1,default:"button"}},emits:["click"],setup(e,{emit:t}){const a=e,l=()=>{a.disabled||t("click")},r={primary:"bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 disabled:bg-grey-250 disabled:border-grey-250 disabled:text-grey-450 active:bg-orange-700 active:border-orange-700",secondary:"bg-grey-250 border-grey-250 hover:bg-grey-300 hover:border-grey-300 disabled:bg-grey-200 disabled:border-grey-200 active:bg-grey-400 active:border-grey-400"};return(e,t)=>((0,n.wg)(),(0,n.iD)("button",{type:a.type,disabled:a.disabled,"data-test":a.dataTest,onClick:t[0]||(t[0]=e=>l()),class:(0,o.C_)(["p-2 border rounded-md text-body",r[a.theme]])},[(0,n.WI)(e.$slots,"default",{},(()=>[(0,n.Uk)((0,o.zw)(a.label),1)]))],10,b))}});const v=m;var f=v;a(7658);const g=(0,r.Q_)("poll",(()=>{const e=(0,s.iH)(""),t=(0,s.iH)([]),a=(0,s.iH)({}),l=(0,n.Fl)((()=>t.value.length)),r=e=>{Object.prototype.hasOwnProperty.call(a.value,e)?a.value[e]=a.value[e]+1:a.value[e]=1},d=t=>{e.value=t},o=e=>{t.value.push(e)},u=e=>{void 0!==t.value[e]&&t.value.splice(e,1)},i=(e,a)=>{void 0!==t.value[e]&&(t.value[e]=a)},c=()=>{a.value={},t.value=[],e.value=""};return{question:e,answers:t,votes:a,nAnswers:l,updateQuestion:d,addAnswer:o,updateAnswer:i,deleteAnswer:u,vote:r,reset:c}})),y={class:"w-full h-full p-8 flex flex-col justify-between"},h={key:0,class:"w-full flex my-4"},w={class:"flex w-full justify-between"},x=["data-test"];var k=(0,n.aZ)({__name:"QuestionForm",setup(e){const t=g(),{updateQuestion:a,addAnswer:l,updateAnswer:d,deleteAnswer:u,reset:i}=t,{question:c,answers:b,nAnswers:m}=(0,r.Jk)(t),v=(0,s.iH)(""),k=(0,n.Fl)((()=>0===c.value.length||0===v.value.length)),_=()=>{v.value="",i()},q=()=>{l(v.value),v.value=""},S="question-form";return(e,t)=>((0,n.wg)(),(0,n.iD)("section",y,[(0,n._)("div",null,[(0,n.Wm)(p,{placeholder:"Type a question",name:"question",class:"w-full mb-4","model-value":(0,s.SU)(c),"min-length":1,"max-length":80,"data-test":`${S}-question-input`,disabled:(0,s.SU)(c).length>80,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.SU)(a)(e))},null,8,["model-value","data-test","disabled"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(b),((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"w-full flex my-4"},[(0,n.Wm)(p,{class:"w-full",placeholder:"Type an answer","model-value":e,name:`answer-${t}`,"min-length":1,"max-length":80,"data-test":`${S}-answer-input-${t}`,disabled:e.length>80,"onUpdate:modelValue":e=>(0,s.SU)(d)(t,e)},null,8,["model-value","name","data-test","disabled","onUpdate:modelValue"]),(0,n.Wm)(f,{class:"ml-2 w-12",theme:"secondary","data-test":`${S}-delete-answer-${t}-btn`,onClick:e=>(0,s.SU)(u)(t)},{default:(0,n.w5)((()=>[(0,n.Uk)(" X ")])),_:2},1032,["data-test","onClick"])])))),128)),(0,s.SU)(m)<10?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(p,{modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value=e),"min-length":1,"max-length":80,"data-test":`${S}-new-answer-input`,name:"newOption",placeholder:"Type an answer",class:"w-full"},null,8,["modelValue","data-test"]),(0,n.Wm)(f,{label:"Add",class:"ml-2 w-12","data-test":`${S}-add-new-answer-btn`,disabled:(0,s.SU)(k),onClick:t[2]||(t[2]=e=>q())},null,8,["data-test","disabled"])])):(0,n.kq)("",!0)]),(0,n._)("div",w,[(0,n._)("p",{"data-test":`${S}-number-answers`},(0,o.zw)(`${(0,s.SU)(m)}/10 possible answers`),9,x),(0,n.Wm)(f,{label:"Reset",theme:"secondary","data-test":`${S}-reset-btn`,onClick:t[3]||(t[3]=e=>_())},null,8,["data-test"])])]))}});const _=k;var q=_;const S=["data-test"],U=["data-test"],$=["name","id","checked","disabled","data-test","onChange"];var O=(0,n.aZ)({__name:"RadioButton",props:{options:{type:Array,required:!0},name:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},modelValue:{type:Object,required:!1,default:null},dataTest:{type:String,required:!1,default:"radio-button"}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=e=>{a.disabled||t("update:modelValue",e)},r=e=>!!a.modelValue&&a.modelValue.key===e;return(e,t)=>((0,n.wg)(),(0,n.iD)("div",{"data-test":a.dataTest},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.options,(e=>((0,n.wg)(),(0,n.iD)("label",{key:e.key,"data-test":`${a.dataTest}-${e.key}-label`,class:"text-label text-grey-900 flex my-4"},[(0,n._)("input",{type:"radio",name:a.name,id:e.key,checked:r(e.key),disabled:a.disabled,"data-test":`${a.dataTest}-${e.key}-input`,class:"mr-1 w-4 h-4 p-1 border border-grey-300 rounded-full checked:border-blue-500 checked:bg-blue-500 focus:border-purple-500 disabled:border-grey-300 disabled:bg-grey-300",onChange:t=>l(e)},null,40,$),(0,n.Uk)(" "+(0,o.zw)(e.label),1)],8,U)))),128))],8,S))}});const V=O;var T=V;const j=["data-test"],A=(0,n._)("h2",{class:"text-h2 mb-4"}," Poll is disabled ",-1),D=(0,n._)("p",null,"Add at least 2 answers and one question to enable the poll. ",-1),W=[A,D],C=["data-test"],P=["data-test"];var Z=(0,n.aZ)({__name:"PollQuestion",setup(e){const t=g(),{question:a,answers:d,nAnswers:u}=(0,r.Jk)(t),{vote:i}=t,c=(0,s.iH)(null),p=(0,n.Fl)((()=>0===a.value.length||u.value<2));(0,n.YP)(a,(()=>{0===a.value.length&&(c.value=null)}));const b=(0,n.Fl)((()=>d.value.map((e=>({key:e,label:e}))))),m=()=>{c.value&&(i(c.value.key),c.value=null)},v="poll";return(e,t)=>(0,s.SU)(p)?((0,n.wg)(),(0,n.iD)("section",{key:0,class:"flex flex-col self-center text-center p-8","data-test":`${v}-empty-state`},W,8,j)):((0,n.wg)(),(0,n.iD)("form",{key:1,class:"w-full h-full flex flex-col justify-between p-8","data-test":`${v}-form`,onSubmit:t[1]||(t[1]=(0,l.iM)((e=>m()),["prevent"]))},[(0,n._)("div",null,[(0,n._)("h2",{class:"text-h2 text-center","data-test":`${v}-question`},(0,o.zw)((0,s.SU)(a)),9,P),(0,n._)("div",null,[(0,n.Wm)(T,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),options:(0,s.SU)(b),"data-test":`${v}-radio-button`,name:"poll"},null,8,["modelValue","options","data-test"])])]),(0,n.Wm)(f,{label:"Vote",type:"submit",disabled:!c.value,"data-test":`${v}-vote-btn`,class:"w-max flex self-end"},null,8,["disabled","data-test"])],40,C))}});const B=Z;var F=B,z=a(5866),H=(0,n.aZ)({__name:"BarChart",props:{dataset:{type:Object,required:!0},dataTest:{type:String,required:!1,default:"bar-chart"}},setup(e){const t=e,a=(0,n.Fl)((()=>{const e=[],a=[];return Object.keys(t.dataset).forEach((l=>{e.push(t.dataset[l]),a.push(l)})),{labels:a,datasets:[{data:e,backgroundColor:"#A97BF3"}]}})),l={responsive:!0,scales:{y:{ticks:{stepSize:1}}},plugins:{legend:{display:!1},colors:{forceOverride:!0}}};return(e,r)=>((0,n.wg)(),(0,n.j4)((0,s.SU)(z.$Q),{data:(0,s.SU)(a),options:l,"data-test":t.dataTest},null,8,["data","data-test"]))}});const L=H;var Q=L;const E={class:"h-full p-8 flex flex-col self-center px-8 justify-between"},I={class:"text-h2 text-center mb-4"},J=["data-test"];var Y=(0,n.aZ)({__name:"TotalVotes",setup(e){const{question:t,votes:a}=(0,r.Jk)(g()),l=(0,n.Fl)((()=>{let e=0;return Object.values(a.value).forEach((t=>e+=t)),e})),d="total-votes";return(e,r)=>((0,n.wg)(),(0,n.iD)("section",E,[(0,n._)("div",null,[(0,n._)("h2",I,(0,o.zw)((0,s.SU)(t)),1),(0,n.Wm)(Q,{dataset:(0,s.SU)(a),"data-test":`${d}-chart-bar`},null,8,["dataset","data-test"])]),(0,n._)("p",{"data-test":`${d}-total`}," Total votes: "+(0,o.zw)((0,s.SU)(l)),9,J)]))}});const K=Y;var M=K;const N={class:"h-screen flex flex-col"},R=(0,n._)("h1",{class:"text-h1 border-b border-b-grey-300 p-4"}," Sir vote-a-lot ",-1),X={class:"flex flex-col md:flex-row h-full"};var G=(0,n.aZ)({__name:"PollPage",setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("div",N,[R,(0,n._)("div",X,[(0,n.Wm)(q,{class:"flex-1 md:border-r md:border-r-grey-300"}),(0,n.Wm)(F,{class:"flex-1 border-y border-y-grey-300 md:border-none"}),(0,n.Wm)(M,{class:"flex-1 md:border-l md:border-l-grey-300"})])]))}});const ee=G;var te=ee,ae=(0,n.aZ)({name:"App",components:{PollPage:te}}),le=a(89);const re=(0,le.Z)(ae,[["render",d]]);var ne=re,de=a(9646);de.kL.register(de.uw,de.f$,de.ZL,de.u,de.De);const se=(0,r.WB)(),oe=(0,l.ri)(ne);oe.use(se),oe.mount("#app")}},t={};function a(l){var r=t[l];if(void 0!==r)return r.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,l,r,n){if(!l){var d=1/0;for(i=0;i<e.length;i++){l=e[i][0],r=e[i][1],n=e[i][2];for(var s=!0,o=0;o<l.length;o++)(!1&n||d>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[o])}))?l.splice(o--,1):(s=!1,n<d&&(d=n));if(s){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[l,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,n,d=l[0],s=l[1],o=l[2],u=0;if(d.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(o)var i=o(a)}for(t&&t(l);u<d.length;u++)n=d[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(i)},l=self["webpackChunkpoll_app_vue3"]=self["webpackChunkpoll_app_vue3"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(5429)}));l=a.O(l)})();
//# sourceMappingURL=app.f857cfee.js.map