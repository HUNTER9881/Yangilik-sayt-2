## DigitalOcean ga kirish uchun
login: nodejs_shahriyor@mail.ru
password: 124536798assaassa



## Serverga kirish uchun

login: ssh root@188.166.92.179
password: 124536798assaAAA
name: yangilik24uzbekistan



https://github.com/gargamelNodejs/Yangilik-sayt-2.git
Access token: https://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:x-oauth-basic@github.com/gargamelNodejs/Yangilik-sayt-2.git


1. ---------------------------------   SetUp - NodeJS
sudo apt update
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs


2. ---------------------------------   SetUp - MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install mongodb-org
sudo systemctl status mongod                // status holatini tekshirish uchun
sudo systemctl start mongod.service         // statusni aktiv holatga keltrish
sudo systemctl status mongod 		    // status holatini tekshirish uchun


3. ---------------------------------   SetUp - NGINX
sudo apt update
sudo apt install nginx


4. ---------------------------------   SetUp - mc
sudo apt update
apt install mc


5. ---------------------------------   Update Server setting


nano /etc/nginx/sites-available/default          // shu faylga kirib quyidagi codeni kiritib qoyish kerak


server {
 root /var/www/html;
 # Add index.php to the list if you are using PHP
 index index.html index.htm index.nginx-debian.html;
 server_name <IP.addres kiritish kerak> ;
 location / {
  # First attempt to serve request as file, then
  # as directory, then fall back to displaying a 404.
  proxy_pass http://localhost:3000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
 }
}

CTRL+X     =>    Y      => Enter    => nginx obnovit qilish

systemctl restart nginx      // nginx obnovit qilish

cd ../home          // papkaga kirib
git clone https://github.com/gargamelNodejs/Yangilik-sayt-2.git
npm install



5. ---------------------------------   SetUp - pm2
npm install -g pm2 
npm i pm2
pm2 start server.js
pm2 startup
pm2 save
pm2 monit



5. ---------------------------------   Serverga har doim loyihani qayta yuklash paytida qilinishi kerak

git pull https://github.com/gargamelNodejs/Yangilik-sayt-2.git  // urlni berish shart emas
pm2 reload all      // serverni qayta obnavit qilish
pm2 monit           // serverni terminalini ochish uchun








