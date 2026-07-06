#  Meme Generator

A simple and interactive meme generator built with **React** and **Vite**. Users can generate random meme templates and add their own top and bottom text to create custom memes.

## 🚀 Features

* Generate random meme templates
* Add custom top and bottom text
* Fetches meme templates from the Imgflip API
* Fast development with Vite
* Responsive and clean user interface

##  Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS
* Imgflip API

##  Project Structure

```text
meme-generator/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

##  Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/meme-generator.git
```

### Navigate to the project

```bash
cd meme-generator
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown in your terminal (typically `http://localhost:5173`).

##  How It Works

1. The application fetches meme templates from the Imgflip API.
2. Clicking the **Generate Meme** button selects a random template.
3. Users can enter custom text for the top and bottom of the meme.
4. The text is rendered directly onto the selected meme image.

##  Future Improvements

* Download generated memes
* Upload custom images
* Customize text size, font, and color
* Drag and reposition text
* Add stickers and emojis
* Save favorite memes

##  Contributing

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

##  License

This project is open source and available under the MIT License.
