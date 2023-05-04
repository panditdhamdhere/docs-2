"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2444],{50721:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});n(67294);var r=n(85893),t=n(11151);const i={},c="FAQ",s={unversionedId:"cadence/FAQ",id:"cadence/FAQ",title:"FAQ",description:"Is there a formal grammar (e.g. in BNF) for Cadence?",source:"@site/docs/cadence/FAQ.md",sourceDirName:"cadence",slug:"/cadence/FAQ",permalink:"/docs/cadence/FAQ",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/FAQ.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683238598,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Cadence",permalink:"/docs/cadence/intro"},next:{title:"Cadence Anti-Patterns",permalink:"/docs/cadence/anti-patterns"}},o={},d=[{value:"Is there a formal grammar (e.g. in BNF) for Cadence?",id:"is-there-a-formal-grammar-eg-in-bnf-for-cadence",level:2},{value:"How can I inject additional values when executing a transaction or script?",id:"how-can-i-inject-additional-values-when-executing-a-transaction-or-script",level:2},{value:"How is Cadence parsed?",id:"how-is-cadence-parsed",level:2},{value:"What is the algorithmic efficiency of operations on arrays and dictionaries?",id:"what-is-the-algorithmic-efficiency-of-operations-on-arrays-and-dictionaries",level:2}];function l(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(a.h2,{id:"is-there-a-formal-grammar-eg-in-bnf-for-cadence",children:"Is there a formal grammar (e.g. in BNF) for Cadence?"}),"\n",(0,r.jsxs)(a.p,{children:["Yes, there is a ",(0,r.jsx)(a.a,{href:"https://github.com/onflow/cadence/blob/master/docs/cadence.ebnf",children:"EBNF for Cadence"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"how-can-i-inject-additional-values-when-executing-a-transaction-or-script",children:"How can I inject additional values when executing a transaction or script?"}),"\n",(0,r.jsxs)(a.p,{children:["The runtime ",(0,r.jsx)(a.code,{children:"Interface"})," functions ",(0,r.jsx)(a.code,{children:"ExecuteTransaction"})," and ",(0,r.jsx)(a.code,{children:"ExecuteScript"})," require a ",(0,r.jsx)(a.code,{children:"Context"})," argument.\nThe context has an ",(0,r.jsx)(a.code,{children:"Environment"})," field, in which ",(0,r.jsx)(a.code,{children:"stdlib.StandardLibraryValue"}),"s can be declared."]}),"\n",(0,r.jsx)(a.h2,{id:"how-is-cadence-parsed",children:"How is Cadence parsed?"}),"\n",(0,r.jsx)(a.p,{children:"Cadence's parser is implemented as a hand-written recursive descent parser which uses operator precedence parsing.\nThe recursive decent parsing technique allows for greater control, e.g. when implementing whitespace sensitivity, ambiguities, etc.\nThe handwritten parser also allows for better / great custom error reporting and recovery."}),"\n",(0,r.jsx)(a.p,{children:'The operator precedence parsing technique avoids constructing a CST and the associated overhead, where each grammar rule is translated to a CST node.\nFor example, a simple integer literal would be "boxed" in several outer grammar rule nodes.'}),"\n",(0,r.jsx)(a.h2,{id:"what-is-the-algorithmic-efficiency-of-operations-on-arrays-and-dictionaries",children:"What is the algorithmic efficiency of operations on arrays and dictionaries?"}),"\n",(0,r.jsxs)(a.p,{children:["Arrays and dictionaries are implemented ",(0,r.jsx)(a.a,{href:"https://github.com/onflow/atree",children:"as trees"}),".\nThis means that lookup operations do not run in constant time.\nIn certain cases, a mutation operation may cause a rebalancing of the tree."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);