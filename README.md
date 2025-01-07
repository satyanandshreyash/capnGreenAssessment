
# Captain Green Assessment

This repository contains the solution to the Hiring Assessment of Captain Green. The Assessment required creating a fully functional user authentication system where users can signup, signin and view their profile information only if signed in.

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Insallation](#installation)
- [Deployments](#deployments)

## Description
This project involved writing APIs for users to signup, signin and view a protected home page with their details only if logged in.
## Technologies used
- **Programming Language**: JavaScript
- **Frontend-Library**: React
- **Backend**: Express
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **JS-Bundler/Build Tool**: Vite

## Insallation
1. **Prerequisites**
- Node.js (version 14 or higher)

2. **Clone the Repository**

```bash
git clone https://github.com/satyanandshreyash/capnGreenAssessment.git
```

3. **Navigat to the directory:**

```bash
cd capnGreenAssessment
```

4. **Install dependencies in backend:**

```bash
cd backend
npm install
```

5. **Create a .env file in root:**

```makefile
MONGODB_URI=your_mongodb_cloud_url
JWT_SECRET=your_jwt_secret
PORT=3000
```
6. **Start the dev server:**

```bash
npm run dev
```

7. **Install dependencies in frontend:**

```bash
cd ../frontend
npm install
```
8. **Create a .env file in root:**

```makefile
VITE_BACKEND_URL=your_backend_url
```

9. **Start the dev server:**

```bash
npm run dev
```



## Deployments
- Deployed at: https://capn-green-assessment-frontend.vercel.app/

