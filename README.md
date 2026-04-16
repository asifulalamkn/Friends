# KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a specialized friendship tracking dashboard designed to help users nurture and maintain their personal connections. In a fast-paced world, it's easy to lose track of time; this application ensures you stay consistent with the people who matter most by monitoring interactions and setting relationship goals.

## Live Project
The application is deployed and can be accessed here:  
https://keenkeeperbd.netlify.app/

## Key Features
* **Friendship Tracking:** Categorizes friends based on contact frequency with status indicators like Overdue, Almost Due, and On-Track.
* **Centralized Timeline:** A filterable history of all interactions (Calls, Texts, and Videos) to keep a clear record of your social life.
* **Visual Analytics:** Integrated data visualization using Recharts to analyze engagement patterns across different communication channels.
* **Responsive Architecture:** A mobile-first design approach that provides a seamless experience across smartphones, tablets, and desktops.
* **Interactive Feedback:** Uses toast notifications to confirm data updates and user actions instantly.

## Technologies Used
* **Core:** React.js (Vite)
* **Navigation:** React Router DOM
* **Design:** Tailwind CSS
* **Icons:** React Icons
* **Charts:** Recharts
* **Utility:** React Hot Toast

## Local Setup Instructions
To run this project on your local machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/asifulalamkn/Friends.git

2. Enter the project directory:
   cd keenkeeper

3. Install the required packages:
   npm install

4. Start the development server:
   npm run dev

## Project Organization
* src/components: Reusable UI elements such as Navbars, Footers, and Friend Cards.
* src/Pages: Main view components including Home, Timeline, and Analytics pages.
* src/Context: Context API implementation for managing global interaction states.
* src/Data: Local JSON data structure for friend profiles and metrics.

## Author
Developed by Asiful Alam.  
GitHub: [asifulalamkn](https://github.com/asifulalamkn)