"use strict";(self.webpackChunkwebsvodka=self.webpackChunkwebsvodka||[]).push([[179],{85547:function(e,i,t){var r=t(85893),n=t(67294),s=t(20745),a=t(79655),l=t(12788);const o="userData",d=localStorage.getItem(o),c=d?JSON.parse(d):void 0,h=()=>{throw new Error("Must initialize AuthProvider value")},m=(0,n.createContext)([c,h,h]),x=()=>(0,n.useContext)(m),g=({children:e})=>{const[i,t]=(0,n.useState)(c),s=(0,n.useCallback)((e=>{localStorage.setItem(o,JSON.stringify(e)),t(e)}),[]),a=(0,n.useCallback)((()=>{localStorage.removeItem(o),t(c)}),[]);return(0,r.jsx)(m.Provider,Object.assign({value:[i,s,a]},{children:e}))},p=Object.freeze({favourite:!1,projects:[],groups:[],keyPhrases:[],mute:!1,checkFrequency:!1,reportFrequency:0,extendedReport:!1,extendedReportType:0,multiThreadCheck:!1,newPagesMonitoring:!1,checkedOnlyMonitoring:!1,allPagesMonitoring:!1}),j=(0,n.createContext)([p,()=>{throw new Error("Must initialize CurrentProjectProvider value")}]),b=()=>(0,n.useContext)(j),u=(e,i)=>i?Object.assign(Object.assign({},e),i):e,f=({children:e})=>{const[i,t]=(0,n.useReducer)(u,p);return(0,r.jsx)(j.Provider,Object.assign({value:[i,t]},{children:e}))};var w;!function(e){e.HOME="Рабочий стол",e.BILLING="Детализация расходов",e.NOT_FOUND=""}(w||(w={}));const v=(0,n.createContext)([w.NOT_FOUND,()=>{throw new Error("Must initialize MainMenuProvider value")}]),y=()=>(0,n.useContext)(v),k=({children:e})=>{const[i,t]=(0,n.useState)(w.NOT_FOUND);return(0,r.jsx)(v.Provider,Object.assign({value:[i,t]},{children:e}))},O=localStorage.getItem("projects"),P=O?JSON.parse(O):[],Z=(0,n.createContext)([P,()=>{throw new Error("Must initialize ProjectsProvider value")}]),C=()=>(0,n.useContext)(Z),z=({children:e})=>{const[i,t]=(0,n.useState)(P);return(0,n.useEffect)((()=>{localStorage.setItem("projects",JSON.stringify(i))}),[i]),(0,r.jsx)(Z.Provider,Object.assign({value:[i,t]},{children:e}))},M=l.vJ`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    position: relative;
    font-family: var(--roboto);
    font-weight: 400;
    --exo: 'Exo', sans-serif;
    --roboto: 'Roboto', sans-serif;
    
    background: var(--white);
    color: var(--black1);
    --black0: #000000;
    --black1: #0B0B0B;
    --white: #ffffff;
    --grey0: #F9F9F9;
    --grey1: #EFEFEF;
    --grey2: #DCDCDC;
    --grey3: #CDCDCD;
    --grey4: #C6C6C8;
    --grey5: #9D9D9D;
    --grey6: #808080;
    --grey7: #525252;
    --grey8: #323232;
    --blue0: rgba(0, 63, 157, 0.05);
    --blue1: #ECF2F8;
    --blue2: #E4EFFD;
    --blue3: #D2EAFF;
    --blue4: #0085FF;
    --blue5: #186FDA;
    --blue6: #1A57CB;
    --blue7: #04529A;
    --blue8: #0C45A0;
    --green0: #65CB84;
    --green1: #26B638;
    --beige0: #FFEDCA;
    --beige1: #FFC34F;
    --magenta: #6D3AFE;
    --red: #F52A39;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`,S=({children:e})=>(0,r.jsxs)(_,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(g,{children:(0,r.jsx)(k,{children:(0,r.jsx)(f,{children:(0,r.jsx)(z,{children:e})})})})]}),_=l.ZP.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;var N=t(89250),E=t(1995),A=t(19501),L=t(94184),F=t.n(L);const D=e=>{const{isTransparent:i,isCancel:t,type:n="button",children:s,icon:a,className:l,disabled:o}=e;return(0,r.jsxs)(H,Object.assign({},e,{type:n,className:F()(l,{transparent:i,cancel:t,disabled:o}),disabled:o},{children:[null!=a?a:"",s]}))},B=l.iv`
  position: relative;
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`,T=l.iv`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2rem;
  background: var(--blue6);
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 3px;
  color: var(--white);
  opacity: 1;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.8;
  }

  &.transparent {
    border: 1px solid transparent;
    background: none;
  }

  &.cancel {
    border: 1px solid var(--grey2);
    background: var(--grey1);
    color: var(--black1);
    font-weight: 500;
  }

  &.disabled {
    border: 1px solid var(--grey2);
    background: var(--grey0);
    color: var(--grey5);
    padding: 1.3rem 2rem;
    pointer-events: none;
  }
`,H=l.ZP.button`
  ${B};
  ${T};
`;const V=e=>{var{onChange:i,className:t,text:n,layout:s}=e,a=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)i.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}(e,["onChange","className","text","layout"]);return(0,r.jsxs)($,Object.assign({className:F()(t,s)},{children:[(0,r.jsx)("input",Object.assign({type:"checkbox",onChange:i},a)),(0,r.jsx)(U,{className:"checkbox"}),n&&(0,r.jsx)(G,Object.assign({className:"checkbox-text"},{children:n}))]}))},I=l.iv`
  content: "";
  position: absolute;
  display: none;
  left: 52%;
  top: 40%;
  width: 0.8rem;
  height: 1.4rem;
  border: 0.25rem solid var(--green1);
  border-top: 0;
  border-left: 0;
  transform: translate(-50%, -50%) rotate(45deg);
`,R=l.iv`
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: 2.2rem;
  height: 2.2rem;
  background: white;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  transition: all 0.3s ease;
`,$=l.ZP.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  line-height: 2;
  font-size: 1.4rem;
  font-weight: bold;
  user-select: none;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  .checkbox {
    ${R}
  }

  & input[type="checkbox"]:checked ~ .checkbox {
    background: var(--white);
    transition: all 0.3s ease;
  }

  & input[type="checkbox"]:disabled ~ .checkbox {
    background: var(--grey2);
    border: 1px solid var(--black1);
  }

  .checkbox:after {
    ${I}
  }

  & input[type="checkbox"]:checked ~ .checkbox:after {
    display: inline;
  }

  & input[type="checkbox"]:disabled ~ .checkbox:after {
    border-color: var(--black1);
  }

  &.error {
    input[type="checkbox"] ~ .checkbox {
      border-color: var(--red);
    }
  }

  &.blue {
    & input[type="checkbox"]:checked ~ .checkbox {
      background: var(--blue6);
      border-color: var(--blue6);
    }

    & input[type="checkbox"]:checked ~ .checkbox {
      background: var(--blue6);
    }

    .checkbox:after {
      border: 0.25rem solid var(--white);
      background: var(--blue6);
      border-top: 0;
      border-left: 0;
    }
  }

  &.white {
    & input[type="checkbox"]:checked ~ .checkbox {
      background: var(--white);
    }

    & input[type="checkbox"]:checked ~ .checkbox {
      background: var(--white);
    }

    .checkbox:after {
      border: 0.25rem solid var(--blue6);
      background: var(--white);
      border-top: 0;
      border-left: 0;
    }
  }
`,U=l.ZP.div`
  flex: 1 0 2.2rem;
`,G=l.ZP.span`
  font-weight: 400;
  padding-left: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.6rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;const W=e=>{var{text:i,children:t}=e,n=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)i.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}(e,["text","children"]);return(0,r.jsxs)(K,Object.assign({as:"label"},n,{children:[i,t]}))},K=l.ZP.h3`
  color: var(--black0);
  display: block;
  overflow: hidden;
  max-width: fit-content;
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-bottom: 12px;
  ${({disabled:e})=>e&&"color: var(--grey5)"};

  @media (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;const q=e=>{var i,{label:t,hint:s,className:a,error:l,placeholder:o,name:d,id:c,type:h,disabled:m}=e,x=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)i.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}(e,["label","hint","className","error","placeholder","name","id","type","disabled"]);const[g,{error:p,value:j},{setValue:b}]=(0,E.U$)(d),u=(0,n.useCallback)((e=>{b(e.target.value)}),[b]);return(0,r.jsxs)(Q,Object.assign({className:a},{children:[t&&(0,r.jsx)(W,{htmlFor:c||d,text:t,disabled:m}),null!=s?s:null,(0,r.jsx)(J,Object.assign({},x,g,{id:c||d,className:F()({error:p,outerError:l}),placeholder:null!==(i=null!=p?p:l)&&void 0!==i?i:o,type:null!=h?h:"text",value:null!=j?j:"",onChange:u,disabled:m}))]}))},J=l.ZP.input`
  width: 100%;
  border: 1px solid var(--grey2);
  border-radius: 3px;
  height: 4.5rem;
  opacity: 1;
  font-size: 1.6rem;
  padding: 0 1rem;
  outline: none;

  &::placeholder {
    color: var(--grey7);
  }

  &:focus {
    border: 1px solid var(--grey5);
  }

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }

  &:invalid,
  &.error,
  &.outerError {
    border: 1px solid var(--red);
    &::placeholder {
      color: var(--red);
    }
    &:focus {
      border: 1px solid var(--grey5);
      &::placeholder {
        color: transparent;
      }
    }
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`,Q=l.ZP.div`
  position: relative;
  display: block;

  > input + div {
    color: var(--red);
  }
`;var Y;!function(e){e.VALID_EMAIL="Введите корректный Email",e.REQUIRED_MESSAGE="Обязательное поле",e.ENTER_PASSWORD="Введите пароль",e.ENTER_EMAIL="Введите Email",e.ALREADY_EXIST="Такой проект уже существует",e.ENTER_CORRECT_URL="Введите корректный адрес",e.READING_ERROR="Ошибка при чтении файла"}(Y||(Y={}));const X=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"109",height:"18",fill:"none",viewBox:"0 0 109 18"},{children:(0,r.jsx)("path",{fill:"#0B0B0B",d:"M3.633 17L.357 5.765H2.52l2.457 9.282 2.646-9.282h1.785l2.646 9.282 2.352-9.282h2.163L13.335 17h-2.331l-2.52-8.337L5.922 17h-2.29zM22.62 17.126c-1.19 0-2.142-.175-2.856-.525-.7-.35-1.204-.938-1.512-1.764-.294-.84-.441-1.995-.441-3.465 0-1.498.147-2.66.44-3.486.309-.84.813-1.428 1.513-1.764.7-.336 1.645-.504 2.835-.504 1.036 0 1.869.112 2.499.336.644.21 1.113.595 1.407 1.155.308.546.462 1.309.462 2.289 0 .686-.14 1.232-.42 1.638-.266.406-.651.7-1.155.882-.49.182-1.078.273-1.764.273H19.91c.014.812.105 1.463.273 1.953.182.476.497.826.945 1.05.462.21 1.134.315 2.016.315h3.507v1.26c-.602.084-1.218.161-1.848.231-.63.084-1.358.126-2.184.126zm-2.73-6.258h3.549c.56 0 .973-.105 1.239-.315.266-.21.399-.595.399-1.155s-.084-1-.252-1.323c-.154-.322-.413-.553-.777-.693-.364-.14-.847-.21-1.45-.21-.685 0-1.231.105-1.637.315-.392.21-.672.581-.84 1.113-.154.532-.231 1.288-.231 2.268zM35.452 17.126a5.333 5.333 0 01-1.45-.189 7.095 7.095 0 01-1.197-.462c-.35-.196-.672-.392-.965-.588L31.462 17h-1.723V.977h2.1V6.71c.519-.28 1.093-.532 1.723-.756.644-.224 1.239-.336 1.785-.336.923 0 1.68.196 2.267.588.589.378 1.023.994 1.303 1.848.294.854.44 1.995.44 3.423 0 1.19-.133 2.212-.398 3.066-.267.84-.687 1.484-1.26 1.932-.575.434-1.323.651-2.247.651zm-.735-1.743c.546 0 1-.133 1.364-.399.378-.28.665-.714.861-1.302.21-.602.316-1.372.316-2.31 0-1.148-.113-2.009-.337-2.583-.224-.574-.524-.959-.902-1.155a2.788 2.788 0 00-1.302-.294c-.56 0-1.072.084-1.533.252-.448.154-.896.35-1.344.588v6.405c.378.196.805.378 1.28.546a4.772 4.772 0 001.597.252zM46.058 17.126c-.294 0-.644-.007-1.05-.02a20.384 20.384 0 01-1.26-.085c-.42-.028-.812-.063-1.176-.105a6.308 6.308 0 01-.84-.147v-1.26h4.725a5.69 5.69 0 001.05-.084c.294-.07.518-.21.672-.42.168-.21.252-.518.252-.924v-.462c0-.42-.14-.749-.42-.987-.28-.238-.742-.357-1.386-.357h-1.638c-.658 0-1.246-.084-1.764-.252a2.427 2.427 0 01-1.197-.903c-.28-.42-.42-.987-.42-1.7v-.61c0-.714.133-1.302.4-1.764.28-.462.72-.805 1.322-1.029.602-.238 1.4-.357 2.394-.357.42 0 .882.021 1.386.063.518.028 1.022.07 1.512.126.49.056.882.119 1.176.189v1.26h-4.452c-.616 0-1.092.105-1.428.315-.322.21-.483.609-.483 1.197v.42c0 .364.077.644.231.84.154.196.371.322.651.378.294.056.637.084 1.03.084h1.68c1.063 0 1.868.252 2.414.756.546.49.82 1.183.82 2.08v.86c0 .756-.176 1.344-.526 1.764-.35.42-.84.714-1.47.882-.616.168-1.35.252-2.205.252zM55.515 17L51.441 5.765h2.163l3.171 9.282 3.234-9.282h2.163L57.952 17h-2.437zM68.375 17.126c-.854 0-1.596-.09-2.226-.273-.616-.182-1.127-.483-1.533-.903-.406-.434-.707-1.022-.903-1.764-.196-.742-.294-1.68-.294-2.814 0-1.176.098-2.135.294-2.877.196-.756.497-1.344.903-1.764.406-.42.924-.707 1.554-.86.63-.169 1.365-.253 2.205-.253.84 0 1.575.084 2.205.252.63.168 1.148.462 1.554.882.406.42.707 1.008.903 1.764.196.742.294 1.694.294 2.856 0 1.148-.098 2.1-.294 2.856-.196.742-.497 1.323-.903 1.743-.392.42-.903.721-1.533.903-.63.168-1.372.252-2.226.252zm0-1.722c.462 0 .868-.042 1.218-.126a1.69 1.69 0 00.903-.525c.238-.28.42-.693.546-1.239.126-.546.19-1.267.19-2.163 0-.896-.064-1.61-.19-2.142-.126-.546-.308-.952-.546-1.218a1.69 1.69 0 00-.903-.525 4.536 4.536 0 00-1.218-.147c-.476 0-.896.05-1.26.147-.35.084-.644.26-.882.525-.224.266-.399.672-.525 1.218-.112.532-.168 1.246-.168 2.142 0 .896.056 1.617.168 2.163.126.546.301.96.525 1.24.238.265.532.44.882.524a5.64 5.64 0 001.26.126zM79.76 17.126c-.91 0-1.665-.196-2.267-.588-.588-.392-1.03-1-1.323-1.827-.294-.84-.441-1.918-.441-3.234 0-1.386.133-2.506.399-3.36.28-.868.728-1.498 1.344-1.89.616-.406 1.449-.609 2.499-.609.588 0 1.169.063 1.743.189.588.126 1.099.266 1.533.42V.977h2.1V17h-1.722l-.378-1.113c-.224.196-.532.392-.924.588a8.366 8.366 0 01-1.26.462 4.8 4.8 0 01-1.302.19zm.673-1.722a4.21 4.21 0 001.554-.273c.476-.182.896-.37 1.26-.567V7.74a24.845 24.845 0 00-1.281-.336 5.133 5.133 0 00-1.365-.168c-.658 0-1.19.119-1.596.357-.406.238-.7.658-.882 1.26-.182.602-.273 1.442-.273 2.52 0 .994.084 1.792.252 2.394.168.588.44 1.008.819 1.26.392.252.896.378 1.512.378zM88.437 17V.977h2.1v9.093h1.533l3.129-4.305h2.184l-3.759 5.25L97.656 17h-2.205l-3.444-5.04h-1.47V17h-2.1zM101.845 17.126c-.826 0-1.512-.245-2.058-.735-.532-.504-.798-1.197-.798-2.079v-.882c0-.868.294-1.575.882-2.12.602-.56 1.505-.84 2.709-.84h3.507V9.292c0-.434-.077-.798-.231-1.092-.14-.308-.406-.539-.798-.693-.392-.154-.973-.23-1.743-.23h-3.444v-1.24c.504-.112 1.092-.21 1.764-.294a22.847 22.847 0 012.394-.147c.924 0 1.694.119 2.31.357.63.224 1.099.602 1.407 1.134.308.518.462 1.211.462 2.079V17h-1.659l-.357-1.239a12.18 12.18 0 01-.525.315c-.266.14-.609.294-1.029.462a8.424 8.424 0 01-1.344.42 6.305 6.305 0 01-1.449.168zm.966-1.533c.21.014.455-.007.735-.063.294-.056.581-.119.861-.189.294-.084.56-.168.798-.252.252-.084.455-.154.609-.21a1.84 1.84 0 00.273-.126V11.52l-2.94.126c-.728.042-1.253.224-1.575.546-.308.322-.462.742-.462 1.26v.504c0 .406.084.735.252.987.168.238.378.406.63.504.266.098.539.147.819.147z"})})),ee=Object.freeze({email:"",password:""}),ie=A.Ry().shape({email:A.Z_().email(Y.VALID_EMAIL).required(Y.REQUIRED_MESSAGE),password:A.Z_().required(Y.REQUIRED_MESSAGE)}),te=()=>{const e=(0,N.s0)(),[,i]=x(),t=(0,n.useCallback)((()=>{i({name:"Иван Андреев",nickname:"User123",email:"andreev@mail.ru",userId:"01GKGGYGY8TVTZXSYBBEMQASE2",billing:{amount:1970,timeLeft:"25 дней",end:"02.08.2020",bonus:23,expenses:3300}}),e(Ia.MAIN)}),[e,i]);return(0,r.jsx)(re,{children:(0,r.jsxs)(ne,{children:[(0,r.jsx)(se,{children:(0,r.jsx)(X,{})}),(0,r.jsx)(le,{children:"Авторизация"}),(0,r.jsxs)(oe,{children:["Еще нет учетной записи?",(0,r.jsx)(a.rU,Object.assign({to:Ia.AUTH},{children:"Регистрация"}))]}),(0,r.jsx)(E.J9,Object.assign({},{initialValues:ee,validationSchema:ie},{onSubmit:t},{children:(0,r.jsxs)(de,{children:[(0,r.jsx)(ce,{type:"email",label:"Email",placeholder:Y.ENTER_EMAIL,name:"email"}),(0,r.jsx)(q,{type:"password",label:"Пароль",placeholder:Y.ENTER_PASSWORD,name:"password",hint:(0,r.jsx)(ae,Object.assign({to:Ia.AUTH},{children:"Забыли пароль?"}))}),(0,r.jsx)(he,{children:(0,r.jsx)(V,{text:"Запомнить меня"})}),(0,r.jsx)(D,Object.assign({type:"submit"},{children:"Войти"}))]})}))]})})},re=l.ZP.div`
  display: flex;
  height: 100vh;
  text-align: center;
`,ne=l.ZP.div`
  margin: auto;
  width: 46.4rem;
  min-height: 50.2rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  padding: 40px 3.2rem 32px;
`,se=l.ZP.div`
  width: 15.9rem;
  height: 2.5rem;
  margin: 0 auto;

  > svg {
    width: 100%;
    height: 100%;
  }
`,ae=(0,l.ZP)(a.rU)`
  position: absolute;
  right: 0;
  top: 1rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--grey8);
  text-decoration: none;
`,le=l.ZP.h1`
  font-size: 2.2rem;
  margin-top: 33px;
  font-weight: 500;
`,oe=l.ZP.div`
  font-size: 1.5rem;
  margin-top: 17px;

  > a {
    margin-left: 0.5rem;
    text-decoration: none;
    color: var(--blue6);
  }
`,de=(0,l.ZP)(E.l0)`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`,ce=(0,l.ZP)(q)`
  margin-bottom: 21px;
`,he=l.ZP.div`
  display: flex;
  align-items: flex-start;
  margin: 2.1rem 0;
`,me=(e,i)=>{const t=(0,n.useCallback)((t=>{e.current&&!e.current.contains(t.target)&&i()}),[e,i]);(0,n.useEffect)((()=>(document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)})))},xe=e=>{const[i,t]=(0,n.useState)(e),r=(0,n.useCallback)((()=>{t(!i)}),[i]),s=(0,n.useCallback)((()=>{t(!0)}),[]),a=(0,n.useCallback)((()=>{t(!1)}),[]);return{isOpen:i,toggleOpen:r,close:a,open:s}},ge=({style:e})=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"none",viewBox:"0 0 10 10",style:e},{children:[(0,r.jsx)("g",Object.assign({fill:"#000",clipPath:"url(#clip0_1787_19192)"},{children:(0,r.jsx)("path",{d:"M10 8.125H0v1.25h10v-1.25zM10 4.375H0v1.25h10v-1.25zM10 .625H0v1.25h10V.625z"})})),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",Object.assign({id:"clip0_1787_19192"},{children:(0,r.jsx)("path",{fill:"#fff",d:"M0 0H10V10H0z"})}))})]})),pe=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"2",height:"10",fill:"none",viewBox:"0 0 2 10"},{children:[(0,r.jsx)(je,{cx:"1",cy:"1",r:"1"}),(0,r.jsx)(je,{cx:"1",cy:"5",r:"1"}),(0,r.jsx)(je,{cx:"1",cy:"9",r:"1"})]})),je=l.ZP.circle`
  fill: var(--black1);
`,be=({fill:e="#525252"})=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"13",height:"12",fill:"none",viewBox:"0 0 13 12"},{children:(0,r.jsx)("path",{fill:e,stroke:"#525252",strokeWidth:"0.1",d:"M2.318 3.67h8.8v1.777H9.725c-.853 0-1.548.69-1.548 1.54 0 .849.695 1.539 1.548 1.539h1.393v1.596h-8.8a.435.435 0 01-.436-.432V3.6a1.368 1.368 0 00.436.07zm0-1.792h6.04v.865h-6.04a.435.435 0 01-.436-.433c0-.238.195-.432.436-.432zm9.266.865H9.29v-1.33A.465.465 0 008.823.95H2.318C1.564.95.95 1.56.95 2.31v7.38c0 .75.614 1.36 1.368 1.36h9.266a.465.465 0 00.466-.464V3.207a.465.465 0 00-.466-.464zm-.466 3.631v1.224H9.725a.615.615 0 01-.616-.612c0-.337.276-.612.616-.612h1.393z"})})),ue=l.iv`
  position: absolute;
  padding: 1rem;
  opacity: 0;
  z-index: -1;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey2);
  border-radius: 3px;
  transition: opacity 0.3s linear;

  &:before {
    content: "";
    position: absolute;
    background-color: var(--white);
    width: 1.2rem;
    height: 1.2rem;
    transform: matrix(0.7, 0.44, -0.7, 0.4, 0, 0);
    border-left: 1px solid var(--grey2);
    border-top: 1px solid var(--grey2);
  }

  &.visible {
    opacity: 1;
    z-index: 4;
  }
`,fe=l.iv`
  .react-date-picker__wrapper {
    border: none;
  }

  .react-date-picker__inputGroup {
    width: 7.8rem;
    height: 2.5rem;
    border: 1px solid var(--grey2);
    border-radius: 3px;
    padding: 0 0.5rem;

    &:focus {
      border: 1px solid var(--blue6);
    }
  }

  input:not(:focus) {
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: var(--grey6);
  }

  .react-date-picker__button {
    display: none;
  }

  .react-calendar {
    z-index: 10;
    padding: 1rem;
    font-size: 1.3rem;
    font-family: var(--roboto);
    color: var(--black1);
    width: 31rem;
    background: var(--white);
    border-radius: 3px;
    border-color: var(--grey2);
  }

  .react-calendar__navigation {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .react-calendar__tile--now {
    border-radius: 50%;
    background: rgba(27, 87, 203, 0.04);
    border: 1px solid var(--blue6);

    &:hover {
      background: rgba(27, 87, 203, 0.08);
    }
  }

  .react-date-picker__inputGroup__input {
    &:focus-visible {
      outline: 1px solid var(--blue6);
    }
  }

  .react-calendar__tile--active {
    background: transparent;
    color: var(--black1);
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #999999;

    > abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid var(--grey2);
    margin-bottom: 1rem;
  }

  .react-calendar__month-view__days__day {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.9rem;

    &:hover {
      background: var(--white);
    }
  }

  .react-calendar__month-view__days__day[disabled] {
    background-color: var(--white);
  }

  .react-calendar__navigation__arrow,
  .react-calendar__navigation__arrow[disabled] {
    background: var(--white);
    font-size: 1.8rem;
  }

  .react-calendar__navigation__label__labelText {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    white-space: nowrap;

    &:hover {
      background: var(--white);
    }
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth[disabled] {
    color: #cccccc;
  }

  .react-calendar__month-view__days__day--weekend {
    color: var(--red);

    &[disabled] {
      color: rgba(245, 42, 57, 0.6);
    }

    &.react-calendar__month-view__days__day--neighboringMonth {
      color: var(--red);
    }
  }
`,we=({isOpen:e,onSubmit:i})=>{const[{billing:{amount:t,timeLeft:n,end:s,bonus:a,expenses:l}}]=x();return(0,r.jsxs)(ve,Object.assign({className:F()({visible:e})},{children:[(0,r.jsxs)(ye,{children:[(0,r.jsx)(ke,{children:"Баланс"}),(0,r.jsxs)(Oe,{children:[t," ₽"]}),(0,r.jsxs)(Pe,Object.assign({to:Ia.BILLING,onClick:i},{children:["Бонусы ",a," ₽"]}))]}),(0,r.jsxs)(ye,{children:[(0,r.jsx)(ke,{children:"Расходы в месяцы"}),(0,r.jsxs)(Oe,{children:[l," ₽"]})]}),(0,r.jsxs)(ye,{children:[(0,r.jsx)(ke,{children:"Окончание оплаченного периода"}),(0,r.jsx)(Oe,{children:s}),(0,r.jsxs)(Ze,{children:["(через ",n,")"]})]}),(0,r.jsxs)(Ce,{children:[(0,r.jsx)(ze,Object.assign({to:Ia.BILLING,className:"cancel",onClick:i},{children:"Детализация"})),(0,r.jsx)(ze,Object.assign({to:Ia.BILLING,onClick:i},{children:"Пополнить счет"}))]})]}))},ve=l.ZP.div`
  ${ue};
  top: 100%;
  right: 0;
  width: 36.5rem;
  margin-top: 8px;
  padding: 1.3rem 1.7rem;

  &:before {
    bottom: calc(100% - 5px);
    right: 1rem;
  }

  @media (max-width: 1266px) {
    top: 100%;
    right: -6.3rem;
    width: 31rem;

    &:before {
      right: 7.1rem;
    }
  }
`,ye=l.ZP.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    "a b"
    "c c";
  justify-content: space-between;
  border-bottom: 1px solid var(--grey2);
  padding: 0.65rem 0;
`,ke=l.ZP.h2`
  grid-area: a;
  font-size: 1.4rem;
  font-weight: 400;
  white-space: nowrap;
  margin: 5px 0;

  @media (max-width: 1266px) {
    white-space: inherit;
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`,Oe=l.ZP.h3`
  grid-area: b;
  text-align: right;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 5px 0;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`,Pe=(0,l.ZP)(a.rU)`
  grid-area: c;
  text-align: right;
  line-height: 1.5rem;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--blue6);
`,Ze=l.ZP.div`
  grid-area: c;
  color: var(--grey6);
  font-size: 1rem;
  text-align: right;
  line-height: 1.2rem;
`,Ce=l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`,ze=(0,l.ZP)(a.rU)`
  ${T};
  font-size: 1.4rem;
  text-decoration: none;
  margin: 1.5rem 0 1rem;
  padding: 1.1rem 2rem;
  width: 49%;
  text-align: center;
  font-weight: 600;

  &:first-child {
    background: var(--white);
  }

  @media (max-width: 1266px) {
    padding: 1.5rem 1rem;
    width: 48%;
  }
`,Me=()=>{const e=(0,n.useRef)(null),[i]=x(),{isOpen:t,toggleOpen:s,close:a}=xe(!1);return me(e,a),(0,r.jsxs)(Se,Object.assign({ref:e},{children:[(0,r.jsx)(be,{}),(0,r.jsxs)(_e,{children:[i.billing.amount," ₽"]}),(0,r.jsxs)(Ne,{children:["~ ",i.billing.timeLeft]}),(0,r.jsx)(Ee,Object.assign({onClick:s},{children:(0,r.jsx)(pe,{})})),(0,r.jsx)(we,{onSubmit:a,isOpen:t})]}))},Se=l.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 16.9rem;
  height: 2.7rem;
  border-radius: 2rem;
  background: #f6f6f6;
  padding-left: 1.2rem;

  @media (max-width: 1266px) {
    min-width: 9rem;
  }
`,_e=l.ZP.h2`
  font-size: 1.3rem;
  line-height: 1.3rem;
  padding: 0 10px;
  white-space: nowrap;
`,Ne=l.ZP.span`
  color: var(--grey7);
  font-size: 1rem;
  padding-right: 1rem;
  margin-top: 2px;
  white-space: nowrap;

  @media (max-width: 1266px) {
    display: none;
  }
`,Ee=(0,l.ZP)(D)`
  background: var(--grey2);
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 0 2rem 2rem 0;
  padding: 0;

  > svg {
    margin-right: 0.3rem;
  }
`,Ae=({isOpen:e,onClose:i})=>(0,r.jsxs)(Le,Object.assign({className:F()({visible:e})},{children:[(0,r.jsx)(Fe,Object.assign({to:Ia.MAIN,onClick:i},{children:"Рабочий стол"})),(0,r.jsx)(Fe,Object.assign({to:Ia.BILLING,onClick:i},{children:"Детализация расходов"}))]})),Le=l.ZP.div`
  ${ue};
  top: 2rem;
  left: 0.6rem;
  margin-top: 10px;
  padding: 0;

  &:before {
    z-index: -1;
    bottom: calc(100% - 5px);
    left: 0.8rem;
  }
`,Fe=(0,l.ZP)(a.rU)`
  padding: 1.6rem 2.5rem 1.6rem 4rem;
  font-size: 1.4rem;
  text-decoration: none;
  color: var(--black1);
  white-space: nowrap;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: rgba(26, 83, 203, 0.15);
  }
`;var De=t(73935),Be=t(86899);const Te=({children:e})=>De.createPortal((0,r.jsx)(Ve,{children:e}),document.querySelector("#app")),He=e=>{var{children:i}=e,t=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)i.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}(e,["children"]);return(0,r.jsx)(Be.Z,Object.assign({appear:!0,mountOnEnter:!0,unmountOnExit:!0},t,{children:(0,r.jsx)(Te,{children:i})}))},Ve=l.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`,Ie=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",viewBox:"0 0 15 15"},{children:[(0,r.jsx)("path",{fill:"#525252",d:"M0 13.771H19.474V15.510000000000002H0z",transform:"rotate(-45 0 13.77)"}),(0,r.jsx)("path",{fill:"#525252",d:"M13.771 15H33.245000000000005V16.739H13.771z",transform:"rotate(-135 13.77 15)"})]})),Re="modal",$e=({open:e,children:i,onClose:t})=>(0,r.jsx)(He,Object.assign({in:e,timeout:100,classNames:Re},{children:(0,r.jsxs)(Ue,{children:[(0,r.jsx)(We,{transitionClassPrefix:Re,onClick:t}),(0,r.jsxs)(Ke,{children:[(0,r.jsx)(Ge,Object.assign({onClick:t},{children:(0,r.jsx)(Ie,{})})),i]})]})})),Ue=l.ZP.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ge=l.ZP.div`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 900px) {
    top: 1.4rem;
    right: 1.4rem;
  }
`,We=l.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(11, 11, 11, 0.75);
  transition: opacity ${100}ms ease-in-out;
  ${({transitionClassPrefix:e})=>`\n    .${e}-enter & {\n      opacity: 0;\n    }\n    .${e}-enter-active & {\n      opacity: 1;\n    }\n    .${e}-exit-active & {\n      opacity: 0;\n    }\n  `}
`,Ke=l.ZP.div`
  position: relative;
  z-index: 1;
  background: var(--white);
  border-radius: 3px;
`,qe=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"14",height:"13",fill:"none",viewBox:"0 0 14 13"},{children:[(0,r.jsx)("path",{fill:"#1A57CB",stroke:"#1A57CB",strokeWidth:"0.1",d:"M7.002 11.13H2.5a.45.45 0 01-.45-.45V1.679a.45.45 0 01.45-.45h4.502a.55.55 0 100-1.1H2.5C1.646.127.95.822.95 1.677v9.003c0 .855.696 1.55 1.55 1.55h4.502a.55.55 0 100-1.1z"}),(0,r.jsx)("path",{fill:"#1A57CB",stroke:"#1A57CB",strokeWidth:"0.1",d:"M12.909 6.29h0a.551.551 0 010 .783h0l-3.025 3a.544.544 0 01-.774-.006h0a.552.552 0 01.005-.777l3.794-3zm0 0l-3.025-3m3.025 3l-3.025-3m1.307 2.841L9.115 4.073l2.076 2.058zm0 0H5.519a.548.548 0 00-.547.55c0 .304.244.55.547.55h5.672L9.115 9.29l2.076-3.159zM9.884 3.29a.546.546 0 00-.774.005.551.551 0 00.005.778l.77-.783z"})]}));var Je=t(1852);const Qe=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"none",viewBox:"0 0 13 13"},{children:(0,r.jsx)("path",{fill:"gray",d:"M2.653 7.602L10.255 0 13 2.745l-7.602 7.602-2.745-2.745zM0 13l1.815-4.363 2.548 2.548L0 13z"})})),Ye=({value:e,name:i,type:t="string"})=>{const s=(0,Je.useMediaQuery)({query:"(max-width: 600px)"}),[a,l]=x(),[,{value:o},{setValue:d}]=(0,E.U$)(i),{isOpen:c,close:h,open:m}=xe(!1),g=(0,n.useCallback)((()=>{d(o),l(Object.assign(Object.assign({},a),{[i]:o})),h()}),[a,h,o,i,l,d]);return(0,r.jsx)(Xe,{children:c?(0,r.jsxs)(ti,{children:[(0,r.jsx)(q,{type:t,name:i}),(0,r.jsx)(ri,Object.assign({onClick:g},{children:s?"+":"Подтвердить"})),(0,r.jsx)(ri,Object.assign({onClick:g,isCancel:!0},{children:(0,r.jsx)("div",{children:(0,r.jsx)(Ie,{})})}))]}):(0,r.jsxs)(ei,Object.assign({onClick:m},{children:[(0,r.jsx)("span",{children:null!=o?o:e}),(0,r.jsx)(ii,Object.assign({isTransparent:!0},{children:(0,r.jsx)(Qe,{})}))]}))})},Xe=l.ZP.div``,ei=l.ZP.div`
  display: flex;
  align-items: center;
`,ii=(0,l.ZP)(D)`
  padding: 0;
  margin-left: 1rem;
`,ti=l.ZP.label`
  display: flex;
  align-items: center;
`,ri=(0,l.ZP)(D)`
  height: 4.5rem;
  margin-left: 1rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;var ni=t(31298);const si=({children:e})=>(0,r.jsx)(ni.$B,Object.assign({renderThumbVertical:e=>{var{style:i}=e,t=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)i.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}(e,["style"]);return(0,r.jsx)("div",Object.assign({},t,{className:"thumb-vertical",style:Object.assign(Object.assign({},i),{backgroundColor:"#7F7F7F",borderRadius:"3px",width:"6px"})}))},allowTransparency:!0},{children:e})),ai=({onCancel:e})=>{const[i]=x(),{nickname:t,name:s,email:a,billing:{amount:l,timeLeft:o}}=i,d=(0,n.useCallback)((e=>{console.log("ACCOUNT FORM VALUES: ",e)}),[]);return(0,r.jsx)(li,{children:(0,r.jsx)(si,{children:(0,r.jsx)(oi,{children:(0,r.jsx)(E.J9,Object.assign({initialValues:i,onSubmit:d},{children:(0,r.jsxs)(E.l0,{children:[(0,r.jsx)(di,{children:"Аккаунт"}),(0,r.jsx)(mi,{children:"Баланс"}),(0,r.jsxs)(xi,{children:[(0,r.jsxs)(gi,{children:[(0,r.jsxs)(pi,{children:[l," ",(0,r.jsx)(ji,{children:"₽"})]}),(0,r.jsxs)(bi,{children:["~ ",o]})]}),(0,r.jsx)(ui,Object.assign({to:Ia.BILLING,onClick:e},{children:"Пополнить"}))]}),(0,r.jsx)(mi,{children:"Личные данные"}),(0,r.jsxs)(fi,{children:[(0,r.jsx)("span",{children:"Имя профиля"}),(0,r.jsx)(Ye,{value:t,name:"nickname"})]}),(0,r.jsxs)(fi,{children:[(0,r.jsx)("span",{children:"Имя пользователя"}),(0,r.jsx)(Ye,{value:s,name:"name"})]}),(0,r.jsxs)(fi,{children:[(0,r.jsx)("span",{children:"E-mail"}),(0,r.jsx)(Ye,{type:"email",value:a,name:"email"})]}),(0,r.jsx)(mi,{children:"Изменить пароль"}),(0,r.jsx)(wi,{label:"Введите старый пароль",type:"password",placeholder:"******",name:"oldPassword"}),(0,r.jsx)(wi,{label:"Новый пароль",type:"password",placeholder:"******",name:"newPassword"}),(0,r.jsx)(wi,{label:"Подтверждение нового пароля",type:"password",placeholder:"******",name:"newPasswordSubmit"}),(0,r.jsxs)(ci,{children:[(0,r.jsx)(hi,Object.assign({onClick:e,isCancel:!0},{children:"Отменить"})),(0,r.jsx)(hi,Object.assign({type:"submit"},{children:"Подтвердить"}))]})]})}))})})})},li=l.ZP.div`
  padding: 0 0 0 3.2rem;
  width: 63.8rem;
  height: 85vh;
  max-height: 80rem;

  @media (max-width: 1266px) {
    width: 60vw;
  }

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 700px) {
    width: 95vw;
    padding: 0 0 0 1.5rem;
  }
`,oi=l.ZP.div`
  padding: 3.2rem 3.2rem 3.2rem 0;
  overflow: hidden;
`,di=l.ZP.h1`
  font-size: 2.5rem;
  line-height: 2.2rem;
  margin: 0;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }
`,ci=l.ZP.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3.8rem;

  @media (max-width: 600px) {
    display: block;
    margin-top: 2rem;
  }
`,hi=(0,l.ZP)(D)`
  &:first-child {
    width: 14.9rem;
    margin-right: 2rem;
  }

  &:last-child {
    width: 22.2rem;
  }

  @media (max-width: 600px) {
    &:first-child {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
    }

    &:last-child {
      width: 100%;
    }
  }
`,mi=l.ZP.h2`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin: 3.2rem 0 1.5rem 0;
`,xi=l.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--grey2);
`,gi=l.ZP.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: block;
  }
`,pi=l.ZP.div`
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 2.2rem;
  color: var(--blue6);

  @media (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }
`,ji=l.ZP.span`
  font-size: 2.1rem;
`,bi=l.ZP.div`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: var(--grey7);
  margin-left: 1rem;
`,ui=(0,l.ZP)(a.rU)`
  width: 14.2rem;
  height: 4rem;
  border: 2px solid var(--green0);
  border-radius: 27px;
  padding: 1rem;
  text-decoration: none;
  color: var(--black1);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
`,fi=l.ZP.div`
  display: flex;
  justify-content: space-between;
  padding: 1.9rem 0;
  border-bottom: 1px solid var(--grey2);
  font-size: 1.4rem;
`,wi=(0,l.ZP)(q)`
  margin-top: 1.3rem;
`,vi=()=>{var e;const i=(0,N.s0)(),t=(0,n.useRef)(null),[s,,a]=x(),l=null===(e=s.name)||void 0===e?void 0:e.charAt(0).toUpperCase(),{isOpen:o,open:d,close:c}=xe(!1),{isOpen:h,toggleOpen:m,close:g}=xe(!1),p=(0,n.useCallback)((()=>{a(),i(Ia.AUTH)}),[i,a]);return me(t,g),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(yi,Object.assign({ref:t,onClick:m},{children:[(0,r.jsx)(ki,{children:l}),(0,r.jsx)(Oi,{className:F()({rotate:h})}),(0,r.jsxs)(zi,Object.assign({className:F()({visible:h})},{children:[(0,r.jsx)(Mi,Object.assign({onClick:d},{children:"Личные данные"})),(0,r.jsx)(Pi,Object.assign({to:Ia.BILLING},{children:"Дополнительно"})),(0,r.jsx)(Ci,{}),(0,r.jsx)(Zi,Object.assign({icon:(0,r.jsx)(qe,{}),onClick:p,isTransparent:!0},{children:"Выйти"}))]}))]})),(0,r.jsx)($e,Object.assign({open:o,onClose:c},{children:(0,r.jsx)(ai,{onCancel:c})}))]})},yi=l.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;
`,ki=(0,l.ZP)(D)`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  font-size: 1.3rem;
  color: var(--white);
  padding: 0;
  line-height: 1.2rem;
`,Oi=(0,l.ZP)((({className:e})=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"8",height:"5",fill:"none",viewBox:"0 0 8 5",className:e},{children:(0,r.jsx)("path",{fill:"#000000",d:"M7.81.207A.63.63 0 007.347 0h-.004a.623.623 0 00-.459.208L4.068 3.23a.091.091 0 01-.136 0L1.115.207a.624.624 0 00-.927.002.744.744 0 00.002.99l3.345 3.592a.623.623 0 00.46.209H4a.63.63 0 00.464-.207l3.35-3.595A.744.744 0 007.81.207z"})}))))`
  transition: transform 0.3s linear;

  &.rotate {
    transform: rotate(-180deg);
  }
`,Pi=(0,l.ZP)(a.rU)`
  text-decoration: none;
  color: var(--black1);
  padding: 1rem;
  font-size: 1.5rem;
  white-space: nowrap;
`,Zi=(0,l.ZP)(D)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--blue6);

  > svg {
    margin-right: 0.5rem;
  }
`,Ci=l.ZP.hr`
  background: var(--grey2);
  border: transparent;
  height: 1px;
  width: 100%;
`,zi=l.ZP.div`
  ${ue};
  top: 100%;
  right: 0;
  min-width: 14.5rem;
  margin-top: 9px;
  padding: 1rem;

  &:before {
    bottom: calc(100% - 5px);
    right: 1.9rem;
  }

  &.visible {
    opacity: 1;
    z-index: 3;
  }
`,Mi=(0,l.ZP)(D)`
  background: none;
  border: none;
  color: var(--black1);
  padding: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  white-space: nowrap;
`,Si=()=>{const e=(0,n.useRef)(null),{pathname:i}=(0,N.TH)(),{isOpen:t,toggleOpen:s,close:a}=xe(!1),[l]=y();return me(e,a),i!==Ia.AUTH?(0,r.jsxs)(_i,{children:[(0,r.jsxs)(Ei,{children:[(0,r.jsxs)("div",Object.assign({ref:e},{children:[(0,r.jsx)(Ai,Object.assign({onClick:s,isTransparent:!0},{children:(0,r.jsx)(ge,{})})),(0,r.jsx)(Ae,{isOpen:t,onClose:a})]})),(0,r.jsx)(Di,Object.assign({to:Ia.MAIN},{children:(0,r.jsx)(X,{})}))]}),(0,r.jsxs)(Li,{children:[(0,r.jsx)(Bi,Object.assign({is404:!l},{children:l})),(0,r.jsxs)(Fi,{children:[(0,r.jsx)(Me,{}),(0,r.jsx)(vi,{})]})]})]}):null},_i=l.ZP.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 4.6rem;
  padding: 1rem 1rem 1rem 0;
  background-color: var(--white);
  border-bottom: 1px solid var(--grey4);

  @media (max-width: 1266px) {
    padding-right: 0;
  }
`,Ni=l.iv`
  position: relative;
  display: flex;
  align-items: center;
`,Ei=l.ZP.section`
  ${Ni};
  width: 18.9rem;
`,Ai=(0,l.ZP)(D)`
  padding: 1.5rem;
`,Li=l.ZP.section`
  ${Ni};
  justify-content: space-between;
  flex: 2 2 80%;
  padding-right: 1rem;

  @media (max-width: 1266px) {
    justify-content: flex-end;
  }
`,Fi=l.ZP.section`
  ${Ni};
`,Di=(0,l.ZP)(a.rU)`
  @media (max-width: 1266px) {
    overflow: hidden;
    width: 17px;
  }
`,Bi=l.ZP.h2`
  display: inline-block;
  height: 100%;
  ${({is404:e})=>!e&&"border-left: 1px solid var(--grey1)"};
  font-size: 1.6rem;
  line-height: 2.8rem;
  padding-left: 2.2rem;
  white-space: nowrap;
  font-weight: 400;

  @media (max-width: 1266px) {
    display: none;
  }
`,Ti=({children:e})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Si,{}),(0,r.jsx)(Hi,{children:e})]}),Hi=l.ZP.main`
  display: flex;
  height: calc(100vh - 4.5rem);
  align-items: stretch;
  background: var(--white);
`,Vi=()=>{const[,e]=y(),[{billing:{amount:i,bonus:t}}]=x();return(0,n.useEffect)((()=>{e(w.BILLING)}),[e]),(0,r.jsx)(Ti,{children:(0,r.jsxs)(Ii,{children:[(0,r.jsxs)(Ri,{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)($i,{children:[(0,r.jsx)(Ui,{children:"Остаток на счёте"}),(0,r.jsxs)(Gi,{children:[i," ₽"]})]}),(0,r.jsxs)(Wi,{children:[(0,r.jsx)(Ki,{children:"Бонусный счет"}),(0,r.jsxs)(qi,{children:[t," Б"]})]})]}),(0,r.jsx)(Ji,Object.assign({icon:(0,r.jsx)(be,{fill:"#FFFFFF"})},{children:"Пополнить счет"}))]}),(0,r.jsx)(Qi,{children:"История платежей и расходов"}),(0,r.jsxs)(Yi,{children:[(0,r.jsx)(Xi,{children:(0,r.jsxs)(et,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Дата"}),(0,r.jsx)("th",{children:"Описание"}),(0,r.jsx)("th",{children:"Сумма"}),(0,r.jsx)("th",{children:"Бонусы"}),(0,r.jsx)("th",{children:"Остаток по счету"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"29.02.2020 12:30"}),(0,r.jsx)("td",{children:"Пополнение счета"}),(0,r.jsx)("td",Object.assign({className:"green"},{children:"+ 1 300 ₽"})),(0,r.jsx)("td",{children:"–"}),(0,r.jsx)("td",{children:"1 300,08 ₽"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"29.02.2020 13:40"}),(0,r.jsx)("td",{children:"Списание по тарифу"}),(0,r.jsx)("td",{children:"– 1 000 ₽"}),(0,r.jsx)("td",{children:"+ 28 Б"}),(0,r.jsx)("td",{children:"300 ₽"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"01.03.2020 15:30"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"– 300 ₽"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"0 ₽"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"01.03.2020 17:12"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"+ 1 970 ₽"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"1 970 ₽"})]})]})]})}),(0,r.jsx)(Xi,{children:(0,r.jsxs)(it,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Сумма пополнений"}),(0,r.jsx)("td",{children:"3270 ₽"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Сумма списаний"}),(0,r.jsx)("td",{children:"3270 ₽"})]})]})})]})]})})},Ii=l.ZP.div`
  margin: auto;
  min-height: 48.3rem;
  width: 78.9rem;

  @media (max-width: 850px) {
    width: 90vw;
  }
`,Ri=l.ZP.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 620px) {
    display: block;
  }
`,$i=l.ZP.div`
  display: flex;
  justify-content: space-between;
`,Ui=l.ZP.h1`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2rem;
  margin: 0 3rem 0 0;
`,Gi=l.ZP.h2`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.2rem;
  color: var(--blue6);
  white-space: nowrap;
  margin: 0;
`,Wi=l.ZP.div`
  margin-top: 0.8rem;
`,Ki=l.ZP.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--grey7);
`,qi=l.ZP.span`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
  padding-left: 2rem;
  color: var(--grey7);
`,Ji=(0,l.ZP)(D)`
  width: 20rem;
  height: 4rem;
  border-radius: 2.7rem;
  color: var(--white);
  background-color: var(--green1);

  > svg {
    margin-right: 1rem;
    width: 2.2rem;
    height: 2rem;
  }

  @media (max-width: 620px) {
    margin-top: 2rem;
  }
`,Qi=l.ZP.h2`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-top: 2.8rem;
`,Yi=l.ZP.div`
  margin-top: 2rem;
`,Xi=l.ZP.div`
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 2.7rem;
`,et=l.ZP.table`
  width: 100%;
  font-size: 1.4rem;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid var(--grey2);

  > thead > tr {
    background-color: var(--grey8);
    color: var(--white);

    > th {
      font-weight: 400;
      line-height: 3.9rem;

      @media (max-width: 620px) {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 1rem 0.5rem;
      }
    }
  }

  > tbody > tr {
    border: 1px solid var(--grey2);

    > td {
      line-height: 3.9;

      @media (max-width: 620px) {
        line-height: 1.5rem;
        padding: 1rem 0.5rem;
      }

      &:nth-child(2),
      &:last-child {
        color: var(--grey7);
      }

      &.green {
        color: var(--green1);
      }
    }

    @media (max-width: 620px) {
      font-size: 1rem;
    }
  }
`,it=(0,l.ZP)(et)`
  font-weight: 600;

  > tr {
    border: 1px solid var(--grey2);

    > td {
      line-height: 3.8;
      padding: 0 4rem;

      @media (max-width: 620px) {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 1rem;
      }

      &:first-child {
        text-align: left;
      }

      &:last-child {
        width: 18.6rem;
        text-align: center;

        @media (max-width: 620px) {
          text-align: right;
        }
      }
    }
  }
`;var tt=t(96486),rt=t.n(tt),nt=t(34997);const st=({title:e,onClose:i,onSumbit:t})=>(0,r.jsxs)(at,{children:[(0,r.jsx)(lt,{children:e}),(0,r.jsxs)(ot,{children:[(0,r.jsx)(D,Object.assign({onClick:i,isCancel:!0},{children:"Отменить"})),(0,r.jsx)(dt,Object.assign({onClick:t},{children:"Удалить"}))]})]}),at=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38rem;
  padding: 1.8rem 3.2rem;

  @media (max-width: 900px) {
    width: 30rem;
  }
`,lt=l.ZP.h2`
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2rem;
`,ot=l.ZP.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;

  > button {
    width: 15rem;

    @media (max-width: 900px) {
      width: 49%;
    }

    &:first-child {
      margin-right: 2rem;
    }
  }
`,dt=(0,l.ZP)(D)`
  background: var(--red);
  border: 1px solid var(--red);
`;var ct=t(64389);const ht=({name:e,text:i,tag:t,onChange:s,isChecked:a=!1,id:l,icon:o=null})=>{const d=(0,n.useCallback)((()=>{s(l)}),[]);return(0,r.jsxs)(mt,Object.assign({htmlFor:l,tag:t},{children:[(0,r.jsx)("input",{type:"radio",name:e,value:i,defaultChecked:a,id:l,hidden:!0}),(0,r.jsx)(xt,Object.assign({tag:t,className:F()({isChecked:a}),onClick:d},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:i}),o]})}))]}))},mt=l.ZP.label`
  height: 100%;

  ${({tag:e})=>e&&"\n    &:not(:last-child) {\n      margin-right: 1rem;\n      margin-bottom: 1rem;\n    }\n  "}
`,xt=(0,l.ZP)(D)`
  color: var(--black1);
  font-weight: 400;
  white-space: nowrap;
  padding: 1rem 1.75rem;
  background: var(--white);
  border-radius: 0;
  transition: background 0.3s linear, color 0.3s linear;

  ${({tag:e})=>e&&"\n    background: var(--grey0);\n    border: 1px solid var(--grey3);\n    height: 3.2rem;\n    border-radius: 3px;\n    border-radius: 3px;\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n    font-weight: 400;\n    padding: 0.5rem 1rem;\n    "};

  > svg {
    margin-left: 1rem;
  }

  &.isChecked {
    background: var(--blue6);
    color: var(--white);

    ${({tag:e})=>e&&"border-color: var(--blue6);"};
  }

  @media (max-width: 1140px) {
    padding: 1.4rem 1.75rem;
  }
`,gt=({list:e,tags:i})=>{const[t,s]=(0,n.useState)(e),a=(0,n.useCallback)((e=>{s(t.map((i=>Object.assign(Object.assign({},i),{isChecked:i.id===e}))))}),[t]);return(0,r.jsx)(pt,Object.assign({className:F()({tags:i})},{children:t.map((e=>(0,r.jsx)(ht,Object.assign({onChange:a},e),(0,nt.SK)())))}))},pt=l.ZP.div`
  display: flex;
  justify-content: stretch;
  overflow: hidden;

  &.tags {
    flex-wrap: wrap;
  }

  @media (max-width: 1266px) {
    overflow: visible;
  }
`,jt=Object.freeze({isChecked:!1,tag:!0}),bt=[{title:"Статус",group:[Object.assign(Object.assign({},jt),{text:"Мониторинг",id:"statusMonitoring1",name:"statusMonitoring"}),Object.assign(Object.assign({},jt),{text:"Остановлено",id:"statusMonitoring2",name:"statusMonitoring"}),Object.assign(Object.assign({},jt),{text:"Ошибка",id:"statusMonitoring3",name:"statusMonitoring"})]},{title:"Тип мониторинга",group:[Object.assign(Object.assign({},jt),{text:"Только фрагменты",id:"typeMonitoring1",name:"typeMonitoring"}),Object.assign(Object.assign({},jt),{text:"Все содержимое",id:"typeMonitoring2",name:"typeMonitoring"}),Object.assign(Object.assign({},jt),{text:"Только фразы",id:"typeMonitoring3",name:"typeMonitoring"})]}],ut=({isOpen:e,onClose:i,onSubmit:t})=>{const s=(0,n.useRef)(null),a=new Date,[l,o]=(0,n.useState)(new Date),[d,c]=(0,n.useState)(new Date(a.setDate(a.getDate()+1)));return me(s,i),(0,r.jsxs)(ft,Object.assign({ref:s,className:F()({isOpen:e})},{children:[(0,r.jsx)(wt,{icon:(0,r.jsx)(Ie,{}),onClick:i,isTransparent:!0}),(0,r.jsx)(E.J9,Object.assign({initialValues:{statusMonitoring:!1,typeMonitoring:!1,filtersStartPicker:new Date,filtersEndPicker:new Date(a.setDate(a.getDate()+1))},onSubmit:t},{children:(0,r.jsxs)(E.l0,{children:[bt.map((e=>(0,r.jsxs)(vt,{children:[(0,r.jsx)(yt,{children:e.title}),(0,r.jsx)(gt,{list:e.group,tags:!0})]},(0,nt.SK)()))),(0,r.jsxs)(vt,{children:[(0,r.jsx)(yt,{children:"Дата изменения"}),(0,r.jsxs)(kt,{children:[(0,r.jsxs)(Ot,{children:[(0,r.jsx)(Pt,{htmlFor:"trackingStartPicker",text:"Начало"}),(0,r.jsx)(Zt,{name:"filtersStartPicker",onChange:o,value:l,minDate:l})]}),(0,r.jsxs)(Ot,{children:[(0,r.jsx)(Pt,{htmlFor:"trackingEndPicker",text:"Окончание"}),(0,r.jsx)(Zt,{name:"filtersEndPicker",onChange:c,value:d,minDate:l})]})]}),(0,r.jsx)(Ct,Object.assign({isTransparent:!0},{children:"Очистить"}))]}),(0,r.jsxs)(zt,{children:[(0,r.jsx)(D,Object.assign({onClick:i,isCancel:!0},{children:"Отменить"})),(0,r.jsx)(D,Object.assign({type:"submit"},{children:"Сохранить"}))]})]})}))]}))},ft=l.ZP.div`
  ${ue};
  width: 41.1rem;
  text-align: left;
  position: absolute;
  top: 3rem;
  left: 3.1rem;
  padding: 1rem 2.5rem 2.5rem;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s linear;

  &.isOpen {
    opacity: 1;
    z-index: 5;
  }

  &:before {
    top: -7px;
    left: 4.5rem;
  }

  @media (max-width: 600px) {
    width: 32rem;
    top: 3.2rem;
    left: -3.9rem;
    padding: 1rem 1.5rem 1.5rem;

    &:before {
      left: 8.3rem;
    }
  }
`,wt=(0,l.ZP)(D)`
  position: absolute;
  top: 0.5rem;
  right: 0;
`,vt=l.ZP.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`,yt=l.ZP.h3`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
`,kt=l.ZP.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: block;
  }
`,Ot=l.ZP.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 1.6rem;

    @media (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`,Pt=(0,l.ZP)(W)`
  margin-bottom: 0;
  margin-right: 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6rem;
`,Zt=(0,l.ZP)(ct.Z)`
  ${fe};

  input:not(:focus) {
    color: var(--black1);
  }
`,Ct=(0,l.ZP)(D)`
  color: var(--red);
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-weight: 400;
`,zt=l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  > button {
    width: 48%;
  }
`,Mt=({fill:e="#0C45A0"})=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",fill:"none",viewBox:"0 0 10 6"},{children:(0,r.jsx)("path",{fill:e,d:"M9.763.236A.822.822 0 009.183 0H9.18a.813.813 0 00-.574.238l-3.52 3.455a.121.121 0 01-.17 0L1.395.236A.83.83 0 00.234.24a.797.797 0 00.003 1.132L4.42 5.475a.813.813 0 00.575.24H5a.822.822 0 00.58-.237l4.186-4.11A.797.797 0 009.763.237z"})})),St=({label:e,list:i,fill:t="#1A57CB",name:s,regular:a})=>{const l=(0,n.useRef)(null),[,o]=b(),[d,c]=(0,n.useState)(i[0]),{isOpen:h,toggleOpen:m,close:x}=xe(!1),g=(0,n.useCallback)((e=>{c(e.currentTarget.innerText),o({[s]:i.indexOf(e.currentTarget.innerText)}),x()}),[x,o,i,s]);return me(l,x),(0,r.jsxs)(_t,Object.assign({ref:l,label:e},{children:[e&&(0,r.jsx)(Nt,{children:e}),(0,r.jsxs)(Et,Object.assign({onClick:m,fill:t,regular:a},{children:[(0,r.jsx)("span",{children:d}),(0,r.jsx)(At,Object.assign({className:F()({open:h})},{children:(0,r.jsx)(Mt,{fill:t})})),(0,r.jsx)(Lt,Object.assign({className:F()({open:h})},{children:i.map((e=>(0,r.jsx)(Ft,Object.assign({onClick:g},{children:e}),e)))}))]}))]}))},_t=l.ZP.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  ${({label:e})=>e?"\n    width: 100%;\n    padding-left: 3rem;\n    margin-top: 1rem;\n    ":"\n    display: inline-block;\n    "};
`,Nt=l.ZP.div`
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,Et=l.ZP.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  color: ${({fill:e})=>e};
  font-weight: ${({regular:e})=>e?400:700};
  margin-left: 2rem;
`,At=l.ZP.div`
  margin-left: 1rem;
  transition: transform 0.3s linear;

  > svg {
    margin-bottom: 2px;
  }

  &.open {
    transform: rotate(180deg);
  }
`,Lt=l.ZP.ul`
  width: 25.6rem;
  list-style: none;
  position: absolute;
  background-color: var(--white);
  top: 120%;
  left: -2rem;
  background: var(--white);
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s linear;

  &.open {
    opacity: 1;
    z-index: 1;
  }
`,Ft=l.ZP.li`
  padding: 1rem;
  color: var(--black1);
  font-weight: 400;
  transition: background 0.3s linear;

  &:hover {
    background: var(--blue1);
  }
`,Dt=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"15",height:"10",fill:"none",viewBox:"0 0 15 10"},{children:(0,r.jsx)("path",{fill:"#525252",stroke:"#525252",strokeWidth:"0.1",d:"M12.037 2.279h0a1.852 1.852 0 00-.67-.96 1.868 1.868 0 00-2.9.958l-.013.037H1.447a.498.498 0 00-.497.495.493.493 0 00.497.494h7.006l.013.04c.114.383.35.72.67.959a1.868 1.868 0 002.901-.96h0l.01-.039h1.506a.498.498 0 00.497-.494.493.493 0 00-.497-.495h-1.506l-.01-.035zM6.534 6.657h0a1.852 1.852 0 00-.67-.96 1.868 1.868 0 00-2.9.959l-.013.037H1.447a.498.498 0 00-.497.494.493.493 0 00.497.494H2.95l.013.04c.114.384.35.72.67.96a1.868 1.868 0 002.9-.96h0l.001-.001.01-.039h7.01a.498.498 0 00.496-.494.493.493 0 00-.497-.494H6.544l-.01-.036zm3.716-2.976a.882.882 0 01-.811-.54.868.868 0 01.19-.95.88.88 0 011.499.617.87.87 0 01-.254.613.88.88 0 01-.614.26h-.01zm-5.503 4.38a.882.882 0 01-.812-.54.868.868 0 01.19-.951.88.88 0 011.5.617.87.87 0 01-.254.614.88.88 0 01-.614.26h-.01z"})})),Bt=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"8",height:"10",fill:"none",viewBox:"0 0 8 10"},{children:[(0,r.jsx)("path",{fill:"#fff",d:"M0 0H8V10H0z"}),(0,r.jsx)("path",{stroke:"#1A57CB",d:"M.5.5H4A3.5 3.5 0 017.5 4v5.5h-7v-9z"}),(0,r.jsx)("path",{fill:"#1A57CB",d:"M4 1h1a2 2 0 012 2v1H5a1 1 0 01-1-1V1z"})]})),Tt=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"14",height:"15",fill:"none",viewBox:"0 0 14 15"},{children:(0,r.jsx)("path",{fill:"#525252",d:"M13.515 1.923a.514.514 0 00-.58.507l-.073.798C11.629 1.306 9.488 0 6.985 0A6.949 6.949 0 00.783 3.809c-.145.254-.037.616.254.725.253.145.616.036.725-.254.98-1.922 2.974-3.228 5.223-3.228a5.832 5.832 0 014.934 2.72l-.798-.544c-.254-.181-.58-.108-.762.145-.181.254-.109.58.145.762l2.358 1.705a.544.544 0 00.87-.399l.254-2.938c.073-.29-.145-.544-.471-.58zM12.97 9.504c-.253-.145-.616-.036-.725.254-.98 1.922-2.974 3.228-5.223 3.228a5.832 5.832 0 01-4.933-2.72l.798.544c.253.181.58.108.761-.145.182-.254.11-.58-.145-.762L1.145 8.198c-.326-.254-.834-.036-.87.399L.02 11.535c-.036.29.181.58.508.58.29.037.58-.18.58-.507l.073-.798c1.233 1.922 3.373 3.228 5.876 3.228a6.949 6.949 0 006.203-3.809.657.657 0 00-.29-.725z"})})),Ht=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},{children:[(0,r.jsx)("circle",{cx:"8",cy:"8",r:"7.4",stroke:"#0AAA56",strokeWidth:"1.2"}),(0,r.jsx)("path",{fill:"#0AAA56",d:"M6.13 9.164A3.228 3.228 0 015.5 7.25 3.254 3.254 0 018.75 4 3.254 3.254 0 0112 7.25a3.254 3.254 0 01-3.25 3.25 3.229 3.229 0 01-1.914-.63L4.707 12 4 11.293l2.13-2.13zm2.62.336C9.99 9.5 11 8.49 11 7.25S9.99 5 8.75 5 6.5 6.01 6.5 7.25 7.51 9.5 8.75 9.5z"})]})),Vt=({favourite:e=!1})=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},{children:(0,r.jsx)("path",{fill:e?"#323232":"transparent",stroke:e?"#323232":"#CDCDCD",d:"M8.53 2.779a.5.5 0 01.94 0l.998 2.767a1.5 1.5 0 001.364.99l2.94.094a.5.5 0 01.29.895L12.74 9.329a1.5 1.5 0 00-.52 1.603l.819 2.825a.5.5 0 01-.761.553l-2.435-1.652a1.5 1.5 0 00-1.684 0L5.724 14.31a.5.5 0 01-.762-.553l.82-2.825a1.5 1.5 0 00-.52-1.603L2.936 7.525a.5.5 0 01.291-.895l2.94-.094a1.5 1.5 0 001.364-.99l.998-2.767z"})})),It=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",viewBox:"0 0 15 15"},{children:[(0,r.jsx)("path",{fill:"#525252",d:"M13.495.002H.645a.539.539 0 00-.394.132.438.438 0 00-.13.394L1.485 12.41a2.6 2.6 0 002.6 2.285h6.178a2.626 2.626 0 002.627-2.364L14.016.462a.438.438 0 00-.131-.341.534.534 0 00-.39-.119zm-1.65 12.29a1.523 1.523 0 01-1.577 1.366H4.087a1.497 1.497 0 01-1.55-1.34L1.223 1.053h11.694l-1.072 11.239z"}),(0,r.jsx)("path",{stroke:"#525252",d:"M13.495.002H.645a.539.539 0 00-.394.132.438.438 0 00-.13.394L1.485 12.41a2.6 2.6 0 002.6 2.285h6.178a2.626 2.626 0 002.627-2.364L14.016.462a.438.438 0 00-.131-.341.534.534 0 00-.39-.119zm-1.65 12.29a1.523 1.523 0 01-1.577 1.366H4.087a1.497 1.497 0 01-1.55-1.34L1.223 1.053h11.694l-1.072 11.239zM4.786 4.808l5 5m-5.014 0l5-5"})]})),Rt=["Все содержимое","Только фрагменты","Только фразы","Приостановлено"],$t=({id:e,title:i,favourite:t,href:s,allChecked:a,setAllChecked:l,onDeleteProject:o})=>{const d=(0,Je.useMediaQuery)({query:"(min-width: 1920px)"}),[c,h]=C(),[m,x]=(0,n.useState)(a),g=(0,n.useCallback)((()=>{l(a),x(m)}),[a,m,l]),p=(0,n.useCallback)((()=>{h(c.map((i=>Object.assign(Object.assign({},i),{projects:i.projects.map((i=>i.id===e?Object.assign(Object.assign({},i),{favourite:!t}):i))}))))}),[h,c,e,t]);return(0,r.jsxs)(Ut,{children:[(0,r.jsx)("td",{}),(0,r.jsx)(Gt,{children:(0,r.jsx)(Wt,{children:(0,r.jsx)(Jt,{layout:"white",defaultChecked:null!=m?m:a,onChange:g})})}),(0,r.jsx)("td",{children:(0,r.jsx)(Yt,Object.assign({onClick:p,isTransparent:!0},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"checkbox",checked:t,readOnly:!0,hidden:!0}),(0,r.jsx)(Vt,{favourite:t})]})}))}),(0,r.jsxs)(Kt,{children:[(0,r.jsx)(Xt,{}),(0,r.jsx)(er,{children:(0,r.jsx)(Bt,{})}),(0,r.jsx)(ir,{children:i}),(0,r.jsx)(tr,{children:(0,r.jsx)(sr,Object.assign({to:s},{children:s}))})]}),(0,r.jsx)(qt,{children:(0,r.jsx)(Ht,{})}),(0,r.jsxs)(rr,{children:[(0,r.jsx)("span",{children:"01.07.20"}),(0,r.jsx)(ar,{children:"20:30"})]}),(0,r.jsx)("td",{children:(0,r.jsx)(nr,{children:(0,r.jsx)(St,{list:Rt,fill:"#0B0B0B",name:"monitoringList",regular:!0})})}),d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(or,{children:"Значение"}),(0,r.jsx)(or,{children:"26%"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(lr,{children:[(0,r.jsx)(Qt,Object.assign({isTransparent:!0},{children:(0,r.jsx)(Dt,{})})),(0,r.jsx)(Qt,Object.assign({isTransparent:!0},{children:(0,r.jsx)(Tt,{})})),(0,r.jsx)(Qt,Object.assign({onClick:o,isTransparent:!0},{children:(0,r.jsx)(It,{})}))]})}),(0,r.jsx)("td",{})]})},Ut=l.ZP.tr`
  background: var(--white);

  > td {
    position: relative;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--grey1);

    &:first-child,
    &:last-child {
      width: 1rem;
      border-bottom: transparent;
    }
  }
`,Gt=l.ZP.td`
  width: 3.6rem;
`,Wt=l.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
`,Kt=l.ZP.td`
  max-width: 32rem;
  padding-right: 3rem;
`,qt=l.ZP.td`
  text-align: center;

  > svg {
    margin-left: 2rem;
  }
`,Jt=(0,l.ZP)(V)`
  margin: auto;
  width: 1.6rem;
  height: 1.6rem;

  > .checkbox {
    width: 1.6rem;
    height: 1.6rem;
    flex: 1 0 1.6rem;

    &:after {
      left: 51%;
      top: 39%;
      width: 0.6rem;
      height: 1.2rem;
    }
  }
`,Qt=(0,l.ZP)(D)`
  color: var(--black1);
  padding: 0;
  margin: 0 auto;
`,Yt=(0,l.ZP)(Qt)`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin: auto;
`,Xt=l.ZP.div`
  position: absolute;
  top: 5px;
  left: 93%;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: var(--blue6);

  @media (max-width: 1266px) {
    left: 91%;
  }
`,er=(0,l.ZP)(Qt)`
  position: absolute;
  top: 3px;
  left: 96%;
`,ir=l.ZP.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  width: 92%;
`,tr=l.ZP.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 92%;
  font-size: 12px;
  line-height: 14px;
`,rr=l.ZP.td`
  text-align: center;
  font-size: 1.2rem;
`,nr=l.ZP.div`
  display: flex;
  justify-content: space-around;
  white-space: nowrap;
`,sr=(0,l.ZP)(a.rU)`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: var(--grey6);
  text-decoration: none;
`,ar=l.ZP.div`
  color: var(--grey6);
  line-height: 2;
`,lr=l.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`,or=l.ZP.td`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.4rem;
`,dr=()=>(0,r.jsx)(cr,{frameBorder:"no",src:"https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0"}),cr=l.ZP.iframe`
  width: 100%;
  height: 100%;

  h1,
  h2 {
    text-align: center;
  }

  .websvodka_selected_block {
    background-color: #0e76a8 !important;
  }

  .websvodka_hover_block {
    background-color: #0fbaff;
  }

  .websvodka_highlight_block,
  *[websvodka-selected-block="1"] {
    border: 1px solid #f3f54c;
  }
`,hr=(l.ZP.div`
  background: #62bcee;
  font: normal 15px/14px "PT Sans", Helvetica, Arial, sans-serif;
  padding: 10px;
`,l.ZP.div`
  text-align: right;
`,()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none",viewBox:"0 0 18 18"},{children:[(0,r.jsx)("path",{stroke:"#9D9D9D",strokeWidth:"2",d:"M1 5H13V17H1z"}),(0,r.jsx)("path",{stroke:"#9D9D9D",strokeWidth:"2",d:"M5 1H17V13H5z"})]}))),mr=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none",viewBox:"0 0 18 18"},{children:[(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M0 4L15 4"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M14 18L14 4"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M18 14L3 14"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M4 0L4 14"})]})),xr=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},{children:[(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M10 15L15 15"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M15 16L15 10"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M0 15L6 15"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M1 10L1 16"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M1 6L1 0"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M6 1L0 1"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M10 1L15 1"}),(0,r.jsx)("path",{stroke:"#525252",strokeWidth:"2",d:"M15 6L15 0"})]})),gr=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"17",height:"14",fill:"none",viewBox:"0 0 17 14"},{children:(0,r.jsx)("path",{fill:"#525252",d:"M16.944 7.278l-1.34-5.326A2.588 2.588 0 0014.337.318a2.615 2.615 0 00-2.074-.186l-.45.15a.465.465 0 00-.295.593l.148.443c.08.246.35.378.597.297l.387-.128c.322-.106.68-.106.982.051.302.158.516.425.601.755L15.365 6.8a8.136 8.136 0 00-2.395-.366c-1.029 0-2.157.205-3.39.784H7.42a7.762 7.762 0 00-3.391-.785c-.926 0-1.742.165-2.395.366l1.133-4.508c.085-.33.299-.597.605-.755.3-.156.657-.156.978-.05l.388.128a.474.474 0 00.597-.297l.148-.443a.465.465 0 00-.3-.593l-.45-.15a2.617 2.617 0 00-2.07.187 2.59 2.59 0 00-1.27 1.633L.056 7.278A1.858 1.858 0 000 7.732V9.79c0 1.815 1.524 3.336 3.403 3.336h1.096c1.778 0 3.258-1.348 3.391-3.088l.085-1.132H9.03l.085 1.132c.132 1.713 1.61 3.088 3.387 3.088h1.096c1.878 0 3.4-1.495 3.4-3.337V7.732a1.712 1.712 0 00-.054-.454zM6.004 9.894c-.06.762-.72 1.355-1.506 1.355H3.4c-.832-.025-1.511-.655-1.511-1.46V8.69c.535-.19 1.28-.38 2.143-.38.705 0 1.395.127 2.063.38l-.092 1.204zm9.107-.105c0 .805-.679 1.461-1.513 1.461h-1.095c-.786 0-1.447-.593-1.505-1.355l-.093-1.205a5.813 5.813 0 012.066-.38c.856 0 1.605.19 2.14.38v1.099z"})})),pr=({onToggle:e})=>(0,r.jsxs)(jr,{children:[(0,r.jsx)(fr,{children:(0,r.jsx)(br,Object.assign({onClick:e,isTransparent:!0},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Добавления"}),(0,r.jsx)(ur,{})]})}))}),(0,r.jsx)(fr,{children:(0,r.jsx)(br,Object.assign({isTransparent:!0},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Последнее изменение"}),(0,r.jsx)(ur,{})]})}))})]}),jr=l.ZP.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--grey3);
  border-top: 0;
  border-bottom: 0;
  height: 3rem;
`,br=(0,l.ZP)(D)`
  display: flex;
  align-items: center;
  color: var(--black1);
  white-space: nowrap;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1rem;
  padding: 1rem 1.5rem;

  @media (min-width: 1920px) {
    padding: 1rem 2.1rem;
  }
`,ur=l.ZP.div`
  margin-left: 1.5rem;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid var(--grey6);
  transition: transform 0.3s linear;

  &.isOpen {
    transform: rotate(-180deg);
  }
`,fr=l.ZP.div`
  position: relative;
`,wr=({list:e,onToggle:i})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(gt,{list:e}),(0,r.jsxs)(Or,{children:[(0,r.jsx)(pr,{onToggle:i}),(0,r.jsxs)(Zr,{children:[(0,r.jsx)(Cr,{icon:(0,r.jsx)(mr,{}),isTransparent:!0}),(0,r.jsx)(Cr,{icon:(0,r.jsx)(xr,{}),isTransparent:!0}),(0,r.jsx)(Cr,{icon:(0,r.jsx)(hr,{}),isTransparent:!0})]}),(0,r.jsx)(Pr,{icon:(0,r.jsx)(gr,{}),isTransparent:!0})]})]}),vr=({list:e,onToggle:i})=>{const t=(0,Je.useMediaQuery)({query:"(max-width: 1140px)"});return(0,r.jsx)(yr,{children:t?(0,r.jsx)(si,{children:(0,r.jsx)(kr,{children:(0,r.jsx)(wr,{list:e,onToggle:i})})}):(0,r.jsx)(wr,{list:e,onToggle:i})})},yr=l.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  height: 3.9rem;
  border: 1px solid #d6d6d6;
  border-left: 0;
  border-right: 0;
  background-color: var(--white);

  @media (max-width: 1140px) {
    overflow: auto;
    width: calc(100vw - 4.3rem);
    height: 4.8rem;
  }
`,kr=l.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`,Or=l.ZP.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
`,Pr=(0,l.ZP)(D)`
  padding: 1.4rem 1.7rem;

  @media (min-width: 1920px) {
    padding: 1.4rem 2.3rem;
  }
`,Zr=l.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid var(--grey3);
  height: 3rem;
`,Cr=(0,l.ZP)(D)`
  padding: 1.4rem 1.25rem;

  @media (min-width: 1920px) {
    padding: 1.4rem 1.6rem;
  }
`,zr=({name:e,label:i,list:t,currentValue:s,onChange:a,isSmall:l,isNumber:o})=>{const d=(0,n.useRef)(null),[c,h]=(0,n.useState)(null!=s?s:"--"),{close:m,toggleOpen:x,isOpen:g}=xe(!1),p=(0,n.useCallback)((e=>{h(e),a&&a(e)}),[a,h]);return me(d,m),(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsx)(W,{text:i}),(0,r.jsxs)(Sr,Object.assign({type:"button",ref:d,onClick:x,className:F()({isSmall:l,isNumber:o})},{children:[c,(0,r.jsx)("select",Object.assign({name:e,defaultValue:c,hidden:!0},{children:t.map(((e,i)=>(0,r.jsx)("option",{children:e},i)))})),(0,r.jsx)(Nr,Object.assign({className:F()({isSmall:l,isNumber:o})},{children:l||o?(0,r.jsx)(Er,Object.assign({className:F()({open:g})},{children:(0,r.jsx)(Mt,{fill:"#525252"})})):(0,r.jsx)(Ar,{className:F()({open:g})})})),g&&(0,r.jsx)(_r,{children:t.map(((e,i)=>(0,r.jsx)(Lr,Object.assign({onClick:()=>p(e),className:F()({isSmall:l,isNumber:o})},{children:e}),i)))})]}))]})},Mr=l.iv`
  height: 2.5rem;
  padding: 0 0.5rem;
  line-height: 0.3;
`,Sr=l.ZP.button`
  width: 100%;
  position: relative;
  border: 1px solid var(--grey2);
  border-radius: 3px;
  height: 4.5rem;
  padding: 0 2rem;
  text-align: left;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;

  &.isSmall {
    ${Mr};
    width: 9.7rem;
  }

  &.isNumber {
    ${Mr};
    width: 4.6rem;
    color: var(--grey6);
    font-size: 1.3rem;
  }
`,_r=l.ZP.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  border: 1px solid var(--grey2);
  border-top: none;
  border-radius: 0 0 3px 3px;
  width: 100%;
  background-color: #fff;
`,Nr=l.ZP.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3.3rem;
  border-left: 1px solid var(--grey2);

  &.isSmall,
  &.isNumber {
    width: 1.5rem;
  }
`,Er=l.ZP.div`
  margin: auto;
  line-height: 0;
  transition: transform 0.3s linear;

  &.open {
    transform: rotate(-180deg);
  }
`,Ar=l.ZP.div`
  margin: auto;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid var(--black0);
  transition: transform 0.3s linear;

  &.open {
    transform: rotate(-180deg);
  }
`,Lr=l.ZP.div`
  min-height: 4.5rem;
  padding: 2rem;
  border-top: 1px solid var(--grey2);

  &.isSmall,
  &.isNumber {
    line-height: 1;
    padding: 0.8rem;
    min-height: 2.5rem;
  }
`,Fr=[1,2,3,4,5],Dr=({isOpen:e})=>{const i=new Date,[t,s]=(0,n.useState)(new Date),[a,l]=(0,n.useState)(new Date(i.setDate(i.getDate()+1)));return(0,r.jsx)(Br,Object.assign({className:F()({isOpen:e})},{children:(0,r.jsx)(E.J9,Object.assign({initialValues:{trackingStartPicker:new Date,trackingStart:0,trackingEndPicker:new Date(i.setDate(i.getDate()+1)),trackingEnd:1,lastChanges:!1},onSubmit:tt.noop},{children:(0,r.jsxs)(E.l0,{children:[(0,r.jsxs)(Tr,{children:[(0,r.jsxs)(Hr,{children:[(0,r.jsx)(Ir,{htmlFor:"trackingStartPicker",text:"Начало"}),(0,r.jsx)(Rr,{name:"trackingStartPicker",onChange:s,value:t,minDate:t})]}),(0,r.jsxs)(Hr,{children:[(0,r.jsx)(Ir,{htmlFor:"trackingStart",text:"Версия"}),(0,r.jsx)($r,{name:"trackingStart",list:Fr,onChange:tt.noop,currentValue:Fr[0],isNumber:!0})]})]}),(0,r.jsxs)(Tr,{children:[(0,r.jsxs)(Hr,{children:[(0,r.jsx)(Ir,{htmlFor:"trackingEndPicker",text:"Окончание"}),(0,r.jsx)(Rr,{name:"trackingEndPicker",onChange:l,value:a,minDate:t})]}),(0,r.jsxs)(Hr,{children:[(0,r.jsx)(Ir,{htmlFor:"trackingEnd",text:"Версия"}),(0,r.jsx)($r,{name:"trackingEnd",list:Fr,onChange:tt.noop,currentValue:Fr[0],isNumber:!0})]})]}),(0,r.jsx)(Ur,{}),(0,r.jsx)(Gr,{name:"lastChanges",text:"Последнее изменение",layout:"white"})]})}))}))},Br=l.ZP.div`
  position: absolute;
  top: 3.9rem;
  right: 35rem;
  width: 31.3rem;
  padding: 1rem 1rem 1.4rem;
  border: 1px solid var(--grey2);
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s linear;

  &.isOpen {
    opacity: 1;
    z-index: 4;
  }

  @media (max-width: 1140px) {
    right: 20rem;
  }

  @media (max-width: 940px) {
    right: 0;
  }
`,Tr=l.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-child {
    margin-bottom: 2px;
  }
`,Hr=l.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:first-child {
    width: 17.6rem;
  }
`,Vr=l.iv`
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: var(--grey6);
`,Ir=(0,l.ZP)(W)`
  ${Vr};
  margin-bottom: 0;
  margin-right: 1rem;
`,Rr=(0,l.ZP)(ct.Z)`
  ${fe};
`,$r=(0,l.ZP)(zr)`
  ${Vr};
  color: var(--grey6);
`,Ur=l.ZP.hr`
  border: none;
  background: var(--grey2);
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;
`,Gr=(0,l.ZP)(V)`
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 1.2rem;

  > .checkbox-text {
    font-size: 1.3rem;
    white-space: nowrap;
    font-weight: 400;
  }

  > .checkbox {
    width: 1.6rem;
    height: 1.6rem;
    flex: 1 0 1.6rem;

    &:after {
      left: 51%;
      top: 39%;
      width: 0.6rem;
      height: 1.2rem;
    }
  }
`,Wr=[{text:"Содержание 8%",id:"contentMetric",isChecked:!1,name:"metric"},{text:"Текст 8%",id:"textMetric",isChecked:!1,name:"metric"},{text:"Код 92%",id:"codeMetric",isChecked:!1,name:"metric"},{text:"Ссылки 18%",id:"refMetric",isChecked:!1,name:"metric"},{text:"Свойства",id:"properties",isChecked:!1,icon:(0,r.jsx)((({fill:e="#525252",stroke:i="#F9F9F9"})=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",viewBox:"0 0 15 15"},{children:[(0,r.jsx)("rect",{width:"15",height:"15",fill:e,rx:"7.5"}),(0,r.jsx)("path",{fill:i,stroke:i,strokeWidth:"0.1",d:"M9.187 7.325L8.048 8.383v-4.72c0-.329-.3-.555-.593-.555-.151 0-.299.07-.408.17a.54.54 0 00-.186.384v4.72L5.722 7.326a.644.644 0 00-.442-.181c-.344 0-.593.274-.593.554 0 .141.051.28.197.416l2.174 2.018c.097.09.244.181.442.181a.624.624 0 00.442-.181l2.174-2.018a.567.567 0 00.197-.416V7.69l-.003-.008a.89.89 0 00-.264-.369.668.668 0 00-.417-.169.624.624 0 00-.442.181z"})]}))),{}),name:"metric"}],Kr=()=>{const e=(0,Je.useMediaQuery)({query:"(min-width: 1920px)"}),{isOpen:i,toggleOpen:t}=xe(!1),{isOpen:s,open:a,close:l}=xe(!1),{isOpen:o,open:d,close:c}=xe(!1),[h,m]=(0,n.useState)(!1),[x,g]=(0,n.useState)({projectId:""}),[p,j]=C(),[b,u]=(0,n.useState)(!1),f=(0,n.useCallback)((()=>{u(!b)}),[b]),w=(0,n.useCallback)(((e,i)=>{g({projectId:e,itemId:i}),a()}),[a]),v=(0,n.useCallback)((()=>{j(p.map((e=>e.id===x.itemId?Object.assign(Object.assign({},e),{projects:e.projects.filter((e=>e.id!==x.projectId)),groups:e.projects.length?e.groups.map((e=>Object.assign(Object.assign({},e),{projects:e.projects.filter((e=>e.id!==x.projectId))}))):[]}):e))),l()}),[l,x.itemId,x.projectId,p,j]),y=(0,n.useCallback)((()=>m(!h)),[h]);return(0,r.jsxs)(qr,{children:[(0,r.jsxs)(Yr,{children:[(0,r.jsx)(si,{children:(0,r.jsxs)(Xr,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(en,{}),(0,r.jsx)(Jr,{children:(0,r.jsx)(Qr,{children:(0,r.jsx)(hn,{layout:"white",onClick:y,defaultChecked:h})})}),(0,r.jsx)("th",{children:(0,r.jsx)(tn,{children:(0,r.jsx)(rn,{})})}),(0,r.jsx)("th",{children:(0,r.jsxs)(an,{children:[(0,r.jsx)(ln,{icon:(0,r.jsx)(pe,{}),onClick:d,isTransparent:!0}),(0,r.jsx)(nn,Object.assign({className:"positioned"},{children:"Фильтр"}))]})}),(0,r.jsx)("th",{children:(0,r.jsx)(on,{children:(0,r.jsx)(dn,Object.assign({onClick:f,icon:(0,r.jsx)(cn,{className:F()({isFilter:b})}),isTransparent:!0},{children:(0,r.jsx)(nn,Object.assign({className:"positioned"},{children:"Статус"}))}))})}),(0,r.jsx)("th",{children:(0,r.jsx)(nn,{children:"Дата изменения"})}),(0,r.jsx)("th",{children:(0,r.jsx)(nn,{children:"Мониторинг"})}),e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("th",{children:(0,r.jsx)(nn,{children:"Частота проверок"})}),(0,r.jsx)("th",{children:(0,r.jsx)(nn,{children:"%"})})]}),(0,r.jsx)("th",{children:(0,r.jsx)(sn,{children:"1 - 8 из 185"})}),(0,r.jsx)(en,{})]})}),(0,r.jsx)("tbody",{children:p.map((e=>e.projects.map((i=>(0,r.jsx)($t,Object.assign({},i,{allChecked:h,setAllChecked:m,onDeleteProject:()=>w(i.id,e.id)}),(0,nt.SK)())))))})]})}),(0,r.jsx)(ut,{isOpen:o,onClose:c,onSubmit:tt.noop}),(0,r.jsx)($e,Object.assign({open:s,onClose:l},{children:(0,r.jsx)(st,{title:"Удалить выбранный объект?",onClose:l,onSumbit:v})}))]}),(0,r.jsxs)(mn,{children:[(0,r.jsx)(vr,{list:Wr,onToggle:t}),(0,r.jsx)(dr,{}),(0,r.jsx)(Dr,{isOpen:i})]})]})},qr=l.ZP.div`
  flex: 2 2 80%;
`,Jr=l.ZP.th`
  width: 3.6rem;
`,Qr=l.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
`,Yr=l.ZP.div`
  position: relative;
  width: 100%;
  height: 41.4vh;

  @media (max-width: 1266px) {
    width: calc(100vw - 4.3rem);
  }
`,Xr=l.ZP.table`
  width: 100%;

  > thead > tr > th {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--white);
    border-bottom: 1px solid var(--grey1);

    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      border-left: 1px solid var(--grey1);
    }
  }

  > tbody {
    padding: 0 1rem;
  }
`,en=l.ZP.th`
  width: 1rem;
`,tn=l.ZP.div`
  display: flex;
`,rn=l.ZP.div`
  width: 1px;
  height: 1.9rem;
  background: var(--grey3);
  margin: auto;
`,nn=l.ZP.span`
  color: var(--black1);
  line-height: 2.6rem;
  font-weight: 400;
  font-size: 1.3rem;
  white-space: nowrap;
  padding: 0 1.5rem;

  &.positioned {
    padding: 0;
  }
`,sn=(0,l.ZP)(nn)`
  color: var(--grey7);
`,an=l.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
`,ln=(0,l.ZP)(D)`
  padding: 0 1rem 0 0;
`,on=l.ZP.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`,dn=(0,l.ZP)(D)`
  color: var(--black1);
  font-weight: 400;
  padding: 0;
  width: 100%;
  height: 100%;
`,cn=l.ZP.div`
  margin-right: 0.5rem;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid var(--grey7);
  transition: transform 0.3s linear;

  &.isFilter {
    transform: rotate(180deg);
  }
`,hn=(0,l.ZP)(V)`
  width: 1.6rem;
  height: 1.6rem;
  margin: auto;

  > .checkbox {
    width: 1.6rem;
    height: 1.6rem;
    flex: 1 0 1.6rem;

    &:after {
      left: 51%;
      top: 39%;
      width: 0.6rem;
      height: 1.2rem;
    }
  }
`,mn=l.ZP.div`
  position: relative;
  background: var(--white);
  height: 58.6vh;
`,xn=({fill:e="#26B638"})=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},{children:[(0,r.jsx)("rect",{width:"20",height:"20",fill:e,rx:"10"}),(0,r.jsx)("path",{fill:"#fff",stroke:"#fff",strokeWidth:"0.3",d:"M15.15 9.336v-.15h-4.439V4.35H9.2v4.836H4.85V10.648h4.349V15.65H10.71V10.648h4.439V9.336z"})]})),gn=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"9",height:"15",fill:"none",viewBox:"0 0 9 15"},{children:(0,r.jsx)("path",{fill:"#323232",d:"M.372.356C.132.589 0 .898 0 1.226v.006c.002.326.135.631.374.86l5.442 5.281a.176.176 0 010 .254L.372 12.909a1.204 1.204 0 00.004 1.739 1.3 1.3 0 001.784-.004l6.464-6.273A1.19 1.19 0 009 7.51v-.007c0-.328-.132-.636-.372-.87L2.156.353A1.3 1.3 0 00.372.356z"})})),pn=({isNewProjectForm:e,placeholder:i,name:t,label:s,onChange:a,disabled:l,validationError:o})=>{const[,{value:d},{setValue:c}]=(0,E.U$)(t),h=(0,n.useCallback)((()=>{a(d,"text"),c("")}),[a,c,d]);return(0,r.jsxs)(jn,{children:[(0,r.jsx)(bn,{placeholder:i,name:t,label:s,error:o,disabled:l,isNewProjectForm:e}),(0,r.jsx)(un,Object.assign({isNewProjectForm:e,onClick:h,disabled:l},{children:"Добавить"}))]})},jn=l.ZP.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`,bn=(0,l.ZP)(q)`
  width: 100%;
  border-right: none;

  input {
    border-radius: 3px 0 0 3px;

    &:focus,
    &:focus-visible {
      border: 1px solid
        var(
          --${({isNewProjectForm:e})=>e?"green1":"blue6"}
        );
    }
  }
`,un=(0,l.ZP)(D)`
  background: var(
    --${({isNewProjectForm:e})=>e?"green1":"blue6"}
  );
  border-radius: 0 3px 3px 0;
  padding: 1.4rem 2.3rem;
  font-weight: 400;

  @media (max-width: 600px) {
    padding: 1.4rem;
  }
`,fn=({list:e,onChange:i})=>{const t=(0,Je.useMediaQuery)({query:"(max-width: 600px)"}),[s,a]=(0,n.useState)(!1),[,{value:l},{setValue:o}]=(0,E.U$)("addToGroup"),d=(0,n.useMemo)((()=>e.map((e=>e.name))),[e]),c=(0,n.useCallback)((e=>{o(e)}),[o]),h=(0,n.useCallback)((()=>{i(l),a(!1)}),[i,l]),m=(0,n.useCallback)((()=>{a(!s),o("")}),[s,o]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(W,{htmlFor:"addToGroup",text:"Добавить в группу"}),s?(0,r.jsxs)(wn,{children:[(0,r.jsx)(vn,{name:"addToGroup",placeholder:"Укажите название группы"}),(0,r.jsx)(On,Object.assign({onClick:h,disabled:!l.length},{children:t?"+":"Создать группу"})),(0,r.jsx)(Pn,{icon:(0,r.jsx)(Ie,{}),onClick:m})]}):(0,r.jsxs)(wn,{children:[(0,r.jsx)(kn,Object.assign({icon:(0,r.jsx)(xn,{fill:"#1A57CB"}),onClick:m},{children:"Новая группа"})),(0,r.jsx)(zr,{name:"groupTypes",currentValue:l,list:d,onChange:c})]})]})},wn=l.ZP.div`
  display: flex;
`,vn=(0,l.ZP)(q)`
  width: 100%;
`,yn=l.iv`
  border: 1px solid var(--grey2);
  width: 15rem;
  height: 4.5rem;
  background: var(--white);
  color: var(--black1);
  font-size: 1.4rem;
  line-height: 1.6rem;
  white-space: nowrap;
  padding: 1.4rem;
`,kn=(0,l.ZP)(D)`
  ${yn};
  margin-right: 2rem;
  padding: 1.4rem 1.6rem;
  font-weight: 400;

  > svg {
    margin-right: 0.8rem;
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    opacity: 1;
  }
`,On=(0,l.ZP)(D)`
  ${yn};
  margin: 0 2rem;

  @media (max-width: 600px) {
    width: 3rem;
  }
`,Pn=(0,l.ZP)(D)`
  border: 1px solid var(--grey2);
  width: 4.5rem;
  height: 4.5rem;
  background: transparent;
  padding: 0 1.4rem;

  > svg {
    margin: 0;
  }
`,Zn=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"14",height:"15",fill:"none",viewBox:"0 0 14 15"},{children:[(0,r.jsx)("path",{fill:"#F52A39",d:"M13.381.002H.531a.539.539 0 00-.393.132.438.438 0 00-.132.394L1.372 12.41a2.6 2.6 0 002.601 2.285h6.177a2.627 2.627 0 002.627-2.364L13.902.462a.436.436 0 00-.13-.341.534.534 0 00-.39-.119z"}),(0,r.jsx)("path",{stroke:"#fff",strokeWidth:"1.5",d:"M4.087 4.22l6.175 6.176m-6.193 0l6.175-6.175"})]})),Cn=({item:e,error:i,onDelete:t})=>{const s=(0,n.useCallback)((()=>t(e.title)),[e,t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(zn,Object.assign({target:"_blank",to:e.href,className:F()({error:!!i})},{children:null!=i?i:e.title})),!i&&(0,r.jsx)(Mn,Object.assign({onClick:s},{children:(0,r.jsx)(Zn,{})}))]})},zn=(0,l.ZP)(a.rU)`
  color: var(--black1);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin-left: 1rem;

  &.error {
    color: var(--red);
  }
`,Mn=l.ZP.div`
  margin-left: 1rem;
  height: 1.4rem;
  cursor: pointer;
`,Sn=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"10",height:"15",fill:"none",viewBox:"0 0 10 15"},{children:(0,r.jsx)("path",{fill:"#0B0B0B",d:"M4.688 15A4.692 4.692 0 010 10.312V3.75a.625.625 0 111.25 0v6.563a3.442 3.442 0 003.438 3.437 3.442 3.442 0 003.437-3.438V3.438A2.19 2.19 0 005.938 1.25 2.19 2.19 0 003.75 3.437v6.25a.939.939 0 001.875 0V3.75a.625.625 0 111.25 0v5.938a2.19 2.19 0 01-2.188 2.187A2.19 2.19 0 012.5 9.688v-6.25A3.442 3.442 0 015.938 0a3.442 3.442 0 013.437 3.437v6.876A4.692 4.692 0 014.687 15z"})})),_n=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"23",height:"22",fill:"none",viewBox:"0 0 23 22"},{children:[(0,r.jsx)("circle",{cx:"11.933",cy:"11",r:"11",fill:"#fff"}),(0,r.jsx)("path",{fill:"#6D3AFE",d:"M13.101 7.2c0 .347-.113.636-.339.866a1.075 1.075 0 01-.795.34c-.312 0-.581-.118-.807-.353a1.212 1.212 0 01-.333-.854c0-.325.11-.606.333-.84.226-.24.495-.359.807-.359.308 0 .573.12.795.359.226.234.34.515.34.84zm.832 7.222V16h-4v-1.578h.986v-3.67h-.986V9.15h3.039v5.273h.961z"})]})),Nn=new RegExp(/([^\\]+$)/),En=[{id:(0,nt.SK)(),favourite:!1,title:"Александр Емельяненко проиграл Коваленко раздельным решением судей",href:"https://dzen.ru/news/story/Aleksandr_Emelyanenko_proigral_Kovalenko_razdelnym_resheniem_sudej--1639b70c9924b843534e2a415cdfac98?lang=ru&from=main_portal&fan=1&stid=tt4y_QrSG1EHCeC0mvGX&t=1671263211&persistent_id=935760588&story=ef96a6b4-a01e-586a-9824-7505da8643a3&issue_tld=ru&utm_referrer=dzen.ru"},{id:(0,nt.SK)(),favourite:!1,title:"Анджелина Джоли ушла с поста спецпосланника ООН по делам беженцев, который занимала 10 лет",href:"https://meduza.io/news/2022/12/17/andzhelina-dzholi-ushla-s-posta-spetsposlannika-oon-po-delam-bezhentsev-kotoryy-zanimala-10-let"}],An=({onChange:e,label:i,name:t,validationError:s,disabled:a,onFileDelete:l})=>{const o=(0,n.useRef)(document.querySelector(t)),[d,{value:c},{setValue:h}]=(0,E.U$)(t),m=(0,n.useCallback)((()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.click()}),[]),x=(0,n.useCallback)((i=>{h(i.target.value),e(En,"file")}),[e,h]),g=(0,n.useCallback)((()=>{h(""),l()}),[l,h]),p=Nn.exec(c),j=(0,n.useMemo)((()=>{if(p)return{id:(0,nt.SK)(),favourite:!1,title:p[0],href:c}}),[p,c]),b=(0,n.useMemo)((()=>{if(!p)return s?Y.ALREADY_EXIST:Y.READING_ERROR}),[p,s]);return(0,r.jsxs)(Ln,{children:[c?j?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Dn,{children:[(0,r.jsx)("span",{children:"Прикреплен файл: "}),(0,r.jsx)(Cn,{item:j,onDelete:g,error:b})]}),(0,r.jsxs)(Bn,{children:[(0,r.jsx)(Tn,{children:(0,r.jsx)(_n,{})}),(0,r.jsx)(Hn,{children:"Файл должен содержать список объектов для добавления в первом столбце. Для помещения страниц добавляемого сайта в контроль страниц установите “1” в четвертой графе соответствующей строки списка сайтов."})]})]}):null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{text:i,htmlFor:t,disabled:a}),(0,r.jsx)(Fn,Object.assign({icon:(0,r.jsx)(Sn,{}),onClick:m,disabled:a},{children:"Прикрепить файл"}))]}),(0,r.jsx)("input",Object.assign({},d,{ref:o,name:t,type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",value:c,onChange:x,hidden:!0}))]})},Ln=l.ZP.div`
  display: block;
  margin: 23px 0;
  color: var(--black1);
`,Fn=(0,l.ZP)(D)`
  width: 100%;
  height: 4.5rem;
  background: rgba(38, 182, 56, 0.07);
  border: 1px solid var(--green1);
  color: var(--black1);
  font-weight: 400;

  > svg {
    margin-right: 1rem;
    ${({disabled:e})=>e&&"opacity: 0.3"};
  }
`,Dn=l.ZP.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 2rem 0;
`,Bn=l.ZP.div`
  display: flex;
  align-items: flex-start;
  background: var(--magenta);
  border-radius: 5px;
  padding: 2rem;
`,Tn=l.ZP.div`
  flex: 1 2 2.2rem;
`,Hn=l.ZP.span`
  flex: 2 2 90%;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: var(--white);
`,Vn=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",fill:"none",viewBox:"0 0 17 17"},{children:[(0,r.jsx)("path",{stroke:"gray",d:"M16.5 8.5a8 8 0 11-16 0 8 8 0 0116 0z"}),(0,r.jsx)("path",{fill:"gray",d:"M9.164 3.817a.85.85 0 01-.21.575.637.637 0 01-.496.242.621.621 0 01-.492-.242.865.865 0 01-.203-.575c0-.222.068-.414.203-.575a.639.639 0 01.994-.007c.136.157.204.351.204.582zm.836 7.98V13H7v-1.203h.927V7.34H7V6.13h2.096v5.667H10z"})]})),In=({text:e})=>{const i=(0,n.useRef)(null),{isOpen:t,open:s,close:a}=xe(!1);return me(i,a),(0,r.jsxs)(Rn,Object.assign({ref:i},{children:[(0,r.jsx)($n,{icon:(0,r.jsx)(Vn,{}),onClick:s,isTransparent:!0}),(0,r.jsxs)(Un,Object.assign({className:F()({open:t})},{children:[(0,r.jsx)(Gn,Object.assign({onClick:a},{children:(0,r.jsx)(Ie,{})})),e]}))]}))},Rn=l.ZP.div`
  position: relative;
  margin-left: 2rem;
  cursor: pointer;
`,$n=(0,l.ZP)(D)`
  width: 1.7rem;
  height: 1.7rem;
  padding: 0;

  > svg {
    margin: 0;
  }
`,Un=l.ZP.div`
  ${ue};
  top: 2.5rem;
  right: -1rem;
  width: 30rem;
  padding: 2rem 2.5rem 2rem 2rem;
  color: var(--black1);
  background: var(--blue2);
  border: none;
  opacity: 0;
  z-index: -1;
  font-size: 1.3rem;
  line-height: 2rem;
  transition: opacity 0.3s linear;

  &.open {
    opacity: 1;
    z-index: 1;
  }

  &:before {
    top: -0.6rem;
    right: 1.3rem;
    background-color: var(--blue2);
    border-left: 1px solid var(--blue2);
    border-top: 1px solid var(--blue2);
  }
`,Gn=l.ZP.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`,Wn='\nКнопка "Добавить" (Рабочий стол, вкладка "Страницы", "плюс" справа): \n"Добавление адреса страницы, изменения которой надо мониторить"\n',Kn=()=>(0,r.jsxs)(qn,{children:[(0,r.jsx)(Jn,{children:"Включено"}),(0,r.jsxs)(Qn,{children:[(0,r.jsx)(Xn,{children:(0,r.jsx)("span",{className:"ico"})}),(0,r.jsx)(Yn,{children:"Мониторинг содержания интернет-страниц"}),(0,r.jsx)(In,{text:Wn})]}),(0,r.jsxs)(Qn,{children:[(0,r.jsx)(Xn,{children:(0,r.jsx)("span",{className:"ico"})}),(0,r.jsx)(Yn,{children:"Возможность мониторинга отдельных слов или фраз на странице"}),(0,r.jsx)(In,{text:Wn})]}),(0,r.jsxs)(Qn,{children:[(0,r.jsx)(Xn,{children:(0,r.jsx)("span",{className:"ico"})}),(0,r.jsx)(Yn,{children:"Возможность мониторинга фрагментов (областей страницы)"}),(0,r.jsx)(In,{text:Wn})]}),(0,r.jsxs)(Qn,{children:[(0,r.jsx)(Xn,{children:(0,r.jsx)("span",{className:"ico"})}),(0,r.jsx)(Yn,{children:"Возможность мониторинга изменений файлов *.doc; *.docx; *.rtf; *.txt; *.odt; *.pdf (с текстом)"}),(0,r.jsx)(In,{text:Wn})]}),(0,r.jsxs)(Qn,{children:[(0,r.jsx)(Xn,{children:(0,r.jsx)("span",{className:"ico"})}),(0,r.jsx)(Yn,{children:"Просмотр истории изменений страниц"}),(0,r.jsx)(In,{text:Wn})]})]}),qn=l.ZP.div`
  margin: 24px 0;
`,Jn=l.ZP.h2`
  margin: 17px 0;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
`,Qn=l.ZP.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding: 6px 0;
`,Yn=l.ZP.div`
  max-width: 80%;
`,Xn=l.ZP.div`
  position: relative;
  width: 1rem;
  margin-right: 1rem;

  > .ico {
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 0.6rem;
    height: 0.9rem;
    border: 0.25rem solid var(--green1);
    border-top: 0;
    border-left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    margin-right: 2rem;
  }
`,es=Object.freeze([{label:"Шумоподавление",text:Wn,layout:"blue",name:"mute"},{label:"Частота проверок",text:Wn,layout:"blue",name:"checkFrequency",options:{name:"reportFrequency",list:["Раз в месяц","Раз в неделю","По умолчанию (1 раз в сутки)","Каждые 6 часов","Каждый час","Раз в 15 минут","Индивидуально","Приостановить"]}},{label:"Расширенный отчет по каждой странице",text:Wn,layout:"blue",name:"extendedReport",options:{name:"extendedReportType",label:"Вид изменений в отчете",list:["Дополнения","Изменения","Рефакторинг"]}},{label:"Подключение многопотоковой проверки (для сайтов с защитой от роботов)",text:Wn,layout:"blue",name:"multiThreadCheck"},{label:"Мониторинг появления новых страниц на всём сайте («Анализ в глубину»), частота мониторинга 1 раз в сутки ",text:Wn,layout:"blue",name:"newPagesMonitoring",children:[{label:"мониторинг только страниц выбранного раздела",text:Wn,layout:"white",name:"checkedOnlyMonitoring"},{label:"мониторинг содержания всех найденных страниц (оплата по количеству страниц)",text:Wn,layout:"white",name:"allPagesMonitoring"}]}]),is=()=>{const[,e]=b(),i=(0,n.useCallback)((i=>{e({[i.target.name]:i.target.checked})}),[e]);return(0,r.jsx)(ts,{children:es.map((({label:e,text:t,layout:n,children:s,options:a,name:l})=>(0,r.jsxs)(rs,{children:[(0,r.jsxs)(ns,{children:[a&&!a.label?(0,r.jsxs)(ss,{children:[(0,r.jsx)(V,{name:l,text:e,layout:n,onChange:i}),(0,r.jsx)(St,{list:a.list,name:a.name})]}):(0,r.jsx)(V,{text:e,layout:n,name:l,onChange:i}),(0,r.jsx)(In,{text:t})]}),a&&a.label&&(0,r.jsx)(St,{label:a.label,list:a.list,name:a.name}),s&&(0,r.jsx)(ls,{children:s.map((e=>(0,r.jsx)(os,{children:(0,r.jsxs)(ns,{children:[(0,r.jsx)(V,{name:e.name,text:e.label,layout:e.layout,onChange:i}),(0,r.jsx)(In,{text:e.text})]})},e.label)))}),(0,r.jsx)(as,{})]},e)))})},ts=l.ZP.div`
  margin: 2rem 0;
`,rs=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,ns=l.ZP.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,ss=l.ZP.div`
  display: flex;
  align-items: center;
`,as=l.ZP.div`
  background: var(--grey2);
  border: transparent;
  height: 1px;
  width: 95%;
  margin: 16px 0 14px;
`,ls=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
`,os=(0,l.ZP)(rs)`
  margin: 1rem 0;
  padding-left: 3rem;
`,ds=({keyPhrasesUsed:e})=>{const{isOpen:i,close:t,open:s}=xe(!1),[{keyPhrases:a},l]=b(),o=(0,n.useCallback)((e=>{l({keyPhrases:[...a,...e.split(",").map((e=>e.trim()))]})}),[l,a]),d=(0,n.useCallback)((e=>{l({keyPhrases:"kill"===e?[]:a.filter((i=>i!==e))})}),[l,a]),c=(0,n.useCallback)((()=>{d("kill"),t()}),[t,d]);return e?(0,r.jsxs)(hs,{children:[(0,r.jsx)(W,{text:"Введите фразы, разделяя их запятой"}),(0,r.jsx)(pn,{name:"keyPhrases",onChange:o}),a.length?(0,r.jsxs)(cs,{children:[a.map(((e,i)=>(0,r.jsxs)(ms,{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)(xs,{icon:(0,r.jsx)(Ie,{}),onClick:()=>d(e)})]},i))),(0,r.jsx)(gs,Object.assign({onClick:s,isTransparent:!0},{children:"Удалить все"}))]}):null,(0,r.jsx)($e,Object.assign({open:i,onClose:t},{children:(0,r.jsx)(st,{title:"Удалить фразы?",onClose:t,onSumbit:c})}))]}):null},cs=l.ZP.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,hs=l.ZP.div`
  margin-top: 13px;
`,ms=l.ZP.div`
  position: relative;
  border: 1px solid var(--grey2);
  color: var(--black1);
  min-width: 9.5rem;
  height: 3.4rem;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0.5rem 4rem 0.5rem 2rem;
  border-radius: 4px;
  margin-right: 2rem;
  margin-top: 1.5rem;
`,xs=(0,l.ZP)(D)`
  position: absolute;
  top: 5px;
  right: 0;
  height: 2.2rem;
  width: 3rem;
  background: transparent;
  border: none;
  border-left: 1px solid var(--grey2);
  padding: 0;

  > svg {
    margin: 0;
    width: 8px;
    height: 8px;
  }
`,gs=(0,l.ZP)(D)`
  color: var(--red);
  font-weight: 400;
  padding: 0.5rem 0;
  margin-top: 1.4rem;
`,ps=["Все содержимое","Только фразы"],js=({onOpen:e})=>{const[i,t]=(0,n.useState)(!1),{toggleOpen:s,isOpen:a}=xe(!1),l=(0,n.useCallback)((e=>{t(e===ps[1])}),[]),o=(0,n.useCallback)((()=>{s(),e(a)}),[a,e,s]);return(0,r.jsxs)(bs,{children:[(0,r.jsxs)(us,Object.assign({onClick:o},{children:[(0,r.jsx)("span",{children:"Настроить дополнительные параметры"}),(0,r.jsx)(fs,{className:F()({isOpen:a})})]})),a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Kn,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(ws,{children:"Дополнительные функции"}),(0,r.jsx)(zr,{name:"monitoring",label:"Мониторинг",list:ps,onChange:l,currentValue:ps[0]}),(0,r.jsx)(ds,{keyPhrasesUsed:i})]}),(0,r.jsx)(is,{})]})]})},bs=l.ZP.div`
  margin: 26px 0;
`,us=l.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: var(--blue6);
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,fs=l.ZP.div`
  margin-left: 1rem;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid var(--blue6);
  transition: transform 0.3s linear;

  &.isOpen {
    transform: rotate(-180deg);
  }
`,ws=l.ZP.h2`
  margin: 2rem 0;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
`;var vs;!function(e){e.REGULAR_HEIGHT="53rem",e.FULL_HEIGHT="85vh"}(vs||(vs={}));const ys=new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.\S{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.\S{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.\S{2,}|www\.[a-zA-Z0-9]+\.\S{2,})/gi),ks=({onClose:e})=>{const[i,t]=(0,n.useState)(vs.REGULAR_HEIGHT),[s,a]=(0,n.useState)(),[l,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),[h,m]=C(),[x,g]=b(),{projects:j,groups:u}=x,f=(0,n.useCallback)(((e,i)=>{rt().findIndex(j,(i=>i.href===e))>=0?a(Y.ALREADY_EXIST):e.match(ys)?(a(void 0),c("text"===i),g({projects:[...j,{title:e,href:e,id:(0,nt.SK)(),favourite:!1}]})):a(Y.ENTER_CORRECT_URL)}),[g,j]),w=(0,n.useCallback)(((e,i)=>{o("file"===i),g({projects:[...j,...e]})}),[g,j]),v=(0,n.useCallback)((e=>{g({projects:j.filter((i=>i.title!==e))})}),[g,j]),y=(0,n.useCallback)((()=>{o(!1),g({projects:[]})}),[g]),k=(0,n.useCallback)((e=>{g({groups:[...u,{name:e,projects:j,id:(0,nt.SK)()}]})}),[g,u,j]),O=(0,n.useCallback)((e=>{t(e?vs.REGULAR_HEIGHT:vs.FULL_HEIGHT)}),[]),P=(0,n.useCallback)((()=>{m([...h,Object.assign(Object.assign({},x),{id:(0,nt.SK)()})]),g(p),e()}),[x,g,e,h,m]);return(0,n.useEffect)((()=>{j.length||(o(!1),c(!1))}),[j]),(0,r.jsx)(Os,Object.assign({height:i},{children:(0,r.jsx)(si,{children:(0,r.jsxs)(Ps,{children:[(0,r.jsx)(_s,{children:"Добавление объекта"}),(0,r.jsx)(E.J9,Object.assign({initialValues:p,onSubmit:P},{children:(0,r.jsxs)(Zs,{children:[(0,r.jsx)(pn,{label:"Введите интернет-адрес объекта для мониторинга",placeholder:"например: www.websvodka.ru",name:"addProject",onChange:f,validationError:s,disabled:l,isNewProjectForm:!0}),(0,r.jsx)(Ss,{children:d&&j.map(((e,i)=>(0,r.jsxs)(Ms,{children:[(0,r.jsx)("span",{children:"Добавлен адрес: "}),(0,r.jsx)(Cn,{item:e,onDelete:v})]},i)))}),(0,r.jsx)(An,{label:"Или загрузите список в формате .xls/.xlsx",onChange:w,name:"inputFile",disabled:d,validationError:s,onFileDelete:y}),(0,r.jsx)(fn,{list:u,onChange:k}),(0,r.jsx)(js,{onOpen:O}),(0,r.jsxs)(Cs,{children:[(0,r.jsx)(zs,Object.assign({onClick:e,isCancel:!0},{children:"Отменить"})),(0,r.jsx)(zs,Object.assign({type:"submit"},{children:"Подтвердить"}))]})]})}))]})})}))},Os=l.ZP.div`
  height: ${({height:e})=>e};
  width: 63.8rem;
  padding: 0 0 0 3.2rem;

  @media (max-width: 1266px) {
    width: 60vw;
  }

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 700px) {
    width: 95vw;
    padding: 0 0 0 1.5rem;
  }
`,Ps=l.ZP.div`
  padding: 3.2rem 3.2rem 3.2rem 0;
  overflow: hidden;
`,Zs=(0,l.ZP)(E.l0)`
  margin-top: 32px;
`,Cs=l.ZP.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  @media (max-width: 600px) {
    display: block;
    margin-top: 0;
  }
`,zs=(0,l.ZP)(D)`
  &:first-child {
    width: 14.9rem;
    margin-right: 2rem;
  }

  &:last-child {
    width: 22.2rem;
  }

  @media (max-width: 600px) {
    &:first-child {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
    }

    &:last-child {
      width: 100%;
    }
  }
`,Ms=l.ZP.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 2rem 0;
`,Ss=l.ZP.ul`
  list-style: none;
`,_s=l.ZP.h2`
  font-size: 2.2rem;
  line-height: 1.6rem;
  margin: 0;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }
`,Ns=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"14",fill:"none",viewBox:"0 0 16 14"},{children:(0,r.jsx)("path",{fill:"#323232",d:"M14.029 2.466H8.965a.765.765 0 01-.545-.228L6.84.573C6.46.195 5.94-.003 5.413 0H1.97A1.974 1.974 0 000 1.971v9.598c0 1.087.884 1.971 1.971 1.971h12.067A1.973 1.973 0 0016 11.563V4.437a1.974 1.974 0 00-1.971-1.971zm.765 9.1a.766.766 0 01-.76.769H1.972a.767.767 0 01-.765-.766V1.97c0-.422.343-.765.765-.766H5.45a.76.76 0 01.528.21L7.55 3.072c.369.381.885.6 1.416.6h5.064c.422 0 .765.343.765.765v7.128z"})})),Es=({compact:e,openEditGroup:i})=>{const[t]=C();return(0,r.jsx)(r.Fragment,{children:t.map((t=>(0,r.jsx)("div",{children:t.groups.map((n=>(0,r.jsxs)("div",{children:[n.projects.length?(0,r.jsxs)(Fs,Object.assign({className:F()({compact:e})},{children:[(0,r.jsx)(As,Object.assign({onClick:()=>i(n.name,n.id,t.id),isTransparent:!0},{children:(0,r.jsx)(Dt,{})})),(0,r.jsx)(Ds,{children:n.name})]})):null,n.projects.length?n.projects.map((i=>(0,r.jsx)(Ls,Object.assign({className:F()({compact:e})},{children:(0,r.jsx)(Ds,{children:i.title})}),(0,nt.SK)()))):null]},(0,nt.SK)())))},(0,nt.SK)())))})},As=(0,l.ZP)(D)`
  margin-right: 1.1rem;
  padding: 0;
`,Ls=(0,l.ZP)(D)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid var(--grey2);
  cursor: pointer;
  padding: 1.4rem 2rem 1.4rem 2.8rem;
  background: none;

  &:last-child {
    border-bottom: none;
  }

  &.compact {
    padding-left: 3.5rem;
  }
`,Fs=l.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid var(--grey2);
  cursor: pointer;
  padding: 1.6rem 2rem 2rem 0;
  position: relative;
  z-index: 3;

  &.compact {
    padding-left: 1rem;
  }
`,Ds=l.ZP.span`
  max-width: 12.5rem;
  color: var(--grey7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bs=({groupName:e,onClose:i,onSubmit:t})=>(0,r.jsxs)(Ts,{children:[(0,r.jsx)(Hs,{children:"Настройки группы"}),(0,r.jsx)(E.J9,Object.assign({initialValues:{groupName:e},onSubmit:t},{children:(0,r.jsxs)(E.l0,{children:[(0,r.jsxs)(Vs,{children:[(0,r.jsx)("span",{children:"Название"}),(0,r.jsx)(Is,{name:"groupName",defaultValue:e})]}),(0,r.jsx)(Us,{children:(0,r.jsx)(Kn,{})}),(0,r.jsxs)(Rs,{children:[(0,r.jsx)($s,Object.assign({onClick:i,isCancel:!0},{children:"Отменить"})),(0,r.jsx)($s,Object.assign({type:"submit"},{children:"Подтвердить"}))]})]})}))]}),Ts=l.ZP.div`
  padding: 3.2rem;
  width: 63.8rem;

  @media (max-width: 1266px) {
    width: 60vw;
  }

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 700px) {
    width: 95vw;
    padding: 3.5rem 1.5rem 1.5rem;
  }
`,Hs=l.ZP.h1`
  font-size: 2.2rem;
  line-height: 2.6rem;
  margin: 0;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }
`,Vs=l.ZP.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  font-size: 1.6rem;

  @media (max-width: 600px) {
    display: block;
  }
`,Is=(0,l.ZP)(q)`
  margin-left: 2rem;
  width: 100%;

  > input {
    background: var(--grey0);
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`,Rs=l.ZP.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  @media (max-width: 600px) {
    display: block;
    margin-top: 0;
  }
`,$s=(0,l.ZP)(D)`
  &:first-child {
    width: 14.9rem;
    margin-right: 2rem;
  }

  &:last-child {
    width: 22.2rem;
  }

  @media (max-width: 600px) {
    &:first-child {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
    }

    &:last-child {
      width: 100%;
    }
  }
`,Us=l.ZP.div`
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--grey2);
`,Gs=({isOpen:e})=>{const i=(0,n.useRef)(null),[t,s]=C(),[a,l]=(0,n.useState)(),{isOpen:o,toggleOpen:d}=xe(!1),{isOpen:c,toggleOpen:h,close:m}=xe(!1),{isOpen:x,open:g,close:p}=xe(!1),j=(0,n.useMemo)((()=>t.some((e=>e.groups.length))),[t]),b=(0,n.useCallback)(((e,i,t)=>{g(),l({groupName:e,groupId:i,projectId:t})}),[g]),u=(0,n.useCallback)((({groupName:e})=>{const{groupId:i,projectId:r}=a;s(t.map((t=>t.id===r?Object.assign(Object.assign({},t),{groups:t.groups.map((t=>{if(t.id===i)return Object.assign(Object.assign({},t),{name:e})}))}):t))),p()}),[p,a,t,s]);return me(i,m),(0,r.jsxs)(Ws,Object.assign({ref:i},{children:[e?(0,r.jsxs)(r.Fragment,{children:[j&&(0,r.jsx)(Ks,Object.assign({onClick:d},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ys,{className:F()({open:o})}),e&&(0,r.jsx)(Qs,{children:"Группы"})]})})),(0,r.jsx)(Xs,Object.assign({className:F()({open:o})},{children:(0,r.jsx)(Es,{openEditGroup:b})}))]}):(0,r.jsxs)(r.Fragment,{children:[j&&(0,r.jsx)(qs,{icon:(0,r.jsx)(Ns,{}),onClick:h}),(0,r.jsx)(Js,Object.assign({className:F()({isMenuOpen:c})},{children:(0,r.jsx)(Es,{openEditGroup:b,compact:!0})}))]}),(0,r.jsx)($e,Object.assign({open:x,onClose:p},{children:(0,r.jsx)(Bs,{groupName:null==a?void 0:a.groupName,onClose:p,onSubmit:u})}))]}))},Ws=l.ZP.div`
  position: relative;
  font-size: 1.4rem;
`,Ks=(0,l.ZP)(D)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  width: 100%;
  font-weight: 400;
  background: none;
  border: none;
  border-bottom: 1px solid var(--grey2);
  cursor: pointer;
  position: relative;
  z-index: 3;
`,qs=(0,l.ZP)(Ks)`
  position: relative;
  padding: 1rem 1.3rem;

  > svg {
    margin: 0;
  }

  &:hover {
    opacity: 1;
  }
`,Js=l.ZP.div`
  position: absolute;
  top: 0;
  left: 100%;
  max-width: 19.7rem;
  background: #f2f2f4;
  border: 1px solid var(--grey4);
  border-radius: 0 3px 3px 0;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s linear;

  &.isMenuOpen {
    opacity: 1;
    z-index: 1;
  }
`,Qs=l.ZP.span`
  max-width: 13.3rem;
  color: var(--grey7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ys=l.ZP.div`
  margin-right: 1.8rem;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid var(--grey7);
  transition: transform 0.3s linear;

  &.open {
    transform: rotate(180deg);
  }
`,Xs=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  opacity: 0;
  z-index: -1;
  padding-left: 2rem;
  border-bottom: 1px solid var(--grey2);
  transition: opacity 0.3s linear;

  &.open {
    opacity: 1;
    z-index: auto;
  }
`,ea=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},{children:[(0,r.jsx)("path",{fill:"#fff",d:"M4 6v8.119h2.06v3.131l4.307-3.131H16V6H4zm11.297 7.402h-5.155l-3.38 2.457v-2.457H4.704V6.716h10.594v6.686z"}),(0,r.jsx)("path",{fill:"#fff",d:"M13 8.25H7V9h6v-.75zM13 9.75H7v.75h6v-.75zM13 11.25H7V12h6v-.75z"})]})),ia=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"10",height:"7",fill:"none",viewBox:"0 0 10 7"},{children:[(0,r.jsx)("path",{stroke:"#fff",d:"M0 0.5L10 0.5"}),(0,r.jsx)("path",{stroke:"#fff",d:"M2 3.5L8 3.5"}),(0,r.jsx)("path",{stroke:"#fff",d:"M4 6.5L6 6.5"})]})),ta=()=>(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 12 12"},{children:(0,r.jsx)("path",{fill:"#fff",d:"M11.407 6.605V5.44c0-.18-.138-.314-.322-.358l-.783-.09c-.138 0-.23-.09-.276-.224-.092-.224-.184-.448-.276-.627-.046-.135-.046-.27.046-.359l.506-.627a.338.338 0 00-.046-.448L9.428 1.9a.361.361 0 00-.46-.045l-.644.493a.458.458 0 01-.414.045c-.184-.135-.415-.18-.645-.269-.138-.045-.23-.134-.23-.269l-.092-.806c0-.18-.184-.314-.368-.314H5.517c-.23 0-.414.18-.46.403l-.092.717c0 .135-.092.224-.23.269-.23.09-.46.134-.69.269-.139.045-.277.045-.369-.045l-.644-.493a.361.361 0 00-.46.045l-.828.807a.338.338 0 00-.046.448l.506.627c.092.09.092.269.046.359-.092.224-.184.403-.276.627-.046.134-.138.224-.276.224l-.783.09c-.184 0-.322.179-.322.358v1.165c0 .18.138.314.322.359l.783.09c.138 0 .23.089.276.223.092.224.184.448.276.628.046.134.046.269-.046.358l-.506.628a.338.338 0 00.046.448l.828.806a.361.361 0 00.46.045l.644-.493c.092-.09.276-.09.368-.045.23.09.415.18.645.27.138.044.23.134.23.268l.092.762c0 .18.184.313.368.313h1.196c.184 0 .322-.134.368-.313l.092-.762c0-.134.092-.224.23-.269.23-.09.46-.18.645-.269.138-.044.276-.044.368.045l.644.493c.138.09.322.09.46-.045l.828-.806a.338.338 0 00.046-.448l-.506-.628c-.092-.09-.092-.269-.046-.358.092-.224.184-.404.276-.628.046-.134.138-.224.276-.224l.783-.09c.23-.044.368-.179.368-.358zm-5.43 1.972c-1.426 0-2.623-1.12-2.623-2.554 0-1.434 1.15-2.555 2.623-2.555 1.472 0 2.623 1.12 2.623 2.555 0 1.434-1.15 2.554-2.623 2.554z"})})),ra=({name:e,text:i,onChange:t})=>{const[s,a]=(0,n.useState)(!1),l=(0,n.useCallback)((()=>{a(!s),t&&t()}),[s,t]);return(0,r.jsxs)(na,Object.assign({onClick:l},{children:[(0,r.jsxs)(sa,{children:[(0,r.jsx)("input",{name:e,type:"checkbox",defaultChecked:s,hidden:!0}),(0,r.jsx)(aa,{className:F()({isToggled:s})})]}),i&&(0,r.jsx)(la,{children:i})]}))},na=l.ZP.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,sa=l.ZP.div`
  position: relative;
  width: 2.5rem;
  height: 1.3rem;
  border-radius: 8px;
  background-color: var(--blue6);
  transition: background-color 0.3s linear;
`,aa=l.ZP.div`
  width: 1.1rem;
  height: 1.1rem;
  background-color: var(--white);
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: left 0.3s linear;

  &.isToggled {
    left: calc(100% - 1.2rem);
  }
`,la=l.ZP.div`
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-left: 2rem;
`,oa=["Свойства","Значения"],da=Object.freeze({status:!1,changesDate:!1,monitoring:!1,monthCost:!1,changesFor:!1,changesTarget:oa[0],setTooltips:!0}),ca=({isOpen:e,isMenuOpen:i,close:t,onSubmit:s})=>{const a=(0,n.useCallback)((e=>{s&&s(),console.log("SETTINGS FORM VALUES: ",e)}),[s]);return(0,r.jsx)(ha,Object.assign({className:F()({isOpen:e,isSlim:!i})},{children:(0,r.jsx)(E.J9,Object.assign({initialValues:da,onSubmit:a},{children:(0,r.jsxs)(E.l0,{children:[(0,r.jsx)(ma,{children:(0,r.jsx)(pa,{name:"status",layout:"white",text:"Статус"})}),(0,r.jsx)(ma,{children:(0,r.jsx)(pa,{name:"changesDate",layout:"white",text:"Дата изменения"})}),(0,r.jsx)(ma,{children:(0,r.jsx)(pa,{name:"monitoring",layout:"white",text:"Мониторинг"})}),(0,r.jsx)(ma,{children:(0,r.jsx)(pa,{name:"monthCost",layout:"white",text:"Стоимость в месяц"})}),(0,r.jsxs)(ma,{children:[(0,r.jsx)(pa,{name:"changesFor",layout:"white",text:"% Изменений      для:"}),(0,r.jsx)(xa,{children:(0,r.jsx)(zr,{name:"changesTarget",list:oa,onChange:()=>null,currentValue:oa[0],isSmall:!0})})]}),(0,r.jsx)(ma,{children:(0,r.jsx)(ra,{name:"setTooltips",text:"Подсказки"})}),(0,r.jsxs)(ga,{children:[(0,r.jsx)(ja,Object.assign({onClick:t,isCancel:!0},{children:"Отменить"})),(0,r.jsx)(ja,Object.assign({type:"submit"},{children:"Сохранить"}))]})]})}))}))},ha=l.ZP.div`
  position: absolute;
  left: 19.3rem;
  bottom: -12rem;
  width: 36.7rem;
  height: 34.4rem;
  background: var(--white);
  padding: 1.3rem 2.5rem;
  border-radius: 3px;
  z-index: -1;
  border: 1px solid var(--grey2);
  transition: opacity 0.3s linear;

  &.isOpen {
    z-index: 1;
    opacity: 1;
  }

  &.isSlim {
    left: 5.5rem;

    @media (max-width: 1266px) {
      left: 3.7rem;
    }
  }

  &:before {
    content: "";
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 18rem;
    right: calc(100% - 1.1rem);
    background: #ffffff;
    border-radius: 4px;
    transform: rotate(45deg);
    border: 1px solid var(--grey2);
    border-top: 0;
    border-right: 0;
  }

  @media (max-width: 1266px) {
    bottom: -8.3rem;
    padding: 1.8rem;
    height: auto;
    width: 27rem;

    &:before {
      display: none;
    }
  }
`,ma=l.ZP.div`
  display: flex;
  align-items: center;
  padding: 0.85rem 0;
`,xa=l.ZP.div`
  margin-left: 2rem;
`,ga=l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`,pa=(0,l.ZP)(V)`
  display: flex;
  align-items: center;
  white-space: nowrap;

  > .checkbox {
    flex: 1 1 2.2rem;
    width: 2rem;
    height: 2rem;

    &:after {
      left: 51%;
      top: 39%;
      width: 0.6rem;
      height: 1.2rem;
    }
  }

  @media (max-width: 1266px) {
    white-space: inherit;

    > .checkbox {
      flex: 0 0 1.6rem;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`,ja=(0,l.ZP)(D)`
  ${T};
  font-size: 1.4rem;
  text-decoration: none;
  margin: 1.5rem 0 1rem;
  width: 48%;
  text-align: center;
`,ba=({icon:e,text:i,children:t,isOpen:s})=>{const a=(0,n.useRef)(null),{toggleOpen:l,close:o,isOpen:d}=xe(!1);return me(a,o),(0,r.jsxs)(ua,Object.assign({ref:a},{children:[(0,r.jsx)(fa,Object.assign({className:F()({isSlim:!s}),onClick:l},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(wa,Object.assign({className:F()({isSlim:!s})},{children:e})),s&&(0,r.jsx)(va,{children:i})]})})),t&&(0,n.cloneElement)(t,{close:o,isOpen:d,isMenuOpen:s})]}))},ua=l.ZP.div`
  position: relative;
  cursor: pointer;
  font-weight: 400;
  border-top: 1px solid var(--grey2);
  font-size: 1.4rem;

  &:last-child {
    border-bottom: 1px solid var(--grey2);
  }
`,fa=(0,l.ZP)(D)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.25rem 1.25rem 1.25rem 0;
  font-weight: 400;
  border: none;
  background: none;

  &.isSlim {
    padding: 1rem 0.7rem;
  }
`,wa=l.ZP.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  background: var(--grey7);
  opacity: 0.5;
  border-radius: 1rem;
  color: var(--white);
  font-weight: 700;
  margin-right: 1rem;

  > svg {
    margin: auto;
  }

  &.isSlim {
    margin: 0;
  }
`,va=l.ZP.span`
  max-width: 11rem;
  text-align: left;
  color: var(--grey7);
  text-overflow: ellipsis;
  overflow: hidden;
`,ya=({isOpen:e})=>(0,r.jsxs)(ka,Object.assign({className:F()({isSlim:!e})},{children:[(0,r.jsx)(ba,{icon:(0,r.jsx)(Oa,{children:"?"}),text:"Обучение",isOpen:e}),(0,r.jsx)(ba,{icon:(0,r.jsx)(Oa,{children:"!"}),text:"Инструкция",isOpen:e}),(0,r.jsx)(ba,Object.assign({icon:(0,r.jsx)(ta,{}),text:"Настройка интерфейса",isOpen:e},{children:(0,r.jsx)(ca,{onSubmit:tt.noop})})),(0,r.jsx)(ba,{icon:(0,r.jsx)(ia,{}),text:"Настройка отчетов",isOpen:e}),(0,r.jsx)(ba,{icon:(0,r.jsx)(ea,{}),text:"Поддержка",isOpen:e})]})),ka=l.ZP.div`
  padding-left: 1.7rem;
  display: flex;
  flex-direction: column;

  &.isSlim {
    padding-left: 0.5rem;
  }
`,Oa=l.ZP.div`
  width: 100%;
`,Pa=()=>{const e=(0,Je.useMediaQuery)({query:"(max-width: 1266px)"}),[i,t]=(0,n.useState)(e),{isOpen:s,open:a,close:l}=xe(!1),{isOpen:o,toggleOpen:d}=xe(!e),c=(0,n.useCallback)((()=>{t(!i),setTimeout(d,300)}),[i,d]);return(0,r.jsxs)(Za,Object.assign({className:F()({isSlim:i})},{children:[!e&&(0,r.jsx)(Na,Object.assign({onClick:c,isTransparent:!0},{children:(0,r.jsx)(Ea,Object.assign({className:F()({isSlim:i})},{children:(0,r.jsx)(gn,{})}))})),(0,r.jsx)(Ca,Object.assign({onClick:a,icon:(0,r.jsx)(Aa,Object.assign({className:F()({isSlim:!o})},{children:(0,r.jsx)(xn,{})}))},{children:(0,r.jsx)(La,{children:o?"Добавить объект":""})})),(0,r.jsx)(Gs,{isOpen:o}),(0,r.jsxs)(za,{children:[(0,r.jsx)(ya,{isOpen:o}),(0,r.jsx)(Ma,{children:o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Sa,{children:"© 2020 Websvodka"}),(0,r.jsx)(_a,{children:"Дизайн — concépto"})]})})]}),(0,r.jsx)($e,Object.assign({open:s,onClose:l},{children:(0,r.jsx)(ks,{onClose:l})}))]}))},Za=l.ZP.aside`
  position: relative;
  width: 19rem;
  background: #f2f2f4;
  border-right: 1px solid var(--grey4);
  transition: width 0.3s linear;

  &.isSlim {
    width: 4.3rem;
  }
`,Ca=(0,l.ZP)(D)`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  border-radius: 0;
  width: 100%;
  border: none;
  padding: 1.2rem;
  background: var(--white);
  color: var(--black1);
  font-weight: 300;
  border-bottom: 1px solid var(--grey2);

  &:hover {
    opacity: 1;
  }
`,za=l.ZP.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`,Ma=l.ZP.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
`,Sa=l.ZP.span`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--grey6);
`,_a=l.ZP.span`
  font-size: 1.1rem;
  line-height: 2rem;
  color: var(--grey5);
`,Na=(0,l.ZP)(D)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  width: 2rem;
  height: 100%;
  z-index: 2;
`,Ea=l.ZP.div`
  margin-top: -9rem;
  transform: rotate(-180deg);
  opacity: 0.5;
  transition: transform 0.3s linear, opacity 0.3s linear;

  &.isSlim {
    opacity: 1;
    transform: rotate(0deg);
  }
`,Aa=l.ZP.div`
  margin-right: 1.2rem;
  margin-top: 2px;

  &.isSlim {
    margin: 0;
  }
`,La=l.ZP.span`
  height: 1.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fa=()=>{const[,e]=y();return(0,n.useEffect)((()=>{e(w.HOME)}),[e]),(0,r.jsxs)(Ti,{children:[(0,r.jsx)(Pa,{}),(0,r.jsx)(Kr,{})]})},Da=()=>(0,r.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"62",height:"62",fill:"none",viewBox:"0 0 62 62"},{children:[(0,r.jsx)("path",{fill:"#0B0B0B",d:"M61.972 23.419c.013-.14.028-.282.028-.419a.999.999 0 00-.122-.479c-.14-.257-3.529-6.223-14.766-9.462a15.973 15.973 0 00-.922-3.008 16.61 16.61 0 00-3.523-5.218 16.503 16.503 0 00-26.857 5.215c-.413.972-.729 1.983-.943 3.018C3.647 16.306.262 22.264.122 22.52A.999.999 0 000 23c0 .128.007.256.017.375-.003.03-.017.055-.017.085V30c0 7.29 13.617 13 31 13s31-5.71 31-13v-.003l-.02-6.54c0-.014-.007-.025-.008-.038zM31 2a14.408 14.408 0 0110.253 4.247 14.593 14.593 0 013.097 4.586c.437 1.022.751 2.092.935 3.188.143.819.215 1.648.215 2.479v3.986A67.122 67.122 0 0131 22a67.122 67.122 0 01-14.5-1.514V16.5c0-.833.073-1.665.217-2.485.184-1.095.497-2.164.934-3.185A14.462 14.462 0 0131 2zM14.549 15.237c-.032.421-.049.843-.049 1.263v4.78a.999.999 0 00.766.972A68.3 68.3 0 0031 24a68.3 68.3 0 0015.734-1.748.998.998 0 00.766-.972V16.5c0-.42-.017-.842-.049-1.263 8.534 2.681 11.853 7.011 12.535 8.028l-.012.103C59.436 29.231 46.438 34 31 34c-1.447 0-2.873-.042-4.27-.123-13.495-.781-24.216-5.2-24.709-10.552l-.007-.06c.682-1.017 4-5.347 12.535-8.028zM31 41C15.28 41 2 35.963 2 30v-2.283c.02.023.047.045.068.068.242.268.504.531.784.79l.159.138c.263.234.542.463.836.689.052.04.101.08.155.12.328.245.678.484 1.044.718.081.052.165.104.249.156.373.232.759.46 1.167.68l.028.016c.415.223.854.438 1.304.649l.305.142c.448.203.91.402 1.388.593.075.03.153.058.228.087.439.171.89.337 1.354.497l.304.106c.514.173 1.042.339 1.583.497.118.035.238.068.357.102.512.145 1.035.285 1.569.418l.191.05a53.479 53.479 0 002.203.485c.612.122 1.233.239 1.868.345l.19.03c.595.097 1.2.186 1.814.268a70.228 70.228 0 002.42.282c.128.013.257.023.386.035.62.058 1.247.108 1.882.15l.326.023a72.366 72.366 0 002.607.114c.737.02 1.479.035 2.231.035.752 0 1.492-.014 2.228-.035l.483-.014a82.597 82.597 0 002.128-.1l.315-.022a71.934 71.934 0 001.902-.151l.367-.034a65.798 65.798 0 002.021-.228l.369-.05c.654-.087 1.3-.18 1.932-.285l.08-.012a57.29 57.29 0 002.253-.421c1.31-.271 2.562-.578 3.754-.921l.11-.032c5.003-1.452 8.87-3.514 11.051-5.96L60 30.002C59.997 35.963 46.718 41 31 41z"}),(0,r.jsx)("path",{fill:"#1A57CB",d:"M31 32a2 2 0 100-4 2 2 0 000 4zM17 29a2 2 0 100-4 2 2 0 000 4zM45 29a2 2 0 100-4 2 2 0 000 4z"}),(0,r.jsx)("path",{fill:"#0B0B0B",d:"M46.53 56.643l-8.74-11.256A1.001 1.001 0 0037 45H25a1 1 0 00-.79.387l-8.74 11.256c-.017.022-.02.05-.036.074-.273.312-.427.71-.434 1.125C15 61.884 29.362 62 31 62s16-.116 16-4.158a1.755 1.755 0 00-.434-1.125c-.015-.024-.02-.052-.037-.074zM25.49 47h11.02l6.056 7.8A57.798 57.798 0 0031 53.685 57.798 57.798 0 0019.433 54.8L25.49 47zM17.07 57.843l.005-.007c.861-.83 5.858-2.151 13.924-2.151 8.066 0 13.063 1.321 13.924 2.151l.005.007C44.08 58.673 39.078 60 31 60s-13.08-1.327-13.929-2.157z"})]})),Ba=()=>(0,r.jsx)(Ti,{children:(0,r.jsxs)(Ta,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(Da,{})}),(0,r.jsx)(Ha,{children:"Ошибка 404"}),(0,r.jsx)(Va,{children:"Вы ошиблись адресом или запрашиваемая Вами страница была удалена. Воспользуйтесь меню или поиском по сайту."})]})}),Ta=l.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  max-width: 35rem;
`,Ha=l.ZP.h1`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.8rem;
`,Va=l.ZP.span`
  font-size: 1.6rem;
  line-height: 1.9rem;
`;var Ia;!function(e){e.MAIN="/",e.AUTH="/auth",e.BILLING="/billing"}(Ia||(Ia={}));const Ra=()=>{const[e]=x();return(0,r.jsxs)(N.Z5,{children:[(0,r.jsx)(N.AW,{path:Ia.MAIN,element:e?(0,r.jsx)(Fa,{}):(0,r.jsx)(N.Fg,{to:Ia.AUTH})}),(0,r.jsx)(N.AW,{path:Ia.AUTH,element:(0,r.jsx)(te,{})}),(0,r.jsx)(N.AW,{path:Ia.BILLING,element:(0,r.jsx)(Vi,{})}),(0,r.jsx)(N.AW,{path:"*",element:(0,r.jsx)(Ba,{})})]})};t(29232);const $a=document.getElementById("app");(0,s.s)($a).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)((()=>(0,r.jsx)(a.VK,{children:(0,r.jsx)(S,{children:(0,r.jsx)(Ra,{})})})),{tab:"home"})}))}},function(e){var i=function(i){return e(e.s=i)};e.O(0,[216],(function(){return i(28594),i(85547)})),e.O()}]);