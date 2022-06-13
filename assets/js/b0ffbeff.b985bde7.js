"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[488],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6142:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Configuration",p={unversionedId:"Dashactyl/v1/configuration",id:"Dashactyl/v1/configuration",title:"Configuration",description:"This page goes over the settings.yml configuration and setting up the Nginx webserver for Dashactyl.",source:"@site/docs/Dashactyl/v1/configuration.md",sourceDirName:"Dashactyl/v1",slug:"/Dashactyl/v1/configuration",permalink:"/docs/Dashactyl/v1/configuration",editUrl:"https://github.com/Votion-Development/documentation/blob/main/docs/Dashactyl/v1/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/Dashactyl/v1/installation"},next:{title:"Congratulations!",permalink:"/docs/Dashactyl/v1/congratulations"}},c=[{value:"Configuring your Settings",id:"configuring-your-settings",children:[],level:2},{value:"Setting Up Nginx",id:"setting-up-nginx",children:[],level:2},{value:"Starting Dashactyl",id:"starting-dashactyl",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This page goes over the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yml")," configuration and setting up the Nginx webserver for Dashactyl."),(0,o.kt)("h2",{id:"configuring-your-settings"},"Configuring your Settings"),(0,o.kt)("p",null,"Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yml")," file is so large, this page will break down and explain each individual section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'website:\n  port: 4440\n  secret: \'Enter your session password here.\'\n  secure: false\n\ndiscord:\n  id: "Enter your Discord OAuth2 ID here."\n  secret: "Enter your Discord OAuth2 secret here."\n  callbackpath: "http://localhost:4440/accounts/callback"\n  prompt: false \n\n  token: "Insert your bot token here."\n  guild: "000000000000000000"\n')),(0,o.kt)("p",null,"The start of the settings file; The ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," is where Dashactyl will be running. Your Discord credentials can be found ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"at the developer portal")," with the application you are using for Dashactyl. When setting up the ",(0,o.kt)("inlineCode",{parentName:"p"},"callbackpath"),", make sure it is also whitelisted in the portal: ",(0,o.kt)("strong",{parentName:"p"},"Your Application > Oauth2 > Redirects"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," is the token of your bot application for Dashactyl. This must be kept secret ",(0,o.kt)("strong",{parentName:"p"},"at all times")," as it can be easily abused. The ",(0,o.kt)("inlineCode",{parentName:"p"},"guild")," is your server ID if applicable. This is optional and is used to add clients to your server when logging into the dashboard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'auditlogs:\n  enabled: false\n  webhook_url: "Enter your webhook URL"\n')),(0,o.kt)("p",null,"This section is for configuring audit logs in Dashactyl.\n",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," will determine if you want to activate this system or not, to activate it you must leave it in ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", to deactivate it in ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook_url")," is the URL of your webhook, in this case you must put the URL of the webhook created on your Discord server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'email_system:\n  enabled: false\n  smtp_host: "Enter your SMTP Host"\n  smtp_port: "Enter your SMTP Port"\n  smtp_user: "Enter your SMTP User"\n  smtp_password: "Enter your SMTP Password"\n  extra:\n    dashboardurl: "Enter your dashboard url with https"\n    dashboardname: "Dashactyl" \n')),(0,o.kt)("p",null,"This section is for the configuration of the email system, better known as SMTP in Dashactyl.\nFor this to work you will need to have an SMTP host like Mailjet.\n",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," will determine if you want to activate this system or not, to activate it you must leave it in ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", to deactivate it in ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"smtp_host")," will determine the host you are using, example: smtp.zoho.com or smtp.gmail.com\n",(0,o.kt)("inlineCode",{parentName:"p"},"smtp_port")," will determine the port your host uses, in some cases it can be ",(0,o.kt)("inlineCode",{parentName:"p"},"25"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"465"),", etc.\n",(0,o.kt)("inlineCode",{parentName:"p"},"smtp_user")," is the user provided by your SMTP host, in some cases it can be your email.\n",(0,o.kt)("inlineCode",{parentName:"p"},"smtp_password")," It is the password that gives you to connect through the previously configured user, in some cases it is the password of your email placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"smtp_user"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"dashboardurl")," is the URL of your Dashactyl instance, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://client.mydomain.com"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"dashboardname")," is the name of your host or dashboard, by default this will be Dashactyl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pterodactyl:\n  domain: "Enter your Pterodactyl Panel domain here."\n  key: "Enter your Pterodactyl Panel application API key here."\n  generate_password_on_sign_up: true\n')),(0,o.kt)("p",null,"This section focuses on the panel side of configuration. ",(0,o.kt)("inlineCode",{parentName:"p"},"domain")," is your Pterodactyl domain. This must be prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," to work. If you are hosting locally then ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:<PORT>")," can be used (with additional paths if applicable). ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is the Pterodactyl Application API key for Dashactyl. This can be found or created by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"your.pterodactyl.domain/admin/api"),". This must be kept secret ",(0,o.kt)("strong",{parentName:"p"},"at all times")," as it can be used to expose confidential information and destroy your panel. ",(0,o.kt)("inlineCode",{parentName:"p"},"generate_password_on_sign_up")," is whether to create a new password for new accounts or use a default password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'database:\n  host: "Enter your database IP here."\n  port: "Enter your database port here."\n  user: "Enter your database user here."\n  password: "Enter your database password here."\n  database: "dashactyl"\n')),(0,o.kt)("p",null,"You may get asked, how do I create a database? Well.. It's fairly simple, just run the commands below. Remember you can change the username and/or the database name, but you'll need to set them on the settings.yml to whatever you've set the user/database name to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\n\n# After you've got that setup, let's go into the next step. Remember to change 'YourPasswordHere' with a secure password.\nCREATE USER 'dashboard'@'127.0.0.1' IDENTIFIED BY 'YourPasswordHere'; \nCREATE DATABASE dashactyl;\nGRANT ALL PRIVILEGES ON dashactyl.* TO 'dashboard'@'127.0.0.1' WITH GRANT OPTION;\nquit;\n")),(0,o.kt)("p",null,"This section is for setting up the MySQL/MariaDB database for Dashactyl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"api:\n  apicodepassword:\n    user info: true\n    blacklist user: true\n    unblacklist user: true\n    set coins: true\n    set package: true\n    set resources: true\n    create coupon: true\n    revoke coupon: true\n")),(0,o.kt)("p",null,"This section is for managing the Dashactyl API endpoints. Each option toggles whether the endpoint can be used publicly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'locations:\n  "1":\n    name: "Location Name"\n    enabled: true\n    package: null\n\n    # package:\n    # - default\n    # - another_package_name\n\n    renewal: true\n')),(0,o.kt)("p",null,"This section is for the location used for creating the servers on Pterodactyl."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"1"')," is the location ID, you can find it on your Pterodactyl Panel, inside the admin area. ",(0,o.kt)("inlineCode",{parentName:"p"},"Locations -> Search your location, and you should see the ID on the left."),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is the location name that you want to show while creating a server on Dashactyl.\n",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," is pretty self-explanatory. It means if the location is enabled or not inside Dashactyl.\n",(0,o.kt)("inlineCode",{parentName:"p"},"package")," checks if a user has a package on his account. If the user doesn't have the specified package in Dashactyl, the user won't be able to create the server in that location. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"eggs:\n  paper:\n    display: \"Paper\"\n    minimum:\n      memory: 100\n      disk: 100\n      cpu: 10\n    maximum:\n      memory: null\n      disk: null\n      cpu: null\n    info:\n      egg: 3\n      docker_image: quay.io/pterodactyl/core:java\n      startup: java -Xms128M -Xmx{{SERVER_MEMORY}}M -Dterminal.jline=false -Dterminal.ansi=true -jar {{SERVER_JARFILE}}\n      environment:\n        SERVER_JARFILE: 'server.jar'\n        BUILD_NUMBER: 'latest'\n      feature_limits:\n        databases: 1\n        backups: 1\n")),(0,o.kt)("p",null,"This section is for the server configuration eggs in Pterodactyl. When creating a server through Dashactyl, the package associated with this egg will be used to create it. You can set this to your liking, and/or remove the default egg to change it with another one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  default: "default"\n  list:\n    default:\n      display: "The package name."\n      memory: 1024\n      disk: 1024\n      cpu: 100\n      servers: 1\n    pro:\n      display: "Pro Package"\n      memory: 2048\n      disk: 2048\n      cpu: 200\n      servers: 2\n')),(0,o.kt)("p",null,"The packages displayed when a user is creating a server through Dashactyl. These packages can be customised and used with Dashactyl's currency system. The options shown are the specifications for the server(s) that will be given to the user in that package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"store:\n  memory:\n    enabled: true\n    cost: 10\n    per: 10\n\n  disk:\n    enabled: true\n    cost: 10\n    per: 10\n\n  cpu:\n    enabled: true\n    cost: 10\n    per: 10\n\n  servers:\n    enabled: true\n    cost: 10\n    per: 10\n")),(0,o.kt)("p",null,"This section is for the Dashactyl store configuration. ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," is whether the item should be purchasable in the shop. ",(0,o.kt)("inlineCode",{parentName:"p"},"cost")," is how much the item costs and ",(0,o.kt)("inlineCode",{parentName:"p"},"per")," is the amount of that item to give per purchase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"afk:\n  domain_lock: \n    - localhost:4440\n  redirect_on_attempt_to_steal_code: https://www.youtube.com/watch?v=dQw4w9WgXcQ\n\n  everywhat: 60\n  gaincoins: 1\n\nrenewal:\n  renewal_time: 6.048e+8\n  deletion_time: 8.64e+7\n\n  renew_fee: 10\n")),(0,o.kt)("p",null,"This section is for the AFK page and the server renewal. More information is provided below."),(0,o.kt)("p",null,"AFK page:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"domain_lock")," (WIP)\n",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_on_attempt_to_steal_code")," (WIP)\n",(0,o.kt)("inlineCode",{parentName:"p"},"everywhat")," means how much time must go by before a user is able to get a coin inside the AFK page. The time is in seconds.\n",(0,o.kt)("inlineCode",{parentName:"p"},"gaincoins")," this means how many coins will the user gain after the time you specified goes by. The time is in seconds."),(0,o.kt)("p",null,"Renewal:\n",(0,o.kt)("inlineCode",{parentName:"p"},"renewal_time")," this is the time that specifies when the server must be renewed.\n",(0,o.kt)("inlineCode",{parentName:"p"},"deletion_time")," deletion time is the time that is given to the user to renew the server after it gets suspended. If the user doesn't renew the server on the specified time after it gets suspended, the server will be deleted. The time is in seconds.\n",(0,o.kt)("inlineCode",{parentName:"p"},"renew_fee")," is the renew fee users will need to use when renewing a server, also known as using coins. The time is in seconds."),(0,o.kt)("h2",{id:"setting-up-nginx"},"Setting Up Nginx"),(0,o.kt)("p",null,"The Nginx web server will allow us to use a custom domain name and apply SSL to it."),(0,o.kt)("p",null,"First, we need to make sure you have ",(0,o.kt)("inlineCode",{parentName:"p"},"Nginx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"certbot")," installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install nginx\nsudo apt install certbot\nsudo apt install -y python3-certbot-nginx\n")),(0,o.kt)("p",null,"Now you can install your SSL certificate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start nginx\ncertbot certonly --nginx -d <DASHACTYL_DOMAIN>\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<DASHACTYL_DOMAIN>")," with your domain name. If you have done this correctly you should see something similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'IMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/your.dashactyl.domain/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/your.dashactyl.domain/privkey.pem\n   Your cert will expire on date. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n')),(0,o.kt)("p",null,"If what you saw isn't similar to what you saw in your server, we recommend you ask for support on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/wwpRNvkMHA"},"Discord Server"),"."),(0,o.kt)("p",null,"Next, if everything's going correctly, you need to go to the Nginx sites directory and create a configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/nginx/sites-available\nnano dashactyl.conf\n")),(0,o.kt)("p",null,"Now paste the following into the file. Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<DOMAIN>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<PORT>")," with your Dashactyl domain and the port Dashactyl is running on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n  listen 80;\n  server_name <DOMAIN>;\n  return 301 https://$server_name$request_uri;\n}\nserver {\n  listen 443 ssl http2;\n\n  server_name <DOMAIN>;\n  ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;\n  ssl_session_cache shared:SSL:10m;\n  ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n  ssl_ciphers  HIGH:!aNULL:!MD5;\n  ssl_prefer_server_ciphers on;\n\n  location / {\n    proxy_pass http://localhost:<PORT>/;\n    proxy_buffering off;\n    proxy_set_header X-Real-IP $remote_addr;\n  }\n  \n  location /afkwspath {\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n    proxy_pass "http://localhost:<PORT>/afkwspath";\n  }\n}\n')),(0,o.kt)("p",null,"After we've setup the main config file, we'll need to symlink it to sites-enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /etc/nginx/sites-available/dashactyl.conf /etc/nginx/sites-enabled/dashactyl.conf\n")),(0,o.kt)("p",null,"  Once you have edited, saved, and symlinked your configuration file, restart Nginx with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl restart nginx")," and restart Dashactyl. You should see it running on that domain with SSL!"),(0,o.kt)("h2",{id:"starting-dashactyl"},"Starting Dashactyl"),(0,o.kt)("p",null,"First we need to install pm2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install pm2 -g\n")),(0,o.kt)("p",null,"Now you need to go to the dashboard directory and use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pm2 start index.js\n")))}d.isMDXComponent=!0}}]);