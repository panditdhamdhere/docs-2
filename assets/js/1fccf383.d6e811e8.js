"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4590],{88905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});n(67294);var i=n(85893),s=n(11151);const a={},o="Syntax Highlighting Cadence",r={unversionedId:"cadence/syntax-highlighting",id:"cadence/syntax-highlighting",title:"Syntax Highlighting Cadence",description:"There are currently several options to highlight Cadence code.",source:"@site/docs/cadence/syntax-highlighting.md",sourceDirName:"cadence",slug:"/cadence/syntax-highlighting",permalink:"/docs/cadence/syntax-highlighting",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/syntax-highlighting.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683238598,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"subtyping",permalink:"/docs/cadence/subtyping"},next:{title:"Cadence Testing Framework",permalink:"/docs/cadence/testing-framework"}},c={},h=[{value:"HTML output",id:"html-output",level:2},{value:"Editor",id:"editor",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"syntax-highlighting-cadence",children:"Syntax Highlighting Cadence"}),"\n",(0,i.jsx)(t.p,{children:"There are currently several options to highlight Cadence code.\nCurrently those options are integrated into the projects they are used in, but they could be extracted and made generally useable (please let us know e.g. by creating a feature request issue)."}),"\n",(0,i.jsx)(t.h2,{id:"html-output",children:"HTML output"}),"\n",(0,i.jsxs)(t.p,{children:["If highlighted Cadence code is needed as HTML output, then a highlighter based on a ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow/blob/2b5d5316784c31240a310252783ce2c63549787b/docs/plugins/gatsby-theme-flow/cadence.tmGrammar.json",children:"TextMate grammar for Cadence"})," can be used."]}),"\n",(0,i.jsxs)(t.p,{children:["This option is used by the Flow documentation: Code fences with Cadence code in the Markdown documents are converted to HTML using a ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow/tree/2b5d5316784c31240a310252783ce2c63549787b/docs/plugins/gatsby-remark-vscode-flow",children:"plugin"}),".\nPart of the plugin is a ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow/blob/2b5d5316784c31240a310252783ce2c63549787b/docs/plugins/gatsby-remark-vscode-flow/highlighter.js",children:"highlighter class"})," which was written to be fairly self-standing, takes Cadence code as input, and returns ",(0,i.jsx)(t.a,{href:"https://github.com/syntax-tree/hast",children:"hast"}),", which is then ",(0,i.jsxs)(t.a,{href:"https://github.com/onflow/flow/blob/2b5d5316784c31240a310252783ce2c63549787b/docs/plugins/gatsby-remark-vscode-flow/index.js#L59-L77",children:["further converted to HTML using the ",(0,i.jsx)(t.code,{children:"hast-util-to-html"})," package"]}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Another option to use this grammar is to use ",(0,i.jsx)(t.a,{href:"https://github.com/wooorm/starry-night",children:"https://github.com/wooorm/starry-night"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,i.jsxs)(t.p,{children:["Cadence code can also be highlighted in an editor like ",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/monaco-editor/",children:"Monaco"})," (which is the editor library used in Visual Studio Code), potentially in a read-only mode."]}),"\n",(0,i.jsxs)(t.p,{children:["This option is currently used in the ",(0,i.jsx)(t.a,{href:"https://play.onflow.org/",children:"Flow Playground"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The Monaco editor does not support TextMate grammars and has its ",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/monaco-editor/monarch.html",children:"own grammar format Monarch"}),", so a ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow-playground/blob/79657ebaf8682695c89c028c3bed91c780633666/src/util/cadence.ts#L15-L194",children:"separate Monarch grammar for Cadence"})," exists."]})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);