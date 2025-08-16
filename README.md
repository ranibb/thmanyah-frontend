# Thmanyah Frontend - Podcast Search Application

This project is the frontend implementation for the Thmanyah Full-Stack Developer Assignment. The objective is to build a pixel-perfect, responsive user interface that fetches and displays podcast data from a custom backend API.

---

### 🚀 **Live Demo & Repositories**

*   **Live Application:** **[https://thmanyah-frontend-wheat.vercel.app/](https://thmanyah-frontend-wheat.vercel.app/)**
*   **Backend Repository:** **[ranibb/thmanyah-api](https://github.com/ranibb/thmanyah-api)**
*   **Frontend Repository:** **[ranibb/thmanyah-frontend](https://github.com/ranibb/thmanyah-frontend)**

*(Note: For the live demo, you may need to allow "insecure content" in your browser settings to connect to the HTTP backend. See the "A Note on Deployment" section below for details.)*

---

### ✨ Features

*   **Dynamic Search:** Search for podcasts in real-time using the iTunes Search API via a custom backend.
*   **Live Data Fetching:** All podcast data is fetched from the live, deployed NestJS backend.
*   **Comprehensive State Management:** The UI provides clear feedback for loading, error, empty, and success states.
*   **Fully Responsive Design:** A pixel-perfect replica of the provided design that adapts seamlessly from mobile to desktop screens.
*   **Complete RTL Support:** The entire layout is optimized for a Right-to-Left experience.
*   **Interactive UI:** The "Top Podcasts" list features a custom-styled, animated horizontal scrollbar with fully functional arrow controls.
*   **Dynamic Routing:** The application uses Next.js dynamic routes to generate placeholder pages for individual podcast and episode links.

---

### 💻 Technology Stack

| Category      | Technology                                                                                                    |
|---------------|---------------------------------------------------------------------------------------------------------------|
| **Frontend**  | **Next.js**, **React**, **TypeScript**, **Tailwind CSS**                                                        |
| **Backend**   | **NestJS**, **TypeScript**, **AWS DynamoDB**                                                                  |
| **Deployment**| Frontend on **Vercel**; Backend on **AWS Elastic Beanstalk**                                                    |

---

### 🛠️ Getting Started: Running Locally

To run this project on your local machine, you must first set up and run the backend API.

#### **1. Backend Setup (`thmanyah-api`)**

```bash
# Clone the backend repository
git clone https://github.com/ranibb/thmanyah-api.git

# Navigate into the directory
cd thmanyah-api

# Install dependencies
npm install

# Create a .env file in the root and add your credentials
# (See .env.example for the required variables)
# You will need to add your AWS keys and the iTunes API URL.
```

**`.env` file example:**
```
PORT=3001
ITUNES_API_BASE_URL=https://itunes.apple.com
AWS_REGION=your-aws-region
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
```

```bash
# Run the backend development server
npm run start:dev
```The backend API should now be running on `http://localhost:3001`.

#### **2. Frontend Setup (`thmanyah-frontend`)**

```bash
# In a new terminal, clone this frontend repository
git clone https://github.com/ranibb/thmanyah-frontend.git

# Navigate into the directory
cd thmanyah-frontend

# Install dependencies
npm install

# Create a .env.local file in the root
# This file will tell the frontend where to find the backend API
```

**`.env.local` file contents:**
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

```bash
# Run the frontend development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

### ☁️ Deployment

*   **Backend:** The NestJS API is containerized and deployed on **AWS Elastic Beanstalk**. It uses a custom IAM user with scoped permissions for Elastic Beanstalk, S3, and DynamoDB.
*   **Frontend:** The Next.js application is deployed on **Vercel**, connected directly to the GitHub repository for seamless Continuous Integration and Deployment (CI/CD).

#### A Note on the HTTPS Workaround

During deployment, a security measure on the AWS account automatically blocked a request for a wildcard SSL certificate for the `elasticbeanstalk.com` domain. A support case has been opened with AWS to have them manually approve the certificate.

While awaiting resolution, a standard workaround has been implemented to ensure the application is fully demonstrable. The backend is currently served over `http`. To allow the secure `https://` Vercel frontend to communicate with the `http://` AWS backend, you may need to **allow "insecure content"** in your browser's site settings for the live demo URL.

The application is fully configured to use `https://` as soon as the certificate is issued by AWS.