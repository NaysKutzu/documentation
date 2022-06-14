"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[228],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Configuration",c={unversionedId:"Dashactyl/v2/configuration",id:"Dashactyl/v2/configuration",title:"Configuration",description:"This page goes over the webconfig.yml configuration and setting up the Nginx webserver for Dashactyl.",source:"@site/docs/Dashactyl/v2/configuration.md",sourceDirName:"Dashactyl/v2",slug:"/Dashactyl/v2/configuration",permalink:"/docs/Dashactyl/v2/configuration",editUrl:"https://github.com/Votion-Development/documentation/blob/main/docs/Dashactyl/v2/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/Dashactyl/v2/installation"},next:{title:"Congratulations!",permalink:"/docs/Dashactyl/v2/congratulations"}},u=[{value:"Configuring your Settings",id:"configuring-your-settings",children:[],level:2},{value:"Setting Up Nginx",id:"setting-up-nginx",children:[],level:2},{value:"Starting Dashactyl",id:"starting-dashactyl",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This page goes over the ",(0,o.kt)("inlineCode",{parentName:"p"},"webconfig.yml")," configuration and setting up the Nginx webserver for Dashactyl."),(0,o.kt)("h2",{id:"configuring-your-settings"},"Configuring your Settings"),(0,o.kt)("p",null,"Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"webconfig.yml")," file is so large, this page will break down and explain each individual section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"port: 3000\nssl: false\nsecret: \nenvironment: production\ndebug: false\ndashboard_url: \n\n# For MongoDB\nconnection_uri: \ndatabase: Dashactyl-v2\n")),(0,o.kt)("p",null,"The start of the settings file; The ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," is where Dashactyl will be running. ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl")," is dependant on wether you run dashactyl with SSL or not. This has been known to cause issues however if enabled with ssl, so it is recomended to keep it as false. The ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," is a randomly genererated password that you must keep secret as it it is what the dashboards sessions are encrypted with. ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," are only for developers, so you don't need to worry about them. ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard_url")," is the URL of your dashboard. This MUST be correct otherwise the frontend will not be able to send requests to the backend. This is because this setting sets the cors origin policy. ",(0,o.kt)("inlineCode",{parentName:"p"},"connection_uri")," is the URI for your mongodb database."),(0,o.kt)("p",null,"You may ask how do I create a database? Well.. It's fairly simple, just follow the steps below. Remember, you can change the database name to whatever you would like, however you just need to change it in the webconfig.yml file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create database",src:n(506).Z})),(0,o.kt)("p",null,"Once you have created the database, you just need to start the application, ",(0,o.kt)("strong",{parentName:"p"},"(MAKE SURE THE CONNECTION URI AND DATABASE IS CORRECT IN THE WEBCONFIG.YML FILE)")),(0,o.kt)("p",null,"Dashactyl will automatically create the necessary collections for you, and insert all the required data into those collections."),(0,o.kt)("h2",{id:"setting-up-nginx"},"Setting Up Nginx"),(0,o.kt)("p",null,"The Nginx web server will allow us to use a custom domain name and apply SSL to it."),(0,o.kt)("p",null,"First, we need to make sure you have ",(0,o.kt)("inlineCode",{parentName:"p"},"Nginx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"certbot")," installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install nginx\nsudo apt install certbot\nsudo apt install -y python3-certbot-nginx\n")),(0,o.kt)("p",null,"Now you can install your SSL certificate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start nginx\ncertbot certonly --nginx -d <DASHACTYL_DOMAIN>\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<DASHACTYL_DOMAIN>")," with your domain name. If you have done this correctly you should see something similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'IMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/your.dashactyl.domain/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/your.dashactyl.domain/privkey.pem\n   Your cert will expire on date. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n')),(0,o.kt)("p",null,"If what you saw isn't similar to what you saw in your server, we recommend you ask for support on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/wwpRNvkMHA"},"Discord Server"),"."),(0,o.kt)("p",null,"Next, if everything's going correctly, you need to go to the Nginx sites directory and create a configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/nginx/sites-available\nnano dashactyl.conf\n")),(0,o.kt)("p",null,"Now paste the following into the file. Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<DOMAIN>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<PORT>")," with your Dashactyl domain and the port Dashactyl is running on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n  listen 80;\n  server_name <DOMAIN>;\n  return 301 https://$server_name$request_uri;\n}\nserver {\n  listen 443 ssl http2;\n\n  server_name <DOMAIN>;\n  ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;\n  ssl_session_cache shared:SSL:10m;\n  ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n  ssl_ciphers  HIGH:!aNULL:!MD5;\n  ssl_prefer_server_ciphers on;\n\n  location / {\n    proxy_pass http://localhost:<PORT>/;\n    proxy_buffering off;\n    proxy_set_header X-Real-IP $remote_addr;\n  }\n  \n  location /afkwspath {\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n    proxy_pass "http://localhost:<PORT>/afkwspath";\n  }\n}\n')),(0,o.kt)("p",null,"After we've setup the main config file, we'll need to symlink it to sites-enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /etc/nginx/sites-available/dashactyl.conf /etc/nginx/sites-enabled/dashactyl.conf\n")),(0,o.kt)("p",null,"  Once you have edited, saved, and symlinked your configuration file, restart Nginx with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl restart nginx")," and restart Dashactyl. You should see it running on that domain with SSL!"),(0,o.kt)("h2",{id:"starting-dashactyl"},"Starting Dashactyl"),(0,o.kt)("p",null,"First we need to install pm2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install pm2 -g\n")),(0,o.kt)("p",null,"Now you need to go to the dashboard directory and use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pm2 start index.js\n")),(0,o.kt)("p",null,"Once you have started Dashactyl, head to the Dashbard URL and start with the installation screen!"))}d.isMDXComponent=!0},506:function(e,t,n){t.Z=n.p+"assets/images/create_database-8d66b8bf3e67ad5280fdb2b642dd1b41.png"}}]);