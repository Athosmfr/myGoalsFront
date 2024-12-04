# My Goals Front-End 🎯

My Goals Front-End is a web application designed to interact with the **My Goals API** (a Java Spring Boot API). This project allows users to manage their personal goals in a seamless and user-friendly interface. It integrates with the API to provide user authentication, goal management, and other related functionalities.

## 💻 Technologies

- **React**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **Lucide-React**
- **Google Fonts**
- **Axios** (for API communication)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn (for managing dependencies)

### Cloning

To clone this project, run the following command:

```bash
git clone https://github.com/Athosmfr/myGoalsFrontend.git
```

### Installing Dependencies
Navigate to the project directory and install the dependencies using npm or yarn:
```bash
cd myGoalsFrontend
npm install
```
Or, if you're using yarn:
```bash
cd myGoalsFrontend
yarn install
```

### Running the Development Server
To start the project locally, use the following command:
```bash
npm run dev
```
Or, if you're using yarn:
```bash
yarn dev
```

This will start the Vite development server, and you can access the application at http://localhost:5173.

## 📱 Features
- User Authentication: Sign up and login using JWT authentication.
- Goal Management: Create, update, view, and delete personal goals.
- Responsive Design: Fully responsive layout powered by TailwindCSS, ensuring a smooth experience on both desktop and mobile devices.
- Dynamic Data Fetching: The front-end dynamically fetches and manages data from the My Goals API using Axios.
- Styled with TailwindCSS: Modern and customizable design, with components styled using TailwindCSS.

## 🔧 API Endpoints
This project interacts with the My Goals API (Java Spring Boot) and performs the following actions:

- POST /login: User login with credentials.
- POST /signup: User registration.
- GET /goal/goals: Fetches all goals for the logged-in user.
- POST /goal/create: Creates a new goal for the user.
- PUT /goal/update: Updates an existing goal.
- DELETE /goal/delete: Deletes a specific goal.

## 🖼️ UI/UX Design
The design of this project was inspired by Positivus Landing Page Design (Community) and was initially crafted using Figma.

### Features:
- Lucide-React Icons: Icons are used throughout the application to enhance the user experience, making the interface more intuitive and engaging.
- Custom Buttons: A variety of custom-styled buttons, including primary and secondary actions, to make the application visually appealing and easy to navigate.
- Google Fonts: Fonts used in the application are sourced from Google Fonts to ensure a clean and modern look.

## 🎨 Screenshots
(Add screenshots here.)

## 🔧 Security
This project relies on secure authentication handled by the My Goals API using JWT tokens. All sensitive user data is protected, and only authenticated users can access their own goals and personal information.
