# Week-3-Code-Challenge-Simple-Blog-Post-Manager


# 📝 Simple Blog Post Manager

A JavaScript-powered blog post manager that allows users to **create**, **edit**, **view**, and **delete** blog entries. It works with a mock backend API (such as [JSON Server](https://github.com/typicode/json-server)) and dynamically updates the page content without reloading.

---

## 🚀 Features

* **Add New Blog Post**
* **Display List of Blog Posts**
* **View a Single Blog Post**
* **Edit an Existing Blog Post**
* **Delete a Blog Post**
* Automatically truncates post content longer than 150 characters.
* Posts include title, author, date, image, and content.

---

## 🛠️ Tech Stack

* **HTML/CSS/JavaScript**
* **JSON Server** (for simulating a backend API)

---

## 📂 Project Structure

This script connects to the following HTML elements:

* `#post-form`: Form for submitting new posts.
* `#post-title`, `#author-name`, `#image-url`, `#post-content`: Input fields.
* `#blog-identity`: Sidebar showing blog post titles and metadata.
* `#blog-content-container`: Main content area displaying post content.

---

## 📦 Post Format

Each blog post is an object with the following structure:

```json
{
  "id": 1,
  "title": "My Blog Title",
  "author": "John Doe",
  "date": "2025-06-24",
  "image": "https://example.com/image.jpg",
  "content": "This is the blog post content..."
}
```

---

## 🖥️ How It Works

1. **Submit Form**:

   * If `editPostId` is set, it updates the post using `PATCH`.
   * Otherwise, it creates a new post with `POST`.

2. **Display Posts**:

   * Posts are fetched from `http://localhost:3000/posts`.
   * Each post is shown in both a sidebar and main content area.
   * Content over 150 characters is truncated to 250 characters and shown with ellipses.

3. **View Single Post**:

   * Clicking a post in the sidebar shows it alone in the main area.

4. **Edit Post**:

   * Fills the form with post data and sets `editPostId`.

5. **Delete Post**:

   * Prompts for confirmation and sends a `DELETE` request.

---

## ⚙️ Setup Instructions

1. **Install JSON Server** (if not already installed):

   ```bash
   npm install -g json-server
   ```

2. **Create a `db.json` file**:

   ```json
   {
     "posts": []
   }
   ```

3. **Start JSON Server**:

   ```bash
   json-server --watch db.json --port 3000
   ```

4. **Open your HTML file** in a browser and interact with the blog UI.

---

## 📌 Notes

* Ensure the input elements in your HTML have the correct IDs (`post-title`, `author-name`, etc.).
* Ensure the submit button has the ID `submit-button` to reflect label changes (e.g., "Update Post").
* The script auto-refreshes posts on load and after any action (create, update, delete).

---

## ✅ To-Do (Optional Enhancements)

* Add client-side form validation
* Include pagination or search
* Show success/error messages
* Add tags or categories to posts

---

## 🧑‍💻 Author

Created by \Jeshurun Muchugi.
Inspired by simple CRUD patterns using vanilla JavaScript and mock APIs.


## License

MIT License

Copyright (c) 2025 Jeshurun Muchugi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      
copies of the Software, and to permit persons to whom the Software is         
furnished to do so, subject to the following conditions:                      

The above copyright notice and this permission notice shall be included in    
all copies or substantial portions of the Software.                           

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN     
THE SOFTWARE.
