"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[218],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},A=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),A=u(n),d=o,g=A["".concat(s,".").concat(d)]||A[d]||p[d]||i;return n?a.createElement(g,r(r({ref:e},c),{},{components:n})):a.createElement(g,r({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=A;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},691:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return A}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},s="Installation",u={unversionedId:"Dashactyl/v2/installation",id:"Dashactyl/v2/installation",title:"Installation",description:"We've spent hours making this documentation. You're supposed to at least have basic linux knowledge, and you're also supposed to understand what commands you're running.",source:"@site/docs/Dashactyl/v2/installation.md",sourceDirName:"Dashactyl/v2",slug:"/Dashactyl/v2/installation",permalink:"/docs/Dashactyl/v2/installation",editUrl:"https://github.com/Votion-Development/documentation/blob/main/docs/Dashactyl/v2/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Dashactyl/v2/Introduction"},next:{title:"Configuration",permalink:"/docs/Dashactyl/v2/configuration"}},c=[{value:"Supported Operating Systems",id:"supported-operating-systems",children:[],level:2},{value:"Ubuntu and Debian",id:"ubuntu-and-debian",children:[],level:2},{value:"Windows",id:"windows",children:[],level:2}],p={toc:c};function A(t){var e=t.components,l=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"READ BEFORE PROCEEDING!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We've spent hours making this documentation. You're supposed to at least have basic linux knowledge, and you're also supposed to understand what commands you're running."))),(0,i.kt)("h2",{id:"supported-operating-systems"},"Supported Operating Systems"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Versions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#ubuntu-and-debian"},"Ubuntu")),(0,i.kt)("td",{parentName:"tr",align:null},">=20.04")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#ubuntu-and-debian"},"Debian")),(0,i.kt)("td",{parentName:"tr",align:null},">=10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#windows"},"Windows")),(0,i.kt)("td",{parentName:"tr",align:null},">=10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,i.kt)("td",{parentName:"tr",align:null},"Coming Soon")))),(0,i.kt)("p",null,"Suggested VPS hosting: ",(0,i.kt)("a",{parentName:"p",href:"https://colournodes.com"},"ColourNodes")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"colournodes image",src:n(8250).Z})),(0,i.kt)("p",null,"Before you begin installation, make sure you have NodeJS v14 or above, git CLI, and Node Package Manager (NPM) v7.x or above installed."),(0,i.kt)("h2",{id:"ubuntu-and-debian"},"Ubuntu and Debian"),(0,i.kt)("p",null,"Firstly, make sure that you have all the prerequisites above installed (if you do you can skip this part)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt update && sudo apt upgrade\n\n# installing git CLI\nsudo apt install git\n\n# adding MongoDB keys\nwget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -\n\n#If you receive an error indicating that gnupg is not installed, you can:\n\nsudo apt-get install gnupg\nwget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -\n\necho "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list\n\nsudo apt-get update\n\n# installing MongoDB\n\nsudo apt-get install -y mongodb-org\n\n# starting MongoDB\n\nsystemctl start mongod && systemctl enable mongod\n\n# login to mongodb shell\n\nmongosh\n\n# creating MongoDB root user\n\nuse admin\ndb.createUser(\n      {\n          user: "root",\n          pwd: "passwordhere",\n          roles: [ "root" ]\n      }\n)\n\n# installing NPM\nsudo apt install npm\n\n# installing NodeJS\ncurl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -\nsudo apt install nodejs\n')),(0,i.kt)("p",null,"Now, we are going to enable Authentication on your MongoDB database and make it accessible outside your VPS so you can use MongoDB compass with it. This is however optional if you would rather not to expose your Database to the world. This is only recomended for setup and development purposes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/mongod.conf\n")),(0,i.kt)("p",null,"Now, we are going to replace this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"127.0.0.1",src:n(7225).Z})),(0,i.kt)("p",null,"With this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"0.0.0.0",src:n(6350).Z})),(0,i.kt)("p",null,"And if you scroll down and find security:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"security",src:n(6785).Z})),(0,i.kt)("p",null,"Uncomment it and turn it into this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"security",src:n(179).Z})),(0,i.kt)("p",null,"You can check the versions with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\nnpm -v\nnode -v\n")),(0,i.kt)("p",null,"Now to install Dashactyl, its dependencies & build the frontend:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Votion-Development/Dashactyl-v2.git\ncd Dashactyl-v2 && npm install\n\ncd frontend && npm i && npm run build\n")),(0,i.kt)("p",null,"After installing Dashactyl, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"webconfig.yml")," file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"webconfig-example.yml")," file and edit it for your dashboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd .. && mv webconfig-example.yml webconfig.yml\nnano webconfig.yml\n")),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("p",null,"First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Git CLI: ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"https://git-scm.com/download/win")),(0,i.kt)("li",{parentName:"ul"},"NPM and NodeJS: ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"https://nodejs.org/en/"))),(0,i.kt)("p",null,"You can check the versions with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},"git --version\nnpm -v\nnode -v\n")),(0,i.kt)("p",null,"Now to install Dashactyl, its dependencies & build the frontend:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Votion-Development/Dashactyl-v2.git\ncd Dashactyl-v2 && npm install\n\ncd frontend && npm i && npm run build\n")),(0,i.kt)("p",null,"After installing Dashactyl, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"webconfig.yml")," file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"webconfig-example.yml")," file and edit it for your dashboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},"type webconfig-example.yml > webconfig.yml\nstart webconfig.yml\n")))}A.isMDXComponent=!0},8250:function(t,e,n){e.Z=n.p+"assets/images/colournodes-44bcc1322057495dac1036c1175b33e8.gif"},6350:function(t,e){e.Z="data:image/png;base64,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"},7225:function(t,e){e.Z="data:image/png;base64,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"},6785:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAyCAYAAAC0/E4NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANtSURBVHhe7ZtPSxtRFMVPxzQqIQQLLqSQBitd6KJuBUG3+g2ycKXQRcCtCi4L2q3gQrArF/kGujUgSHe60JWKBEoXBSWEQSNj2vv+ZGYSYzFj1blyfzD45r6ZyXvvvHvmGvRN7sOnPxBij2N/CjFHhGKCCMUEEYoJIhQTRCgmiFBMEKGYIEIxQYRiggjFBBGKCSIUE0QoJohQTBChmCBCMUGEYoIIxQQRigmvXKgZXH8rorK8iLqNcCWSUF6hiOtJ1VILsYmbQR1mhZqDmx+zZ/EnYka5cMq2id9wzmwzdmyhZyGPzNdV9tbR2d/1Ta6gMpWzJ80kDtaQKgI3y/O4StsgzpFaWEJCt8ea+8rbyKxv2ROi5dnh59X38ujZNfF6fhPVdyV9r8qK2sUaejGL6mhK93fvmGv1dTYW/qymeBh1zdEwjQGhMRN6XOGYcpFp1FrH/8R0ttF2l5BZ2Ea3FoB26s45UD1Emtqp4j4twiyuLmkCqk8fwYS9Aonk99Hi9k0H1qMXox+9G437zPMegjc6b4Sje9IHLmrj5n3kFOf8WJhGPEWOoDZD4/P0ou8e09xy8LStG7wR2jzl40C4F+JRjlAf6AcufzY/JDsMzzYDZuBlSVx/B+4juXcO7+MEtSnTxnO0aN+RjGKhaqPY5zo/TpBIZx5ROGwhqcQembHnatwuenfCmWPt9BmzSdGRUMpqKirtade5VE1pC8lOU2xFi6N2a6ps+ip0+Bkz+B639h4V14dvc0Ookx12/XpYBrWSOC0FkzhbbbatCGixG5ttcpgsrhRtA/1nOhIqsU47KWx3vn0Ei6Ov0XayjS6ypaCysnYZPuglD5zAqZorYsFZCW+rxv6U7XUfPW/m3EdHQvmE7O7+TAgJYCfvFhqWEmafsoLsZspkZTtuB4J3WdtCIALOhaut965NGluujW+i1neIpC1iAuzvZm3n8nR0/N8cQdV10lKRtVR1iqbK6G6/qeyM0K3VmN83uAj3y2cjImVy6nQIbkvVd7fwaDMWxb/G09RnKrvb0PgCXqbqk3+7aYsSYwLOxlws3k+KaNb3yvEKKmPiUUQ0kIwKob9WylJDFUsx+zZDhGKCWB8TRCgmiFBMEKGYIEIxQYRiggjFBBGKCSIUE0QoJohQTBChmCBCMUGEYoIIxQLgL6lWbkz0R/Q+AAAAAElFTkSuQmCC"},179:function(t,e){e.Z="data:image/png;base64,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"}}]);