# 🏏 BPL Player Auction

A React-based web application that allows users to build their dream cricket team by drafting players from an available pool using a virtual coin budget. 

🔗 **[Live Demo](https://bpl-react-auction.netlify.app/)**

## 🚀 About The Project
This project was built as part of my **Day 86 / 180 MERN Stack Learning Challenge**. The goal was to practice core React concepts like component architecture, state management, and conditional rendering by building an interactive, real-world scenario.

## ✨ Key Features
* **Virtual Budget System:** Users start with a set budget (5000 coins) to spend on drafting players.
* **Drafting Mechanics:** Selecting a player securely deducts their price from the coin balance. Real-time validation prevents drafting if the user has insufficient funds.
* **Dynamic View Toggling:** Smoothly switch between the "Available Players" pool and the "Selected Players" squad using state-driven UI buttons.
* **Squad Management:** Users can delete players from their selected squad, which automatically refunds the player's price back to the total coin balance.
* **Interactive Alerts:** Clean toast notifications keep the user informed of successful selections or budget warnings.

## 🛠️ Technologies Used
* **React.js** (Core framework)
* **Tailwind CSS & DaisyUI** (For fast, responsive, and clean styling)
* **React Toastify** (For user notifications)
* **React Icons** (For UI elements)

## 🧠 What I Learned
* **State Lifting:** I reinforced my understanding of lifting state up. By managing the `coin` balance and `selectedPlayers` array in a parent component, I was able to pass the data down via props and keep multiple sibling components perfectly in sync.
* **The Power of `useState`:** I replaced what would normally be complex DOM manipulation in Vanilla JavaScript with simple state updates. This single hook allowed me to handle active button styles and conditionally render entirely different sections of the app with ease.

## 📬 Let's Connect
I'm actively learning web development and building daily. Let's connect on LinkedIn!
* **[Mohammad Ardi - LinkedIn](https://www.linkedin.com/in/mohammad-ardi/)**