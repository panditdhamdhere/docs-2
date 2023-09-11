"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34610],{97090:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});s(67294);var n=s(85893),i=s(11151);const o={title:"Testing Guidelines",sidebar_label:"Testing Guidelines",description:"Testing smart contract Guidelines",sidebar_position:3,sidebar_custom_props:{icon:"\ud83d\udcdd"}},r=void 0,a={unversionedId:"guides/deploying/contract-testing",id:"guides/deploying/contract-testing",title:"Testing Guidelines",description:"Testing smart contract Guidelines",source:"@site/docs/guides/deploying/contract-testing.mdx",sourceDirName:"guides/deploying",slug:"/guides/deploying/contract-testing",permalink:"/docs/next/guides/deploying/contract-testing",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/deploying/contract-testing.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1694451830,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:3,frontMatter:{title:"Testing Guidelines",sidebar_label:"Testing Guidelines",description:"Testing smart contract Guidelines",sidebar_position:3,sidebar_custom_props:{icon:"\ud83d\udcdd"}},sidebar:"guides",previous:{title:"Testnet Deployment",permalink:"/docs/next/guides/deploying/testnet-deployment"},next:{title:"Smart Contracts",permalink:"/docs/next/guides/deploying/overview"}},c={},l=[{value:"Testing Requirements",id:"testing-requirements",level:2},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Go Tests",id:"go-tests",level:3},{value:"JavaScript Tests",id:"javascript-tests",level:3},{value:"Testing Your Application",id:"testing-your-application",level:2},{value:"Automated Testing of Contract Code",id:"automated-testing-of-contract-code",level:3},{value:"Stress Testing Live Applications Before Mainnet",id:"stress-testing-live-applications-before-mainnet",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",em:"em",h3:"h3"},(0,i.ah)(),e.components),{Callout:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Good test coverage is vital for assuring code quality."}),"\n",(0,n.jsx)(s,{type:"success",children:(0,n.jsxs)(t.p,{children:["Leverage ",(0,n.jsx)(t.a,{href:"/docs/next/tools/toolchains/emulator/",children:"Flow emulator"})," to automate test runs. Test on Flow testnet. Include unit tests; to exercise each feature, and integration tests; to exercise the behavior of different parts of the project as a whole."]})}),"\n",(0,n.jsx)(t.p,{children:"Human-driven tests, in which individual testers work manually through user stories via the project's user interface or custom transactions, can also be performed locally. Tests with groups of testers can be performed similarly on testnet in a similar manner."}),"\n",(0,n.jsx)(t.p,{children:"Finally, unstructured closed testing with a limited audience on testnet can gain valuable information about performance and security by capturing usage data from more organic interaction with the project's smart contracts over days or weeks."}),"\n",(0,n.jsx)(t.h2,{id:"testing-requirements",children:"Testing Requirements"}),"\n",(0,n.jsx)(t.p,{children:"It is suggested to follow the following best practices:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Every publicly exposed feature of a contract and its resources should have unit tests that check both for success with correct input ",(0,n.jsx)(t.em,{children:"and"})," for failure with incorrect input.\nThese tests should be capable of being run locally with the Flow emulator, with no or minimal extra resources or configuration, and with a single command."]}),"\n",(0,n.jsx)(t.li,{children:"Each user story or workflow that uses the smart contracts should have an integration test that ensures that the series of steps required to complete it does so successfully with test data."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Make sure you test all contracts - and the integration into your application extensively before proceeding to the mainnet.\nYou should aim to replicate all conditions as closely as possible to the usage patterns on mainnet."}),"\n",(0,n.jsx)(t.h2,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,n.jsx)(t.p,{children:"There are official SDKs for Flow in both Go and JavaScript."}),"\n",(0,n.jsx)(t.p,{children:"In both cases, the code will need to deploy the contracts, configure accounts to interact with them and send transactions to them. It will then have to wait for the transactions to be sealed and check the results by catching exceptions, checking for events, and querying state using scripts."}),"\n",(0,n.jsx)(t.h3,{id:"go-tests",children:"Go Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Tests in Go can be written using ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-go-sdk",children:"flow-go-sdk"})," and the go test command."]}),"\n",(0,n.jsxs)(t.p,{children:["You can find examples of Go tests in the following projects: ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/tree/master/lib/go/test",children:"flow-core-contracts"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/tree/master/lib/go/test",children:"flow-nft"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-ft/tree/master/lib/go/test",children:"flow-ft"}),"."]}),"\n",(0,n.jsx)(s,{type:"info",children:(0,n.jsx)(t.p,{children:"These tests are tied to the emulator but can be refactored to run on testnet"})}),"\n",(0,n.jsx)(t.h3,{id:"javascript-tests",children:"JavaScript Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Tests in JavaScript can be written using ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-js-testing",children:"flow-js-testing"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"It is critical to test your applications and contracts thoroughly on the testnet as part of your road to the mainnet. Testing will help you understand how to create stable and robust applications using the Flow development stack."}),"\n",(0,n.jsx)(t.h2,{id:"testing-your-application",children:"Testing Your Application"}),"\n",(0,n.jsx)(t.h3,{id:"automated-testing-of-contract-code",children:"Automated Testing of Contract Code"}),"\n",(0,n.jsxs)(t.p,{children:["All contracts should include test coverage for ",(0,n.jsx)(t.em,{children:"all contract functions"}),". Make sure you've accounted for success and failure cases appropriately."]}),"\n",(0,n.jsxs)(t.p,{children:["Tests should also be runnable in automated environments (CI). You can use the ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-js-testing",children:"JavaScript testing framework"})," to create tests for your smart contract code."]}),"\n",(0,n.jsx)(t.h3,{id:"stress-testing-live-applications-before-mainnet",children:"Stress Testing Live Applications Before Mainnet"}),"\n",(0,n.jsx)(t.p,{children:"Once you deployed your application to the testnet, you should record how your application handles non-trivial amounts of traffic to ensure there are no issues."}),"\n",(0,n.jsx)(s,{type:"success",children:(0,n.jsxs)(t.p,{children:["Get familiar with the ",(0,n.jsx)(t.a,{href:"/docs/next/cadence/anti-patterns",children:"Cadence anti-patterns"})," to avoid avoid problematic or unintended behavior."]})})]})}const u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}]);