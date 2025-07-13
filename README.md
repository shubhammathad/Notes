# Notes Application - README

## Overview

This is a simple Notes application built with React that allows users to create, view, edit, and delete notes. The application features a clean interface with the ability to add notes with titles and content, search through existing notes, and manage them efficiently.

## Features

- Create new notes with title and content
- Edit existing notes
- Delete notes
- Search functionality to filter notes
- Responsive design that works on different screen sizes
- Local storage to persist notes between sessions


## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Styling**: Poppins font + Responsive layout
- **Icons**: Font Awesome (for trash icon)

  
## Installation

To run this project locally, follow these steps:

### Step 1: Clone the Repository

```bash
git clone https://github.com/shubhammathad/Notes.git
```
### Step 2: Navigate to the Project Directory
```bash
    cd Notes
```
### Step 3: Install Project Dependencies
```bash
    npm install
```
###  Step 4: Start the Development Server

```bash
    npm start

```


### Project Structure Overview

    /src
    /components
    Note.js            # Renders a single note with edit/delete options
    NoteList.js        # Displays all the notes
    Search.js          # Search bar to filter notes by title/content
    App.js             # Main application logic and routing
    index.js           # Entry point - renders the App component
