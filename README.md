 
🔗 URL Shortener
A simple, secure, and scalable URL Shortener built using Node.js, Express, MongoDB, and EJS.
It allows users to generate short URLs, track visit history, and manage access using JWT-based authentication.
🚀 Features
🔐 User Authentication
Sign up & login using JWT
Secure cookies for session handling
✂️ URL Shortening
Convert long URLs into short, unique links
🔁 Redirection
Automatically redirect short URLs to the original URL
📊 Analytics
Track number of visits for each short URL
🧾 User-based Access
Each user can manage their own URLs
🗄️ MongoDB Integration
Persistent storage for users and URLs
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT (JSON Web Tokens)
Template Engine: EJS
Other Tools: Cookie-parser, dotenv
📁 Project Structure


URL-Shortener/
│
├── controllers/
│   ├── url.js
│   └── user.js
│
├── models/
│   ├── url.js
│   └── user.js
│
├── routes/
│   ├── url.js
│   └── user.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── middlewares/
│   └── auth.js
│
├── index.js
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
Copy code
Bash
git clone https://github.com/codeby-vedant/URL-Shortener.git
cd URL-Shortener
2️⃣ Install dependencies
Copy code
Bash
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory:
Copy code
Env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key  

4️⃣ Start the server
Copy code
Bash
npm start
Server will run at:
👉 http://localhost:8000
🔐 API Routes Overview
Auth Routes
POST /user/signup → Register user
POST /user/login → Login user
URL Routes
POST /url → Create short URL
GET /:shortId → Redirect to original URL
GET /url/analytics/:shortId → View visit analytics

🌱 Future Improvements
✅ Custom aliases for short URLs
✅ URL expiration feature
✅ Rate limiting & security enhancements
✅ Dashboard with charts
✅ QR code generation
🤝 Contributing
Contributions are welcome!
Feel free to fork this repo and submit a pull request.
📜 License
This project is licensed under the MIT License.
🙌 Author
Vedant Mishra
GitHub: @codeby-vedant
