"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1133],{95752:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>t});s(67294);var r=s(85893),c=s(11151);const i={},d=void 0,l={unversionedId:"cadence/subtyping",id:"cadence/subtyping",title:"subtyping",description:"Resources",source:"@site/docs/cadence/subtyping.md",sourceDirName:"cadence",slug:"/cadence/subtyping",permalink:"/docs/cadence/subtyping",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/subtyping.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683238598,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Smart Contract Project Development Standards",permalink:"/docs/cadence/styleguide/project-development-tips"},next:{title:"Syntax Highlighting Cadence",permalink:"/docs/cadence/syntax-highlighting"}},h={},t=[{value:"Resources",id:"resources",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",code:"code",em:"em"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Supertype: ",(0,r.jsx)(n.strong,{children:"Restricted Resource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Not"})," ",(0,r.jsx)(n.code,{children:"AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A restricted resource type ",(0,r.jsx)(n.code,{children:"T{Us}"}),"\nis a subtype of a restricted resource type ",(0,r.jsx)(n.code,{children:"V{Ws}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T == V"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Us"})," and ",(0,r.jsx)(n.code,{children:"Ws"})," do ",(0,r.jsx)(n.em,{children:"not"})," have to be subsets:\nThe owner of the resource may freely restrict and unrestrict the resource."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": if the run-time type is ",(0,r.jsx)(n.code,{children:"V"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unrestricted resource type ",(0,r.jsx)(n.code,{children:"T"}),"\nis a subtype of a restricted resource type ",(0,r.jsx)(n.code,{children:"U{Vs}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T == U"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The owner of the resource may freely restrict the resource."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": if the run-time type is ",(0,r.jsx)(n.code,{children:"U"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A restricted resource type ",(0,r.jsx)(n.code,{children:"T{Us}"}),"\nis a subtype of a restricted resource type ",(0,r.jsx)(n.code,{children:"AnyResource{Vs}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T"})," conforms to ",(0,r.jsx)(n.code,{children:"Vs"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Us"})," and ",(0,r.jsx)(n.code,{children:"Vs"})," do ",(0,r.jsx)(n.em,{children:"not"})," have to be subsets."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Static: if ",(0,r.jsx)(n.code,{children:"Vs"})," is a subset of ",(0,r.jsx)(n.code,{children:"Us"})]}),"\n",(0,r.jsxs)(n.li,{children:["Dynamic: if the run-time type conforms to ",(0,r.jsx)(n.code,{children:"Vs"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unrestricted resource type ",(0,r.jsx)(n.code,{children:"T"}),"\nis a subtype of a restricted resource type ",(0,r.jsx)(n.code,{children:"AnyResource{Us}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T"})," conforms to ",(0,r.jsx)(n.code,{children:"Us"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": if the run-time type conforms to ",(0,r.jsx)(n.code,{children:"Us"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Supertype: ",(0,r.jsx)(n.strong,{children:"Unrestricted Resource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Not"})," ",(0,r.jsx)(n.code,{children:"AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A restricted resource type ",(0,r.jsx)(n.code,{children:"T{Us}"}),"\nis a subtype of an unrestricted resource type ",(0,r.jsx)(n.code,{children:"V"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T == V"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The owner of the resource may freely unrestrict the resource."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": if the run-time type is ",(0,r.jsx)(n.code,{children:"V"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unrestricted resource type ",(0,r.jsx)(n.code,{children:"T"}),"\nis a subtype of an unrestricted resource type ",(0,r.jsx)(n.code,{children:"V"}),": if ",(0,r.jsx)(n.code,{children:"T == V"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"AnyResource"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A restricted resource type ",(0,r.jsx)(n.code,{children:"T{Us}"})," or unrestricted resource type ",(0,r.jsx)(n.code,{children:"T"}),"\nis a subtype of the type ",(0,r.jsx)(n.code,{children:"AnyResource"}),": always."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Authorized"})}),"\n",(0,r.jsxs)(n.p,{children:["An authorized reference type ",(0,r.jsx)(n.code,{children:"auth &T"})," is a subtype of an unauthorized reference type ",(0,r.jsx)(n.code,{children:"&U"}),"\nor an authorized reference type ",(0,r.jsx)(n.code,{children:"auth &U"})," if ",(0,r.jsx)(n.code,{children:"T"})," is a subtype of ",(0,r.jsx)(n.code,{children:"U"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Unauthorized"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference type ",(0,r.jsx)(n.code,{children:"&T"})," is a subtype of an authorized reference type ",(0,r.jsx)(n.code,{children:"auth &T"}),": never."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may not gain more permissions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: No"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Supertype: ",(0,r.jsx)(n.strong,{children:"Reference to Restricted Resource"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Not"})," ",(0,r.jsx)(n.code,{children:"AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&T{Us}"}),"\nis a subtype of a reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&V{Ws}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T == V"})," and ",(0,r.jsx)(n.code,{children:"Ws"})," is a subset of ",(0,r.jsx)(n.code,{children:"Us"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may not gain more permissions or knowledge\nand may only further restrict the reference to the resource."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": never."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may not gain more permissions or knowledge."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: No"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to an unrestricted resource type ",(0,r.jsx)(n.code,{children:"&T"}),"\nis a subtype of a reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&U{Vs}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T == U"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may only further restrict the reference."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": never."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may not gain more permissions or knowledge."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: No"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&T{Us}"}),"\nis a subtype of a reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&AnyResource{Vs}"}),": if ",(0,r.jsx)(n.code,{children:"Vs"})," is a subset of ",(0,r.jsx)(n.code,{children:"Us"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may only further restrict the reference."}),"\n",(0,r.jsxs)(n.p,{children:["The requirement for ",(0,r.jsx)(n.code,{children:"T"})," to conform to ",(0,r.jsx)(n.code,{children:"Vs"})," is implied by the subset requirement."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to an unrestricted resource type ",(0,r.jsx)(n.code,{children:"&T"}),"\nis a subtype of a reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&AnyResource{Us}"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T != AnyResource"}),": if ",(0,r.jsx)(n.code,{children:"T"})," conforms to ",(0,r.jsx)(n.code,{children:"Us"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may only restrict the reference."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"T == AnyResource"}),": never."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may not gain more permissions or knowledge."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: No"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Supertype: ",(0,r.jsx)(n.strong,{children:"Unrestricted Resource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Not"})," ",(0,r.jsx)(n.code,{children:"AnyResource"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&T{Us}"}),"\nis a subtype of a reference to an unrestricted resource type ",(0,r.jsx)(n.code,{children:"&V"}),": never."]}),"\n",(0,r.jsx)(n.p,{children:"The holder of the reference may not gain more permissions or knowledge."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: No"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: No"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to an unrestricted resource type ",(0,r.jsx)(n.code,{children:"&T"}),"\nis a subtype of a reference to an unrestricted resource type ",(0,r.jsx)(n.code,{children:"&V"}),": if ",(0,r.jsx)(n.code,{children:"T == V"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"AnyResource"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An unauthorized reference to a restricted resource type ",(0,r.jsx)(n.code,{children:"&T{Us}"})," or\nto a unrestricted resource type ",(0,r.jsx)(n.code,{children:"&T"}),"\nis a subtype of the type ",(0,r.jsx)(n.code,{children:"&AnyResource"}),": always."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static: Yes"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic: Yes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}const j=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);