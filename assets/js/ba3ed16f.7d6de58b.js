"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84152],{95861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});a(67294);var n=a(85893),s=a(11151);const r={title:"Off-chain Dapp Infrastructure",sidebar_label:"Off-chain Infrastructure"},i=void 0,o={unversionedId:"tutorials/dapp-infrastructure",id:"tutorials/dapp-infrastructure",title:"Off-chain Dapp Infrastructure",description:"In addition to on-chain smart contracts, dapps also rely on off-chain infrastructure. For example, users often interact with a dapp through a web interface. In addition to this, some dapps rely on backend servers to query and index data from the blockchain. This section covers best practices for off-chain infrastructure on Flow.",source:"@site/docs/tutorials/dapp-infrastructure.md",sourceDirName:"tutorials",slug:"/tutorials/dapp-infrastructure",permalink:"/docs/next/tutorials/dapp-infrastructure",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/dapp-infrastructure.md",tags:[],version:"current",lastUpdatedBy:"Sam Padilla",lastUpdatedAt:1693253137,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{title:"Off-chain Dapp Infrastructure",sidebar_label:"Off-chain Infrastructure"},sidebar:"tutorials",previous:{title:"NFT Drop Strategies",permalink:"/docs/next/tutorials/NFT-drop-styles"},next:{title:"How to Launch a Fungible Token on Flow",permalink:"/docs/next/tutorials/fungible-tokens"}},c={},d=[{value:"Writing Data to Flow",id:"writing-data-to-flow",level:2},{value:"User Transactions",id:"user-transactions",level:3},{value:"Admin Transactions",id:"admin-transactions",level:3},{value:"Reading Data From Flow",id:"reading-data-from-flow",level:2},{value:"Events",id:"events",level:3},{value:"Event Reflection Database",id:"event-reflection-database",level:4},{value:"Event Providers",id:"event-providers",level:4},{value:"Cadence Script Queries",id:"cadence-script-queries",level:3}];function l(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In addition to on-chain smart contracts, dapps also rely on off-chain infrastructure. For example, users often interact with a dapp through a web interface. In addition to this, some dapps rely on backend servers to query and index data from the blockchain. This section covers best practices for off-chain infrastructure on Flow."}),"\n",(0,n.jsx)(t.h2,{id:"writing-data-to-flow",children:"Writing Data to Flow"}),"\n",(0,n.jsx)(t.p,{children:"All data written to the blockchain happens in a transaction. For user-facing dapps, transactions either originate from a user account or an admin account. For most dapps, the large majority of transactions will be user transactions."}),"\n",(0,n.jsx)(t.h3,{id:"user-transactions",children:"User Transactions"}),"\n",(0,n.jsxs)(t.p,{children:["User transactions are transactions that are authorized by the users of your dapp. These transactions originate from the user\u2019s wallet, as mentioned in the\n",(0,n.jsx)(t.a,{href:"./user-accounts-and-wallets",children:"User Accounts & Wallets"})," section. For example, a user may sign a transaction to purchase an NFT from your dapp."]}),"\n",(0,n.jsx)(t.p,{children:"A user transaction is initialized by your dapp (e.g. by a button click) through FCL, which then passes the transaction to the user\u2019s wallet, which in turn signs the transaction and submits it to Flow. This all happens from the dapp client, typically a browser app. By using FCL, your dapp does not need to be involved in the transaction signing -- it constructs the transaction, passes it to the wallet, and then waits for the final result."}),"\n",(0,n.jsx)(t.h3,{id:"admin-transactions",children:"Admin Transactions"}),"\n",(0,n.jsx)(t.p,{children:"Admin transactions are transactions that originate from the backend of your dapp, or from a separate administration interface that you control. These transactions perform the administrative duties required to operate your dapp, and are signed by an administrator account controlled by you, the dapp developer."}),"\n",(0,n.jsx)(t.p,{children:"For example, you may send an admin transaction that mints a batch of NFTs for purchase, or a transaction that adds an additional gameplay level to your game."}),"\n",(0,n.jsxs)(t.p,{children:["For one-off administrative actions that do not require automation, such as contract deployment, you can use the ",(0,n.jsx)(t.a,{href:"../tools/toolchains/flow-cli/",children:"Flow CLI"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"reading-data-from-flow",children:"Reading Data From Flow"}),"\n",(0,n.jsx)(t.p,{children:"Your dapp will also need to read data from Flow, and in particular, the state of your smart contracts. There are several ways to query state on Flow."}),"\n",(0,n.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,n.jsxs)(t.p,{children:["Events are data objects emitted at the end of a transaction that describe the state changes that occurred in the transaction. For example, a transaction that transfers FLOW tokens between accounts ",(0,n.jsx)(t.a,{href:"https://flowscan.org/transaction/2f50695c3c506b8214d18f49220c986d24d19d8762a2805b3609aee3d529de88",children:"will emit events"})," that describe the sender, recipient and amount of FLOW transferred. Event types are ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowToken.cdc#L8-L27",children:"defined inside your Cadence contracts"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Events can be used to notify your off-chain infrastructure of important state changes in your smart contracts. For example, if a user purchases an NFT from your storefront smart contract, an event will be emitted that describes this purchase. Your web application, which displays the NFTs for sale, can then capture that event and remove the NFT from the sale list."}),"\n",(0,n.jsxs)(t.p,{children:["You can query events through the Flow Access API using the available ",(0,n.jsx)(t.a,{href:"/tools#sdks",children:"Flow SDKs"}),". Event data is returned in ",(0,n.jsx)(t.a,{href:"../cadence/json-cadence-spec",children:"JSON-Cadence format"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"event-reflection-database",children:"Event Reflection Database"}),"\n",(0,n.jsx)(t.p,{children:"Some applications, especially those with existing backend servers, opt to store application state in an off-chain database that merely reflects the state of on-chain contracts. A reflection database has the following benefits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Unified on and off-chain state"}),". For dapps that rely on both on and off-chain state, it\u2019s useful to store all data in a central database to allow for atomic queries (i.e. ACID) and high scalability."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fast and flexible queries."})," Database systems can be tuned and optimized (e.g. using indices) to best serve the data needs of your dapp, whereas the blockchain itself does not provide this level of customization."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"event-providers",children:"Event Providers"}),"\n",(0,n.jsxs)(t.p,{children:["Third-party event providers, such as ",(0,n.jsx)(t.a,{href:"https://graffle.io/",children:"Graffle"}),", can simplify event filtering and stream events directly to your frontend or backend infrastructure."]}),"\n",(0,n.jsx)(t.h3,{id:"cadence-script-queries",children:"Cadence Script Queries"}),"\n",(0,n.jsx)(t.p,{children:"At any point, your dapp can execute a query to read the state of your contracts. This is done using Cadence scripts, which are written similarly to transactions, but are read-only and cannot mutate the blockchain state."}),"\n",(0,n.jsx)(t.p,{children:"Events follow a push model, whereas script queries follow a pull model. Your dapp may need to check the state of your contracts without waiting for an event to be emitted."}),"\n",(0,n.jsxs)(t.p,{children:["You can execute scripts through the Flow Access API using the available ",(0,n.jsx)(t.a,{href:"/tools#sdks",children:"Flow SDKs"}),". Like events, script results are returned in ",(0,n.jsx)(t.a,{href:"../cadence/json-cadence-spec",children:"JSON-Cadence format"}),"."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}}}]);