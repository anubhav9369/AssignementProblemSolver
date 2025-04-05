💼 Job Assignment Optimization System
A web-based application that solves the Assignment Problem using optimization techniques. The goal is to assign jobs to workers in a way that minimizes the total cost.

Built using HTML, CSS, JavaScript and deployed using Netlify.

📌 Features
🧮 Accepts dynamic cost matrix input

➕ Handles unbalanced matrices by auto-padding with dummy workers/jobs

📊 Calculates optimal assignment with minimum total cost

📄 Allows export of result as PDF and CSV

🌐 Accessible on the web via Netlify

📸 Demo
🔗 Live Website
🎥 (Insert GIF or screenshot of your frontend UI here)

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/job-assignment-optimizer.git
cd job-assignment-optimizer
2. Open the index.html file in your browser
No installation required! It's a pure frontend project using vanilla JS.

🧠 How It Works
Enter number of workers and jobs.

Fill in the cost matrix (cost of assigning each worker to a job).

Click Solve – the algorithm assigns jobs optimally (diagonal-based placeholder, future upgrade to Hungarian).

View results and download as PDF or CSV.

🧰 Tools & Technologies Used
HTML – Structure and Forms

CSS – Layout & Styling

JavaScript – Matrix Logic & Result Calculation

jsPDF – PDF generation

Blob API – CSV export

Netlify – Hosting and Deployment

📁 Project Structure
bash
Copy
Edit
.
├── index.html         # Main UI
├── style.css          # Custom styling
├── script.js          # Core assignment logic
├── README.md          # GitHub documentation
📄 Sample Output
🖼️ (Add screenshots of downloaded PDF and CSV here)

📦 Future Scope
Replace placeholder logic with Hungarian Algorithm in JS

Add login and multi-user history

Save reports online with charts

Add skill-based job matching AI

🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📜 License
MIT License © 2025 Anubhav Verma
