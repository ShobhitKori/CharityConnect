# Charity Connect 🌍

This React-based website for a Non-Profit Organization serves as a platform to connect donors with NGOs in need. The platform allows users to make monetary donations or contribute essential products to registered NGOs, ensuring that resources reach those who need them most. With a user-friendly interface, secure payment options, and a transparent tracking system, the website aims to promote a culture of giving and support community welfare.

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Volunteer Engagement:** Encourages users to sign up and contribute.
- **Dynamic Navigation:** Smooth scrolling to different sections of the site.
- **Custom UI Components:** Built with Tailwind CSS and reusable components.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/) – JavaScript library for building user interfaces.
  - [React Router](https://reactrouter.com/) – For client-side routing.
  - [Tailwind CSS](https://tailwindcss.com/) – For styling and layout.
  - [Lucide Icons](https://lucide.dev/) – For modern SVG icons.

- **Backend:** (Optional for future integration)
  - [Node.js](https://nodejs.org/) – Runtime environment.
  - [Express.js](https://expressjs.com/) – Backend framework.
  - [MongoDB](https://www.mongodb.com/) – Database for storing dynamic content.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/)
- [mongodb](https://www.mongodb.com/try/download/community)
  
Create a free cluster in mongodb and paste your connection string in the server/.env file 

### Installation

1. Clone the repository:

git clone [https://github.com/ShobhitKori/CharityConnect](https://github.com/ShobhitKori/CharityConnect.git)   <br>

`cd CharityConnect`

2. Install dependencies:

CharityConnect `> cd server`

`npm install`

Go to server folder and install dependencies again:

CharityConnect `> cd client`

`npm install`


### Running the App

To start the development server:

CharityConnect/client `> npm start`

The app will be available at `http://localhost:3000`

To start the database server:

CharityConnect/server `> node index.js`


## Project Structure

CharityConnect/ <br>
├── client/                         # Frontend folder <br>
│   ├── node_modules/               # Frontend dependencies <br>
│   ├── public/                     # Static files <br>
│   ├── src/                        # React app source <br>
│   │   ├── components/             # Reusable UI components <br>
│   │   ├── pages/                  # Page components <br>
│   │   ├── ui/                     # Custom UI elements (e.g., Card, Button) <br>
│   │   ├── App.js                  # Main app component <br>
│   │   └── index.js                # Entry point <br>
│   ├── package.json                # Frontend dependencies and scripts <br>
│   ├── tailwind.config.js          # Tailwind CSS configuration <br>
│   └── postcss.config.js           # PostCSS configuration <br>
├── server/                         # Backend folder <br>
│   ├── Controllers/                # Logic for routes <br>
│   ├── Middlewares/                # Custom middleware (e.g., authentication) <br>
│   ├── Models/                     # MongoDB schemas <br>
│   ├── Routes/                     # API endpoints <br>
│   ├── uploads/                    # For storing uploaded files <br>
│   ├── node_modules/               # Backend dependencies <br>
│   ├── .env                        # Environment variables (ignored by Git) <br>
│   ├── index.js                    # Entry point for the backend server <br>
│   ├── package.json                # Backend dependencies and scripts <br>
│   └── package-lock.json           # Lock file for backend dependencies <br>
├── .gitignore                      # Git ignore file <br>
├── README.md                       # Project documentation <br>

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Contact

For any inquiries or suggestions, please contact:

- **Email:** [shobhitkori9@gmail.com](mailto:youremail@example.com)   [abhishekgithub19@gmail.comgmail.com](mailto:youremail@example.com)
- **GitHub:** [Shobhit Kori](https://github.com/ShobhitKori)   [AbhisheK Kahar](https://github.com/abhishek19kahar)
