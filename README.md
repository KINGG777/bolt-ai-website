# 🍽️ Maa Samaleswari Restaurant Website

This repository contains the code for the **Maa Samaleswari Restaurant** website — a modern, responsive restaurant website built with HTML, CSS, and JavaScript. The website can be easily deployed on any Linux server using Node.js and PM2 for process management.

---

## 🚀 Deployment Steps (Amazon Linux / Ubuntu)

```bash
# 1️⃣ Install Git
sudo yum install git -y

# 2️⃣ Clone the Repository
git clone https://github.com/KINGG777/bolt-ai-website.git
cd bolt-ai-website

# 3️⃣ Install Node.js (Using NVM)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts

# 4️⃣ Install Dependencies
npm install

# 5️⃣ Build the Project
npm run build

# 6️⃣ Install PM2 and HTTP Server Globally
npm install -g pm2 http-server

# 7️⃣ Start the Website
cd dist/
pm2 start "http-server -p 80" --name restaurant

# 8️⃣ Enable Auto-Start on System Boot
pm2 startup
pm2 save

🧠 Author

👑 KINGG
Website Developer & Cloud Engineer
GitHub: KINGG777
