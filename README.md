#  MobileTech Strapi Backend

This repository contains the backend API for **MobileTech**, built using **Strapi v5**.  
It provides endpoints for products, services, and dynamic content that can be managed through the Strapi Admin panel.

---

##  Features
- Full **Strapi CMS** setup (v5.25.0)
- **SQLite** database (for local dev)
- API endpoints for products and services
- Configured **CORS** for frontend integration
- Ready for **Render** cloud deployment

---

##  Tech Stack
- **Node.js v20**
- **Strapi v5.25**
- **Postgres Database**
- **Render Cloud** (deployment)

---

##  Project Structure
```
mobiletech-strapi/
├── config/ # Strapi configurations (CORS, Middleware, etc.)
├── src/ # API definitions and content-types
├── public/ # Uploaded media and assets
├── package.json # Project dependencies
└── README.md
```


---

##  Local Development

###  Clone the repository
```bash
git clone https://github.com/yourusername/mobiletech-strapi.git
```
```
cd mobiletech-strapi
```

### Install Dependecies

```npm install```

### Run in development mode

```npm run develop```

### Access

Admin Panel → http://localhost:1337/admin
API Endpoint → http://localhost:1337/api/products?populate=*

### Deployment (Render)

Push project to GitHub.

Go to Render
 → New + → Web Service

Fill in the following:
```
Setting	                  Value
-------------------------------------------------------------
Branch	                  main
Build                     Command	npm install && npm run build
Start                     Command	npm run start
Node Version	          20.x
Environment Variable	  NODE_VERSION=20
```

### CORS Configuration

navigate to config/middleware.js

```
{
  name: 'strapi::cors',
  config: {
    enabled: true,
    origin: ['*'], // or ['https://mobiletech-frontend.onrender.com']
  },
}
```



