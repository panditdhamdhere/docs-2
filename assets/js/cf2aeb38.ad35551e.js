"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29453],{91702:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});n(67294);var i=n(85893),s=n(11151);const o={title:"Options for Building Staking Integrations",sidebar_title:"Technical Staking Options"},a=void 0,c={unversionedId:"concepts/staking/staking-options",id:"concepts/staking/staking-options",title:"Options for Building Staking Integrations",description:"This document describes two different methods for staking at a high level.",source:"@site/docs/concepts/staking/13-staking-options.mdx",sourceDirName:"concepts/staking",slug:"/concepts/staking/staking-options",permalink:"/docs/next/concepts/staking/staking-options",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/staking/13-staking-options.mdx",tags:[],version:"current",lastUpdatedBy:"Daniel Sainati",lastUpdatedAt:1689691660,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:13,frontMatter:{title:"Options for Building Staking Integrations",sidebar_title:"Technical Staking Options"},sidebar:"docsSidebar",previous:{title:"Staking FAQ",permalink:"/docs/next/concepts/staking/faq"},next:{title:"Manage a Staking Collection",permalink:"/docs/next/concepts/staking/staking-collection"}},r={},l=[];function d(t){const e=Object.assign({p:"p",h1:"h1",a:"a",code:"code"},(0,s.ah)(),t.components),{Callout:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"This document describes two different methods for staking at a high level."}),"\n",(0,i.jsx)(n,{type:"warning",children:(0,i.jsx)(e.p,{children:"We highly recommended you use the Staking Collection paradigm,\nas this will be the most supported method for staking with any set up."})}),"\n",(0,i.jsx)(e.h1,{id:"staking-collection",children:"Staking Collection"}),"\n",(0,i.jsx)(e.p,{children:"A Staking Collection is a resource that allows its owner to manage multiple staking\nobjects in a single account via a single storage path, and perform staking actions\nusing Flow. It also supports machine accounts, a necessary feature for Flow epoch node operation."}),"\n",(0,i.jsx)(e.p,{children:"The staking collection paradigm is the most flexible of the three choices\nand will receive the most support in the future. It is the set-up that Flow Port and many other staking providers use."}),"\n",(0,i.jsxs)(e.p,{children:["The staking collection setup and guide is detailed in the ",(0,i.jsx)(e.a,{href:"/docs/next/concepts/staking/staking-collection",children:"staking collection guide."})]}),"\n",(0,i.jsx)(e.h1,{id:"staking",children:"Staking"}),"\n",(0,i.jsxs)(e.p,{children:["The basic method to stake is to stake directly with the ",(0,i.jsx)(e.code,{children:"FlowIDTableStaking"})," smart contract.\nThis would involve calling the node or delegator registration functions directly in the staking\ncontract and storing the staking objects directly in account storage."]}),"\n",(0,i.jsx)(e.p,{children:"This is probably the simplest way to implement this, but it is not very flexible\nand not recommended."}),"\n",(0,i.jsxs)(e.p,{children:["The basic staking guide is detailed ",(0,i.jsx)(e.a,{href:"/docs/next/concepts/staking/staking-guide",children:"here"})]})]})}const g=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,i.jsx)(e,Object.assign({},t,{children:(0,i.jsx)(d,t)})):d(t)}}}]);