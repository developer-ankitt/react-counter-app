# React Counter App

This is a simple React app that demonstrates the use of the useState hook. The app allows you to increment and decrement a counter, ensuring the counter value never goes below 0.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository:
   
   git clone https://github.com/developer-ankitt/react-counter-app.git
Navigate to the project directory:

cd react-counter-app
Install dependencies:

npm install
Run the app:

npm start
The app will be accessible at http://localhost:3000 in your browser.

Usage
Click the "➕" button to increment the counter.
Click the "➖" button to decrement the counter (counter will not go below 0).

Deployment
This app is deployed using GitHub Pages. To deploy your own version, follow the steps in the Deployment section below.

Deployment
To deploy this app to GitHub Pages, follow these steps:

Install the gh-pages package:


npm install gh-pages --save-dev
Update the package.json file with the following scripts:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  // ... other scripts
}
Deploy to GitHub Pages:

npm run deploy
Your app will be available at https://developer-ankitt.github.io/react-counter-app.

Contributing
Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
