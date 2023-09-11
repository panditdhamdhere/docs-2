"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[37032],{73182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});n(67294);var i=n(85893),s=n(11151);const o={title:"Minting NFTs",description:"Learn about the NFT minting process",sidebar_label:"Minting NFTs",sidebar_position:4,sidebar_custom_props:{icon:"\ud83d\uddbc\ufe0f"}},a=void 0,r={unversionedId:"guides/nft-marketplace/minting-nfts",id:"guides/nft-marketplace/minting-nfts",title:"Minting NFTs",description:"Learn about the NFT minting process",source:"@site/docs/guides/nft-marketplace/minting-nfts.md",sourceDirName:"guides/nft-marketplace",slug:"/guides/nft-marketplace/minting-nfts",permalink:"/docs/next/guides/nft-marketplace/minting-nfts",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/nft-marketplace/minting-nfts.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1694451830,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:4,frontMatter:{title:"Minting NFTs",description:"Learn about the NFT minting process",sidebar_label:"Minting NFTs",sidebar_position:4,sidebar_custom_props:{icon:"\ud83d\uddbc\ufe0f"}},sidebar:"guides",previous:{title:"Core Components",permalink:"/docs/next/guides/nft-marketplace/core-components"},next:{title:"Selling NFTs",permalink:"/docs/next/guides/nft-marketplace/selling-nfts"}},l={},c=[{value:"\u200b\u200bLazy Minting",id:"lazy-minting",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",h2:"h2",blockquote:"blockquote",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Most NFT marketplaces give their users the ability to mint NFTs from user-provided digital media. Users can, later on, post the minted NFTs for sale."}),"\n",(0,i.jsxs)(t.p,{children:["An NFT marketplace can add support for minting NFTs on the Flow blockchain using a contract based on the ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow-nft",children:"Flow NFT Standard"}),". ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc",children:"Here"})," is an illustration of how to write a contract for your own NFT."]}),"\n",(0,i.jsx)(t.p,{children:"A few important points to note:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Do implement your NFT contract to conform to the ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),". You should implement the \u201cDisplay\u201d view to provide the rendering information for the NFTs. This ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L73",children:"code snippet"})," shows how to implement metadata in the NFT contract. Conforming to the metadata standard will facilitate rendering by wallets, tools, and other applications."]}),"\n",(0,i.jsxs)(t.li,{children:["Do make sure to register your contract in the ",(0,i.jsx)(t.a,{href:"https://github.com/dapperlabs/nft-catalog",children:"Flow NFT Catalog"}),". Doing so will ensure that wallets and other applications will render your NFTs. It will also guarantee the authenticity of NFTs minted by your application on other platforms."]}),"\n",(0,i.jsx)(t.li,{children:"Individual collections per user are not currently supported. So NFTs for all the users will have to share the same contract. You can include a field in the contract indicating a collection name specific to a creator."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"lazy-minting",children:"\u200b\u200bLazy Minting"}),"\n",(0,i.jsxs)(t.p,{children:['Some blockchains have super high gas fees. That compels NFT platforms, especially marketplaces, to implement "',(0,i.jsx)(t.a,{href:"https://medium.com/rarible-dao/nft-minting-vs-lazy-minting-mining-explained-4330dd57a4c4",children:"lazy minting"}),'" to save on gas/transaction fees.']}),"\n",(0,i.jsx)(t.p,{children:"Flow blockchain's mission is to make blockchain accessible for the masses. We will never expect to see high transaction fees on the Flow blockchain."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": You can check the details on Flow fees ",(0,i.jsx)(t.a,{href:"/docs/next/concepts/fees#fees",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Based on current and future low fees on the Flow blockchain, NFT marketplaces do not need to implement lazy minting."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);